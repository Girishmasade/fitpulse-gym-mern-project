import { Apple } from "lucide-react";
import React from "react";
import { NutritionData } from "../../../../utils/Nutrition";

const NutritionCardFormData = () => {
  const Data = NutritionData

const totals = Data.reduce((acc, item) => {
    if (!acc[item.mealType]) {
        acc[item.mealType] = 0
    }

    acc[item.mealType] += item.calories * item.quantity;
    return acc;
}, {})

console.log(totals.Breakfast, totals.Lunch, totals.Snacks, totals.Dinner);

const Meals = Object.entries(totals)

  return (
    <div className="h-[200px] p-2 rounded-lg flex flex-col overflow-auto">
      <h1 className="flex gap-2 items-center text-center text-2xl font-semibold">
        <Apple className="colour" />
        Today's Meals
      </h1>
      <span className="tex-sm text-gray-400">
        Review and manage your daily food intake
      </span>

         <div className="mt-2 grid lg:grid-cols-4 sm:grid-cols-2 items-center gap-3">
        {Meals.map(([mealType, calories]) => (
          <div
            key={mealType}
            className="bg-gray-800 p-4 rounded-lg flex flex-col gap-2 hover:bg-gray-700/80 transition"
          >
            <h1 className="text-md font-semibold text-white">{mealType}</h1>
            <span className="text-gray-400">🔥 {calories} cal</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionCardFormData;
