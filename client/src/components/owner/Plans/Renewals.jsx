import {
  Bell,
  CircleAlert,
  CircleCheckBig,
  Clock,
} from "lucide-react";
import React from "react";

const Renewals = () => {
  const RenewalsData = [
    {
      icon: <Clock className="text-yellow-300 w-6 h-6" />,
      label: "Due This Week",
      value: 23,
      bg: "bg-yellow-900",
      text: "text-yellow-300",
    },
    {
      icon: <CircleAlert className="text-red-400 w-6 h-6" />,
      label: "Overdue",
      value: 7,
      bg: "bg-red-900",
      text: "text-red-400",
    },
    {
      icon: <CircleCheckBig className="text-green-400 w-6 h-6" />,
      label: "Renewed Today",
      value: 12,
      bg: "bg-green-900",
      text: "text-green-400",
    },
  ];

  const upcomingRenewals = [
  {
    name: "Emma Davis",
    email: "emma.d@email.com",
    plan: "Elite",
    renewalDate: "2024-01-20",
    status: "Overdue",
    amount: "$99",
  },
  {
    name: "Mike Chen",
    email: "mike.c@email.com",
    plan: "Basic",
    renewalDate: "2024-08-01",
    status: "Due",
    amount: "$29",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    plan: "Premium",
    renewalDate: "2024-07-19",
    status: "Renewed",
    amount: "$59",
  },
];


  return (
    <div className="border border-gray-800 w-full flex flex-col p-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-white">Membership Renewals</h1>
          <span className="text-md text-gray-500">
            Manage upcoming and overdue renewals
          </span>
        </div>
        <button className="flex rounded-lg bg-[#00ff62] cursor-pointer hover:bg-[#00ff62c9] h-10 items-center justify-center px-3 text-black gap-2 font-medium">
          <Bell className="w-5" /> Send Reminders
        </button>
      </div>

      {/* Stat Cards */}
      <div className="flex justify-between gap-4 w-full">
        {RenewalsData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-md shadow-sm md:w-full sm:w-[250px] ${item.bg} ${item.text}`}
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{item.label}</span>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
            <div className="text-xl">{item.icon}</div>
          </div>
        ))}
      </div>

    <div className="pt-6 w-full">
  <h1 className="text-xl font-semibold text-white mb-4">Upcoming Renewals</h1>

  <div className="overflow-x-auto rounded-lg border border-gray-700">
    <table className="min-w-full divide-y divide-gray-700 text-sm text-left text-gray-300">
      <thead className="bg-[#111] text-gray-400 uppercase tracking-wider text-xs">
        <tr>
          <th className="px-6 py-3">Member</th>
          <th className="px-6 py-3">Plan</th>
          <th className="px-6 py-3">Renewal Date</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Amount</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {upcomingRenewals.map((user, idx) => (
          <tr key={idx} className="hover:bg-gray-900 transition">
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <span className="font-medium text-white">{user.name}</span>
                <span className="text-xs text-gray-400">{user.email}</span>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs rounded-full border border-cyan-400 text-cyan-400">
                {user.plan}
              </span>
            </td>
            <td className="px-6 py-4">{user.renewalDate}</td>
            <td className="px-6 py-4">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  user.status === "Overdue"
                    ? "bg-red-700 text-white"
                    : user.status === "Renewed"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-600 text-white"
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 text-white font-medium">{user.amount}</td>
            <td className="px-6 py-4 space-x-2">
              <button className="px-3 py-1 bg-green-500 text-black text-xs rounded hover:bg-green-400">
                Renew Now
              </button>
              <button className="px-3 py-1 border border-gray-500 text-gray-200 text-xs rounded hover:bg-gray-800">
                Remind
              </button>
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

export default Renewals;
