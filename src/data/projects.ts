export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "Live" | "In progress" | "Planned";
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary:
      "The site you are looking at: a dark, fast, responsive portfolio built from scratch and deployed to the web.",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "portfolio-mobile-app",
    title: "Portfolio Mobile App",
    summary:
      "A companion Android app that shows my work and lets clients send an inquiry straight from their phone.",
    status: "Planned",
    stack: ["React Native", "Expo", "Supabase"],
  },
];