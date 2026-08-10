import {
    FaJava,
    FaGlobe,
    FaDatabase,
    FaRobot,
    FaCode,
    FaCreditCard,
    FaBug,
    FaClipboardCheck,
    FaListCheck,
    FaGear,
    FaCubes,
    FaCodeBranch
} from "react-icons/fa6";

import {
    HiCommandLine,
    HiDevicePhoneMobile,
    HiShieldCheck,
    HiServerStack,
    HiArchiveBox,
    HiUserGroup,
} from "react-icons/hi2";

import { BiLogoVisualStudio } from "react-icons/bi";

import {
    FaAws,
    FaMicrosoft,
} from "react-icons/fa";

import {
    SiDocker,
    SiJenkins,
    SiGit,
    SiSelenium,
    SiCucumber,
    SiMysql,
    SiPostgresql,
    SiKubernetes,
    SiSpringboot,
    SiGithub,
    SiIntellijidea,
    SiEclipseide,
    SiBitbucket,
    SiJira,
    SiTeamcity,
    SiApachemaven,
    SiRedhatopenshift,
    SiPython,
    SiTypescript,
    SiJavascript,
    SiPostman,
    SiSwagger,
    SiGradle,
} from "react-icons/si";

export const technologyIcons = {
    // ============================================================
    // Leadership
    // ============================================================
    "Team Leadership": FaClipboardCheck,
    "Vendor Management": FaGear,
    "Stakeholder Management": FaClipboardCheck,
    "Technical Interviews": HiUserGroup,
    Mentoring: FaRobot,
    "Code Reviews": FaCode,
    "Automation Strategy": FaRobot,
    "Agile Delivery": FaListCheck,

    // ============================================================
    // Capital Markets
    // ============================================================
    "FIX Protocol": FaCode,
    "Equities Trading": FaCreditCard,
    "Algorithmic Trading": FaRobot,
    "Smart Order Routing": FaGear,
    "Order Management": FaClipboardCheck,
    "Settlement & Clearing": FaDatabase,
    "MiFID II": FaClipboardCheck,
    "Mandatory Control Checks": FaBug,

    // ============================================================
    // AI Engineering
    // ============================================================
    ChatGPT: FaRobot,
    "Claude AI": FaRobot,
    "GitHub Copilot": SiGithub,
    "IntelliJ AI Assistant": SiIntellijidea,
    "Devin AI": FaRobot,
    "Friday AI": FaRobot,
    "Stylus AI": FaRobot,

    // ============================================================
    // Test Automation
    // ============================================================
    Selenium: SiSelenium,
    Cucumber: SiCucumber,
    "REST Assured": FaGlobe,
    JUnit: FaClipboardCheck,
    TestNG: FaClipboardCheck,
    Playwright: FaRobot,
    "HP Quality Center - UFT": FaGear,
    Appium: HiDevicePhoneMobile,

    // ============================================================
    // Programming
    // ============================================================
    Java: FaJava,
    Python: SiPython,
    "Shell Script": HiCommandLine,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    "Visual Basic": FaCode,
    SQL: FaDatabase,

    // ============================================================
    // Backend & Integration
    // ============================================================
    "Spring Boot": SiSpringboot,
    Microservices: FaCubes,
    "REST APIs": FaGlobe,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,

    // ============================================================
    // DevOps & Cloud
    // ============================================================
    Docker: SiDocker,
    OpenShift: SiRedhatopenshift,
    Jenkins: SiJenkins,
    TeamCity: SiTeamcity,
    Kubernetes: SiKubernetes,
    AWS: FaAws,
    Azure: FaMicrosoft,
    Git: SiGit,
    Bitbucket: SiBitbucket,
    "Enterprise CI/CD": FaCodeBranch,

    // ============================================================
    // Engineering Tools
    // ============================================================
    GitHub: SiGithub,
    Jira: SiJira,
    Confluence: FaClipboardCheck,
    Postman: SiPostman,
    Swagger: SiSwagger,
    "Solace Broker": HiServerStack,
    "Tibco EMS Broker": HiServerStack,
    "IntelliJ IDEA": SiIntellijidea,
    "Eclipse IDE": SiEclipseide,
    "VS Code": BiLogoVisualStudio,
    Maven: SiApachemaven,
    Gradle: SiGradle,
    SonarQube: HiShieldCheck,
    "Jfrog Artifactory": HiArchiveBox,

    // ============================================================
    // Legacy Technologies (For Experience Section)
    // ============================================================
    QA: FaClipboardCheck,
    "REST API": FaGlobe,
    "UFT (QTP)": FaGear,
    "Test Automation": FaRobot,
    "Regression Testing": FaBug,
    "Database Testing": FaDatabase,
    "Functional Testing": FaClipboardCheck,
    "Test Planning": FaListCheck,
    "Defect Management": FaBug,
    "Credit Cards": FaCreditCard,
    VBScript: FaCode,
    GMI: FaDatabase,
} as const;