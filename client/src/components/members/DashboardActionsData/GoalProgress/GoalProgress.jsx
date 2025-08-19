import { Plus, Target } from "lucide-react";
import React, { useState } from "react";
import GoalProgressAddCard from "./GoalProgressAddCard";

const GoalProgress = () => {
  const Goal = [
    {
      id: 1,
      title: "Lose 10 lbs",
      due: "March 2024",
      progress: 7,
      progressLimit: 10,
      unit: "lbs",
    },
    {
      id: 2,
      title: "Bench Press",
      due: "April 2024",
      progress: 185,
      progressLimit: 225,
      unit: "lbs",
    },
    {
      id: 3,
      title: "Run 5K",
      due: "February 2024",
      progress: 22,
      progressLimit: 20,
      unit: "min",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col p-4 px-6 gap-5 bg-base-200 rounded-md">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold flex gap-2 items-center">
          <Target className="colour" />
          Goals Progress
        </h2>
        <p>Track your fitness milestones</p>
      </div>

      <div className="flex flex-col ">
        {Goal.map((goal) => {
          const percent = Math.min(
            Math.round((goal.progress / goal.progressLimit) * 100),
            100
          );
          return (
            <div
              key={goal.id}
              className="flex flex-col gap-2 p-2 bg-gray-700 rounded-md mb-4"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{goal.title}</h3>
                  <p className="text-sm text-gray-400">Due: {goal.Due}</p>
                </div>
                <div className="text-sm text-black items-center justify-center flex w-10 h-8 commonColorBg rounded-full">
                  {percent}%
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex justify-between">
                  <h1>{goal.progress}</h1>
                  <h2>{goal.progressLimit}</h2>
                </div>
                <progress
                  className="progress progress-success colour w-full"
                  value={goal.progress}
                  max={goal.progressLimit}
                ></progress>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="flex gap-2 p-2 items-center justify-center border border-[#39ff14] colour hover:commonColorBg rounded-md cursor-pointer"
      >
        <Plus /> Set New Goal
      </button>
      <GoalProgressAddCard open={open} setOpen={setOpen}/>
    </div>
  );
};

export default GoalProgress;
