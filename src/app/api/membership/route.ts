import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DEST = process.env.MEMBERSHIP_EMAIL ?? "info@jazzcouncil.org.il";

const declLabels = [
  "הצהרה 1 – אין הרשעה בעבירת קלון",
  "הצהרה 2 – התחייבות לנהוג בכבוד ויושר",
  "הצהרה 3 – קריאת התקנון ומחויבות לו",
  "הצהרה 4 – אין ניגוד עניינים",
];

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { fullName, idNumber, phone, address, email, date, signature, decl1, decl2, decl3, decl4 } = body;

  if (!fullName || !idNumber || !email) {
    return NextResponse.json({ error: "שדות חובה חסרים" }, { status: 400 });
  }

  const decls = [decl1, decl2, decl3, decl4];

  const rows = [
    ["שם מלא", fullName],
    ["מספר זהות", idNumber],
    ["טלפון", phone || "—"],
    ["מען", address || "—"],
    ["דוא\"ל", email],
    ["תאריך", date || "—"],
    ["חתימה", signature || "—"],
    ...declLabels.map((label, i) => [label, decls[i] ? "✓ מאושר" : "✗ לא סומן"]),
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #2d2525;font-weight:600;color:#8a8078;white-space:nowrap;">${label}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #2d2525;color:#ede8e3;">${value}</td>
        </tr>`
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#111010;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111010;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1515;border:1px solid #2d2525;border-radius:4px;overflow:hidden;">
        <tr>
          <td style="background:#8B1A2E;padding:20px 28px;">
            <h1 style="margin:0;color:#ede8e3;font-size:20px;font-weight:700;">בקשת הצטרפות חדשה</h1>
            <p style="margin:6px 0 0;color:#ede8e3;opacity:0.75;font-size:14px;">מועצת הג'אז הישראלי</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${tableRows}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;border-top:1px solid #2d2525;">
            <p style="margin:0;color:#8a8078;font-size:12px;">הודעה זו נשלחה אוטומטית מטופס ההצטרפות באתר מועצת הג'אז הישראלי.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "מועצת הג'אז <noreply@jazzcouncil.org.il>",
    to: DEST,
    subject: `בקשת הצטרפות חדשה – ${fullName}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "שגיאה בשליחת המייל" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
