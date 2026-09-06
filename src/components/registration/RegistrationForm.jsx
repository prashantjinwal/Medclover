"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  IndianRupee,
  MapPin,
  UserRound,
} from "lucide-react";

const initialFormData = {
  fullName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "",
  contactNumber: "",
  emergencyContactNumber: "",
  email: "",
  qualification: "",
  occupation: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pinCode: "",
  jobRole: "",
  expectedSalary: "",
  yearsOfExperience: "",
  preferredWorkLocation: "",
  availableFrom: "",
};

const jobRoles = ["GDA", "Elder Care", "Baby Care", "Home Care", "Japa Care"];

const today = new Date();
const maxDateOfBirth = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

const validateField = (name, value) => {
  const trimmedValue = typeof value === "string" ? value.trim() : value;

  if (name === "fullName" && !trimmedValue) return "Please enter your full name.";
  if (name === "dateOfBirth") {
    if (!trimmedValue) return "Please select your date of birth.";
    if (new Date(trimmedValue) > new Date()) return "Date of birth cannot be in the future.";
  }
  if (name === "contactNumber") {
    if (!trimmedValue) return "Please enter your contact number.";
    const normalizedNumber = trimmedValue.replace(/[\s-]/g, "");
    if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedNumber)) {
      return "Enter a valid 10-digit Indian mobile number.";
    }
  }
  if (name === "emergencyContactNumber" && trimmedValue) {
    const normalizedNumber = trimmedValue.replace(/[\s-]/g, "");
    if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedNumber)) {
      return "Enter a valid 10-digit Indian mobile number.";
    }
  }
  if (name === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Enter a valid email address.";
    }
  }
  if (name === "qualification" && !trimmedValue) {
    return "Please select your highest qualification.";
  }
  if (name === "addressLine1" && !trimmedValue) return "Please enter your address.";
  if (name === "city" && !trimmedValue) return "Please enter your city.";
  if (name === "state" && !trimmedValue) return "Please enter your state.";
  if (name === "pinCode") {
    if (!trimmedValue) return "Please enter your PIN code.";
    if (!/^\d{6}$/.test(trimmedValue)) return "PIN code must contain 6 digits.";
  }
  if (name === "jobRole" && !trimmedValue) return "Please select a job role.";
  if (name === "expectedSalary") {
    if (!trimmedValue) return "Please enter your expected salary.";
    if (Number(trimmedValue) <= 0) return "Expected salary must be greater than 0.";
  }
  if (name === "yearsOfExperience" && trimmedValue && Number(trimmedValue) < 0) {
    return "Years of experience cannot be negative.";
  }

  return "";
};

function Field({ label, name, error, required = false, children, className = "" }) {
  const errorId = `${name}-error`;

  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-orange-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SectionHeading({ icon: Icon, title, description }) {
  return (
    <div className="mb-6 flex items-start gap-3 border-b border-gray-200 pb-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-lg font-semibold text-[#14235C]">{title}</h2>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputProps = (name) => ({
    id: name,
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = Object.fromEntries(
      Object.entries(formData)
        .map(([name, value]) => [name, validateField(name, value)])
        .filter(([, error]) => error),
    );

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorName = Object.keys(nextErrors)[0];
      const firstInvalidField = event.currentTarget.querySelector(`[name="${firstErrorName}"]`);
      firstInvalidField?.focus();
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace this local confirmation with a request to the registration backend.
    await new Promise((resolve) => window.setTimeout(resolve, 400));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  }

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-white via-orange-50 to-blue-50 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl sm:p-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 size={34} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-[#14235C] font-labrada">
            Registration received
          </h1>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-gray-600">
            Your registration details have been validated successfully. Online submission will be available once backend integration is complete.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-7 rounded-full bg-orange-500 px-7 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            Submit another registration
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-blue-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Careers at Medclover
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#14235C] font-labrada sm:text-5xl">
            Registration Form
          </h1>
          <div className="mt-4 flex justify-center" aria-hidden="true">
            <span className="h-[3px] w-12 rounded-full bg-orange-500" />
            <span className="h-[3px] w-12 rounded-full bg-blue-900" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Fill in your details to register with Medclover for available care-related job opportunities.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:p-8 lg:p-10"
        >
          <section>
            <SectionHeading
              icon={UserRound}
              title="Personal Details"
              description="Tell us how we can identify and contact you."
            />
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" error={errors.fullName} required>
                <input {...inputProps("fullName")} type="text" autoComplete="name" placeholder="Enter your full name" className="input" />
              </Field>
              <Field label="Date of Birth" name="dateOfBirth" error={errors.dateOfBirth} required>
                <input {...inputProps("dateOfBirth")} type="date" max={maxDateOfBirth} className="input" />
              </Field>
              <Field label="Father's Name" name="fatherName" error={errors.fatherName}>
                <input {...inputProps("fatherName")} type="text" placeholder="Enter father's name" className="input" />
              </Field>
              <Field label="Mother's Name" name="motherName" error={errors.motherName}>
                <input {...inputProps("motherName")} type="text" placeholder="Enter mother's name" className="input" />
              </Field>
              <Field label="Contact Number" name="contactNumber" error={errors.contactNumber} required>
                <input {...inputProps("contactNumber")} type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" className="input" />
              </Field>
              <Field label="Emergency Contact Number" name="emergencyContactNumber" error={errors.emergencyContactNumber}>
                <input {...inputProps("emergencyContactNumber")} type="tel" inputMode="tel" placeholder="Enter emergency contact number" className="input" />
              </Field>
              <Field label="Email ID" name="email" error={errors.email} required>
                <input {...inputProps("email")} type="email" autoComplete="email" placeholder="Enter your email address" className="input" />
              </Field>
              <Field label="Highest Qualification" name="qualification" error={errors.qualification} required>
                <select {...inputProps("qualification")} className="input">
                  <option value="">Select qualification</option>
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Diploma / Certificate">Diploma / Certificate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </Field>
              <Field label="Current Occupation / Profession (if applicable)" name="occupation" error={errors.occupation} className="sm:col-span-2">
                <input {...inputProps("occupation")} type="text" placeholder="Enter your current occupation or profession" className="input" />
              </Field>
            </div>
          </section>

          <section className="mt-10">
            <SectionHeading
              icon={MapPin}
              title="Address Details"
              description="Share your current residential address."
            />
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field label="Address Line 1" name="addressLine1" error={errors.addressLine1} required className="sm:col-span-2">
                <input {...inputProps("addressLine1")} type="text" autoComplete="address-line1" placeholder="House number, street or locality" className="input" />
              </Field>
              <Field label="Address Line 2" name="addressLine2" error={errors.addressLine2} className="sm:col-span-2">
                <input {...inputProps("addressLine2")} type="text" autoComplete="address-line2" placeholder="Landmark or area (optional)" className="input" />
              </Field>
              <Field label="City" name="city" error={errors.city} required>
                <input {...inputProps("city")} type="text" autoComplete="address-level2" placeholder="Enter city" className="input" />
              </Field>
              <Field label="State" name="state" error={errors.state} required>
                <input {...inputProps("state")} type="text" autoComplete="address-level1" placeholder="Enter state" className="input" />
              </Field>
              <Field label="PIN Code" name="pinCode" error={errors.pinCode} required>
                <input {...inputProps("pinCode")} type="text" inputMode="numeric" autoComplete="postal-code" maxLength={6} placeholder="Enter 6-digit PIN code" className="input" />
              </Field>
            </div>
          </section>

          <section className="mt-10">
            <SectionHeading
              icon={BriefcaseBusiness}
              title="Job Details"
              description="Choose the role and work preferences that suit you."
            />
            <fieldset>
              <legend className="mb-3 text-sm font-medium text-gray-800">
                Applied for Job Role <span className="text-orange-500" aria-hidden="true">*</span>
              </legend>
              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
                role="radiogroup"
                aria-invalid={Boolean(errors.jobRole)}
                aria-describedby={errors.jobRole ? "jobRole-error" : undefined}
              >
                {jobRoles.map((role) => (
                  <label
                    key={role}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition focus-within:ring-2 focus-within:ring-orange-200 ${
                      formData.jobRole === role
                        ? "border-orange-500 bg-orange-50 text-[#14235C] shadow-sm"
                        : "border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="jobRole"
                      value={role}
                      checked={formData.jobRole === role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="h-4 w-4 accent-orange-500"
                    />
                    {role}
                  </label>
                ))}
              </div>
              {errors.jobRole && <p id="jobRole-error" className="mt-1.5 text-xs text-red-600" role="alert">{errors.jobRole}</p>}
            </fieldset>

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field label="Expected Salary" name="expectedSalary" error={errors.expectedSalary} required>
                <div className="relative">
                  <IndianRupee className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={17} aria-hidden="true" />
                  <input
                    {...inputProps("expectedSalary")}
                    type="number"
                    inputMode="numeric"
                    min="1"
                    step="1"
                    placeholder="Enter expected monthly salary"
                    className="input"
                    style={{ paddingLeft: "2.75rem" }}
                  />
                </div>
              </Field>
              <Field label="Years of Experience" name="yearsOfExperience" error={errors.yearsOfExperience}>
                <input {...inputProps("yearsOfExperience")} type="number" inputMode="decimal" min="0" step="0.5" placeholder="e.g. 2" className="input" />
              </Field>
              <Field label="Preferred Work Location" name="preferredWorkLocation" error={errors.preferredWorkLocation}>
                <input {...inputProps("preferredWorkLocation")} type="text" placeholder="Enter preferred city or area" className="input" />
              </Field>
              <Field label="Available From" name="availableFrom" error={errors.availableFrom}>
                <input {...inputProps("availableFrom")} type="date" className="input" />
              </Field>
            </div>
          </section>

          <div className="mt-9 border-t border-gray-200 pt-6">
            <p className="mb-4 text-xs leading-relaxed text-gray-500">
              Fields marked with <span className="text-orange-500">*</span> are required.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-orange-500 px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-orange-300 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
