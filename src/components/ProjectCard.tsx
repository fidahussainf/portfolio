"use client";
import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

interface Project {
  title: string;
  img: string;
  github?: string;
  liveDemo: string;
  description?: string;
  companyName?: string;  
}

const ProjectCard: React.FC<Project> = ({ title, img, github, liveDemo, description, companyName }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <h2 className="text-xl font-semibold text-gray-700 p-4">{title}</h2>
        <img src={img} alt={title} className="h-60 bg-cover bg-center px-4 w-full rounded-sm" />
        <div className="p-4">
          {description && (
            <div className="mb-2">
              <p className={`text-gray-700 ${showFullDescription ? "" : "line-clamp-2"}`}>
                {showFullDescription ? description : truncateText(description, 100)}
              </p>
              {description.length > 100 && (
                <button 
                  onClick={toggleDescription} 
                  className="text-blue-600 hover:underline mt-2"
                >
                  {showFullDescription ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          )}
          
          <div className="flex justify-between">
            {github ? (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <FaGithub className="mr-2" /> GitHub
              </a>
            ) : (
              <span className="text-gray-700">{companyName}</span>  
            )}
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
              <FaLink className="mr-2" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
