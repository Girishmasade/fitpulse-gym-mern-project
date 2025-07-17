import { Calendar, ChartColumn, Settings, UserPlus } from 'lucide-react';
import React from 'react';

const QuickActions = () => {
  return (
    <div className="flex flex-col justify-between bg-transparent border border-gray-800 mt-4 p-4 rounded-md">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-white">Quick Actions</h1>
        <span className="text-gray-400 text-md">Common administrative tasks</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-5">
        <button className="flex flex-col items-center justify-center gap-2 border rounded-md hover:bg-green-600 cursor-pointer hover:text-black text-green-400 border-green-700 h-[90px] text-sm">
          <UserPlus className="w-5 h-5" />
          Manage Plans
        </button>

        <button className="flex flex-col items-center justify-center gap-2 border rounded-md hover:bg-cyan-600 cursor-pointer hover:text-black text-cyan-400 border-cyan-700 h-[90px] text-sm">
          <UserPlus className="w-5 h-5" />
          Add Users
        </button>

        <button className="flex flex-col items-center justify-center gap-2 border rounded-md hover:bg-cyan-600 cursor-pointer hover:text-black text-cyan-400 border-cyan-700 h-[90px] text-sm">
          <Calendar className="w-5 h-5" />
          Schedule Class
        </button>

        <button className="flex flex-col items-center justify-center gap-2 border rounded-md hover:bg-cyan-600 cursor-pointer hover:text-black text-cyan-400 border-cyan-700 h-[90px] text-sm">
          <ChartColumn className="w-5 h-5" />
          View Analytics
        </button>

        <button className="flex flex-col items-center justify-center gap-2 border rounded-md hover:bg-gray-600 cursor-pointer hover:text-black text-gray-400 border-gray-700 h-[90px] text-sm">
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
