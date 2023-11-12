"use client";

import { useToggleSidebar } from "@/hooks/toggle-sidebar";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const toggleSidebar = useToggleSidebar();
  return (
    <nav className="text-white fixed top-0 right-0 z-10 w-full h-20 px-16 flex justify-between items-center bg-[#222222] shadow-md">
      <div className="flex items-center gap-x-20">
        <h2 className="text-3xl font-bold cursor-pointer hover:text-pink-700 transition-all duration-300">
          LOGO
        </h2>
        <div className="flex gap-x-5">
          <div className="hover:underline cursor-pointer">989131234567+</div>
          <div>/</div>
          <div className="hover:underline cursor-pointer">testemail@gmail.com</div>
        </div>
      </div>
      <div>
        <AiOutlineMenu
          onClick={toggleSidebar.onOpen}
          className="text-3xl cursor-pointer hover:text-pink-700 transition-all duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
