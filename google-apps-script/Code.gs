const SHEET_NAME = "Registrations";

const HEADERS = [
  "Submitted At",
  "Full Name",
  "Father's Name",
  "Mother's Name",
  "Date of Birth",
  "Height (cm)",
  "Weight (kg)",
  "Contact Number",
  "Emergency Contact Number",
  "Email",
  "Qualification",
  "Occupation",
  "Address Line 1",
  "Address Line 2",
  "City",
  "State",
  "PIN Code",
  "Job Role",
  "Training Centre",
  "Expected Salary",
  "Years of Experience",
  "Preferred Work Location",
  "Available From",
];

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    const data = JSON.parse(event.postData.contents);
    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    ensureHeaders(sheet);

    sheet.appendRow([
      new Date(),
      safeCell(data.fullName),
      safeCell(data.fatherName),
      safeCell(data.motherName),
      safeCell(data.dateOfBirth),
      safeCell(data.height),
      safeCell(data.weight),
      safeCell(data.contactNumber),
      safeCell(data.emergencyContactNumber),
      safeCell(data.email),
      safeCell(data.qualification),
      safeCell(data.occupation),
      safeCell(data.addressLine1),
      safeCell(data.addressLine2),
      safeCell(data.city),
      safeCell(data.state),
      safeCell(data.pinCode),
      safeCell(data.jobRole),
      safeCell(data.trainingCenter),
      safeCell(data.expectedSalary),
      safeCell(data.yearsOfExperience),
      safeCell(data.preferredWorkLocation),
      safeCell(data.availableFrom),
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  function getCurrentHeaders() {
    return sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getDisplayValues()[0]
      .map((header) => String(header).trim());
  }

  let currentHeaders = getCurrentHeaders();
  const dateOfBirthColumn = currentHeaders.indexOf("Date of Birth") + 1;
  if (dateOfBirthColumn === 0) {
    throw new Error('Could not find the "Date of Birth" column.');
  }

  // Preserve existing rows while adding the new physical-detail columns.
  if (!currentHeaders.includes("Height (cm)")) {
    sheet.insertColumnAfter(dateOfBirthColumn);
    sheet.getRange(1, dateOfBirthColumn + 1).setValue("Height (cm)");
  }

  currentHeaders = getCurrentHeaders();
  if (!currentHeaders.includes("Weight (kg)")) {
    const heightColumn = currentHeaders.indexOf("Height (cm)") + 1;
    sheet.insertColumnAfter(heightColumn);
    sheet.getRange(1, heightColumn + 1).setValue("Weight (kg)");
  }

  currentHeaders = getCurrentHeaders();
  const trainingCenterExists = currentHeaders.some(
    (header) => header === "Training Centre" || header === "Training Center",
  );

  // Migrate sheets created before the Training Centre field was introduced.
  // Inserting the column preserves the alignment of all existing registration data.
  if (!trainingCenterExists) {
    const jobRoleColumn = currentHeaders.indexOf("Job Role") + 1;
    if (jobRoleColumn === 0) {
      throw new Error('Could not find the "Job Role" column.');
    }
    sheet.insertColumnAfter(jobRoleColumn);
  }

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
}

function safeCell(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
