import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { to, message } = await req.json();

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_TOKEN;

  if(!phoneNumberId || !accessToken) {
    return NextResponse.json({ error: "Missing WhatsApp env vars"}, { status: 500 })
  }

  const url =`https://graph.facebook.com/v22.0/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to,
    type: "text",
    text: {body: message}
  }

  const res = await fetch(url, {
    method: "POST", 
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  console.log("STATUS", res.status);
  console.log("RESULT", data);

  if (!res.ok) {
    return NextResponse.json({ error: data }, { status: res.status })
  }

  return NextResponse.json(data);
}