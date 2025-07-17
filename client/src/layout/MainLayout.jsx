import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';

const MainLayout = () => {
  const storedRole = useSelector((state) => state.auth.role) || localStorage.getItem('roles');
  const role = storedRole?.toLowerCase();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!role) {
    return <div className="text-white p-10">Unauthorized Access</div>;
  }

  return (
    <div className="h-screen flex bg-[#0c0f14] text-white overflow-hidden">
      
      <div
        className={`fixed md:static top-0 left-0 h-screen w-[240px] bg-[#121820] border-r border-[#1e2838] z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <Sidebar />
      </div>

     
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
       
        <div className="md:hidden p-4 flex justify-between items-center bg-[#11161c] border-b border-[#1e2838]">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-green-400 font-semibold"
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* <span className="capitalize text-sm">{role}</span> */}
        </div>

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
