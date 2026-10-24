import { createFileRoute } from "@tanstack/react-router";
import { FormPage } from "@/components/site/FormPage";
import { SUBJECTS } from "@/lib/data";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create a Tutor Profile — TutorLink Ethiopia" },
      { name: "description", content: "Register as a tutor and start receiving tutoring opportunities in Ethiopia." },
      { property: "og:title", content: "Create a Tutor Profile — TutorLink Ethiopia" },
      { property: "og:description", content: "Register as a tutor and start receiving tutoring opportunities." },
    ],
  }),
  component: () => (
    <FormPage
      title="Create a Tutor Profile"
      subtitle="Tell us about your education and the subjects you teach."
      submit="Create Profile"
      fields={[
        { name: "name", label: "Full name" },
        { name: "phone", label: "Phone number", type: "tel" },
        { name: "university", label: "University" },
        { name: "status", label: "Status", options: ["Current student", "Graduate"] },
        { name: "subject", label: "Main subject", options: SUBJECTS.map((s) => s.name) },
        { name: "mode", label: "Preferred tutoring", options: ["Home", "Online", "Both"] },
      ]}
    />
  ),
});
