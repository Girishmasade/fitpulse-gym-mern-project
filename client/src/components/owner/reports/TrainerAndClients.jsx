import { Globe, Users } from 'lucide-react'
import React from 'react'

const TrainerAndClients = () => {
    const ClientUnderTrainer = [
  {
    "id": "TR001",
    "initials": "AR",
    "name": "Alex Rodriguez",
    "specialization": "HIIT & Strength Training",
    "totalClients": 24,
    "activeClients": 22,
    "pendingClients": 2,
    "clients": [
      {
        "name": "John Smith",
        "plan": "Premium",
        "joined": "2024-01-15",
        "status": "Active"
      },
      {
        "name": "Sarah Wilson",
        "plan": "Standard",
        "joined": "2024-02-10",
        "status": "Active"
      },
      {
        "name": "Mike Johnson",
        "plan": "Premium",
        "joined": "2024-01-25",
        "status": "Active"
      },
      {
        "name": "Emma Davis",
        "plan": "Standard",
        "joined": "2024-03-05",
        "status": "Pending"
      },
      {
        "name": "Chris Lee",
        "plan": "Premium",
        "joined": "2024-02-20",
        "status": "Active"
      }
    ]
  },
  {
    "id": "TR002",
    "initials": "MG",
    "name": "Maria Garcia",
    "specialization": "Yoga & Pilates",
    "totalClients": 19,
    "activeClients": 17,
    "pendingClients": 2,
    "clients": [
      {
        "name": "Lisa Anderson",
        "plan": "Standard",
        "joined": "2024-01-08",
        "status": "Active"
      },
      {
        "name": "David Brown",
        "plan": "Premium",
        "joined": "2024-02-14",
        "status": "Active"
      },
      {
        "name": "Jessica Taylor",
        "plan": "Standard",
        "joined": "2024-03-01",
        "status": "Active"
      },
      {
        "name": "Robert Miller",
        "plan": "Basic",
        "joined": "2024-02-28",
        "status": "Pending"
      }
    ]
  },
  {
    "id": "TR003",
    "initials": "DK",
    "name": "David Kim",
    "specialization": "CrossFit & Cardio",
    "totalClients": 16,
    "activeClients": 15,
    "pendingClients": 1,
    "clients": [
      {
        "name": "Michelle White",
        "plan": "Premium",
        "joined": "2024-01-20",
        "status": "Active"
      },
      {
        "name": "Kevin Garcia",
        "plan": "Standard",
        "joined": "2024-02-05",
        "status": "Active"
      },
      {
        "name": "Amanda Clark",
        "plan": "Premium",
        "joined": "2024-03-10",
        "status": "Active"
      }
    ]
  }
]

  return (
    <div className='w-full border border-gray-400 flex flex-col bg-zinc-900 rounded-lg min-h-screen'>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4">
          <div className="flex items-center gap-3">
            <Users className="text-[#39FF14] w-6 h-6" />
            <div>
              <h1 className="text-xl font-semibold text-white">
               Trainer-Client Assignments
              </h1>
              <p className="text-sm text-gray-400">
               Detailed breakdown of clients under each trainer
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TrainerAndClients
