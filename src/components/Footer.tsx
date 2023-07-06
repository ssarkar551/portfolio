"use client"
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "text-lg lg:text-xl",
        "flex flex-col gap-0",
        "text-center leading-none",
        "pt-6 pb-3 lg:pb-5 lg:pt-10"
      )}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <span className={clsx("text-xl lg:text-2xl")}>
          &copy;{` ${new Date().getFullYear()} `}
        </span>
        <Link
          className={clsx(
            "text-xl lg:text-2xl",
            "text-blue-700 hover:text-blue-500",
            "dark:text-sky-200 dark:hover:text-sky-300"
          )}
          href={"https://github.com/ssarkar551"}
          target={"_blank"}
        >
          Subham Sarkar
        </Link>
        <div>
          {"Open-Source — "}
          <Link
            className={clsx(
              "text-indigo-700 hover:text-purple-700",
              "dark:text-purple-300 dark:hover:text-purple-400"
            )}
            href={"https://github.com/ssarkar551/portfolio"}
            target={"_blank"}
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};
