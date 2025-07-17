import { Funnel, Plus } from "lucide-react";
import React from "react";

const MembersAndTrainers = () => {
  const members = [
    {
      name: "Sarah Johnson",
      plan: "Pro Plan",
      status: "Active",
      statusColor: "green",
      date: "2024-01-15",
    },
    {
      name: "Mike Chen",
      plan: "Basic Plan",
      status: "Active",
      statusColor: "green",
      date: "2024-01-14",
    },
    {
      name: "Emma Davis",
      plan: "Enterprise Plan",
      status: "Pending",
      statusColor: "yellow",
      date: "2024-01-13",
    },
  ];

  const Trainers = [
    {
      name: "Alex Rodriguez",
      specialization: "Strength Training",
      status: "Active",
      clients: "24",
      statusColor: "green",
    },
    {
      name: "Maria Garcia",
      specialization: "Yoga & Flexibility",
      status: "Inactive",
      clients: "32",
      statusColor: "yellow",
    },
    {
      name: "David Kim",
      specialization: "HIIT & Cardio",
      status: "Active",
      clients: "28",
      statusColor: "green",
    },
  ];

  return (
    <div className="flex gap-10 border-gray-300 pt-10">
      <div className="w-[60%] border flex flex-col p-3 border-green-400 rounded-md h-[350px] overflow-y-hidden">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Recent Members</h1>
            <p>Latest member registrations</p>
          </div>

          <div className="flex gap-2">
            <button className="flex gap-2 w-[90px] h-9 p-3 items-center justify-center border hover:bg-[#39FF14] hover:border-0 hover:text-black border-gray-400 rounded-md cursor-pointer">
              <Funnel />
              filter
            </button>
            <button className="flex gap-2 h-9 p-3 items-center justify-center bg-[#39FF14] hover:bg-[#37ff14b9] text-black px-2 rounded-md cursor-pointer">
              <Plus />
              Add Member
            </button>
          </div>
        </div>
        <div className="pt-5 space-y-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex justify-between gap-10 bg-slate-800 rounded-md p-3"
            >
              <div className="flex gap-3">
                <p className="w-10 h-10 rounded-full bg-green-500 text-black text-center items-center flex justify-center font-bold">
                  {member.name.charAt(0)}
                </p>
                <div className="flex-col flex gap-1">
                  <h1>{member.name}</h1>
                  <span>{member.plan}</span>
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="flex items-center gap-1 justify-end text-white">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      member.status === "Active" &&
                      member.statusColor === "green"
                        ? "bg-green-500"
                        : "bg-yellow-400"
                    }`}
                  ></span>
                  {member.status}
                </div>

                <span className="text-xs text-gray-400">{member.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] border border-blue-500 rounded-md p-2">
        <div className="flex flex-col gap-1 p-3">
          <h1>Trainer Status</h1>
          <span>Current trainer availability</span>
        </div>
        <div className="pt-5 space-y-3">
          {Trainers.map((trainer, index) => (
            <div
              key={index}
              className="flex justify-between gap-10 bg-slate-800 rounded-md p-6"
            >
              <div className="flex gap-3">
                <p className="w-10 h-10 text-black rounded-full bg-green-500 flex items-center justify-center">
                  {trainer.name.charAt(0)}
                </p>

                <div className="flex flex-col">
                  <h1>{trainer.name}</h1>
                  <p>{trainer.specialization}</p>
                  <p className="pt-1 text-gray-400 text-sm">
                    {trainer.clients} clients
                  </p>
                </div>
              </div>

             <div className="text-right text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trainer.statusColor === "green"
                      ? "bg-green-500 text-black"
                      : "bg-yellow-400 text-black"
                  }`}
                >
                  {trainer.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex w-full rounded-md p-2 cursor-pointer items-center justify-center mt-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">Add Trainer</button>
      </div>
    </div>
  );
};

export default MembersAndTrainers;

