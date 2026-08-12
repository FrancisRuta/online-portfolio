const BASE_URL = import.meta.env.BASE_URL;

export const profile = {
  name: "Francis Fitzgerald D. Ruta",
  role: "Full Stack Developer",
  tagline:
    "Full-Stack Developer | Building Scalable Python/React Systems & Automated Testing",
  email: "Francis.Ruta87@gmail.com",
  resumeUrl: `${BASE_URL}FrancisRuta-CVResume-(2026).pdf`,
  photo: `${BASE_URL}userProfile.jpg`,
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/francis-fitzgerald-ruta-7235b11b2/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/FrancisRuta",
      icon: "github",
    },
  ],
};

export const about = {
  paragraphs: [
    "Full-Stack Python Developer with 5+ years of experience designing scalable web applications, and building RESTful APIs. Skilled across Python (Flask, Django), JavaScript/React, and database management. Proven track record of optimizing backend services, creating new features, leading test automation initiatives, and communicating effectively with cross-functional remote teams.",
    "Over the past few years, my core focus has centered on full-stack development within the Python ecosystem—building robust RESTful APIs with frameworks like Flask and Django on the backend, and pairing them with modern, intuitive React interfaces on the frontend. I'm particularly drawn to backend architecture, database design, and deep system integrations, whether that means engineering custom role-based access controls, setting up asynchronous webhook pipelines, or connecting third-party platforms through the use of APIs. Beyond writing clean code, I genuinely enjoy solving messy real-world operational bottlenecks, refining testing workflows with tools like Pytest, and collaborating across remote, async-first teams to build software that actually makes people's day-to-day work easier.",
  ],
  highlights: [
    "Full-Stack Development",
    "RESTful API Design",
    "System Architecture",
    "Problem Solving",
    "Agile Mindset",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Javascript/TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Python",
      "Node.js/Express",
      "SQL",
      "Flask",
      "Django",
      "FastAPI",
      "PHP",
    ],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Docker",
      "AWS",
      "AI Tools",
      "Jira/Trello",
      "Slack",
      "Ubuntu",
    ],
  },
];

export const companies = [
  {
    title: "HX Works",
    description:
      "Many growing businesses—especially in specialized sectors like legal tech—struggle with disconnected software, manual administrative bottlenecks, and rigid off-the-shelf tools that don't fit their operational workflows. HX Works bridges this gap by building custom web applications, seamless third-party integrations (like QuickBooks and Filevine), and tailormade digital toolboxes that unify data and streamline day-to-day operations.",
    name: "HX Works",
    tech: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Gitlab",
      "Pytest",
      "Quickbooks API",
      "Filevine API",
      "Trello",
      "AI Coding Assistance",
    ],
    liveUrl: "https://hxworks.com/projects/legal-tech/",
    // repoUrl: "",
    category: "automation",
  },
  {
    title: "Evren",
    description:
      "With the rise of remote work and third-party contractors, organizations face massive data security risks, compliance challenges, and potential breaches on unmanaged employee laptops. Evren solves this by deploying EvrenOS—a secure, lightweight desktop operating system—paired with a centralized web dashboard, allowing IT administrators to enforce strict device policies, prevent data loss, and maintain full compliance without hindering employee productivity.",
    tech: [
      "Python",
      "Flask",
      "Github",
      "Github Actions",
      "ReactJS",
      "AWS",
      "Swagger",
      "Docker",
      "Jira",
      "PostgreSQL",
    ],
    liveUrl: "https://www.evren.co/",
    // repoUrl: "",
    category: "web",
  },
  {
    title: "IPEdge LLC",
    description:
      "Navigating patent strategy and enforcing IP rights involves tracking massive amounts of complex legal data, cross-referencing document pipelines, and managing high-stakes litigation workflows. IP Edge solves this by utilizing custom, specialized web applications that centralize portfolio tracking, streamline case management, and ensure operational efficiency for patent monetization.",
    tech: [
      "Python",
      "Flask",
      "Github",
      "Github Project Board",
      "ReactJS",
      "Javascript ES6+",
      "Bootstrap",
    ],
    liveUrl: "https://www.linkedin.com/company/ip-edge-llc/",
    // repoUrl: "",
    category: "web",
  },
];

export const experience = [
  {
    type: "work",
    title: "Back-End Developer",
    org: "HX Works",
    period: "Mar 2025 - Jun 2026",
    description:
      "Maintained and improved backend logic and RESTful API integrations (Filevine, QuickBooks) across three SaaS applications — Finance Connect, Optimization Toolbox, and Smart Mailroom — for Vineskills, a legal tech consulting firm. Primary developer for error monitoring, debugging, and incident response. Introduced automated unit and integration testing with Pytest, and leverage AI-assisted coding tools (Claude, Gemini, ChatGPT) to accelerate delivery within an async, cross-functional remote workflow.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Evren",
    period: "Feb 2023 - Nov 2024",
    description:
      "Maintained and improved EvrenOS API, an enterprise endpoint security admin dashboard, for a Singapore-based company. Migrated legacy Flask templates to React.js, modernizing the platform's UI and performance. Refactored core Python services from synchronous to asynchronous execution. Built new REST API endpoints secured with AWS Secrets Manager, monitored application health via Logz.io to drive root-cause analysis, and documented system architecture using Swagger/OpenAPI to align cross-team development.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "IPEdge LLC",
    period: "Sept 2022 - Dec 2022",
    description:
      "Our team took over and enhanced an internal intellectual property management application for a US-based patent law firm, as part of a remote contract team. Developed full-stack features using Python, Flask, React.js, and Bootstrap. Reverse-engineered a legacy codebase with limited documentation and produced updated technical docs. Drove end-to-end testing and bug tracking.",
  },
  {
    type: "work",
    title: "Back-End & Front-End Developer",
    org: "Ingenuity",
    period: "Mar 2019 - Sept 2022",
    description:
      "Delivered frontend and backend work across multiple client projects as a software developer. Built Node.js/Express.js APIs and ERDs for an Australian migration platform (Navibord). Engineered RBAC and responsive UIs in Django for an internal auditing system (NCCC). Led a Python 2 to 3 migration for a support ticketing system (Serverplus). Grew from support developer to Full-Stack Lead on a Canadian business directory platform (Connect Trades). Contributed in building REST APIs for a COVID-19 contact tracing platform (Safe Davao QR). Architected database schemas and APIs for a mobile recipe app (Food Medley).",
  },
  {
    type: "education",
    title: "B.S. in Information Technology",
    org: "Ateneo de Davao University",
    period: "2014 – 2018",
    description:
      "Brief description of your degree and any notable focus areas.",
  },
];

export const contact = {
  heading: "Let's Work Together",
  description:
    "Looking for a competent developer or do you have a project in mind? Drop me a message and I'll get back to you.",
};
