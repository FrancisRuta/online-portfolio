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
    name: "HX Works",
    summary:
      "Custom web applications and third-party integrations (QuickBooks, Filevine) that unify data for legal-tech firms.",
    role: "Back-End Developer",
    period: "Mar 2025 - Jun 2026",
    outcomes: [
      "Maintained and improved backend logic and RESTful API integrations (Filevine, QuickBooks) across three SaaS products — Finance Connect, Optimization Toolbox, and Smart Mailroom.",
      "Owned error monitoring, debugging, and incident response, and introduced automated unit and integration testing with Pytest.",
      "Leveraged AI-assisted tooling (Claude, Gemini, ChatGPT) to accelerate delivery within an async, cross-functional remote workflow.",
    ],
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
    companyWebsite: "https://hxworks.com/projects/legal-tech/",
  },
  {
    name: "Evren",
    summary:
      "EvrenOS — a secure, lightweight desktop OS paired with a centralized web dashboard for IT administrators.",
    role: "Full-Stack Developer",
    period: "Feb 2023 - Nov 2024",
    outcomes: [
      "Maintained and improved the EvrenOS API — an enterprise endpoint-security admin dashboard for a Singapore-based company.",
      "Migrated legacy Flask templates to React.js and refactored core Python services from synchronous to asynchronous execution.",
      "Built REST endpoints secured with AWS Secrets Manager, monitored application health via Logz.io, and documented architecture with Swagger/OpenAPI.",
    ],
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
    companyWebsite: "https://www.evren.co/",
  },
  {
    name: "IPEdge LLC",
    summary:
      "Custom web applications that centralize patent portfolio tracking and streamline case management.",
    role: "Full-Stack Developer",
    period: "Sept 2022 - Dec 2022",
    outcomes: [
      "Enhanced an internal IP-management application for a US-based patent law firm as part of a remote contract team.",
      "Developed full-stack features with Python, Flask, React.js, and Bootstrap, and reverse-engineered a legacy codebase with limited documentation.",
      "Produced updated technical documentation and drove end-to-end testing and bug tracking.",
    ],
    tech: [
      "Python",
      "Flask",
      "Github",
      "Github Project Board",
      "ReactJS",
      "Javascript ES6+",
      "Bootstrap",
    ],
    companyWebsite: "https://www.linkedin.com/company/ip-edge-llc/",
  },
  {
    name: "Ingenuity",
    summary:
      "End-to-end software delivery — UI/UX design, full-stack development, and cloud infrastructure.",
    role: "Back-End & Front-End Developer",
    period: "Mar 2019 - Sept 2022",
    outcomes: [
      "Worked as a full-stack developer across multiple client projects for over three years, growing from a junior developer to Full-Stack.",
      "Focused on Python, deepening my knowledge of Django and Flask for backend development while building modern, responsive interfaces with ReactJS, JavaScript, and Bootstrap.",
      "Expanded into deployment tooling and workflows — including Docker — to containerize, ship, and maintain production applications.",
    ],
    tech: [
      "Python",
      "Django",
      "Flask",
      "ReactJS",
      "Javascript",
      "Bootstrap",
      "Docker",
      "Bitbucket",
      "Jira",
      "Deployment",
    ],
    companyWebsite: "https://www.ingenuity.ph/",
  },
];

export const experience = [
  {
    type: "work",
    title: "Back-End Developer",
    org: "HX Works",
    period: "Mar 2025 - Jun 2026",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Evren",
    period: "Feb 2023 - Nov 2024",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "IPEdge LLC",
    period: "Sept 2022 - Dec 2022",
  },
  {
    type: "work",
    title: "Back-End & Front-End Developer",
    org: "Ingenuity",
    period: "Mar 2019 - Sept 2022",
  },
  {
    type: "education",
    title: "B.S. in Information Technology",
    org: "Ateneo de Davao University",
    period: "2014 - 2018",
  },
];

export const contact = {
  heading: "Let's Work Together",
  description:
    "Looking for a competent developer or do you have a project in mind? Drop me a message and I'll get back to you.",
};
