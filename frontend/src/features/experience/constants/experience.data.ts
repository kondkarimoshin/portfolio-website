import type { Experience } from "../types/experience.types";

export const EXPERIENCE_DATA: Experience = {
    company: "Citibank",
    role: "Senior Automation Engineer",
    duration: "Dec 2016 – Present",
    location: "Pune, Maharashtra • India",

    domain: [
        "Capital Markets",
        "Equities Trading",
        "Algorithmic Trading",
        "Smart Order Routing",
        "Order Management Systems",
        "FIX Protocol",
        "Microservices",
        "Enterprise Automation",
        "Banking & Financial Services"
    ],

    summary:
        "Leading enterprise automation strategy for mission-critical Capital Markets and Equities Trading platforms supporting global business operations across APAC and EMEA. Responsible for designing scalable automation architectures, backend validation frameworks, cloud-native testing infrastructure, and engineering best practices that enable faster, more reliable software delivery across multiple high-impact trading applications.",
    responsibilities: [
        "Architect and maintain scalable enterprise automation frameworks using Java, Selenium, Cucumber and backend automation technologies.",
        "Design automation solutions for FIX Protocol, Smart Order Routing and Order Management workflows supporting global trading platforms.",
        "Build cloud-native automation infrastructure using Docker, OpenShift and modern CI/CD pipelines.",
        "Drive automation strategy across mission-critical Capital Markets applications operating in APAC and EMEA regions.",
        "Partner with developers, architects, business analysts and product stakeholders to ensure high-quality software delivery.",
        "Mentor automation engineers through technical guidance, code reviews and engineering best practices.",
        "Continuously improve automation coverage, execution efficiency and release confidence by identifying optimization opportunities.",
        "Design reusable, maintainable and enterprise-grade automation frameworks aligned with long-term engineering goals.",
        "Support production issue investigations through root cause analysis and release validation.",
        "Contribute to technical architecture discussions, sprint planning, engineering standards and quality strategy."
    ],

    businessImpacts: [
        {
            title: "Automation Architecture",
            description:
                "Designed scalable enterprise automation frameworks supporting UI, API, backend and integration testing across multiple business-critical applications."
        },
        {
            title: "Trading Platform Quality",
            description:
                "Automated FIX messaging, Smart Order Routing and Order Management workflows, significantly improving release confidence while reducing manual validation effort."
        },
        {
            title: "Technical Leadership",
            description:
                "Led automation initiatives, mentored engineering teams, established coding standards and collaborated with globally distributed teams across APAC and EMEA."
        },
        {
            title: "Patent Approved Innovation",
            description:
                "Contributed to the design and development of a US patent-approved automation solution focused on improving enterprise resilience and engineering efficiency."
        },
    ],

    projects: [
        {
            name: "CitiSmart",
            category: "Algorithmic Trading Platform",
            overview:
                "Enterprise algorithmic trading platform supporting institutional equities trading across global markets.",
            keyContributions: [
                "Designed enterprise automation frameworks covering UI, API, backend and regression testing.",
                "Containerized automation execution using Docker and OpenShift.",
                "Reduced regression execution time from nearly 2 weeks to just 45 minutes.",
                "Implemented scalable automation architecture supporting global trading applications."
            ]
        },
        {
            name: "XSOR",
            category: "Smart Order Routing Platform",
            overview:
                "Enterprise Smart Order Routing platform responsible for routing equity orders across multiple exchanges and liquidity venues.",
            keyContributions: [
                "Automated FIX messaging, order routing validation and execution workflows.",
                "Developed dummy market data generators to simulate real-world trading conditions.",
                "Built backend automation utilities for distributed microservices.",
                "Improved release confidence through comprehensive integration and regression testing."
            ]
        },
        {
            name: "Chaos Engineering Framework",
            category: "Enterprise Resilience Platform",
            overview:
                "Designed and developed an enterprise chaos engineering platform to validate the resilience, stability and fault tolerance of distributed microservice-based trading applications.",

            keyContributions: [
                "Designed reusable chaos engineering modules for enterprise applications.",
                "Simulated controlled failure scenarios to validate system resilience.",
                "Improved deployment confidence before production releases.",
                "Reduced manual effort required for resilience and recovery validation."
            ]
        },
        {
            name: "Enterprise Automation Framework",
            category: "Automation Platform",
            overview:
                "Designed a reusable enterprise automation platform supporting UI, API, backend and integration testing across multiple Capital Markets applications.",
            keyContributions: [
                "Built modular and reusable automation libraries.",
                "Integrated execution with CI/CD pipelines, Docker and OpenShift.",
                "Standardized automation practices across multiple enterprise applications.",
                "Improved maintainability and accelerated onboarding of new automation engineers."
            ]
        }
    ],

    technologies: [
        "Java",
        "Selenium",
        "Cucumber",
        "REST Assured",
        "FIX Protocol",
        "QuickFIX/J",
        "Docker",
        "OpenShift",
        "Jenkins",
        "TeamCity",
        "Git",
        "Bitbucket",
        "JIRA",
        "Confluence",
        "SQL",
        "Oracle",
        "Microservices",
        "Linux",
        "Shell Scripting",
        "Maven"
    ],
};

export const previousExperience = [
    {
        stage: "Automation Engineering",

        company: "SunGard (Now FIS)",

        role: "Senior QA Engineer",

        duration: "Jul 2013 – Nov 2016",

        location: "Pune, Maharashtra • India",

        highlights: [
            "Designed and maintained enterprise automation frameworks for mission-critical financial applications.",
            "Strengthened automation expertise by improving regression efficiency and expanding automation coverage.",
        ],
    },

    {
        stage: "Enterprise Banking",

        company: "Barclays Technology Centre India",

        role: "Test Analyst",

        duration: "Jan 2012 – Jul 2013",

        location: "Pune, Maharashtra • India",

        highlights: [
            "Delivered functional, database and integration testing for Credit Card and Collections applications.",
            "Expanded expertise in enterprise banking systems while collaborating with cross-functional teams.",
        ],
    },

    {
        stage: "Software Testing Foundation",

        company: "TCS e-Serve",

        role: "Junior Software Tester",

        duration: "May 2010 – Jan 2012",

        location: "Mumbai, Maharashtra • India",

        highlights: [
            "Started my professional journey supporting enterprise banking applications through software testing.",
            "Built strong fundamentals in quality assurance, defect management and release validation.",
        ],
    },
];