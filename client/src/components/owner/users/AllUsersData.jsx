import React, { useState } from "react";
import { ArrowDownToLine, SquarePen, Trash2 } from "lucide-react";

const AllUsersData = () => {
  const allUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "Member",
      status: "Active",
      joinedDate: "2024-01-15",
      lastActiveDate: "2024-01-16",
    },
    {
      name: "Mike Chen",
      email: "mike.c@email.com",
      role: "Trainer",
      status: "Active",
      joinedDate: "2024-01-10",
      lastActiveDate: "2024-01-16",
    },
    {
      name: "Emma Davis",
      email: "emma.d@email.com",
      role: "Member",
      status: "Inactive",
      joinedDate: "2024-01-08",
      lastActiveDate: "2024-01-12",
    },
    {
      name: "Alex Rodriguez",
      email: "alex.r@email.com",
      role: "Admin",
      status: "Active",
      joinedDate: "2023-12-01",
      lastActiveDate: "2024-01-16",
    },
    {
      name: "Lisa Brown",
      email: "lisa.b@email.com",
      role: "Member",
      status: "Active",
      joinedDate: "2024-01-05",
      lastActiveDate: "2024-01-15",
    },
  ];

  const [tabs, setTabs] = useState("all users");

  const filterUsers =
    tabs === "all users"
      ? allUsers
      : allUsers.filter(
          (user) =>
            user.status?.toLowerCase() === tabs.toLowerCase() ||
            user.role?.toLowerCase() === tabs.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-8 w-full min-h-screen px-4 py-6">
      {/* Tabs and Export Button */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {["all users", "member", "trainer", "active", "inactive"].map((tab) => (
            <button
              key={tab}
              onClick={() => setTabs(tab)}
              className={`px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 capitalize ${
                tabs === tab
                  ? "bg-[#39FF14] text-black "
                  : "bg-gray-800 text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      <button
  className="border border-gray-500 p-2 md:px-4 rounded-md text-white hover:text-black hover:bg-[#39FF14] hover:border-transparent transition-all flex gap-2 items-center justify-center w-full md:w-fit"
>
  <ArrowDownToLine size={18} />
  <span className="hidden sm:inline">Export</span>
</button>

      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto border border-gray-400 rounded-md">
          <div className="flex flex-col p-4">
            <h1 className="text-xl">User Directory</h1>
            <span className="text-md text-gray-500">Manage all system users and their permissions</span>
          </div>
        <table className="min-w-[900px] w-full divide-y divide-gray-700 text-sm text-left text-white"> 
          <thead className="bg-[#111827] text-gray-300 uppercase">
            <tr>
              <th className="px-4 md:px-6 py-3">User</th>
              <th className="px-4 md:px-6 py-3">Role</th>
              <th className="px-4 md:px-6 py-3">Status</th>
              <th className="px-4 md:px-6 py-3">Join Date</th>
              <th className="px-4 md:px-6 py-3">Last Login</th>
              <th className="px-4 md:px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.length > 0 ? (
              filterUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-all">
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black font-bold">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{user.name}</span>
                      <span className="text-gray-400 text-sm">
                        {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">{user.role || "Member"}</td>
                  <td className="px-4 md:px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-500 text-black"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">{user.joinedDate || "—"}</td>
                  <td className="px-4 md:px-6 py-4">{user.lastActiveDate || "—"}</td>
                  <td className="px-4 md:px-6 py-4 flex gap-2">
                    <button className="text-blue-400 hover:underline">
                      <SquarePen size={18} />
                    </button>
                    <button className="text-red-400 hover:underline">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-red-500 text-lg">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersData;
