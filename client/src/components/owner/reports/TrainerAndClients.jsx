import { Users, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const TrainerAndClients = () => {
  const ClientUnderTrainer = [
    {
      initials: "AR",
      name: "Alex Rodriguez",
      specialization: "HIIT & Strength Training",
      totalClients: 24,
      activeClients: 22,
      pendingClients: 2,
      clients: [
        {
          name: "John Smith",
          plan: "Premium",
          joined: "2024-01-15",
          status: "Active",
        },
        {
          name: "Sarah Wilson",
          plan: "Standard",
          joined: "2024-02-10",
          status: "Active",
        },
        {
          name: "Mike Johnson",
          plan: "Premium",
          joined: "2024-01-25",
          status: "Active",
        },
        {
          name: "Emma Davis",
          plan: "Standard",
          joined: "2024-03-05",
          status: "Pending",
        },
        {
          name: "Chris Lee",
          plan: "Premium",
          joined: "2024-02-20",
          status: "Active",
        },
      ],
    },
    {
      id: "TR002",
      initials: "MG",
      name: "Maria Garcia",
      specialization: "Yoga & Pilates",
      totalClients: 19,
      activeClients: 17,
      pendingClients: 2,
      clients: [
        {
          name: "Lisa Anderson",
          plan: "Standard",
          joined: "2024-01-08",
          status: "Active",
        },
        {
          name: "David Brown",
          plan: "Premium",
          joined: "2024-02-14",
          status: "Active",
        },
        {
          name: "Jessica Taylor",
          plan: "Standard",
          joined: "2024-03-01",
          status: "Active",
        },
        {
          name: "Robert Miller",
          plan: "Basic",
          joined: "2024-02-28",
          status: "Pending",
        },
      ],
    },
    {
      id: "TR003",
      initials: "DK",
      name: "David Kim",
      specialization: "CrossFit & Cardio",
      totalClients: 16,
      activeClients: 15,
      pendingClients: 1,
      clients: [
        {
          name: "Michelle White",
          plan: "Premium",
          joined: "2024-01-20",
          status: "Active",
        },
        {
          name: "Kevin Garcia",
          plan: "Standard",
          joined: "2024-02-05",
          status: "Active",
        },
        {
          name: "Amanda Clark",
          plan: "Premium",
          joined: "2024-03-10",
          status: "Active",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="w-full p-6 bg-zinc-900 rounded-lg">
      <div className="mb-6 flex items-center gap-3">
        <Users className="text-[#39FF14]" />
        <div>
          <h1 className="text-xl font-semibold text-white">
            Trainer-Client Assignments
          </h1>
          <p className="text-sm text-gray-400">
            Detailed breakdown of clients under each trainer
          </p>
        </div>
      </div>

      {ClientUnderTrainer.map((trainer, index) => (
        <div
          key={trainer.id}
          className="bg-zinc-800 p-4 rounded-lg mb-4 border border-zinc-700"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 font-bold text-black">
                {trainer.initials}
              </div>
              <div>
                <h2 className="text-white font-semibold">{trainer.name}</h2>
                <p className="text-sm text-gray-400">{trainer.specialization}</p>
              </div>
            </div>
            <div className="text-sm  space-y-1 flex gap-5 px-4">
              <p className="text-white ">
                <span className="text-[#39FF14] px-2">{trainer.totalClients}</span>
                Total
              </p>
              <p>
                <span className="text-green-500 px-2">{trainer.activeClients}</span>
                Active
              </p>
              <p>
                <span className="text-yellow-400 px-2">
                  {trainer.pendingClients}
                </span>
                Pending
              </p>
            </div>
            <div className="ml-3 text-white">
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>

          {activeIndex === index && (
            <div className="mt-4">
              <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Assigned Clients:
              </p>
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="text-gray-400 border-b border-zinc-700">
                  <tr>
                    <th className="py-2">Client Name</th>
                    <th>Plan Type</th>
                    <th>Joined Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trainer.clients.map((client, i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="py-2">{client.name}</td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            client.plan === "Premium"
                              ? "text-green-400 border border-green-500"
                              : client.plan === "Standard"
                              ? "text-cyan-300 border border-cyan-400"
                              : "text-gray-400 border border-gray-500"
                          }`}
                        >
                          {client.plan}
                        </span>
                      </td>
                      <td>{new Date(client.joined).toLocaleDateString()}</td>
                      <td>
                        <span
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            client.status === "Active"
                              ? "bg-green-800 text-green-300"
                              : "bg-yellow-700 text-yellow-300"
                          }`}
                        >
                          {client.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrainerAndClients;
