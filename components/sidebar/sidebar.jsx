"use client";

import { useToggleSidebar } from "@/hooks/toggle-sidebar";
import { AiOutlineClose } from "react-icons/ai";
import SidebarItems from "./sidebar-items";
import SocialMedia from "./social-media";

const Sidebar = () => {
  const toggleSidebar = useToggleSidebar();
  return (
    <>
      <div
        onClick={toggleSidebar.onClose}
        className={`w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50 z-[999] transition-all duration-300
      ${toggleSidebar.isOpen ? "block" : "hidden w-0 h-0"}
      `}
      />
      <div
        className={`bg-gray-950 fixed left-0 top-0 h-screen p-6 transition-all duration-500 ${
          toggleSidebar.isOpen ? "w-1/4 opacity-100 z-[1000]" : "w-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-y-7">
          <AiOutlineClose
            onClick={toggleSidebar.onClose}
            className="text-3xl text-white cursor-pointer mr-auto"
          />
          <div className="w-full h-60 overflow-auto scroll-sidebar-items">
            <SidebarItems />
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
