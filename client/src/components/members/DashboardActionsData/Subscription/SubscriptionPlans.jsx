import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPlan, setPeriod } from "../../../../redux/api/subscriptionStoreSlice";
import { Check } from "lucide-react";

const currencySymbol = "₹"; 

const SubscriptionPlans = () => {
  const { currentPlan, period, subscription } = useSelector(
    (state) => state.subscription
  );
  const dispatch = useDispatch();

  const handlePeriodChange = (value) => {
    dispatch(setPeriod(value));
  };

  const handleSelectPlan = (plan) => {
    dispatch(setCurrentPlan(plan));
  };

  const handleKeySelect = (e, plan) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelectPlan(plan);
    }
  };

  return (
    <div className="w-[80%] overflow-y-auto bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-white">Choose Your Plan</h2>
        <p className="text-gray-400 text-sm">
          Select the membership that fits your fitness goals
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => handlePeriodChange("monthly")}
          className={`btn btn-sm ${
            period === "monthly" ? "bg-[#39ff14] text-black" : "btn-ghost"
          }`}
          aria-pressed={period === "monthly"}
        >
          Monthly
        </button>
        <button
          onClick={() => handlePeriodChange("yearly")}
          className={`btn btn-sm ${
            period === "yearly" ? "bg-[#39ff14] text-black" : "btn-ghost"
          }`}
          aria-pressed={period === "yearly"}
        >
          Yearly ( Save 20% )
        </button>
      </div>

      <div className="mt10 grid grid-rows-3 gap-4">
        {subscription.map((plan, index) => {
          const price = period === "monthly" ? plan.monthlyPlan : plan.yearlyPlan;
          const isSelected = currentPlan?.name === plan.name;

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectPlan(plan)}
              onKeyDown={(e) => handleKeySelect(e, plan)}
              className={`card relative border rounded-lg p-6 mt-6 bg-gray-900 transition-all outline-none
                ${isSelected ? "plan-card-selected" : "border border-gray-700"}`}
              aria-pressed={isSelected}
              aria-label={`${plan.name} plan`}
            >
              {plan.name === "Premium" && (
                <span className="badge badge-success relative -top-7">Most Popular</span>
              )}

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                </div>
                <div
                  className={`plan-dot ml-4 mt-1 ${isSelected ? "plan-dot-selected" : ""}`}
                  aria-hidden="true"
                />
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-[#39ff14]">
                  {currencySymbol}{price}
                </span>
                <span className="text-lg text-gray-400">
                  /{period === "monthly" ? "month" : "year"}
                </span>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
