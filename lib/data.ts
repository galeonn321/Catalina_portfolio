import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import sample1 from "@/public/samples/sample_1_image.png";
import sample2 from "@/public/samples/sample_2_image.png";
import sample3 from "@/public/samples/sample_3_image.png";
import sample4 from "@/public/samples/sample_4_image.png";
import sample5 from "@/public/samples/sample_5_image.png";
import sample6 from "@/public/samples/sample_6_image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Samples",
    hash: "#samples",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Content Specialist - Accell Group",
    location: "Amsterdam, North Holland, Netherlands",
    description: `Own, maintain, update, and optimise the internal user knowledge base (Confluence) on systems, processes, and new features in collaboration with the development, UX and SEO Teams. Provide support to the company brands in terms of training, translation, proofreading, content management, and best practices. 
    Help revise best practices, scalability, and omnichannel ways to manage content on the systems used for e-commerce and content management.`,
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021 - Present",
  },
  {
    title: "Junior Content Specialist - Accell Group",
    location: "Amsterdam, North Holland, Netherlands",
    description:
      "Revise, edit, and proofread editorial and product content for multiple countries and languages. Assist in content migration projects. Assist in the management of editorial and product content.Write translation guidelines and terminology lists for Spanish and English.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2020 - Feb 2021",
  },
  {
    title: "English - Spanish Translator - Natuurhuisje",
    location: "Breda, Netherlands",
    description:
      "Translation and editing of the company’s website and general digital documents. SEO content writing for the website's Spanish version.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - Feb 2020",
  },
] as const;

export const projectsData = [
  {
    title: "How are product number URLs managed?",
    description:
      "This is a guide that explains how product URLs are sluggified in a system I helped document.",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample1,
    document:'/samples/Documentation-sample-1-Catalina-Maruri-Ramos.pdf'
  },
  {
    title: "Manage custom calendars",
    description:
      "This is a how-to guide that explains how to manage custom calendars for a system I helped document.",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample2,
    document:'/samples/Documentation-sample-2-Catalina-Maruri-Ramos.pdf'
  },
  {
    title: "Image file types and formats",
    description:
      "This is a guide that explains the different image file types and formats used for a system I helped document",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample3,
    document:'/samples/Documentation-sample-3-Catalina-Maruri-Ramos.pdf'
  },
  {
    title: "How to set focal point on images",
    description:
      "This is a guide that explains the different image file types and formats used for a system I helped document.",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample4,
    document:'/samples/Documentation-sample-4-Catalina-Maruri-Ramos.pdf'
  },
  {
    title: "Enable the newsletter pop-up",
    description:
      "This is a how-to guide that explains how to enable newsletter pop ups on sites through a system I helped document",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample5,
    document:'/samples/Documentation-sample-5-Catalina-Maruri-Ramos.pdf'
  },
  {
    title: "Deploy and publish content",
    description:
      "This is a guide that explains how to publish content live through a system I helped document.",
    tags: ["SaaS", "Confluence", "CMS"],
    imageUrl: sample6,
    document:'/samples/Documentation-sample-6-Catalina-Maruri-Ramos.pdf'
  },
] as const;

export const skillsData = [
  "Excellent Writing Skills",
  "Technical Aptitude",
  "Research Skills",
  "Attention to Detail",
  "Audience Awareness",
  "Organizational Skills",
  "Collaboration Skills",
  "Project Management",
  "Knowledge of Tools",
  "Visual Communication",
  "Adaptability",
  "Problem-Solving Skills",
  "Continuous Learning",
  "Empathy",
  "Quality Assurance",
] as const;
