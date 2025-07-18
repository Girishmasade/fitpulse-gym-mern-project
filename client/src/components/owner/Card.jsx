import { Activity, ChartBar, CircleDollarSign, Users } from 'lucide-react';
import React from 'react';

const Card = () => {
  const cardData = [
    {
      title: "Total Revenue",
      price: "$47,280",
      icon: <CircleDollarSign className="w-5 h-5 text-black" />,
    },
    {
      title: "Active Members",
      price: "2,847",
      icon: <Users className="w-5 h-5 text-black" />,
    },
    {
      title: "Monthly Growth",
      price: "23.4%",
      icon: <ChartBar className="w-5 h-5 text-black" />, 
    },
    {
      title: "Classes Today",
      price: "48",
      icon: <Activity className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-5 py-4 rounded-xl bg-[#0C0F14] shadow-md hover:shadow-xl transition-shadow border border-gray-800"
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">{card.title}</p>
            <h2 className="text-xl font-semibold text-white">{card.price}</h2>
          </div>

          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#39FF14]">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
