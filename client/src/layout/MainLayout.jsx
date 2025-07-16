import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const role = (useSelector((state) => state.auth.role) || localStorage.getItem('roles'))?.toLowerCase();

  if (!role) return <div className="text-white p-10">Unauthorized</div>;

  return (
    <div className="flex min-h-screen bg-[#0c0f14] text-white">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
