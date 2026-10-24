import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { PHONES } from "@/lib/data";
import { fadeUp, inView } from "@/lib/motion";
import { Logo } from "./Logo";

const a = "text-sm text-navy-foreground/70 transition-colors hover:text-primary";

export function Footer() {
  return (
    <motion.footer className="bg-navy text-navy-foreground" {...inView(0.1, 0.12)}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-4">
        <motion.div variants={fadeUp} className="space-y-4">

          <Logo light />
          <p className="max-w-xs text-sm text-navy-foreground/70">
            Connecting university students and graduates with home and online tutoring opportunities.
          </p>
          <ul className="space-y-2">
            {PHONES.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className={`${a} inline-flex items-center gap-2`}>
                  <Phone className="h-4 w-4" /> {p}
                </a>
              </li>
            ))}
            <li className="inline-flex items-center gap-2 text-sm text-navy-foreground/70">
              <MapPin className="h-4 w-4" /> Ethiopia
            </li>
          </ul>
        </motion.div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
        <FooterCol title="Quick Links">

          <Link to="/" className={a}>Home</Link>
          <Link to="/jobs" className={a}>Find Jobs</Link>
          <Link to="/" hash="how-it-works" className={a}>How It Works</Link>
          <Link to="/" hash="subjects" className={a}>Subjects</Link>
          <Link to="/about" className={a}>About</Link>
        </FooterCol>
        <FooterCol title="For Tutors">
          <Link to="/register" className={a}>Create Profile</Link>
          <Link to="/jobs" className={a}>Find Jobs</Link>
          <Link to="/about" hash="guidelines" className={a}>Tutor Guidelines</Link>
          <Link to="/about" hash="faqs" className={a}>FAQs</Link>
        </FooterCol>
        <FooterCol title="For Parents">
          <Link to="/" hash="parents" className={a}>Find a Tutor</Link>
          <a href={`tel:${PHONES[0]}`} className={a}>Contact Us</a>
          <Link to="/about" hash="faqs" className={a}>FAQs</Link>
        </FooterCol>
        </div>
        </div>

      </div>
      <motion.div variants={fadeUp} className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/50">
        © {new Date().getFullYear()} TutorLink Ethiopia. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </motion.div>
  );
}
