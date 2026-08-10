import {
    FaHandshake,
    FaBookOpen,
    FaCompass,
    FaPeopleArrows,
    FaShieldAlt,
    FaBolt,
} from "react-icons/fa";

import type { IconType } from "react-icons";

export type AboutHighlight = {
    title: string;
    description: string;
    icon: IconType;
};

export const ABOUT_HIGHLIGHT: AboutHighlight[] = [
    {
        title: "Quality First",
        description:
            "Deliver solutions that are reliable, maintainable, and built for long-term success.",
        icon: FaShieldAlt,
    },
    {
        title: "Ownership",
        description:
            "Take responsibility from design to delivery while always focusing on business outcomes.",
        icon: FaCompass,
    },
    {
        title: "Continuous Learning",
        description:
            "Stay curious by embracing new technologies, AI, cloud platforms, and engineering practices.",
        icon: FaBookOpen,
    },
    {
        title: "Collaboration",
        description:
            "Great software is built through teamwork, knowledge sharing, and mutual respect.",
        icon: FaPeopleArrows,
    },
    {
        title: "Innovation",
        description:
            "Challenge traditional approaches and continuously improve engineering processes.",
        icon: FaBolt,
    },
    {
        title: "Integrity",
        description:
            "Build trust through transparency, accountability, and delivering on commitments.",
        icon: FaHandshake,
    },
];