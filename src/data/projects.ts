export interface CaseStudyChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface CaseStudyArchitecture {
  client: string;
  server: string;
  database: string;
  auth: string;
}

export interface CaseStudyQuality {
  authRbac: string;
  validation: string;
  errorHandling: string;
  performance: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  status: 'Live' | 'Demo' | 'Private';
  role: string;
  team: string;
  frontendStack: string[];
  backendStack: string[];
  databaseStack: string[];
  stack: string[];
  focusAreas: string[];
  liveUrl: string;
  liveUrlDisplay: string;
  adminUrl?: string;
  adminUrlDisplay?: string;
  adminStatus?: string;
  architecture: CaseStudyArchitecture;
  challenges: CaseStudyChallenge[];
  quality: CaseStudyQuality;
  outcome: string[];
  todoNotes?: string[];
}

export const projects: Record<string, CaseStudy> = {
  'exam-nepal': {
    slug: 'exam-nepal',
    title: 'ExamNepal',
    category: 'Education platform · Case study',
    subtitle: 'Online examinations, mock tests, and real-time assessment analytics.',
    description:
      'An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations on a single shared platform with a companion administration portal.',
    status: 'Live',
    role: 'Full Stack Developer',
    team: 'Agile team of 3: Full Stack Developer (Bibek Sah), Product Designer, and Backend Lead',
    frontendStack: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
    backendStack: ['Java', 'Spring Boot', 'REST APIs', 'Node.js (Admin services)', 'Express.js'],
    databaseStack: ['PostgreSQL (Student & Exam engine)', 'MongoDB (Admin platform)'],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Node.js', 'MongoDB'],
    focusAreas: ['Online assessments', 'Role-based dashboards', 'Examination telemetry', 'Analytics'],
    liveUrl: 'https://www.examsnepal.com',
    liveUrlDisplay: 'examsnepal.com',
    adminUrl: 'https://admin-examsnepal.vercel.app',
    adminUrlDisplay: 'admin-examsnepal.vercel.app',
    adminStatus: 'Live',
    architecture: {
      client: 'Next.js App Router with SSR student platform and client-side exam timer.',
      server: 'Java / Spring Boot REST APIs for exam submission, test evaluation, and question banks.',
      database: 'PostgreSQL relational schema for structured assessments and attempts; MongoDB for admin logs.',
      auth: 'JWT authentication with role-based access control (Student, Institute Admin, System Admin).',
    },
    challenges: [
      {
        title: 'Real-time exam state persistence under intermittent connectivity',
        problem: 'Students taking high-stakes assessments risk losing progress during brief network dropouts.',
        solution: 'Built client-side checkpointing with local storage backup and optimistic question sync upon connection restore.',
      },
      {
        title: 'Multi-role question bank security',
        problem: 'Institutes must only create, view, and modify question banks belonging to their licensed curriculum.',
        solution: 'Implemented backend Spring Boot method authorization verifying institute affiliation tokens on every resource access.',
      },
    ],
    quality: {
      authRbac: 'JWT tokens with token expiration and tiered role claims (Student vs. Institute vs. Admin).',
      validation: 'Zod schemas on the frontend and Jakarta Bean Validation (@Valid) on backend REST endpoints.',
      errorHandling: 'Centralized @ControllerAdvice mapping validation and business errors to clean JSON responses.',
      performance: 'Server-side rendering for public catalogs; lazy loaded evaluation screens to minimize bundle size.',
    },
    outcome: [
      'Delivered production-grade examination delivery platform in active use by academic institutes.',
      'Companion admin panel for centralized question bank curation and candidate roster management.',
    ],
    todoNotes: ['TODO(Bibek): Confirm exact backend ownership split between Spring Boot and Node.js admin services.'],
  },

  'examnepal': {
    slug: 'examnepal',
    title: 'ExamNepal',
    category: 'Education platform · Case study',
    subtitle: 'Online examinations, mock tests, and real-time assessment analytics.',
    description:
      'An online examination and learning platform supporting mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations on a single shared platform with a companion administration portal.',
    status: 'Live',
    role: 'Full Stack Developer',
    team: 'Agile team of 3: Full Stack Developer (Bibek Sah), Product Designer, and Backend Lead',
    frontendStack: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
    backendStack: ['Java', 'Spring Boot', 'REST APIs', 'Node.js (Admin services)', 'Express.js'],
    databaseStack: ['PostgreSQL (Student & Exam engine)', 'MongoDB (Admin platform)'],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Node.js', 'MongoDB'],
    focusAreas: ['Online assessments', 'Role-based dashboards', 'Examination telemetry', 'Analytics'],
    liveUrl: 'https://www.examsnepal.com',
    liveUrlDisplay: 'examsnepal.com',
    adminUrl: 'https://admin-examsnepal.vercel.app',
    adminUrlDisplay: 'admin-examsnepal.vercel.app',
    adminStatus: 'Live',
    architecture: {
      client: 'Next.js App Router with SSR student platform and client-side exam timer.',
      server: 'Java / Spring Boot REST APIs for exam submission, test evaluation, and question banks.',
      database: 'PostgreSQL relational schema for structured assessments and attempts; MongoDB for admin logs.',
      auth: 'JWT authentication with role-based access control (Student, Institute Admin, System Admin).',
    },
    challenges: [
      {
        title: 'Real-time exam state persistence under intermittent connectivity',
        problem: 'Students taking high-stakes assessments risk losing progress during brief network dropouts.',
        solution: 'Built client-side checkpointing with local storage backup and optimistic question sync upon connection restore.',
      },
      {
        title: 'Multi-role question bank security',
        problem: 'Institutes must only create, view, and modify question banks belonging to their licensed curriculum.',
        solution: 'Implemented backend Spring Boot method authorization verifying institute affiliation tokens on every resource access.',
      },
    ],
    quality: {
      authRbac: 'JWT tokens with token expiration and tiered role claims (Student vs. Institute vs. Admin).',
      validation: 'Zod schemas on the frontend and Jakarta Bean Validation (@Valid) on backend REST endpoints.',
      errorHandling: 'Centralized @ControllerAdvice mapping validation and business errors to clean JSON responses.',
      performance: 'Server-side rendering for public catalogs; lazy loaded evaluation screens to minimize bundle size.',
    },
    outcome: [
      'Delivered production-grade examination delivery platform in active use by academic institutes.',
      'Companion admin panel for centralized question bank curation and candidate roster management.',
    ],
    todoNotes: ['TODO(Bibek): Confirm exact backend ownership split between Spring Boot and Node.js admin services.'],
  },

  'medishop': {
    slug: 'medishop',
    title: 'Medishop',
    category: 'Healthcare e-commerce · Case study',
    subtitle: 'Healthcare products, inventory control, and pharmacy operations.',
    description:
      'A medical e-commerce platform for browsing and purchasing healthcare and pharmacy products, paired with an administration system for inventory, orders, and customer management.',
    status: 'Demo',
    role: 'Full Stack Developer',
    team: 'Agile team of 2: Full Stack Developer (Bibek Sah), QA Specialist',
    frontendStack: ['Next.js', 'React.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Chart.js'],
    backendStack: ['Java', 'Spring Boot', 'REST APIs', 'Node.js (Admin services)', 'Express.js'],
    databaseStack: ['MySQL (Storefront transactions)', 'MongoDB (Admin operational logs)'],
    stack: ['Next.js', 'React.js', 'Chart.js', 'Java', 'Spring Boot', 'MySQL', 'Cloudinary', 'Node.js', 'MongoDB'],
    focusAreas: ['Inventory APIs', 'Order management', 'Admin analytics', 'Media handling'],
    liveUrl: 'https://nepal-medishop-frontend.vercel.app',
    liveUrlDisplay: 'nepal-medishop-frontend.vercel.app',
    adminUrl: 'https://nepal-medishop-frontend.vercel.app',
    adminUrlDisplay: 'Internal Admin Dashboard',
    adminStatus: 'Demo',
    architecture: {
      client: 'Next.js responsive storefront with product catalog, cart context, and order management.',
      server: 'Spring Boot REST service layer orchestrating stock deduction, order states, and catalog filters.',
      database: 'Relational MySQL schema for products, variants, orders, and customer profiles.',
      auth: 'JWT authentication distinguishing retail customers from pharmacy operations staff.',
    },
    challenges: [
      {
        title: 'Optimized delivery for diverse pharmaceutical product imagery',
        problem: 'High-resolution packaging images caused high bandwidth consumption and slow mobile browsing.',
        solution: 'Offloaded media pipeline to Cloudinary with automated AVIF/WebP conversion and dynamic responsive breakpoints.',
      },
      {
        title: 'Inventory synchronization during concurrent orders',
        problem: 'Multiple customers purchasing low-stock medicines simultaneously risked inventory overselling.',
        solution: 'Implemented transactional stock deduction in the backend service layer with transactional rollback on stock depletion.',
      },
    ],
    quality: {
      authRbac: 'Role-based protection securing inventory mutation and order status endpoints.',
      validation: 'Client-side form bounds validation paired with backend request body validation.',
      errorHandling: 'Centralized HTTP error interceptors surfacing user-friendly toast messages.',
      performance: 'Incremental Static Regeneration for catalog pages with client-side cached cart state.',
    },
    outcome: [
      'Functional end-to-end medical e-commerce platform covering product discovery through order completion.',
      'Integrated admin dashboard with Chart.js analytics for sales velocity and stock monitoring.',
    ],
    todoNotes: ['TODO(Bibek): Confirm backend ownership between Java/Spring Boot and Node/Express admin panel.'],
  },

  'babycare-marketplace': {
    slug: 'babycare-marketplace',
    title: 'BabyCare Marketplace',
    category: 'Multi-vendor marketplace · Case study',
    subtitle: 'Many vendors. One marketplace. Clear operations.',
    description:
      'A multi-vendor marketplace for baby and parenting products with a dedicated admin dashboard for products, orders, users, and vendors.',
    status: 'Live',
    role: 'Full Stack Developer',
    team: 'Agile team of 4: Full Stack Developer (Bibek Sah), Frontend Engineer, UI/UX Designer, QA Engineer',
    frontendStack: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
    backendStack: ['Node.js', 'Express.js', 'REST APIs'],
    databaseStack: ['MongoDB', 'Mongoose'],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    focusAreas: ['Multi-vendor', 'Role-based access', 'Order tracking', 'Data visualization'],
    liveUrl: 'https://www.thebabycareapp.com',
    liveUrlDisplay: 'thebabycareapp.com',
    adminUrl: 'https://babycare-admin-marketplace.vercel.app',
    adminUrlDisplay: 'babycare-admin-marketplace.vercel.app',
    adminStatus: 'Offline',
    architecture: {
      client: 'Next.js marketplace storefront with vendor storefront pages and customer checkout flow.',
      server: 'Express.js REST API layer handling multi-tenant vendor queries and product catalogs.',
      database: 'MongoDB document collections with indexed queries for categorized product search.',
      auth: 'Multi-role JWT authentication (Customer, Vendor, Marketplace Superadmin).',
    },
    challenges: [
      {
        title: 'Multi-vendor catalog filtering across deep parenting categories',
        problem: 'Filtering hundreds of baby products across age brackets, materials, and safety certifications caused slow response times.',
        solution: 'Constructed targeted MongoDB compound indexes and aggregation pipelines for sub-100ms filter queries.',
      },
      {
        title: 'Strict vendor tenant data isolation',
        problem: 'Independent vendors must only view and manage their own orders and sales metrics.',
        solution: 'Built Express.js tenancy middleware validating the authenticated vendor token on all data mutations.',
      },
    ],
    quality: {
      authRbac: 'Strict vendor isolation preventing cross-tenant access to order and revenue data.',
      validation: 'Mongoose schema validation ensuring required product specifications and stock counters.',
      errorHandling: 'Structured HTTP error payloads with descriptive error codes for client debugging.',
      performance: 'Cloudinary CDN media caching and paginated catalog queries.',
    },
    outcome: [
      'Delivered live multi-vendor parenting marketplace platform.',
      'Role-based operations dashboard for vendor inventory and order dispatch.',
    ],
    todoNotes: ['TODO(Bibek): Update babycare-admin-marketplace.vercel.app deployment URL (currently returning 404).'],
  },

  'babycare': {
    slug: 'babycare',
    title: 'BabyCare Marketplace',
    category: 'Multi-vendor marketplace · Case study',
    subtitle: 'Many vendors. One marketplace. Clear operations.',
    description:
      'A multi-vendor marketplace for baby and parenting products with a dedicated admin dashboard for products, orders, users, and vendors.',
    status: 'Live',
    role: 'Full Stack Developer',
    team: 'Agile team of 4: Full Stack Developer (Bibek Sah), Frontend Engineer, UI/UX Designer, QA Engineer',
    frontendStack: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
    backendStack: ['Node.js', 'Express.js', 'REST APIs'],
    databaseStack: ['MongoDB', 'Mongoose'],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    focusAreas: ['Multi-vendor', 'Role-based access', 'Order tracking', 'Data visualization'],
    liveUrl: 'https://www.thebabycareapp.com',
    liveUrlDisplay: 'thebabycareapp.com',
    adminUrl: 'https://babycare-admin-marketplace.vercel.app',
    adminUrlDisplay: 'babycare-admin-marketplace.vercel.app',
    adminStatus: 'Offline',
    architecture: {
      client: 'Next.js marketplace storefront with vendor storefront pages and customer checkout flow.',
      server: 'Express.js REST API layer handling multi-tenant vendor queries and product catalogs.',
      database: 'MongoDB document collections with indexed queries for categorized product search.',
      auth: 'Multi-role JWT authentication (Customer, Vendor, Marketplace Superadmin).',
    },
    challenges: [
      {
        title: 'Multi-vendor catalog filtering across deep parenting categories',
        problem: 'Filtering hundreds of baby products across age brackets, materials, and safety certifications caused slow response times.',
        solution: 'Constructed targeted MongoDB compound indexes and aggregation pipelines for sub-100ms filter queries.',
      },
      {
        title: 'Strict vendor tenant data isolation',
        problem: 'Independent vendors must only view and manage their own orders and sales metrics.',
        solution: 'Built Express.js tenancy middleware validating the authenticated vendor token on all data mutations.',
      },
    ],
    quality: {
      authRbac: 'Strict vendor isolation preventing cross-tenant access to order and revenue data.',
      validation: 'Mongoose schema validation ensuring required product specifications and stock counters.',
      errorHandling: 'Structured HTTP error payloads with descriptive error codes for client debugging.',
      performance: 'Cloudinary CDN media caching and paginated catalog queries.',
    },
    outcome: [
      'Delivered live multi-vendor parenting marketplace platform.',
      'Role-based operations dashboard for vendor inventory and order dispatch.',
    ],
    todoNotes: ['TODO(Bibek): Update babycare-admin-marketplace.vercel.app deployment URL (currently returning 404).'],
  },

  'lookscart': {
    slug: 'lookscart',
    title: 'LooksCart',
    category: 'E-commerce · Case study',
    subtitle: 'Browse eyewear. Check out securely.',
    description:
      'An eyewear e-commerce platform for prescription glasses, sunglasses, and fashion eyewear with a full purchase flow from browsing to secure payment.',
    status: 'Live',
    role: 'Storefront & Payment Integration Developer',
    team: 'Agile team of 2: Frontend Developer (Bibek Sah), Backend Engineer',
    frontendStack: ['React.js', 'Context API', 'Styled Components', 'Shadcn/UI'],
    backendStack: ['Node.js', 'REST APIs', 'Payment Gateway Integration'],
    databaseStack: ['MongoDB'],
    stack: ['React.js', 'Context API', 'Styled Components', 'Shadcn/UI', 'Payment Integration'],
    focusAreas: ['Product catalog', 'Checkout', 'Payments', 'Responsive design'],
    liveUrl: 'https://www.lookscart.com',
    liveUrlDisplay: 'lookscart.com',
    architecture: {
      client: 'React single-page application with customized eyewear configuration modal and responsive cart.',
      server: 'Secure REST order creation endpoint with payment provider webhook verification.',
      database: 'MongoDB database managing eyewear frames, lens coatings, and order receipts.',
      auth: 'Secure checkout session tokens and customer account profiles.',
    },
    challenges: [
      {
        title: 'Interactive frame and prescription configuration',
        problem: 'Eyewear purchases require selecting lens types, coatings, and prescription values with dynamic pricing.',
        solution: 'Engineered a multi-step configuration component with client-side state validation and instant total recalculation.',
      },
      {
        title: 'Resilient checkout payment reconciliation',
        problem: 'Network interruptions between payment redirection and merchant return could leave orders in pending state.',
        solution: 'Configured idempotent payment webhook listeners confirming order fulfillment independently of client redirects.',
      },
    ],
    quality: {
      authRbac: 'Secure payment tokenization without storing sensitive cardholder data on application servers.',
      validation: 'Validation rules preventing invalid lens prescription numbers from completing checkout.',
      errorHandling: 'Graceful fallback showing actionable error dialogs when transactions are declined.',
      performance: 'Component-level CSS splitting with Styled Components and Vercel edge CDN caching.',
    },
    outcome: [
      'Live e-commerce platform supporting product discovery, frame customization, and secure payment processing.',
      'Streamlined mobile shopping funnel from frame selection to order receipt.',
    ],
  },

  'dwork-it': {
    slug: 'dwork-it',
    title: 'Dwork-it',
    category: 'Corporate website · Case study',
    subtitle: 'Server-rendered. Search-ready. Fast.',
    description:
      'A corporate website showcasing IT services and software solutions, built with server-side rendering and structured SEO that improved organic search visibility.',
    status: 'Live',
    role: 'Frontend Development & SEO Lead',
    team: 'Agile team of 2: Frontend Developer (Bibek Sah), Content Strategist',
    frontendStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SSR'],
    backendStack: ['Next.js Server Components', 'Static Site Generation'],
    databaseStack: ['Static Metadata Files'],
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SSR'],
    focusAreas: ['SSR', 'Structured SEO', 'Core Web Vitals', 'Responsive design'],
    liveUrl: 'https://www.dworkit.com',
    liveUrlDisplay: 'dworkit.com',
    architecture: {
      client: 'Clean semantic HTML layout built with Tailwind CSS and accessible component primitives.',
      server: 'Next.js App Router with Server-Side Rendering (SSR) and pre-built static assets.',
      database: 'File-based content structure compiled at build time for instant response times.',
      auth: 'Public corporate website (no authentication layer required).',
    },
    challenges: [
      {
        title: 'Fast initial paint across mobile network constraints',
        problem: 'Corporate prospect visitors on slower mobile networks experienced delays on initial page rendering.',
        solution: 'Maximized Next.js Server Components to minimize client JavaScript bundle size and inline critical path styles.',
      },
      {
        title: 'Search engine discoverability for specialized technical services',
        problem: 'IT capabilities needed to be crawlable and indexed by search bots with rich schema data.',
        solution: 'Implemented structured Schema.org JSON-LD (Organization, WebSite) and dynamic sitemaps with zero manual maintenance.',
      },
    ],
    quality: {
      authRbac: 'Public marketing website; security headers enforced via Next.js HTTP configuration.',
      validation: 'Clean form validation on contact inquiries.',
      errorHandling: 'Custom 404 and error boundaries preventing blank screen states.',
      performance: 'Sub-second First Contentful Paint with optimized asset compression.',
    },
    outcome: [
      'Deployed corporate presence in production communicating enterprise engineering services.',
      'Established high-speed performance benchmark across desktop and mobile devices.',
    ],
    todoNotes: ['TODO(Bibek): Avoid claiming measured percentage ranking gains without verified Google Search Console data.'],
  },
};

export function getProject(slug: string): CaseStudy | undefined {
  return projects[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
