import React, { useState } from "react";
import { ArrowLeft, BookOpen, Clock4, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NutritionCardForm from "./NutritionCardForm";
import NutritionCardFormData from "./NutritionCardFormData";

const NutritionTodayCard = () => {
  let todayDate = new Date();
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-50 lg:pt-9 pt-6 lg:px-20 px-2 min-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <button
            onClick={backButtonHandler}
            type="button"
            className="hover:bg-[#39ff14] hover:bg-opacity-20 hover:text-black p-2 rounded-full transition-colors duration-300"
          >
            <ArrowLeft />
          </button>
          <div className="flex flex-col">
            <h1 className="lg:text-3xl text-lg font-bold">
              Meal{" "}
              <span className="bg-gradient-to-tr from-[#39ff14] to-cyan-600 bg-clip-text text-transparent">
                Logging
              </span>
            </h1>
            <span className="text-md text-gray-400">
              Track your nutrition and stay on target
            </span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button className=" py-2 px-5 rounded-lg text-md gap-5 text-cyan-300 cursor-pointer flex items-center justify-center commonColourBgHover border border-cyan-500">
            <BookOpen size={16} /> Diet Plans
          </button>
          <h1 className="flex gap-2">
            <Clock4 className="text-sm colour" />{" "}
            {todayDate.toLocaleDateString("en-GB")}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-7 pt-10">
        {/* Left Card */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-cyan-500 w-[40%] h-[500px] p-4 rounded-xl bg-gray-900 text-white flex flex-col gap-6"
        >
          <div className="flex flex-col">
            <h1 className="flex gap-2 text-lg font-bold">
              <Target className="colour" />
              Today's Summary
            </h1>
            <span className="text-gray-400">Your nutrition progress</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[280px] bg-gray-900 rounded-xl p-4 flex flex-col gap-6">
          <NutritionCardForm/>
        </motion.div>
      </div>

      <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
           className="bg-gray-900 rounded-xl p-4 flex flex-col mt-9 mb-2">
        
      </motion.div>
    </div>
  );
};

export default NutritionTodayCard;
