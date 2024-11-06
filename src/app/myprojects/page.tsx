"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  img: string;
  github?: string;
  liveDemo: string;
  description?: string;
  companyName?: string;
}

interface ProjectsData {
  [key: string]: Project[];
}

const projectsData: ProjectsData = {
  react: [
    {
      title: "User Registration App",
      img: "/registration.png",
      github: "https://github.com/fidahussainf/registration-app",
      liveDemo: "https://todolist-app-pied-nine.vercel.app/",
      description:
        "A full-featured user registration application built with React and Redux. It supports Create, Read, Update, and Delete (CRUD) operations for user management.",
    },
    {
      title: "TodoList",
      img: "/todolist.png",
      github: "https://github.com/fidahussainf/todolist-app",
      liveDemo: "https://registration-app-murex.vercel.app/",
      description:
        "A simple and intuitive ToDo List application built with React.",
    },
    {
      title: "Mosque Guide",
      img: "/mosque.jpg",
      github: "",
      companyName: "IR Solutions",
      liveDemo: "https://d1zoz5ugs1l7o.cloudfront.net/login",
      description:
        "An all-in-one mosque website for announcements, event timings, prayer schedules, QR code scanning, and notifications for every event and update.",
    },
    {
      title: "BananaX",
      img: "/bananax.jpeg",
      github: "",
      companyName: "IR Solutions",
      liveDemo: "https://d3bce8tpo4qjh6.cloudfront.net/",
      description:
        "This is an IR Solutions project made with React and Tailwind CSS.",
    },
    {
      title: "ERP System",
      img: "/nimbuzz.jpeg",
      github: "",
      companyName: "Socialb.digital",
      liveDemo: "https://nimbuzz.cloud/",
      description:
        "A comprehensive ERP system built with React.js, featuring modules for POS, HR, and accounting to streamline business operations.",
    },
    {
      title: "BCW Club",
      img: "/bcw.jpg",
      github: "",
      companyName: "Socialb.digital",
      liveDemo: "https://www.bcw.club/",
      description:
        "Bcw.club is a crypto based gaming platform provideing its users with an amazing online gaming experience. Start playing for your chance to win big!",
    },
  ],
  next: [
    {
      title: "Drag and Drop",
      img: "/dragdrop.png",
      github: "https://github.com/fidahussainf/DragandDrop-app",
      liveDemo: "https://dragand-drop-app.vercel.app/",
      description:
        "A Next.js drag-and-drop application that allows users to seamlessly move items between categories with a smooth user experience.",
    },
    {
      title: "Aqleh",
      img: "/aqleh.png",
      github: "",
      companyName: "IR Solutions",
      liveDemo: "https://aqleh.com/",
      description:
        "A portfolio website built with Next.js, designed to showcase projects and skills in a clean, professional layout.",
    },
    {
      title: "Hire IR Solutions",
      img: "irsoultions.jpg",
      github: "",
      companyName: "IR Solutions",
      liveDemo: "https://hire.irsolutions.tech/",
      description:
        "This is IR Solution's website, built using Next.js, TypeScript, and Tailwind CSS.",
    },
    {
      title: "Mines game",
      img: "mines-game.jpg",
      github: "https://github.com/fidahussainf/mines-game",
      companyName: "",
      liveDemo: "https://mines-game-t5yn.vercel.app/",
      description:
        "Mines is a betting game made using Next.js, TypeScript, and Redux. ",
    },
  ],
};

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("react");

  const renderProjects = () => {
    return projectsData[activeTab].map((project, index) => (
      <ProjectCard key={index} {...project} />
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center mb-4 text-white">
        <button
          onClick={() => setActiveTab("react")}
          className={`p-2 rounded-lg w-[120px] ${
            activeTab === "react" && "bg-blue-600 "
          }`}
        >
          React
        </button>
        <button
          onClick={() => setActiveTab("next")}
          className={`p-2 rounded-lg w-[120px] ${
            activeTab === "next" && "bg-blue-600 "
          }`}
        >
          Next.js
        </button>
      </div>
      <div className="flex flex-wrap">{renderProjects()}</div>
    </div>
  );
};

export default Page;
