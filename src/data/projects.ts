export type ProjectStatus = "Live" | "In progress" | "Planned";

export type CaseStudy = {
  brief: string;
  built: string[];
  how: string[];
  next: string[];
  image?: { src: string; alt: string; width: number; height: number };
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  url?: string; // optional: add when the project is live
  repoUrl?: string; // optional: public source code
  caseStudy?: CaseStudy;
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
    caseStudy: {
      brief:
        "A self-set brief: a small strength studio needs members to see real class availability and book online, and the studio's rules (class size, booking window, cancellation) have to hold every single time.",
      built: [
        "Public pages: home, schedule, trainers, plans, free-trial request and contact",
        "Member accounts with login and a class booking flow",
        "A schedule read live from the database and shown in the studio's timezone (America/New_York)",
        "Free-trial and contact forms saved to the database",
      ],
      how: [
        "The rules live in two Postgres functions, book_class and cancel_booking, not in the browser. They reject full classes (max 12), double bookings, classes more than 14 days ahead, classes that already started and cancellations inside the 2-hour window, each with a clear error code.",
        "Row Level Security is switched on for every table.",
        "A scheduled job (pg_cron) keeps generating the next 14 days of classes, so the schedule never runs out.",
        "The Android app uses the same database and the same functions, so both clients always agree.",
      ],
      next: [
        "Planned: an admin dashboard to manage classes, trainers, bookings and messages",
        "Planned: class-pack payments, in test mode only",
        "Planned: a matched, consistent set of trainer portraits",
      ],
    },
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
    caseStudy: {
      brief:
        "A self-set brief: members want to check the schedule and book a class from their phone, with the same rules and the same data as the website.",
      built: [
        "Onboarding, sign-up and login, with the session kept after the app closes",
        "A 14-day schedule with a day strip, class cards and loading skeletons",
        "A class sheet with instant booking and toast feedback",
        "My bookings with Upcoming and Past tabs, and cancellation with a confirm dialog",
        "An offline banner, a dark-only design system, and a custom icon and splash screen",
        "An installable Android APK built with EAS Build and published as a GitHub release",
      ],
      how: [
        "Booking is optimistic: the spot is reserved on screen at once, then confirmed by the server. If the request fails, the screen rolls back and a message explains why.",
        "The app calls the same book_class and cancel_booking functions as the website, so the rules cannot drift between the two.",
        "Only the publishable Supabase key is used in the app.",
      ],
      next: [
        "Planned: push notifications for class reminders",
        "Android only for now; there is no iOS build",
      ],
      image: {
        src: "/northform-app-hero.jpg",
        alt: "Northform app screens: schedule, class details, my bookings and profile",
        width: 2056,
        height: 981,
      },
    },
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