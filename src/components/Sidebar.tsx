"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { FaHome, FaFileAlt, FaProjectDiagram, FaUser } from 'react-icons/fa';

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      toggleSidebar();
    }
  }, [toggleSidebar]);  

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);  

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full bg-blue-500 pt-10 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-32 sm:w-48 md:w-64 lg:w-72 xl:w-80 z-50`}
      style={{ maxWidth: '100%' }}
    >
      <nav className="flex justify-center">
        <ul className="space-y-8 mt-10">
          <li className="flex items-center">
            <FaHome className="mr-2" />
            <Link href="/" className="text-white text-lg">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-2" />
            <Link href="/resume" className="text-white text-lg">
              Resume
            </Link>
          </li>
          <li className="flex items-center">
            <FaProjectDiagram className="mr-2" />
            <Link href="/myprojects" className="text-white text-lg">
              Projects
            </Link>
          </li>
          <li className="flex items-center">
            <FaUser className="mr-2" />
            <Link href="/contact" className="text-white text-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
