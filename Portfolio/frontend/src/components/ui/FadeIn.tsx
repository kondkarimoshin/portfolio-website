import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

const FadeIn = ({
    children,
    delay = 0,
}: FadeInProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 16,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.45,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;