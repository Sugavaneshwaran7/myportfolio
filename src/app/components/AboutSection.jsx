"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>UI/UX Designing</li>
        <li>Leadership</li>
        <li>Oracle</li>
        <li>Web development</li>
        <li>Java</li>
        <li>Software Development</li>
      </ul>
    ),
  },



  {
    title: "Technologies",
    id: "Technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma</li>
        <li>SpringBoot</li>
        <li>Tailwind CSS</li>
        <li>FireBase</li>
        <li>App Development</li>
        <li>MySql</li>
      </ul>
    ),
  },


  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Completed Schooling at Sri Vidhya mandhir matric higher secondary school(84.7%)</li>
        <li>Pursuing B.sc-Information systems at Kongu Engineering college </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Security</li>
        <li>Python</li>
        <li>Bot Development</li>
        <li>Social Network</li>
      </ul>
    ),
  },
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Welcome to my portfolio! I’m Sugavaneshwaran P, a dedicated and enthusiastic IT professional with a deep passion for technology and innovation.
           My journey into the tech world has been driven by a fascination with how technology can solve complex problems and improve our everyday lives.

           my enthusiasm for IT has only grown stronger. I am particularly drawn to 
          Full Stack development,UI/UX Designing
          where I see immense potential for creative problem-solving and impactful solutions.
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
              selectTab={() => handleTabChange("Technologies")}
              active={tab === "Technologies"}
            >
              {" "}
              Technologies{" "}
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
