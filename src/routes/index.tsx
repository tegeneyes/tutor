import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  IconApply, IconArrowRight, IconCheck, IconChevronRight, IconEarn, IconEnglish, IconGraduate,
  IconJobs, IconLesson, IconPhone, IconProfile, IconProgress, IconSearch, IconUsers,
} from "@/components/site/icons";

import { Button } from "@/components/ui/button";
import { SUBJECTS, PHONES } from "@/lib/data";
import { EASE, container, fadeUp, inView } from "@/lib/motion";
import { AnimatedRays } from "@/components/site/AnimatedRays";
import hero from "@/assets/hero.jpg";
import student from "@/assets/student.jpg";
import parents from "@/assets/parents.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TutorLink Ethiopia — Home & Online Tutoring Jobs" },
      { name: "description", content: "Find tutoring jobs in Ethiopia. University students and graduates connect with families for home and online tutoring." },
      { property: "og:title", content: "TutorLink Ethiopia — Learn · Teach · Grow" },
      { property: "og:description", content: "Connecting top university students & graduates with home and online tutoring opportunities." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <StudentsCard />
          <ParentsCard />
        </div>
        <HowItWorks />
        <Subjects />
        <ReadyBanner />
      </div>
    </>
  );
}

function FloatCard({ icon: Icon, title, text, className, delay = 0 }: { icon: typeof IconSearch; title: string; text: string; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: delay + 0.7 }}
        className="flex w-56 items-start gap-3 rounded-xl bg-card p-3.5 shadow-float"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-sm font-bold text-foreground">{title}</span>
          <span className="block text-xs leading-snug text-muted-foreground">{text}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <AnimatedRays />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 sm:px-6 lg:min-h-[420px] lg:grid-cols-2 lg:pt-0">
        <motion.div
          className="relative z-10 py-4 lg:py-10"
          variants={container(0.09, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
            <Users className="h-4 w-4" /> Tutoring Opportunities in Ethiopia
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl xl:text-[42px]">
            Tutoring jobs for Ethiopian university students and graduates —{" "}
            <span className="text-primary">at home or online.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-lg text-muted-foreground">
            Browse open tutoring jobs, apply in a tap, and earn around your own timetable.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="brand" size="xl">
                <Link to="/jobs"><IconSearch /> Find Tutoring Jobs <IconArrowRight /></Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="brandOutline" size="xl">
                <Link to="/register">Create a Tutor Profile</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="relative -mx-4 h-[340px] sm:-mx-6 sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-1/2">
          <motion.img
            src={hero}
            alt="Tutor studying at a laptop"
            width={1280}
            height={832}
            className="h-full w-full object-cover object-[70%_center]"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
          />
          <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-secondary to-transparent lg:block" />
          <div className="absolute left-4 top-6 hidden space-y-3 sm:block lg:left-8">
            <FloatCard icon={IconGraduate} title="Qualified Students & Graduates" text="Top university talent" className="translate-x-16" delay={0.35} />
            <FloatCard icon={IconLesson} title="Home & Online Tutoring" text="Teach where it works for you" delay={0.5} />
            <FloatCard icon={IconProgress} title="Flexible Schedule, Earn Income" text="Turn knowledge into opportunity" className="translate-x-8" delay={0.65} />

          </div>
          <p className="absolute right-6 top-8 hidden">
            Teach<br />&nbsp;Learn<br />&nbsp;&nbsp;Grow<br />Together
          </p>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children, tone }: { children: React.ReactNode; tone: "blue" | "orange" }) {
  return (
    <motion.li variants={fadeUp} className="flex items-center gap-3 text-[15px] text-foreground">
      <IconCheck className={`h-5 w-5 shrink-0 ${tone === "blue" ? "text-primary" : "text-orange"}`} />
      {children}
    </motion.li>
  );
}

function StudentsCard() {
  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 sm:p-8"
      {...inView(0.07, 0.25)}
    >
      <div className="relative z-10 sm:max-w-[58%]">
        <motion.div variants={fadeUp} className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-foreground"><IconGraduate className="h-7 w-7" /></span>
          <div>
            <h2 className="text-xl font-bold text-foreground">For University Students &amp; Graduates</h2>
            <p className="mt-2 text-sm text-muted-foreground">Turn your knowledge into opportunities. Find jobs, apply instantly and start earning.</p>
          </div>
        </motion.div>
        <ul className="mt-6 space-y-3">
          <Bullet tone="blue">Home and online tutoring jobs</Bullet>
          <Bullet tone="blue">Flexible working hours</Bullet>
          <Bullet tone="blue">Apply instantly &amp; start right away</Bullet>
          <Bullet tone="blue">Earn on your schedule</Bullet>
        </ul>
        <motion.div variants={fadeUp} className="mt-7">
          <Button asChild variant="brand" size="xl" className="w-full sm:w-auto">
            <Link to="/jobs">Find Tutoring Jobs <ArrowRight /></Link>
          </Button>
        </motion.div>
      </div>
      <motion.img
        src={student}
        alt="Smiling university student holding books"
        loading="lazy"
        width={768}
        height={896}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[85%] w-[40%] rounded-tl-3xl object-cover object-top sm:block"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      />
    </motion.article>
  );
}

function ParentsCard() {
  return (
    <motion.article
      id="parents"
      className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-orange-soft p-6 sm:p-8"
      {...inView(0.07, 0.25)}
    >
      <div className="relative z-10 sm:max-w-[56%]">
        <motion.div variants={fadeUp} className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-background text-orange"><IconUsers className="h-7 w-7" /></span>
          <div>
            <p className="text-xs font-bold tracking-widest text-orange">FOR PARENTS</p>
            <h2 className="text-xl font-bold text-foreground">Looking for a tutor for your child?</h2>
            <p className="mt-2 text-sm text-muted-foreground">We can help you find qualified and trusted university students and graduates.</p>
          </div>
        </motion.div>
        <ul className="mt-6 space-y-3">
          <Bullet tone="orange">Qualified university students &amp; graduates</Bullet>
          <Bullet tone="orange">Wide range of subjects</Bullet>
          <Bullet tone="orange">Home or online tutoring</Bullet>
          <Bullet tone="orange">Safe and reliable process</Bullet>
        </ul>
      </div>
      <motion.img
        src={parents}
        alt="Tutor helping a child with homework"
        loading="lazy"
        width={896}
        height={768}
        className="pointer-events-none absolute right-6 top-24 hidden aspect-[5/6] w-[38%] rounded-2xl object-cover sm:block"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      />
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-7 flex flex-col gap-3 rounded-xl bg-orange p-4 text-navy shadow-card sm:max-w-md sm:flex-row sm:items-center"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background text-orange"><IconPhone className="h-5 w-5" /></span>
        <div>
          <p className="text-sm font-medium">Contact Us — Parents call:</p>
          <p className="text-lg font-extrabold">
            <a href={`tel:${PHONES[0]}`} className="hover:underline">{PHONES[0]}</a>
            <span className="mx-2 font-medium">or</span>
            <a href={`tel:${PHONES[1]}`} className="hover:underline">{PHONES[1]}</a>
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

const STEPS = [
  { n: 1, icon: IconProfile, title: "Create Your Profile", text: "Sign up and tell us about yourself, your education and your subjects.", soft: "bg-sub-blue text-primary", ghost: "text-primary/25", bar: "bg-primary" },
  { n: 2, icon: IconJobs, title: "Find Tutoring Jobs", text: "Browse available home and online tutoring opportunities and apply instantly.", soft: "bg-sub-green text-success", ghost: "text-success/25", bar: "bg-success" },
  { n: 3, icon: IconApply, title: "Apply or Contact", text: "Apply instantly or reach the family directly.", soft: "bg-sub-violet text-violet", ghost: "text-violet/25", bar: "bg-violet" },
  { n: 4, icon: IconEarn, title: "Start Tutoring & Earn", text: "Get matched, start tutoring, and earn on your schedule!", soft: "bg-sub-amber text-orange", ghost: "text-orange/25", bar: "bg-orange" },

];

const stepPop: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, when: "beforeChildren" },
  },
};

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <motion.div className="max-w-2xl" {...inView(0.08, 0.5)}>
      <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.18em] text-primary">{eyebrow}</motion.p>
      <motion.h2 variants={fadeUp} className="mt-2 text-2xl font-bold text-foreground sm:text-[28px]">{title}</motion.h2>
      <motion.p variants={fadeUp} className="mt-1.5 text-muted-foreground">{sub}</motion.p>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <SectionHeading eyebrow="HOW IT WORKS" title="Simple steps to start teaching or find a tutor" sub="Four quick steps from signing up to your first paid lesson." />
      <motion.ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" {...inView(0.1, 0.15)}>
        {STEPS.map((s, i) => (
          <motion.li key={s.n} variants={stepPop} whileHover={{ y: -6 }} className="group relative list-none">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors duration-300 group-hover:border-primary/30 group-hover:shadow-card">
              <span aria-hidden className={`pointer-events-none absolute right-4 top-3 select-none text-[68px] font-extrabold leading-none ${s.ghost}`}>{s.n}</span>
              <span className={`relative grid h-12 w-12 place-items-center rounded-xl ${s.soft}`}>
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-4 font-bold text-foreground">{s.title}</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className={`relative mt-4 block h-1 w-8 rounded-full ${s.bar} transition-all duration-300 group-hover:w-16`} />
            </div>
            {i < STEPS.length - 1 && (
              <span aria-hidden className="absolute right-0 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-border bg-background text-muted-foreground xl:grid">
                <IconChevronRight className="h-3.5 w-3.5" />
              </span>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

function Subjects() {
  return (
    <section id="subjects" className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="SUBJECTS" title="Popular Tutoring Subjects" sub="Tutoring opportunities across many subjects." />
        <motion.div {...inView(0.08, 0.5)}>
          <motion.div variants={fadeUp}>
            <Link
              to="/jobs"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card focus-visible:outline-2 focus-visible:outline-ring"
            >
              View All Subjects
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" {...inView(0.05, 0.15)}>
        {SUBJECTS.map((s) => (
          <motion.div key={s.slug} variants={fadeUp}>
            <Link
              to="/jobs"
              search={{ subject: s.slug }}
              className="group flex h-full items-center gap-3 rounded-xl border border-border bg-card p-3.5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${s.bg} ${s.fg} transition-transform duration-300 group-hover:scale-110`}>
                <s.icon className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold text-foreground">{s.name}</span>
                <span className="block text-xs text-muted-foreground">Browse jobs</span>
              </span>
              <IconArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ReadyBanner() {
  return (
    <motion.section
      className="flex flex-col items-start gap-6 rounded-2xl bg-secondary p-6 sm:p-8 md:flex-row md:items-center"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-background text-primary shadow-card"><IconEnglish className="h-8 w-8" /></span>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-foreground">Ready to Start?</h2>
        <p className="text-muted-foreground">Join our community and be part of a brighter learning future in Ethiopia.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button asChild variant="brand" size="xl"><Link to="/register"><IconProfile /> Join as a Tutor</Link></Button>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button asChild variant="brandOutline" size="xl"><Link to="/" hash="parents"><IconUsers /> Learn More for Parents</Link></Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
