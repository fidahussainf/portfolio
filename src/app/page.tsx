import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home: React.FC = () => {
  const technologies = [
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "Material-UI",
    "Ant Design",
    "Tailwind CSS",
    "React",
    "Next.js",
    "TypeScript",
    "Redux",
    "Bootstrap",
    "Styled-components",
    "MongoDB",
    "Express",
    "Node.js",
    "etc ...",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4">
      <img
        src="/fida.jpg"
        alt="Profile"
        className="w-56 h-56 rounded-full mb-4"
      />
      <h3 className="text-2xl mb-2">Frontend  Developer</h3>

      <div className="text-center max-w-3xl">
        <div className="flex flex-wrap gap-2 items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="gap-1 flex">
              <span>{tech}</span>
              <div className="h-4 w-1 bg-white my-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 mt-10">
        <a
          href="https://github.com/fidahussainf"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <FaGithub size={50} />
        </a>
        <a
          href="https://linkedin.com/in/mefidah"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <FaLinkedin size={50} />
        </a>
        <a
          href="https://instagram.com/fidahussainfd"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <FaInstagram size={50} />
        </a>
      </div>
    </div>
  );
};

export default Home;
