import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import clsx from "clsx";

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (

        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className={clsx(
                "fixed bottom-3 right-3 z-50 rounded-full bg-cyan-500 p-1 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-500/30 sm:bottom-6 sm:right-6 sm:p-3",
                isVisible
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
            )}
        >
            <HiArrowUp aria-hidden="true" className="h-3 w-3 sm:h-6 sm:w-6" />
        </button>

    );
};

export default BackToTop;