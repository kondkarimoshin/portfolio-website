import {
    FaRocket,
    FaChartLine,
    FaSitemap,
    FaUsers,
    FaLightbulb,
    FaRobot,
} from "react-icons/fa";

import type { IconType } from "react-icons";

export type AboutHighlight = {
    title: string;
    description: string;
    icon: IconType;
};

export const aboutHighlights: AboutHighlight[] = [
    {
        title: "16+ Years Experience",
        description:
            "Delivering enterprise automation solutions for global banking and financial platforms.",
        icon: FaRocket,
    },
    {
        title: "Capital Markets",
        description:
            "Deep expertise in Equities Trading, FIX Protocol, Smart Order Routing and OMS.",
        icon: FaChartLine,
    },
    {
        title: "Automation Architecture",
        description:
            "Designing scalable, reusable and maintainable automation frameworks.",
        icon: FaSitemap,
    },
    {
        title: "Technical Leadership",
        description:
            "Mentoring engineers, code reviews, engineering standards and automation strategy.",
        icon: FaUsers,
    },
    {
        title: "Innovation",
        description:
            "Contributed to automation for patent-approved engineering solutions.",
        icon: FaLightbulb,
    },
    {
        title: "AI Assisted Engineering",
        description:
            "Leveraging GitHub Copilot, Devin AI and modern AI workflows.",
        icon: FaRobot,
    },
];