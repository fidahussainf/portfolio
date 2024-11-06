"use client"
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="flex  text-white ">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 ml-0 transition-margin">
        <Header toggleSidebar={toggleSidebar} />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
