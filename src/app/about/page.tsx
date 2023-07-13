"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main>
        <div className={clsx("py-10 text-3xl")}>
            <h1 className={clsx("text-center capitalize bold font-mono")}>A little about myself</h1>
        </div>
        <div className={clsx("px-5 lg:px-20 py-15")}>
        <article className={clsx("py-4 lg:py-8 lg:text-xl font-mono")}>
        Hey there, welcome to my portfolio site. I am B.Tech. grad from
        Academy of Technology, West Bengal, India. Even though I did my
        bachelors in Electronics and Communication,{" "}
        <motion.span
          className="font-bold text-cyan-600"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          frontend development
        </motion.span>{" "}
        now has me quite captivated for some time. I love taking pictures and coding, and learning new things.
        Presently, I've been exploring different aspects of frontend development, and there's no better way to learn than trying it out yourself. Coding has given me the medium to channel my creativity!{" "}
        <motion.span
          className="font-bold text-cyan-600"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          Let's see where this journey takes us!
        </motion.span>
      </article>
          
        </div>
      </main>
    </>
  );
}
