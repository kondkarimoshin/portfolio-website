import type { Experience } from "../types/experience";

export const currentExperience: Experience = {
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
        "Leading automation initiatives for enterprise-grade Capital Markets and Equities Trading platforms, designing scalable automation frameworks, backend testing solutions, and cloud-native test infrastructure supporting global business operations across APAC and EMEA regions.",

    responsibilities: [
        "Design and maintain enterprise automation frameworks using Java, Selenium and Cucumber.",
        "Develop backend automation solutions for FIX Protocol, Smart Order Routing and Order Management workflows.",
        "Build cloud-native automation solutions using Docker, OpenShift and CI/CD pipelines.",
        "Lead end-to-end automation strategy for mission-critical trading applications across APAC and EMEA regions.",
        "Collaborate with global development, QA, business analysts and product stakeholders to deliver high-quality releases.",
        "Mentor automation engineers through code reviews, technical guidance and best engineering practices.",
        "Drive continuous improvement by identifying automation opportunities and reducing manual testing efforts.",
        "Design scalable, reusable and maintainable automation frameworks following enterprise engineering standards.",
        "Participate in production issue analysis, root cause investigations and release validation activities.",
        "Contribute to technical design discussions, sprint planning and quality strategy across multiple agile teams."
    ],

    businessImpacts: [
        {
            title: "Regression Optimization",
            description:
                "Reduced regression execution time from nearly 2 weeks to just 45 minutes by containerizing the execution environment using Docker and OpenShift."
        },
        {
            title: "Enterprise Automation Framework",
            description:
                "Designed scalable and reusable automation frameworks supporting UI, backend, API and integration testing across multiple enterprise applications."
        },
        {
            title: "Trading Platform Automation",
            description:
                "Automated FIX Protocol, Smart Order Routing and Order Management workflows, improving reliability and reducing manual validation effort."
        },
        {
            title: "Technical Leadership",
            description:
                "Led automation initiatives, mentored engineers, conducted code reviews and collaborated with globally distributed teams across APAC and EMEA."
        }
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
            category: "Enterprise Resilience Testing Framework",
            overview:
                "Designed and implemented an enterprise chaos engineering framework to validate resilience of distributed microservice-based trading applications.",
            keyContributions: [
                "Designed reusable chaos engineering rules for enterprise applications.",
                "Validated system resiliency under controlled failure scenarios.",
                "Improved confidence before production deployments.",
                "Reduced manual effort required for resilience validation."
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
        company: "Sungard (Now FIS)",
        role: "Senior QA Engineer",
        duration: "Jul 2013 – Nov 2016",
        location: "Pune, Maharashtra • India",
        summary:
            "Designed automation frameworks for enterprise financial applications, implemented keyword-driven and data-driven automation, and improved regression testing efficiency.",
        technologies: [
            "Java",
            "QTP",
            "Automation",
            "SQL",
            "Regression Testing",
            "GMI",
            "Visual Basic",
        ],
    },
    {
        company: "Barclays Technology Centre India",
        role: "Test Analyst",
        duration: "Jan 2012 – Jul 2013",
        location: "Pune, Maharashtra • India",
        summary:
            "Worked on Credit Card applications, Functional Testing, Database Testing, and Collections systems while supporting enterprise banking applications.",
        technologies: [
            "Functional Testing",
            "DB Testing",
            "Credit Cards",
            "SQL",
            "Quality Assurance",
        ],
    },
    {
        company: "TCS e-Serve",
        role: "Junior Software Tester",
        duration: "May 2010 – Jan 2012",
        location: "Mumbai, Maharashtra • India",
        summary:
            "Performed regression testing, defect management, test planning, and quality assurance for Credit Card applications while supporting release cycles.",
        technologies: [
            "Regression Testing",
            "QA",
            "Defect Management",
            "Test Planning",
            "Credit Cards",
        ],
    },
];