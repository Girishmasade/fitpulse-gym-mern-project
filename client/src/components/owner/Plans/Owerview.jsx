import React from "react";
import { MoreVertical } from "lucide-react";

const Overview = () => {
  const tableData = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      plan: "Premium",
      status: "Active",
      joinedDate: "2024-07-15",
    },
    {
      name: "Mike Chen",
      email: "mike.c@email.com",
      plan: "Basic Fitness",
      status: "Active",
      joinedDate: "2024-02-14",
    },
    {
      name: "Emma Davis",
      email: "emma.d@email.com",
      plan: "Elite",
      status: "Pending Renewal",
      joinedDate: "2024-01-20",
    },
  ];

  const statusColor = {
    Active: "bg-green-500",
    "Pending Renewal": "bg-yellow-500",
  };

  const planDistribution = [
    {
      name: "Basic Fitness",
      members: 1250,
      price: "$29/month",
      percentage: 44,
    },
    {
      name: "Premium",
      members: 1420,
      price: "$59/month",
      percentage: 50,
    },
    {
      name: "Elite",
      members: 177,
      price: "$99/month",
      percentage: 6,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 text-white">
      {/* Left: Recent Members */}
     <div className="w-full lg:w-[70%] bg-[#0c0f14] rounded-lg p-6 shadow-md border border-gray-700">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Recent Members</h2>
          <p className="text-sm text-gray-400">Latest membership activity</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-700">
            <thead className="text-gray-300 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-2 text-left">Member</th>
                <th className="px-4 py-2 text-left">Plan</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Renewal</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {tableData.map((data, index) => (
                <tr key={index} className="hover:bg-slate-800 transition">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                        {data.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{data.name}</span>
                        <span className="text-gray-400 text-xs">{data.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full border border-cyan-400 text-cyan-300 text-xs font-medium">
                      {data.plan}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${statusColor[data.status]}`} />
                      {data.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{data.joinedDate}</td>
                  <td className="px-4 py-3">
                    <MoreVertical size={16} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Plan Distribution */}
      <div className="w-full lg:w-[30%] bg-[#0c0f14] rounded-lg p-6 shadow-md border border-gray-700">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Plan Distribution</h2>
          <p className="text-sm text-gray-400">Active membership breakdown</p>
        </div>

        <div className="space-y-5">
          {planDistribution.map((plan, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white">
                  {plan.name}
                </span>
                <span className="text-sm text-gray-400">
                  {plan.members} members
                </span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-[#39FF14] rounded-l-full"
                  style={{ width: `${plan.percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1 text-gray-400">
                <span>{plan.price}</span>
                <span className="text-cyan-400 font-semibold">
                  {plan.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
