export type ProjectStatus = "Live" | "In progress" | "Planned";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  url?: string; // optional: add when the project is live
};

// To add a project: copy one object below, paste it at the end of the
// array, and change the fields. Nothing else needs to change.
export const projects: Project[] = [
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