import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NutritionData } from "../../../../utils/Nutrition";
import NutritionCardFormData from "./NutritionCardFormData";

const NutritionCardForm = () => {
  const [meals, setMeals] = useState(NutritionData);
  const [searchTerm, setSearchTerm] = useState("");
  const [addedMeals, setAddedMeals] = useState([]);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (searchTerm === "") {
      setMeals(NutritionData);
    } else {
      setMeals(
        NutritionData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      // console.log(`Filtered meals: ${searchTerm}`, meals);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(`Search term changed: ${e.target.value}`);
    console.log(`Current meals:`, meals);
  };

  const handleAddMeal = (meals) => {
    setAddedMeals((prev) => [...prev, meals]);
    setQuantity((prev) => prev + 1)
    // console.log(addedMeals);
  };

  const removeMeal = (meals) => {
    setAddedMeals((prev) => prev.filter((item) => item.id !== meals.id))
  }

  useEffect(() => {
    console.log("Added meals updated:", addedMeals);
  }, [addedMeals, quantity]);

  return (
    <div className="flex flex-col p-3 rounded-lg">
      <h1 className="flex gap-2 items-center text-center text-2xl font-semibold">
        <Plus className="text-cyan-600" />
        Add Food
      </h1>
      <span className="tex-sm text-gray-400">
        Search and add food items to your meals
      </span>

      <div className="flex flex-col mt-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full rounded-lg p-2">
            <legend className="fieldset-legend">Browsers</legend>
            <select
              defaultValue="Pick a color"
              className="select select-info w-full rounded-lg"
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Snacks</option>
              <option>Dinner</option>
            </select>
          </div>

          <div className="w-full p-2">
            <legend className="fieldset-legend">Quantity</legend>
            <input
              type="number"
              className="input input-info validator w-full rounded-lg"
              required
              placeholder="Type a number between 1 to 10"
              min="1"
              defaultValue={1}
              max="10"
            />
          </div>
        </div>
        <div className="p-2 mt-2 w-full">
          <label className="input w-full input-info rounded-lg">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              onChange={handleSearchChange}
              required
              placeholder="Search"
            />
          </label>
        </div>
        <div
          className={`z-50 overflow-auto w-full rounded-lg p-2 ${
            searchTerm ? "bg-gray-800" : ""
          }`}
        >
          {searchTerm && (
            <div className="flex flex-col p-2 text-black">
              {searchTerm && meals.length === 0 ? (
                <span>No result found</span>
              ) : (
                meals.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
                  >
                    <h1>{item.name}</h1>
                    <span className="text-gray-500">{item.calories} kcal</span>
                    <span className="text-gray-500">
                      {item.protein}g protein
                    </span>
                    <span className="text-gray-500">{item.carbs}g carbs</span>
                    <span className="text-gray-500">{item.fat}g fat</span>
                    <span className="text-gray-500">Qty: {item.quantity}</span>
                    <span className="text-gray-500">Meal: {item.mealType}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddMeal(item)}
                    >
                      Add
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
   
    </div>
  );
};

export default NutritionCardForm;
