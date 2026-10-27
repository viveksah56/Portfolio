export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  focusAreas: string[];
  liveUrl: string;
  liveUrlDisplay: string;
}

export const projects: Record<string, CaseStudy> = {
  "exam-nepal": {
    slug: "exam-nepal",
    title: "ExamNepal",
    category: "Education platform · Case study",
    subtitle: "Online examinations. Learning tools. Assessment insights.",
    description:
      "An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations on a single shared platform.",
    role: "Student-facing platform and companion admin dashboard",
    stack: ["React.js", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    focusAreas: ["Online assessments", "User management", "Admin dashboard", "Analytics"],
    liveUrl: "https://www.examsnepal.com",
    liveUrlDisplay: "examsnepal.com",
  },
  "examnepal": {
    slug: "examnepal",
    title: "ExamNepal",
    category: "Education platform · Case study",
    subtitle: "Online examinations. Learning tools. Assessment insights.",
    description:
      "An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations on a single shared platform.",
    role: "Student-facing platform and companion admin dashboard",
    stack: ["React.js", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    focusAreas: ["Online assessments", "User management", "Admin dashboard", "Analytics"],
    liveUrl: "https://www.examsnepal.com",
    liveUrlDisplay: "examsnepal.com",
  },
  "medishop": {
    slug: "medishop",
    title: "Medishop",
    category: "Healthcare e-commerce · Case study",
    subtitle: "Healthcare products. Inventory control. One storefront.",
    description:
      "A medical e-commerce platform for browsing and purchasing healthcare and pharmacy products, paired with an admin system for inventory, orders, and customer management.",
    role: "End-to-end ownership of storefront and admin panel",
    stack: ["Next.js", "React.js", "Chart.js", "Java", "Spring Boot", "MySQL", "Cloudinary"],
    focusAreas: ["Inventory APIs", "Order management", "Admin analytics", "Media handling"],
    liveUrl: "https://nepal-medishop-frontend.vercel.app",
    liveUrlDisplay: "nepal-medishop-frontend.vercel.app",
  },
  "babycare-marketplace": {
    slug: "babycare-marketplace",
    title: "BabyCare Marketplace",
    category: "Multi-vendor marketplace · Case study",
    subtitle: "Many vendors. One marketplace. Clear operations.",
    description:
      "A multi-vendor marketplace for baby and parenting products with a dedicated admin dashboard for products, orders, users, and vendors.",
    role: "Marketplace frontend, APIs, and role-based dashboards",
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    focusAreas: ["Multi-vendor", "Role-based access", "Order tracking", "Data visualization"],
    liveUrl: "https://www.thebabycareapp.com",
    liveUrlDisplay: "thebabycareapp.com",
  },
  "babycare": {
    slug: "babycare",
    title: "BabyCare Marketplace",
    category: "Multi-vendor marketplace · Case study",
    subtitle: "Many vendors. One marketplace. Clear operations.",
    description:
      "A multi-vendor marketplace for baby and parenting products with a dedicated admin dashboard for products, orders, users, and vendors.",
    role: "Marketplace frontend, APIs, and role-based dashboards",
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    focusAreas: ["Multi-vendor", "Role-based access", "Order tracking", "Data visualization"],
    liveUrl: "https://www.thebabycareapp.com",
    liveUrlDisplay: "thebabycareapp.com",
  },
  "lookscart": {
    slug: "lookscart",
    title: "LooksCart",
    category: "E-commerce · Case study",
    subtitle: "Browse eyewear. Check out securely.",
    description:
      "An eyewear e-commerce platform for prescription glasses, sunglasses, and fashion eyewear with a full purchase flow from browsing to secure payment.",
    role: "Storefront and payment integration",
    stack: ["React.js", "Context API", "Styled Components", "Shadcn/UI", "Payment Integration"],
    focusAreas: ["Product catalog", "Checkout", "Payments", "Responsive design"],
    liveUrl: "https://www.lookscart.com",
    liveUrlDisplay: "lookscart.com",
  },
  "dwork-it": {
    slug: "dwork-it",
    title: "Dwork-it",
    category: "Corporate website · Case study",
    subtitle: "Server-rendered. Search-ready. Fast.",
    description:
      "A corporate website showcasing IT services and software solutions, with server-side rendering and structured SEO that improved organic search visibility.",
    role: "Frontend development and SEO implementation",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Shadcn/UI", "SSR"],
    focusAreas: ["SSR", "Structured SEO", "Core Web Vitals", "Responsive design"],
    liveUrl: "https://www.dworkit.com",
    liveUrlDisplay: "dworkit.com",
  },
};

export function getProject(slug: string): CaseStudy | undefined {
  return projects[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
