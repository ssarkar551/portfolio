"use client";

import AvatarDemo from "@/components/Avatar";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@/components/Icons";

export default function Home() {
  const keywordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col px-4 py-10">
            <div className={clsx("flex flex-col items-center")}>
              <h1 className="text-4xl font-bold mb-4 font-mono">
                <AnimatedText text="Welcome  To  My  Portfolio" />
              </h1>
            </div>

            <div
              className={clsx(
                "container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-stretch columns-2 gap-8 justify-start"
              )}
            >
              <div className={clsx("flex px-15 ")}>
                <AvatarDemo />
              </div>
              <p className={clsx("text-lg mb-8 font-mono")}>
                Hi there! I am Subham, a frontend developer passionate about
                crafting captivating web experiences. With expertise in{" "}
                <motion.span
                  className="text-blue-500 font-semibold dark:text-blue-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  HTML
                </motion.span>
                {", "}
                <motion.span
                  className="text-blue-500 font-semibold dark:text-blue-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  CSS
                </motion.span>
                {", and "}
                <motion.span
                  className="text-blue-500 font-semibold dark:text-blue-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  JavaScript
                </motion.span>
                {", I transform designs into "}
                <motion.span
                  className="text-green-500 font-semibold dark:text-green-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  pixel-perfect
                </motion.span>
                {
                  " interfaces that wow users. Continuously exploring new technologies, I create "
                }
                <motion.span
                  className="text-yellow-500 font-semibold dark:text-yellow-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  sleek
                </motion.span>
                {" and "}
                <motion.span
                  className="text-yellow-500 font-semibold dark:text-yellow-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  responsive
                </motion.span>
                {
                  " websites that leave a lasting impression. Let's collaborate and bring your vision to life with "
                }
                <motion.span
                  className="text-purple-500 font-semibold dark:text-purple-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  seamless
                </motion.span>
                {" interactions and "}
                <motion.span
                  className="text-purple-500 font-semibold dark:text-purple-400"
                  initial="initial"
                  animate="animate"
                  variants={keywordVariants}
                >
                  stunning
                </motion.span>
                {" visuals!"}
              </p>
            </div>

            <div className={clsx("flex flex-row grow py-20")}>
              <div className="text-lg mb-8 font-mono">
                Connect with me on{" "}
                <span className="font-semibold text-cyan-700">
                  social media
                </span>
                :
                <div className="flex space-x-4 mt-4 w-1/3">
                  <a
                    href="https://example.com/twitter"
                    className={clsx("transition duration-300")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterLogoIcon />
                  </a>
                  <a
                    href="https://example.com/linkedin"
                    className={clsx(
                      "text-cyan-700 hover:text-cyan-900 transition duration-300"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInLogoIcon />
                  </a>
                  <a
                    href="https://example.com/github"
                    className={clsx(
                      "transition duration-300"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
