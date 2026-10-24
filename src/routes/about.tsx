import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PHONES } from "@/lib/data";
import { container, fadeUp, inView } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TutorLink Ethiopia" },
      { name: "description", content: "Our mission, tutor guidelines and FAQs for TutorLink Ethiopia." },
      { property: "og:title", content: "About — TutorLink Ethiopia" },
      { property: "og:description", content: "Our mission, tutor guidelines and FAQs." },
    ],
  }),
  component: About,
});

const FAQS = [
  ["Who can become a tutor?", "Current university students and graduates in Ethiopia."],
  ["Is tutoring at home or online?", "Both — you choose what works for you."],
  ["How do parents find a tutor?", `Call ${PHONES[0]} or ${PHONES[1]} and we'll match you.`],
];

function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6">
      <motion.section variants={container(0.1, 0.05)} initial="hidden" animate="show">
        <motion.h1 variants={fadeUp} className="text-3xl font-extrabold text-foreground">About TutorLink Ethiopia</motion.h1>
        <motion.p variants={fadeUp} className="mt-3 text-muted-foreground">Learn · Teach · Grow. We connect Ethiopian university students and graduates with families who need home and online tutoring.</motion.p>
      </motion.section>
      <motion.section id="guidelines" className="scroll-mt-24" {...inView(0.08, 0.3)}>
        <motion.h2 variants={fadeUp} className="text-xl font-bold text-foreground">Tutor Guidelines</motion.h2>
        <motion.ul variants={fadeUp} className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
          <li>Be punctual, prepared and respectful.</li>
          <li>Only teach subjects you know well.</li>
          <li>Keep parents updated on progress.</li>
        </motion.ul>
      </motion.section>
      <motion.section id="faqs" className="scroll-mt-24" {...inView(0.1, 0.2)}>
        <motion.h2 variants={fadeUp} className="text-xl font-bold text-foreground">FAQs</motion.h2>
        <motion.dl className="mt-3 space-y-4">
          {FAQS.map(([q, a]) => (
            <motion.div key={q} variants={fadeUp} className="rounded-xl border border-border p-4">
              <dt className="font-semibold text-foreground">{q}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{a}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.section>
    </div>
  );
}
