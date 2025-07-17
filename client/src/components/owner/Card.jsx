import { Activity, ChartNoAxesCombined, CircleDollarSign, Users } from 'lucide-react'
import React from 'react'

const Card = () => {
    const cardData = [
        {
            title: "Total Revenue",
            price: "$47,280",
            icon: <CircleDollarSign />
        },
            {
            title: "Active Members",
            price: "$2,847",
            icon: <Users />
        },
            {
            title: "Monthly Growth",
            price: "$23.4%",
            icon: <ChartNoAxesCombined />
        },
            {
            title: "Classes Today",
            price: "48",
            icon: <Activity />
        }
    ]
  return (
    <div className='flex gap-4 justify-around'>
      {cardData.map((card, index) => (
        <div key={index} className="border-gray-900 border w-[300px] h-[130px] rounded-md flex justify-between items-center px-4">
            <div className="flex flex-col gap-2 p-3">
                <h1 className='text-gray-500' >{card.title}</h1>
                <h2 className='text-lg text-white'>{card.price}</h2>
            </div>

            <div className='items-center flex justify-center text-blue-500 bg-[#39FF14] w-13 h-13 rounded-full'>
                {card.icon}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Card
