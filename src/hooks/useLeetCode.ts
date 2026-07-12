"use client";

import { useState, useEffect, useCallback } from "react";
import { LeetCodeStats } from "@/types";

export function useLeetCode(username: string) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    if (!username) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/leetcode?username=${username}`);
      if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
}
