import {
    HiArrowDownTray,
    HiEnvelope,
    HiMapPin,
    HiPhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import type { ContactItem } from "../types/contact-item.types";

export const contactData: ContactItem[] = [
    {
        title: "Resume",
        value: "Download Resume",
        subtitle: "Latest Version (PDF)",
        href: "/moshin-kondkari-resume.pdf",
        icon: HiArrowDownTray,
        download: true,
    },
    {
        title: "Email",
        value: "kondkarimoshin@gmail.com",
        href: "mailto:kondkarimoshin@gmail.com",
        icon: HiEnvelope,

        copyable: true,
        copyValue: "kondkarimoshin@gmail.com",
    },
    {
        title: "Phone",
        value: "+91 90293 26353",
        href: "tel:+919029326353",
        icon: HiPhone,
        copyable: true,
        copyValue: "+919029326353",
    },
    {
        title: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/moshin-kondkari-79282258/",
        icon: FaLinkedin,
        external: true,
        copyable: true,
        copyValue: "https://www.linkedin.com/in/moshin-kondkari-79282258/",
    },
    {
        title: "GitHub",
        value: "Explore My Code",
        href: "https://github.com/kondkarimoshin",
        icon: FaGithub,
        external: true,
    },
    {
        title: "Location",
        value: "Pune, Maharashtra, India",
        icon: HiMapPin,
    },
];