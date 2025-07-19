import React from "react";
import { CheckCircle, Edit, Plus, Trash } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Basic Fitness",
      price: 29,
      monthly: "monthly",
      year: "yearly",
      yearly: 290,
      activeMembers: 1250,
      features: [
        "Gym access during off-peak hours",
        "Basic fitness equipment",
        "Locker room access",
        "Mobile app access",
      ],
      highlight: false,
    },
    {
      name: "Premium",
      price: 59,
      monthly: "monthly",
      year: "yearly",
      yearly: 590,
      activeMembers: 1420,
      features: [
        "24/7 gym access",
        "All equipment & classes",
        "Personal training session (1/month)",
        "Nutrition consultation",
        "Premium app features",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: 99,
      monthly: "monthly",
      year: "yearly",
      yearly: 990,
      activeMembers: 177,
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Spa & recovery access",
        "Meal prep service",
        "Priority booking",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="p-4 text-white">
      <div className="mb-6 flex justify-between">
       <div className="flex flex-col">
         <h1 className="text-2xl font-bold">Membership Plans</h1>
        <p className="text-gray-400 text-sm">
          Manage your gym's membership offerings
        </p>
       </div>

       <button className="flex rounded-lg bg-[#00ff62] h-10 items-center justify-center px-2 text-black gap-3"><Plus/> create plan</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border ${
              plan.highlight
                ? "border-green-500 shadow-lg shadow-green-800/10"
                : "border-gray-700"
            } p-6 bg-[#0F172A] flex flex-col justify-between`}
          >
            <div className="flex flex-col gap-4">
              <div className="text-center">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <div className="mt-2 text-4xl font-bold text-green-400">
                  ${plan.price} <span className="text-base font-normal">/ {plan.monthly}</span>
                </div>
                <div className="text-gray-400 text-sm">
                  ${plan.yearly} / {plan.year}
                </div>
                <p className="text-sm mt-1">{plan.activeMembers} active members</p>
              </div>

              <ul className="mt-4 space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 border border-gray-500 rounded-md">
                <Edit size={16} /> Edit
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm border cursor-pointer border-red-600 hover:bg-red-700 rounded-md">
                <Trash size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
