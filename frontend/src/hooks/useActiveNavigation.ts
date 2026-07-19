import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { NavigationItem } from "../constants/navigation.config";

const sectionIds = [
  "hero",
  "about",
  "experience",
  "skills",
  "contact",
];

const useActiveNavigation = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

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
  }, [location.pathname]);

  const isActive = (item: NavigationItem) => {
    if (item.type === "page") {
      return location.pathname === item.href;
    }

    if (location.pathname !== "/") {
      return false;
    }

    const section = item.href.replace("/#", "");

    return activeSection === section;
  };

  return {
    isActive,
  };
};

export default useActiveNavigation;