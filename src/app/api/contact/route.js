import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(process.cwd(), "lib/google-service-account.json"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1RlSXhRSK2wEsq0AdiOXE8hMv4y1BygEduIDyAII4Bx0",
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.firstName,
          body.lastName,
          body.service,
          body.mobile,
          body.email,
          body.state,
          body.message,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}