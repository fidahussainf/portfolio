import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  return (
    <div className="h-16 bg-blue-600 cursor-pointer flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars />
        </button>
        <Link href="/">
          <div className="hidden sm:block text-white">Portfolio</div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white hover:underline">
          Home
        </Link>
        <Link href="/resume" className="text-white hover:underline">
          Resume
        </Link>
        <Link href="/myprojects" className="text-white hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-white hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
