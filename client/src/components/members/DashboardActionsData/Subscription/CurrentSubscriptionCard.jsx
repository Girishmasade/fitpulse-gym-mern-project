import React from "react";
import { useSelector } from "react-redux";
import { CheckCircle } from "lucide-react"; // icon

const CurrentSubscriptionCard = () => {
  const { period, currentPlan, loading} = useSelector(
    (state) => state.subscription
  );

  // Format date helper
  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toISOString().split("T")[0]; // YYYY-MM-DD
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <span className="text-gray-400 animate-pulse">
          Loading subscription...
        </span>
      </div>
    );
  }

  // if (!currentPlan) {
  //   return (
  //     <div className="flex items-center justify-center h-48">
  //       <span className="text-gray-500">No active subscription</span>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 text-green-500">
        <CheckCircle className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Current Subscription</h2>
      </div>

      {/* Subscription Info */}
      <div className="grid grid-cols-4 text-sm text-gray-300">
        <div className="flex flex-col">
          <span className="text-gray-400">Plan</span>
          <span className="font-medium text-white">
            {currentPlan?.name || "N/A"}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400">Status</span>
          <span
            className={`px-3 py-1 text-xs rounded-full w-fit mt-1 ${
              currentPlan?.status === "active"
                ? "bg-green-900 text-green-400"
                : "bg-red-900 text-red-400"
            }`}
          >
            {currentPlan?.status || "Unknown"}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400">Next Billing</span>
          <span className="text-white">
            {formatDate(currentPlan?.nextBillingDate)}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400">Amount</span>
          <span className="text-green-400 font-medium">
            {currentPlan?.price
              ? `$${currentPlan.price}/${period || "month"}`
              : "—"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentSubscriptionCard;
