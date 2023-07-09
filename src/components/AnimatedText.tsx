import { MotionValue, motion } from "framer-motion";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

export const AnimatedText = ({ text } : { text: string}) => {
    const words = text.split(" ");

    // Variants for Container of words.
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.05 * i },
        }),
    };

    // Variants for each word.

    const child = {
        visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            damping: 12,
            stiffness: 100,
        },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "tween",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem"}}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word: string, index: Key | null | undefined) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px"}}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}

        </motion.div>
    )

};
