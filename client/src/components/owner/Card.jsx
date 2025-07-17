import { Activity, ChartNoAxesCombined, CircleDollarSign, Users } from 'lucide-react'
import React from 'react'

const Card = () => {
  const cardData = [
    {
      title: "Total Revenue",
      price: "$47,280",
      icon: <CircleDollarSign />,
    },
    {
      title: "Active Members",
      price: "$2,847",
      icon: <Users />,
    },
    {
      title: "Monthly Growth",
      price: "23.4%",
      icon: <ChartNoAxesCombined />,
    },
    {
      title: "Classes Today",
      price: "48",
      icon: <Activity />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-gray-900 rounded-md flex justify-between items-center px-4 py-3 bg-[#0c0f14]"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-500 text-sm">{card.title}</h1>
            <h2 className="text-xl text-white font-semibold">{card.price}</h2>
          </div>

          <div className="flex items-center justify-center text-blue-500 bg-[#39FF14] w-10 h-10 rounded-full">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
