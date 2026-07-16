import { Resend } from "resend";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    // Mail to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "vishugupta7699181@gmail.com",
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p>${message}</p>
      `,
    });

    // Auto reply to visitor
    await resend.emails.send({
      from: "Vishnu Gupta <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <h2>Hi ${name} 👋</h2>

        <p>
          Thank you for contacting me through my portfolio.
        </p>

        <p>
          I've successfully received your message and will get back to you
          within <strong>24 hours</strong>.
        </p>

        <p>
          Looking forward to connecting with you.
        </p>

        <br/>

        <p>
          Best Regards,<br/>
          <strong>Vishnu Gupta</strong><br/>
          AI/ML Engineer
        </p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}