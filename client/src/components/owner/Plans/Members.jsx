import React from "react";
import { ArrowDownToLine, MoreHorizontal, RefreshCcw, SquarePen } from "lucide-react";

const members = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    plan: "Premium",
    status: "Active",
    joinDate: "2024-01-15",
    renewalDate: "2024-07-15",
    payment: "Current",
    avatar: "/avatar.png",
  },
  {
    name: "Mike Chen",
    email: "mike.c@email.com",
    plan: "Basic Fitness",
    status: "Active",
    joinDate: "2024-01-14",
    renewalDate: "2024-02-14",
    payment: "Current",
    avatar: "/avatar.png",
  },
  {
    name: "Emma Davis",
    email: "emma.d@email.com",
    plan: "Elite",
    status: "Pending Renewal",
    joinDate: "2024-01-13",
    renewalDate: "2024-01-20",
    payment: "Overdue",
    avatar: "/avatar.png",
  },
];

const statusColor = {
  Active: "bg-green-500",
  "Pending Renewal": "bg-yellow-400",
};

const paymentColor = {
  Current: "text-green-400",
  Overdue: "text-red-500",
};

const Members = () => {
  return (
    <div className="flex flex-col gap-6 text-white w-full">
      <div className="w-full bg-[#0c0f14] rounded-lg p-6 shadow-md border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold">All Members</h2>
            <p className="text-sm text-gray-400">
              Complete member directory and management
            </p>
          </div>
          <div className="flex gap-2">
            {/* <button className="border px-4 py-2 rounded-md hover:bg-white hover:text-black transition border-gray-500 text-white flex gap-2 items-center">
              <span>Filter</span>
            </button> */}
            <button className="border px-4 py-2 rounded-md hover:bg-[#39FF14] hover:text-black transition border-gray-500 text-white flex gap-2 items-center">
              <span className="flex gap-3 cursor-pointer"><ArrowDownToLine /> Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="py-2 px-4">Member</th>
                <th className="py-2 px-4">Plan</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Join Date</th>
                <th className="py-2 px-4">Renewal Date</th>
                <th className="py-2 px-4">Payment</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-800 hover:bg-[#1a1f27]"
                >
                  <td className="py-3 px-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center uppercase text-black bg-gray-300">
                      {member.email.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white">{member.name}</p>
                      <p className="text-gray-400 text-xs">{member.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-3 py-1 border border-cyan-400 rounded-full text-cyan-400">
                      {member.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          statusColor[member.status] || "bg-gray-500"
                        }`}
                      ></span>
                      <span>{member.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{member.joinDate}</td>
                  <td className="py-3 px-4">{member.renewalDate}</td>
                  <td className="py-3 px-4">
                    <span className={paymentColor[member.payment]}>
                      {member.payment}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-3 items-center justify-center">
                    <button className="w-4 text-blue-400 cursor-pointer"><SquarePen /></button>
                    <button className="w-4 text-green-600 cursor-pointer"><RefreshCcw /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
