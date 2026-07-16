import {
    HiArrowDownTray,
    HiEnvelope,
    HiMapPin,
    HiPhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import type { ContactItem } from "../types/ContactItem";

export const contactData: ContactItem[] = [
    {
        title: "Email",
        value: "kondkarimoshin@gmail.com",
        href: "mailto:kondkarimoshin@gmail.com",
        icon: HiEnvelope,
    },
    {
        title: "Phone",
        value: "+91 90293 26353",
        href: "tel:+919029326353",
        icon: HiPhone,
    },
    {
        title: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/moshin-kondkari-79282258/",
        icon: FaLinkedin,
        external: true,
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
    {
        title: "Resume",
        value: "Download Resume",
        href: "/Moshin_Kondkari_Resume.pdf",
        icon: HiArrowDownTray,
        download: true,
    },
];