import React from "react";
import UserManagementHeader from "../../components/owner/users/UserManagementHeader";
import { RefreshCcw, Save } from "lucide-react";
import SettingForm from "../../components/owner/settings/SettingForm";

const Setting = () => {
  return (
    <div className="w-full px-2 py-4 flex flex-col gap-6">
      <div className="lg:flex flex-col justify-between items-center">
        <UserManagementHeader
          title={"System Settings"}
          subtitle={"Configure gym settings and preferences"}
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 w-full">
          <button className="hover:bg-[#39FF14] text-white hover:text-black cursor-pointer border font-semibold border-gray-400 w-full sm:w-[200px] p-2 rounded-lg flex gap-3 items-center justify-center">
            <RefreshCcw /> Reset to Defaults
          </button>
          <button className="bg-[#39FF14] text-black hover:bg-[#37ff1496] w-full sm:w-[160px] cursor-pointer p-2 font-semibold rounded-lg flex gap-3 items-center justify-center">
            <Save /> Save Changes
          </button>
        </div>
      </div>

      <SettingForm />
    </div>
  );
};

export default Setting;
