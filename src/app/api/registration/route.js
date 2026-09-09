import { NextResponse } from "next/server";

const fieldLimits = {
  fullName: 100,
  fatherName: 100,
  motherName: 100,
  dateOfBirth: 10,
  contactNumber: 20,
  emergencyContactNumber: 20,
  email: 254,
  qualification: 80,
  occupation: 120,
  addressLine1: 200,
  addressLine2: 200,
  city: 80,
  state: 80,
  pinCode: 6,
  jobRole: 50,
  expectedSalary: 20,
  yearsOfExperience: 10,
  preferredWorkLocation: 120,
  availableFrom: 10,
};

const requiredFields = [
  "fullName",
  "dateOfBirth",
  "contactNumber",
  "email",
  "qualification",
  "addressLine1",
  "city",
  "state",
  "pinCode",
  "jobRole",
  "expectedSalary",
];

const allowedJobRoles = new Set([
  "GDA",
  "Elder Care",
  "Baby Care",
  "Home Care",
  "Japa Care",
]);

function cleanRegistration(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;

  const registration = {};
  for (const [field, limit] of Object.entries(fieldLimits)) {
    if (body[field] !== undefined && typeof body[field] !== "string") return null;
    registration[field] = (body[field] || "").trim().slice(0, limit);
  }

  return registration;
}

function isValidRegistration(data) {
  if (!requiredFields.every((field) => data[field])) return false;
  if (!/^(?:\+91)?[6-9]\d{9}$/.test(data.contactNumber.replace(/[\s-]/g, ""))) return false;
  if (
    data.emergencyContactNumber &&
    !/^(?:\+91)?[6-9]\d{9}$/.test(data.emergencyContactNumber.replace(/[\s-]/g, ""))
  ) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return false;
  if (!/^\d{6}$/.test(data.pinCode)) return false;
  if (!allowedJobRoles.has(data.jobRole)) return false;
  if (!Number.isFinite(Number(data.expectedSalary)) || Number(data.expectedSalary) <= 0) return false;
  if (data.yearsOfExperience && Number(data.yearsOfExperience) < 0) return false;

  const dateOfBirth = new Date(`${data.dateOfBirth}T00:00:00`);
  if (Number.isNaN(dateOfBirth.getTime()) || dateOfBirth > new Date()) return false;

  return true;
}

export async function POST(request) {
  try {
    const registration = cleanRegistration(await request.json());
    if (!registration || !isValidRegistration(registration)) {
      return NextResponse.json(
        { success: false, message: "Please check the registration details and try again." },
        { status: 400 },
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SHEETS_WEB_APP_URL is not configured.");
      return NextResponse.json(
        { success: false, message: "Registration service is not configured yet." },
        { status: 503 },
      );
    }

    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(registration),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    const responseText = await googleResponse.text();
    let googleResult = {};
    try {
      googleResult = JSON.parse(responseText);
    } catch {
      // A non-JSON response normally means the Apps Script deployment is not public.
    }

    if (!googleResponse.ok || googleResult.success !== true) {
      console.error("Google Sheets submission failed:", googleResponse.status, responseText);
      return NextResponse.json(
        { success: false, message: "We could not save your registration. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Registration submission failed:", error);
    return NextResponse.json(
      { success: false, message: "We could not save your registration. Please try again." },
      { status: 500 },
    );
  }
}
