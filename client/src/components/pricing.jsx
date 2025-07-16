import React, { useState } from "react";

const plansData = {
  monthly: [
    {
      name: "Basic",
      price: "$29",
      subtext: "or $290/year",
      features: [
        "Up to 100 members",
        "Basic workout plans",
        "Mobile app access",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$59",
      subtext: "or $590/year",
      features: [
        "Up to 500 members",
        "Advanced analytics",
        "Custom workout plans",
        "Chat support",
        "API access",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      subtext: "or $990/year",
      features: [
        "Unlimited members",
        "Multi-location support",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
      ],
      highlight: false,
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "$290",
      subtext: "billed yearly",
      features: [
        "Up to 100 members",
        "Basic workout plans",
        "Mobile app access",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$590",
      subtext: "billed yearly",
      features: [
        "Up to 500 members",
        "Advanced analytics",
        "Custom workout plans",
        "Chat support",
        "API access",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$990",
      subtext: "billed yearly",
      features: [
        "Unlimited members",
        "Multi-location support",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
      ],
      highlight: false,
    },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const plans = plansData[billing];

  return (
    <div className=" px-4 py-20 text-white w-full min-h-screen mt-14">
      <div className="text-center mb-10 flex flex-col items-center gap-4">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#39FF14] to-cyan-400">
          Simple Pricing
        </h2>
        <p className="text-gray-200 mt-3 text-xl">
          Choose the perfect plan for your gym
        </p>

        {/* Toggle Switch */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span
            className={`cursor-pointer ${
              billing === "monthly" ? "text-[#39FF14]" : "text-white"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </span>
          <div
            className="w-14 h-7 bg-gray-700 rounded-full relative cursor-pointer"
            onClick={() =>
              setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"))
            }
          >
            <div
              className={`w-6 h-6 rounded-full bg-[#39FF14] absolute top-[2px] transition-transform duration-300 ${
                billing === "monthly" ? "left-[2px]" : "left-[30px]"
              }`}
            />
          </div>
          <span className="text-xs px-2 py-1 rounded bg-[#39FF14] text-black font-semibold">
            Save 20%
          </span>
          <span
            className={`cursor-pointer ${
              billing === "yearly" ? "text-[#39FF14]" : "text-white"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-10 pt-2">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative w-full sm:w-[300px] lg:w-[340px] bg-[#11161c] rounded-xl p-6 border border-[#1e2838] hover:scale-105 transition duration-300 ${
              plan.highlight ? "ring-2 ring-[#39FF14] shadow-[0_0_20px_3px_rgba(0,255,100,0.4)]" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#39FF14] text-black text-sm font-semibold px-4 py-1 rounded-full z-10">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold mb-2 items-center flex flex-col justify-center">{plan.name}</h3>
            <div className="text-3xl font-extrabold items-center flex flex-col justify-center text-[#39FF14]">
              {plan.price}
              <span className=" text-base text-white font-medium">
                {billing === "monthly" ? "/month" : ""}
              </span>
            </div>
            <p className="text-gray-400 items-center flex flex-col justify-center text-sm mt-1">{plan.subtext}</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#39FF14]">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full text-center py-2 rounded-lg font-semibold transition ${
                plan.highlight
                  ? "bg-[#39FF14] text-black"
                  : "border border-[#39FF14] hover:bg-[#39FF14] hover:text-black"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
