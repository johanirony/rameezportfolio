"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Java</li>
        <li>Linux</li>
        <li>Python</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>A.P International School</li>
        <li>MKVVIV,Mumbai</li>
        <li>Bharati Vidyapeeth College of Enginnering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <Link href="https://www.coursera.org/account/accomplishments/verify/HWEJ3JJBDLDB"><li>Foundation of Cybersecurity</li></Link>
        <Link href="https://www.udemy.com/certificate/UC-70f80765-3120-4492-864d-f3ddc10e5299/"><li>The Complete Web Development Bootcamp</li></Link>
        <Link href="https://www.udemy.com/certificate/UC-9714bc99-ad7e-41ae-87e3-6aca46555fe8/"><li>The Complete Python Pro Bootcamp</li></Link>
        <Link href="https://www.udemy.com/certificate/UC-24ed2f65-0961-4300-b8eb-2a3caccb7daf/"><li>Learn Ethical Hacking From Scratch</li></Link>
      </ul>
    ),
  },
  {
    title:"Experience",
    id:"experience",
    content:(
        <ul className="list-disc pl-2 ">
            <li>Software Engineer Intern At Cillyfox, Mumbai (Mar 2023 - Apr 2023)</li>
            <li>Techinal Head At Mozilla Campus Club BV(DU)Complete (Sep 2023 - Present)</li>
            <li>Graphic Designer At Blotic (Nov 2022 - Nov 2023)</li>
        </ul>

    ),
  }

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Next, React, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;