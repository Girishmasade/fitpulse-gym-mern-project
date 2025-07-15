import React from "react";
import { UserCheck, ChartColumn, Headset, Award } from "lucide-react";

const StatsSection = () => {
  const Stats = [
    {
      icon: <UserCheck className="w-10 h-10 text-[#00FF80]" />,
      value: "50K+",
      label: "Active Members",
    },
    {
      icon: <Award className="w-10 h-10 text-[#00F0FF]" />,
      value: "1.2K+",
      label: "Certified Trainers",
    },
    {
      icon: <ChartColumn className="w-10 h-10 text-[#00FF80]" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Headset className="w-10 h-10 text-[#00F0FF]" />,
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <div className="bg-[#0A0F0F] py-16 px-4 sm:px-6 lg:px-8 relative w-full">
      {/* Floating Circles - Now fully visible */}
      <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-blue-900 rounded-full animate-bounce bottom-14 left-4 sm:left-10 z-0" />
      <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-green-900 rounded-full animate-pulse delay-1000 bottom-54 right-4 sm:right-10 z-0" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#00FF80] to-[#00F0FF] text-transparent bg-clip-text mb-4">
          Trusted Globally
        </h1>
        <p className="text-base sm:text-lg mb-10 text-[#B0B0B0]">
          Join the fitness revolution that's transforming gyms worldwide
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {Stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="w-20 h-20 rounded-full bg-[#0F1C1E] border border-[#1F3B3D] flex items-center justify-center">
                {stat.icon}
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-extrabold ${
                  index % 2 === 0 ? "text-[#00FF80]" : "text-[#00F0FF]"
                }`}
              >
                {stat.value}
              </h3>
              <p className="text-base sm:text-lg text-[#AAAAAA] font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
