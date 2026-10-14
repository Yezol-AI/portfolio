export type ProjectStatus = "Live" | "In progress" | "Planned";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  url?: string; // optional: add when the project is live
  repoUrl?: string; // optional: public source code
};

// To add a project: copy one object below, paste it at the end of the
// array, and change the fields. Nothing else needs to change.
export const projects: Project[] = [
  {
    slug: "northform-web",
    title: "Northform Website",
    summary:
      "A booking website for Northform, a fictional boutique strength and conditioning studio: class schedule, trainer profiles and member booking, with the studio rules enforced in the database. A fictional concept project by Shah.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    status: "Live",
    url: "https://northform-web.vercel.app",
  },
  {
    slug: "northform-app",
    title: "Northform Android App",
    summary:
      "The Android companion for Northform: browse a 14-day schedule, book and cancel classes, and manage your bookings, on the same backend as the website. A fictional concept project by Shah.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "EAS Build"],
    status: "Live",
    url: "https://github.com/YezolAIorganization/northform-app/releases/latest",
    repoUrl: "https://github.com/YezolAIorganization/northform-app",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "The site you are looking at: a dark, fast, responsive portfolio built from scratch and deployed to the web.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Live",
    url: "https://portfolio-lemon-two-78.vercel.app",
  },
  {
    slug: "portfolio-mobile-app",
    title: "Portfolio Mobile App",
    summary:
      "A companion Android app that shows my work and lets clients send an inquiry straight from their phone.",
    stack: ["React Native", "Expo", "Supabase"],
    status: "Planned",
  },
];