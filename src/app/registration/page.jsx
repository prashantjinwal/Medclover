import RegistrationForm from "@/components/registration/RegistrationForm";

export const metadata = {
  title: "Job Registration | Medclover",
  description:
    "Register with Medclover for available caregiver and care-related job opportunities.",
};

export default function RegistrationPage() {
  return (
    <main>
      <RegistrationForm />
    </main>
  );
}
