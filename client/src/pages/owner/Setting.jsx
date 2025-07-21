import React from "react";
import UserManagementHeader from "../../components/owner/users/UserManagementHeader";
import { RefreshCcw, Save } from "lucide-react";
import SettingForm from "../../components/owner/settings/SettingForm";

const Setting = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <UserManagementHeader
          title={"System Settings"}
          subtitle={"Configure gym settings and preferences"}
        />
        <div className="flex gap-2 justify-center px-2">
          <button className="hover:bg-[#39FF14] text-white hover:text-black cursor-pointer border font-semibold border-gray-400 w-[200px] p-2 rounded-lg flex gap-4 items-center justify-center"><RefreshCcw /> Reset to Defaults</button>
          <button className="bg-[#39FF14] text-black hover:bg-[#37ff1496] w-[160px] cursor-pointer p-2 font-semibold rounded-lg flex gap-4 items-center justify-center"><Save /> Save Changes</button>
        </div>
      </div>

      <SettingForm/>
    </div>
  );
};

export default Setting;
