import { createFileRoute, Link } from "@tanstack/react-router";
import { FormPage } from "@/components/site/FormPage";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — TutorLink Ethiopia" },
      { name: "description", content: "Log in to your TutorLink Ethiopia account." },
      { property: "og:title", content: "Login — TutorLink Ethiopia" },
      { property: "og:description", content: "Log in to your TutorLink Ethiopia account." },
    ],
  }),
  component: () => (
    <FormPage
      title="Welcome back"
      subtitle="Log in to manage your tutoring."
      submit="Login"
      fields={[
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ]}
      footer={<>No account? <Link to="/signup" className="font-semibold text-primary">Sign up</Link></>}
    />
  ),
});
