import React from "react";
import {
  Users,
  Calendar,
  TrendingUp,
  Smartphone,
  Lock,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-black" />,
      title: "Membership Management",
      description:
        "Streamline member registration, renewals, and account management with our intuitive system.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-black" />,
      title: "Workout Plans",
      description:
        "Create personalized workout routines and track progress with detailed analytics.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-black" />,
      title: "Analytics Dashboard",
      description:
        "Get insights into gym performance, member engagement, and revenue metrics.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-black" />,
      title: "Mobile App",
      description:
        "Access everything on-the-go with our native mobile application for iOS and Android.",
    },
    {
      icon: <Lock className="w-10 h-10 text-black" />,
      title: "Secure & Private",
      description:
        "Bank-level security with end-to-end encryption to protect your data and privacy.",
    },
    {
      icon: <Zap className="w-10 h-10 text-black" />,
      title: "Real-time Sync",
      description:
        "Instant updates across all devices with real-time synchronization and notifications.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#111818] p-8">
      <div className="flex flex-col gap-2 text-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
          Powerful Features
        </h1>
        <p className="max-w-xl sm:max-w-2xl text-gray-300 mt-4 text-sm sm:text-base md:text-xl">
          Everything you need to run a successful fitness business with
          cutting-edge technology
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full pt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-xl flex flex-col items-center justify-center gap-5 bg-[#0d1414] p-6 text-center transition-all duration-300 hover:ring-1 hover:ring-[#00FF80] hover:shadow-[0_0_20px_3px_rgba(0,255,100,0.4)] hover:scale-105 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-t from-[#00FF80] to-cyan-400 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              {feature.icon}
            </div>

            <h1>{feature.title}</h1>
            <h3>{feature.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
