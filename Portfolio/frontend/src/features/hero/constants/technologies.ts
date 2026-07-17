import {
    FaJava,
    FaDocker,
    FaGitAlt,
    FaJenkins,
    FaJira,
    FaRobot,
    FaDatabase,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiKubernetes,
    SiRedhatopenshift,
    SiSelenium,
    SiCucumber,
    SiPostman,
    SiTestrail,
    SiIntellijidea,
    SiBitbucket,
    SiGithubcopilot,
    SiEclipseide,
    SiMysql,
    SiPostgresql,
} from "react-icons/si";

import { MdPlayCircle } from "react-icons/md";

import type { Technology } from "../types/technology";

export const technologies: Technology[] = [
    { icon: FaJava, label: "Java" },
    { icon: FaRobot, label: "Devin" },
    { icon: SiGithubcopilot, label: "Copilot" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiKubernetes, label: "Kubernetes" },
    { icon: FaJenkins, label: "Jenkins" },
    { icon: SiRedhatopenshift, label: "OpenShift" },
    { icon: FaGitAlt, label: "Git" },
    { icon: SiBitbucket, label: "Bitbucket" },
    { icon: FaJira, label: "Jira" },
    { icon: SiSelenium, label: "Selenium" },
    { icon: MdPlayCircle, label: "Playwright" },
    { icon: SiPostman, label: "REST API" },
    { icon: SiCucumber, label: "Cucumber" },
    { icon: SiTestrail, label: "TestNG" },
    { icon: SiIntellijidea, label: "IntelliJ IDEA" },
    { icon: SiEclipseide, label: "Eclipse IDE" },
    { icon: FaDatabase, label: "SQL" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "PostgreSQL" },
];