"use client";

import AvatarDemo from "@/components/Avatar";
import { Navbar } from "@/components/Navbar";
import Link from 'next/link'
import clsx from "clsx";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
            <div
              className={clsx("flex flex-col items-center")}
            >
              <h1 className="text-4xl font-bold mb-4 font-mono">
                Welcome to My Portfolio
              </h1>
            </div>

            <div
              className={clsx(
                "container mx-auto grid grid-cols-1 place-items-stretch columns-2 gap-8 justify-start"
              )}
            >
              <div className={clsx("flex px-15 ")}>
                <AvatarDemo />
              </div>
              <p className={clsx("text-lg mb-8 font-mono")}>
                Hi there! I am Subham, a frontend developer passionate about
                crafting captivating web experiences. With expertise in HTML,
                CSS, and JavaScript, I transform designs into pixel-perfect
                interfaces that wow users. Continuously exploring new
                technologies, I create sleek and responsive websites that leave
                a lasting impression. Lets collaborate and bring your vision to
                life with seamless interactions and stunning visuals!
              </p>
              
            </div>

            <div className={clsx("py-20")}>
              <p className="text-lg mb-8 font-mono">
                Want to know more about me? Click{" "}
                <Link href="/about" className={clsx("font-semibold text-cyan-700")}>here</Link>
                {" "}then
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
