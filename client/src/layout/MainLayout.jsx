import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const storedRole = useSelector((state) => state.auth.role) || localStorage.getItem('roles');
  const role = storedRole?.toLowerCase();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!role) {
    return <div className="text-white p-10">Unauthorized Access</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#0c0f14] text-white">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-[240px] bg-[#121820] border-r border-[#1e2838] z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar (Mobile Toggle) */}
        <div className="md:hidden p-4 flex justify-between items-center bg-[#11161c] border-b border-[#1e2838]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-green-400 font-semibold"
          >
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
          <span className="capitalize text-sm">{role}</span>
        </div>

        {/* Page Content */}
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
