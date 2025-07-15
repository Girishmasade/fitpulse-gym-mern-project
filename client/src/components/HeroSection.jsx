import { Link } from "react-router-dom";
import electricSvg from "/electric.svg";
import {
  ChevronRight,
} from "lucide-react";

const HeroSection = () => {
 

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">
      <div className="relative w-full max-w-[1200px] min-h-screen flex items-center justify-center">
        {/* Glowing Blobs */}
        <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-green-500 blink-glow absolute top-10 left-4 sm:top-20 sm:left-10" />

        <div className="w-16 h-16 shadow-green-600 shadow-2xl rounded-2xl bg-black blinkk absolute top-20 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <img
            src={electricSvg}
            alt="Electric"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-green-900 rounded-full blink absolute bottom-40 left-10 sm:left-20" />

        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-500 rounded-full bounce absolute bottom-40 right-10 sm:right-20" />

        {/* Center Content */}
        <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#39FF14] to-cyan-400 text-transparent bg-clip-text">
              Train Hard.
            </h1>
            <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold mt-2">
              Manage Smart.
            </h4>
            <p className="max-w-xl sm:max-w-2xl text-gray-300 mt-4 text-sm sm:text-base md:text-xl">
              Transform your fitness journey with our comprehensive gym
              management system. Track workouts, manage memberships, and achieve
              your goals.
            </p>

            <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <button className="w-full sm:w-[170px] bg-[#39FF14] hover:bg-[#37ff14ce] ring-[#00FF80] shadow-[0_0_20px_3px_rgba(0,255,100,0.4)] scale-105 cursor-pointer text-black font-semibold px-5 py-2 rounded-xl transition duration-300 text-lg sm:text-xl flex items-center justify-center gap-2">
                  Join Now <ChevronRight />
                </button>
              </Link>
              <Link to="/login">
                <button className="w-full cursor-pointer sm:w-[100px] border border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 font-semibold px-5 py-2 rounded-xl transition duration-300 shadow-md text-lg sm:text-xl">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
