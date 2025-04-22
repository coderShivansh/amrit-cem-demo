// components/navbar.js
"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-md fixed top-0 z-50">
      {/* Empty div for spacing */}
      <div className="w-16"></div>

      {/* Center text */}
      <div className="text-xl text-ee222b font-semibold text-white tracking-wide">
        Amrit Cem
      </div>

      {/* UserButton with glass effect */}
      <div className="w-16 flex justify-end">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-1 shadow-inner">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
