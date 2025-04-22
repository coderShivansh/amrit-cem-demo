// components/HomeDashboard.js
"use client";

import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const buttons = [
  { label: "Meetings", path: "/meetings" },
  { label: "HOD Performance", path: "/hod-performance" },
  { label: "Monthly Report", path: "/monthly-report" },
  { label: "Business Performance Report", path: "/business-report" },
  { label: "MRM Presentation", path: "/mrm-presentation" },
  { label: "Worklist", path: "/worklist" },
];

export default function HomeDashboard() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto mt-24">
        <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-xl">Dashboard</h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Home/Sign out button */}
          <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 text-center transition hover:scale-105 hover:bg-white/20 cursor-pointer shadow-lg">
            <SignOutButton>
              <button className="text-xl font-semibold tracking-wide w-full h-full">
                Home
              </button>
            </SignOutButton>
          </div>

          {/* Other buttons */}
          {buttons.map(({ label, path }) => (
            <div
              key={label}
              onClick={() => navigateTo(path)}
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 text-center transition hover:scale-105 hover:bg-white/20 cursor-pointer shadow-lg"
            >
              <span className="text-xl font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
