import React, { useState } from "react";
import Card from "./Card";
import Owerview from "./Owerview";
import Members from "./Members";
import Plans from "./Plans";
import Renewals from "./Renewals";

const TabsOfRoleAndStatus = () => {
  const Tabs = ["Overview", "Member", "Plans", "Renewals"];
  const [activeTabs, setActiveTabs] = useState("Overview");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-between sm:justify-around w-full bg-[#0F172A] rounded-md p-2">
        {Tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTabs(tab)}
            className={`flex-1 text-center min-w-[100px] sm:min-w-[120px] px-4 py-2 sm:py-3 rounded-md font-medium text-sm transition-all ${
              activeTabs === tab
                ? "bg-[#39FF14] text-black"
                : "text-gray-300 hover:text-white hover:bg-black/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Card />

      <div className="rounded-md p-4 text-white w-full overflow-x-auto">
        {activeTabs === "Overview" && <Owerview />}
        {activeTabs === "Member" && <Members />}
        {activeTabs === "Plans" && <Plans />}
        {activeTabs === "Renewals" && <Renewals />}
      </div>
    </div>
  );
};

export default TabsOfRoleAndStatus;
