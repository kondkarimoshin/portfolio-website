import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      return;
    }

    requestAnimationFrame(() => {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    });
  }, [location.pathname, location.hash]);
};

export default useHashScroll;