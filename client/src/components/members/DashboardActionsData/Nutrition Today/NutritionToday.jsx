import { Apple, Plus } from "lucide-react";
import { useState } from "react";
import NutritionTodayCard from "./NutritionTodayCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NutritionToday = () => {
  const navigate = useNavigate()
  return (
    <motion.div
       initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
      className="flex flex-col p-4 px-6 gap-5 bg-base-200 rounded-md h-[470px]"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold flex gap-2 items-center">
          <Apple className="colour" />
          Nutrition Today
        </h2>
        <p>Track your daily intake</p>
      </div>

      <div className="text-center my-2">
        <h1 className="text-3xl font-bold">1850</h1>
        <p className="text-sm text-gray-400">of 2200 calories</p>

        <progress
          className="progress progress-success colour w-full"
          value="1850"
          max="2200"
        ></progress>
      </div>

      <div className="space-y-2">
        {/* Protein */}
        <div>
          <div className="flex justify-between text-sm">
            <span>Protein</span>
            <span>125g / 150g</span>
          </div>
          <progress
            className="progress progress-success w-full"
            value="125"
            max="150"
          ></progress>
        </div>

        {/* Carbs */}
        <div>
          <div className="flex justify-between text-sm">
            <span>Carbs</span>
            <span>180g / 220g</span>
          </div>
          <progress
            className="progress progress-info w-full"
            value="180"
            max="220"
          ></progress>
        </div>

        {/* Fats */}
        <div>
          <div className="flex justify-between text-sm">
            <span>Fats</span>
            <span>65g / 75g</span>
          </div>
          <progress
            className="progress progress-warning w-full"
            value="65"
            max="75"
          ></progress>
        </div>
      </div>
      <div className="card-actions justify-center mt-4">
        <button
          className="btn btn-outline btn-accent w-full flex gap-2"
          onClick={() => navigate('/member/nutrition')}
        >
          <Plus /> Log Meal
        </button>
      </div>
    </motion.div>
  );
};

export default NutritionToday;
