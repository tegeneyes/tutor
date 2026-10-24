import type { ComponentType } from "react";
import {
  IconAmharic,
  IconBiology,
  IconChemistry,
  IconEnglish,
  IconIT,
  IconMath,
  IconOther,
  IconPhysics,
} from "@/components/site/icons";

export const PHONES = ["0995315912", "0701276262"] as const;

export type Subject = {
  slug: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  bg: string;
  fg: string;
};

export const SUBJECTS: Subject[] = [
  { slug: "mathematics", name: "Mathematics", icon: IconMath, bg: "bg-sub-blue", fg: "text-primary" },
  { slug: "english", name: "English", icon: IconEnglish, bg: "bg-sub-red", fg: "text-destructive" },
  { slug: "physics", name: "Physics", icon: IconPhysics, bg: "bg-sub-blue", fg: "text-primary" },
  { slug: "chemistry", name: "Chemistry", icon: IconChemistry, bg: "bg-sub-amber", fg: "text-orange" },
  { slug: "amharic", name: "Amharic", icon: IconAmharic, bg: "bg-sub-green", fg: "text-success" },
  { slug: "biology", name: "Biology", icon: IconBiology, bg: "bg-sub-green", fg: "text-success" },
  { slug: "it", name: "IT & Computer", icon: IconIT, bg: "bg-sub-violet", fg: "text-primary" },
  { slug: "other", name: "Other Subjects", icon: IconOther, bg: "bg-sub-gray", fg: "text-foreground" },
];

export type Job = {
  id: string;
  title: string;
  subject: string;
  mode: "Home" | "Online";
  location: string;
  grade: string;
  schedule: string;
  pay: string;
  posted: string;
};

// Sample listings shown until real job postings are connected.
export const SAMPLE_JOBS: Job[] = [
  { id: "1", title: "Grade 10 Mathematics tutor", subject: "mathematics", mode: "Home", location: "Bole, Addis Ababa", grade: "Grade 10", schedule: "3 days/week, evenings", pay: "ETB 3,500/month", posted: "2 days ago" },
  { id: "2", title: "Physics for national exam prep", subject: "physics", mode: "Online", location: "Online", grade: "Grade 12", schedule: "Weekends", pay: "ETB 400/hour", posted: "1 day ago" },
  { id: "3", title: "Spoken English for primary student", subject: "english", mode: "Home", location: "CMC, Addis Ababa", grade: "Grade 4", schedule: "Mon–Fri, 1 hr", pay: "ETB 4,000/month", posted: "Today" },
  { id: "4", title: "Chemistry tutor needed", subject: "chemistry", mode: "Home", location: "Adama", grade: "Grade 11", schedule: "2 days/week", pay: "ETB 3,000/month", posted: "4 days ago" },
  { id: "5", title: "Amharic reading & writing", subject: "amharic", mode: "Online", location: "Online", grade: "Grade 3", schedule: "Weekends", pay: "ETB 250/hour", posted: "3 days ago" },
  { id: "6", title: "Intro to programming (Python)", subject: "it", mode: "Online", location: "Online", grade: "Grade 9", schedule: "Flexible", pay: "ETB 450/hour", posted: "Today" },
  { id: "7", title: "Biology & Chemistry combined", subject: "biology", mode: "Home", location: "Hawassa", grade: "Grade 12", schedule: "4 days/week", pay: "ETB 5,000/month", posted: "5 days ago" },
  { id: "8", title: "All subjects – primary level", subject: "other", mode: "Home", location: "Sarbet, Addis Ababa", grade: "Grade 2", schedule: "Mon–Fri afternoons", pay: "ETB 4,500/month", posted: "1 week ago" },
];
