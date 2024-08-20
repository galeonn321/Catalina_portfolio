"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In 2019, I graduated from my bachelor's program in Professional Language
        Use with a specialization in English at Stockholm University, Sweden.
        Aside from Linguistics, I learned about English for specific purposes,
        intercultural and{" "}
        <span className="font-bold">technical communication</span>, language in
        professional settings, rhetoric, among others. In 2021, I finished my
        master's studies in Linguistics at Leiden University, Netherlands, where
        I dived further into the world of language and communication.
      </p>

      <p>
        <span className="italic">When I'm not writing professionally</span>, I
        enjoy playing I enjoy crafting and writing stories in my spare time,
        watching films, reading, walking, and spinning. I also enjoy learning
        new things. At the moment, I am learning new languages and new skills.
      </p>
    </motion.section>
  );
}
