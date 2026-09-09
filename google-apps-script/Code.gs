const SHEET_NAME = "Registrations";

const HEADERS = [
  "Submitted At",
  "Full Name",
  "Father's Name",
  "Mother's Name",
  "Date of Birth",
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
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      new Date(),
      safeCell(data.fullName),
      safeCell(data.fatherName),
      safeCell(data.motherName),
      safeCell(data.dateOfBirth),
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

function safeCell(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
