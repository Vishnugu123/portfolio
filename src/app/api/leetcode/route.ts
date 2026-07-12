import { NextRequest, NextResponse } from "next/server";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const STATS_QUERY = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
        starRating
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

const CALENDAR_QUERY = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        dccBadges {
          timestamp
          badge {
            name
            icon
          }
        }
        submissionCalendar
      }
    }
  }
`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  const headers = {
    "Content-Type": "application/json",
    "Referer": "https://leetcode.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  };

  try {
    const [statsRes, calRes] = await Promise.all([
      fetch(LEETCODE_GRAPHQL, {
        method: "POST",
        headers,
        body: JSON.stringify({ query: STATS_QUERY, variables: { username } }),
        next: { revalidate: 3600 }, // cache for 1 hour
      }),
      fetch(LEETCODE_GRAPHQL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          query: CALENDAR_QUERY,
          variables: { username, year: new Date().getFullYear() },
        }),
        next: { revalidate: 3600 },
      }),
    ]);

    if (!statsRes.ok || !calRes.ok) {
      throw new Error("LeetCode API failed");
    }

    const statsData = await statsRes.json();
    const calData = await calRes.json();

    const matchedUser = statsData?.data?.matchedUser;
    const allQuestions = statsData?.data?.allQuestionsCount ?? [];
    const calendar = calData?.data?.matchedUser?.userCalendar;

    if (!matchedUser) {
      return NextResponse.json(
        { error: "User not found on LeetCode" },
        { status: 404 }
      );
    }

    const acSubmissions = matchedUser.submitStats?.acSubmissionNum ?? [];

    const getCount = (diff: string) =>
      acSubmissions.find((s: { difficulty: string }) => s.difficulty === diff)?.count ?? 0;

    const getTotalCount = (diff: string) =>
      allQuestions.find((q: { difficulty: string }) => q.difficulty === diff)?.count ?? 0;

    const totalSolved = getCount("All");
    const easySolved = getCount("Easy");
    const mediumSolved = getCount("Medium");
    const hardSolved = getCount("Hard");

    const easyTotal = getTotalCount("Easy");
    const mediumTotal = getTotalCount("Medium");
    const hardTotal = getTotalCount("Hard");
    const totalAll = getTotalCount("All");

    const allSubmissions = acSubmissions.find(
      (s: { difficulty: string }) => s.difficulty === "All"
    );
    const acceptanceRate =
      allSubmissions && allSubmissions.submissions > 0
        ? Math.round((totalSolved / allSubmissions.submissions) * 100)
        : 0;

    const result = {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      easyTotal,
      mediumTotal,
      hardTotal,
      totalAll,
      acceptanceRate,
      ranking: matchedUser.profile?.ranking ?? 0,
      contributionPoints: matchedUser.profile?.reputation ?? 0,
      streak: calendar?.streak ?? 0,
      totalActiveDays: calendar?.totalActiveDays ?? 0,
      submissionCalendar: calendar?.submissionCalendar
        ? JSON.parse(calendar.submissionCalendar)
        : {},
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("LeetCode API error:", error);
    // Return fallback demo data so the page doesn't break
    return NextResponse.json({
      totalSolved: 347,
      easySolved: 142,
      mediumSolved: 178,
      hardSolved: 27,
      easyTotal: 836,
      mediumTotal: 1760,
      hardTotal: 783,
      totalAll: 3379,
      acceptanceRate: 62,
      ranking: 284751,
      contributionPoints: 180,
      streak: 12,
      totalActiveDays: 89,
      submissionCalendar: {},
      isFallback: true,
    });
  }
}
