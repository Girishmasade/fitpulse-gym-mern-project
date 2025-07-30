import { Globe, Bell } from "lucide-react";
import React from "react";

const SettingForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-2">
      <div className="lg:w-[60%] border border-gray-500 p-3 rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4">
          <div className="flex items-center gap-3">
            <Globe className="text-[#39FF14] w-6 h-6" />
            <div>
              <h1 className="text-xl font-semibold text-white">
                General Settings
              </h1>
              <p className="text-sm text-gray-400">
                Basic gym information and configuration
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Gym Name
            </label>
            <input
              type="text"
              className="w-full bg-[#1E293B] border border-gray-600 rounded-md p-2 text-white"
              defaultValue="GymFlow Fitness Center"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-[#1E293B] border border-gray-600 rounded-md p-2 text-white"
              defaultValue="admin@gymflow.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full bg-[#1E293B] border border-gray-600 rounded-md p-2 text-white"
              defaultValue="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Address
            </label>
            <textarea
              rows={2}
              className="w-full bg-[#1E293B] border border-gray-600 rounded-md p-2 text-white"
              defaultValue="123 Fitness St, San Francisco, CA 94102"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Timezone
              </label>
              <select className="w-full bg-[#1E293B] border border-gray-600 rounded-md p-2 text-white">
                <option>Pacific Time</option>
                <option>Eastern Time</option>
                <option>Central Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Currency
              </label>
              <select className="w-full bg-[#1E293B] border border-green-500 rounded-md p-2 text-white">
                <option>USD ($)</option>
                <option>INR (₹)</option>
                <option>EUR (€)</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-[#0F172A] h-[300px] p-6 rounded-xl shadow-md w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-cyan-400 w-6 h-6" />
          <div>
            <h1 className="text-xl font-semibold text-white">Notifications</h1>
            <p className="text-sm text-gray-400">
              Configure notification preferences
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-medium">Email Notifications</h2>
              <p className="text-sm text-gray-400">
                Receive notifications via email
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-10 h-5 rounded-full appearance-none bg-black checked:bg-lime-400 relative transition-all duration-300 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-4 before:w-4 before:transition-all checked:before:translate-x-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-medium">SMS Notifications</h2>
              <p className="text-sm text-gray-400">
                Receive notifications via SMS
              </p>
            </div>
            <input
              type="checkbox"
              className="w-10 h-5 rounded-full appearance-none bg-black checked:bg-lime-400 relative transition-all duration-300 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-4 before:w-4 before:transition-all checked:before:translate-x-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-medium">Push Notifications</h2>
              <p className="text-sm text-gray-400">
                Receive browser push notifications
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="w-10 h-5 rounded-full appearance-none bg-black checked:bg-lime-400 relative transition-all duration-300 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white before:rounded-full before:h-4 before:w-4 before:transition-all checked:before:translate-x-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
