"use client";

import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main>
        <div className={clsx("py-10 text-3xl")}>
            <h1 className={clsx("underline text-center capitalize bold font-mono")}>A little about myself</h1>
        </div>
        <div className={clsx("px-20 py-15")}>
            <p className={clsx("font-semibold py-8 text-2xl font-mono")}>
            Hey there, welcome to my portfolio site. I am B.Tech. grad from
            Academy of Technology, West Bengal, India. Even though I did my
            bachelors in Electronics and Communication, here I am doing frontend
            development now :P
            </p>
            <p className={clsx("font-semibold py-8 text-2xl font-mono")}>
            I love taking pictures and coding and learning new
            things
            </p>
            <p className={clsx("font-semibold py-8 text-2xl font-mono")}>
            Presently, frontend development has got me quite captivated
            for sometime and I have been trying to learn different aspects of it.
            And I think there is no better way to learn something than trying it
            out yourself. I have always liked creating new things and now coding
            has given me the medium to channel my creativity!
            </p>
            <p className={clsx("font-semibold py-8 text-2xl font-mono")}>
            Lets see where this journey takes us!
            </p>
          
        </div>
      </main>
    </>
  );
}
