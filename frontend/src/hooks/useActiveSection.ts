import { useEffect, useState } from "react";

const sectionIds = [
    "hero",
    "about",
    "experience",
    "skills",
    "contact",
];

const useActiveSection = () => {

    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {

        const handleScroll = () => {

            const scrollPosition = window.scrollY + 120;

            let currentSection = "hero";

            for (const id of sectionIds) {

                const section = document.getElementById(id);

                if (!section) continue;

                if (scrollPosition >= section.offsetTop) {
                    currentSection = id;
                }

            }

            setActiveSection(currentSection);

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return activeSection;
};

export default useActiveSection;