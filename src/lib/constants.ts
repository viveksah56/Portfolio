export const siteConfig = {
    name: 'Bibek Sah',
    role: 'Full Stack Developer',
    location: 'Kathmandu, Nepal',
    email: 'sahbibek55@gmail.com',
    headline: ['Frontend experiences.', 'Backend systems.'],
    highlight: 'Built for real-world impact.',
    description:
        'I build scalable, production-ready web applications with React, Next.js, TypeScript, Java, Spring Boot, and Node.js. I focus on clean architecture, performance, accessible interfaces, and reliable APIs that turn complex workflows into practical products.',
} as const;

export const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
] as const;

export const stats = [
    { value: 13, suffix: '+', pad: 0, label: 'Production web applications delivered' },
    { value: 3, suffix: '', pad: 2, label: 'Years of professional development experience' },
    { value: 6, suffix: '+', pad: 0, label: 'Client platforms with admin dashboards' },
    { value: 15, suffix: 'K+', pad: 0, label: 'Active users across delivered platforms' },
] as const;

export const statsSummary =
    'Across 13+ production applications and three years of professional development, I have shipped software that real teams depend on every day. I focus on clean architecture, reliable APIs, and accessible interfaces, and I keep refining how I design, test, and maintain systems at scale.';

export const experienceData = {
    section: '02',
    title: 'EXPERIENCE',
    subtitle: 'Professional experience',
    headline: 'Build impactful solutions across different industries.',
    experience: [
        {
            startDate: 'Jan 2023',
            endDate: 'Jan 2026',
            position: 'Full Stack Developer',
            company: 'Dwork IT Solutions',
            description:
                'Delivered 13+ production web applications across healthcare, education, e-commerce, and corporate sectors. Developed responsive React.js and Next.js frontends, RESTful APIs with Java/Spring Boot and Node.js/Express.js, and database integrations with MongoDB, MySQL, and PostgreSQL. Implemented secure authentication, role-based dashboards, reusable UI components, and performance optimizations.',
            technologies: [
                'React.js',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Java',
                'Spring Boot',
                'MongoDB',
                'PostgreSQL',
            ],
        },
    ],
} as const;

export const projectsData = [
    {
        name: 'ExamNepal',
        description:
            'Online examination and learning platform with mock tests, assessments, analytics, and user management for students, institutes, and corporate organizations, with an admin dashboard for exams and question banks.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Java', 'Spring Boot', 'PostgreSQL'],
        url: 'https://www.examsnepal.com',
    },
    {
        name: 'Medishop',
        description:
            'Online medical e-commerce platform for browsing and purchasing healthcare products, with an admin system for inventory, orders, and customer management.',
        technologies: ['Next.js', 'React.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Chart.js', 'Java', 'Spring Boot', 'MySQL', 'Cloudinary'],
        url: 'https://nepal-medishop-frontend.vercel.app',
    },
    {
        name: 'BabyCare Marketplace',
        description:
            'Multi-vendor marketplace for baby and parenting products, including an admin dashboard for managing products, orders, users, and vendors.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Shadcn/UI', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
        url: 'https://www.thebabycareapp.com',
    },
    {
        name: 'LooksCart',
        description:
            'Eyewear e-commerce platform offering prescription glasses, sunglasses, and fashion eyewear, with integrated checkout and payment processing.',
        technologies: ['React.js', 'Context API', 'Styled Components', 'Shadcn/UI', 'Payment Integration'],
        url: 'https://www.lookscart.com',
    },
    {
        name: 'Dwork-it',
        description:
            'Corporate website showcasing IT services and software solutions, with server-side rendering and SEO optimization.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO', 'SSR'],
        url: 'https://www.dworkit.com',
    },
    {
        name: 'Hitayu Clinic',
        description:
            'Healthcare clinic website featuring service information, appointment details, and SEO-optimized patient guidance.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO'],
        url: 'https://www.hitayuclinic.com',
    },
    {
        name: 'ApplyMyFile',
        description:
            'Consultancy service platform providing visa, documentation, and application-related services through guided client workflows.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Tailwind CSS', 'Shadcn/UI'],
        url: 'https://www.applymyfile.com',
    },
    {
        name: 'ExamNepal Admin Panel',
        description: 'Administration dashboard for managing users, exams, question banks, and roles.',
        technologies: ['React.js', 'Next.js', 'TypeScript', 'Context API', 'Shadcn/UI', 'Node.js', 'Express.js', 'MongoDB'],
        url: 'https://admin-examsnepal.vercel.app',
    },
    {
        name: 'Medishop Admin Panel',
        description: 'Admin dashboard for managing products, inventory, orders, and customers.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Shadcn/UI', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
        name: 'BabyCare Admin Panel',
        description: 'Marketplace administration dashboard for managing products, orders, users, and vendors.',
        technologies: ['React.js', 'Next.js', 'Context API', 'Shadcn/UI', 'Data Visualization'],
        url: 'https://babycare-admin-marketplace.vercel.app',
    },
    {
        name: 'KSM Nepal',
        description: 'Corporate website and digital presence.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO', 'Responsive Design'],
        url: 'https://www.ksmnepal.com',
    },
    {
        name: 'D.workLabs',
        description: 'Corporate website showcasing digital and technology services.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO', 'Responsive Design'],
        url: 'https://www.dworklabs.com',
    },
    {
        name: 'Black and White',
        description: 'Corporate and brand website.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn/UI', 'SEO', 'Responsive Design'],
        url: 'https://blackandwhite-frontend.vercel.app',
    },
] as const;

export const selectedProjectsData = {
    section: '03',
    title: 'SELECTED PROJECTS',
    headline: ['Selected work.', 'From requirements to implementation.'],
    intro:
        'Explore the products I’ve worked on, the technologies behind them, and the solutions delivered across education, healthcare, and e-commerce.',
    projects: [
        {
            index: '01',
            category: 'Education platform',
            name: 'ExamNepal',
            monogram: 'EN',
            tagline: 'Online examinations. Learning tools. Assessment insights.',
            description:
                'An online examination and learning platform designed to support mock tests, assessments, analytics, user management, and administrative workflows.',
            role: 'Frontend development and application implementation',
            scope: ['React.js', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
            focusAreas: ['Online assessments', 'User management', 'Admin dashboard', 'Analytics'],
            url: 'https://www.examsnepal.com',
            urlLabel: 'examsnepal.com',
            visualPosition: 'left',
            imageSrc: undefined,
            imageAlt: '',
        },
    ],
} as const;

export const contactData = {
    section: '05',
    title: 'CONTACT',
    headline: ['Let’s build something', 'reliable together.'],
    intro:
        'Whether you need a production-ready web application, a stronger API layer, or a developer who cares about the details, I would like to hear about it.',
    emailSubject: 'Project inquiry',
    primaryLabel: 'Send an email',
    copyLabel: 'Copy email',
    copiedLabel: 'Copied',
    copyrightYear: 2026,
    details: [
        { label: 'Email', value: siteConfig.email, isEmail: true },
        { label: 'Location', value: siteConfig.location, isEmail: false },
        { label: 'Availability', value: 'Open to full-time roles and freelance projects', isEmail: false },
        { label: 'Response time', value: 'Within 24 hours', isEmail: false },
    ],
    socials: [
        { label: 'GitHub', href: 'https://github.com/your-username' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
    ],
} as const;