import { Users, ChevronDown, ChevronUp } from "lucide-react";
import { Disclosure } from "@headlessui/react";

const TrainerAndClients = () => {
  const ClientUnderTrainer = [
    {
      id: "TR001",
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

  return (
    <div className="w-full p-4 sm:p-6 bg-zinc-900 rounded-lg">
      <div className="mb-6 flex items-center gap-3 flex-wrap">
        <Users className="text-[#39FF14]" />
        <div>
          <h1 className="text-xl font-semibold text-white">Trainer-Client Assignments</h1>
          <p className="text-sm text-gray-400">
            Detailed breakdown of clients under each trainer
          </p>
        </div>
      </div>

      {ClientUnderTrainer.map((trainer) => (
        <Disclosure key={trainer.id}>
          {({ open }) => (
            <div className="bg-zinc-800 p-4 rounded-lg mb-4 border border-zinc-700">
              <Disclosure.Button className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 cursor-pointer focus:outline-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 font-bold text-black">
                    {trainer.initials}
                  </div>
                  <div>
                    <h2 className="text-white font-semibold">{trainer.name}</h2>
                    <p className="text-sm text-gray-400">{trainer.specialization}</p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-end gap-3 text-sm text-white">
                  <p>
                    <span className="text-[#39FF14] font-bold">{trainer.totalClients}</span> Total
                  </p>
                  <p>
                    <span className="text-green-500 font-bold">{trainer.activeClients}</span> Active
                  </p>
                  <p>
                    <span className="text-yellow-400 font-bold">{trainer.pendingClients}</span> Pending
                  </p>
                </div>

                <div className="text-white self-end sm:self-center">
                  {open ? <ChevronUp /> : <ChevronDown />}
                </div>
              </Disclosure.Button>

              <Disclosure.Panel className="mt-4">
                <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Assigned Clients:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-300 min-w-[600px]">
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
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default TrainerAndClients;
