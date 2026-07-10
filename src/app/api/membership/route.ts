import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, idNumber, phone, address, email, date, signature, decl1, decl2, decl3, decl4 } = body;

  if (!fullName || !idNumber || !email) {
    return NextResponse.json({ error: "שדות חובה חסרים" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json({ error: "שגיאה בשליחת הטופס" }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: new Date().toISOString(),
        fullName,
        idNumber,
        phone: phone || "",
        address: address || "",
        email,
        date: date || "",
        signature: signature || "",
        decl1: !!decl1,
        decl2: !!decl2,
        decl3: !!decl3,
        decl4: !!decl4,
      }),
    });

    if (!res.ok) throw new Error(`Sheet webhook responded ${res.status}`);
  } catch (err) {
    console.error("Google Sheets webhook error:", err);
    return NextResponse.json({ error: "שגיאה בשליחת הטופס" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
