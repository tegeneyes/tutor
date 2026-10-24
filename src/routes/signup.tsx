import { createFileRoute, Link } from "@tanstack/react-router";
import { FormPage } from "@/components/site/FormPage";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — TutorLink Ethiopia" },
      { name: "description", content: "Create a TutorLink Ethiopia account as a tutor or parent." },
      { property: "og:title", content: "Sign Up — TutorLink Ethiopia" },
      { property: "og:description", content: "Create a TutorLink Ethiopia account as a tutor or parent." },
    ],
  }),
  component: () => (
    <FormPage
      title="Create your account"
      subtitle="Join as a tutor or as a parent looking for a tutor."
      submit="Sign Up"
      fields={[
        { name: "name", label: "Full name" },
        { name: "email", label: "Email", type: "email" },
        { name: "role", label: "I am a…", options: ["Tutor", "Parent"] },
        { name: "password", label: "Password", type: "password" },
      ]}
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-primary">Login</Link></>}
    />
  ),
});
