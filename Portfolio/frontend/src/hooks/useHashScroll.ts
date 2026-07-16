import { useEffect } from "react";

const useHashScroll = () => {
    useEffect(() => {
    if (!window.location.hash) return;

    requestAnimationFrame(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "auto",
                block: "start",
            });
        }
    });
}, []);
};

export default useHashScroll;