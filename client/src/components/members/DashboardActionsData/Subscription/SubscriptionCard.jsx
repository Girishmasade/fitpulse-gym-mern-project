import React from "react";
import { CreditCard, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const SubscriptionCard = () => {
  const subscriptions = [
    {
      id: 1,
      plan: "Free",
      price: 0,
      interval: "month",
      status: "Inactive",
      nextBilling: "-",
      daysLeft: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
      {subscriptions.map((subscription) => (
        <div
          key={subscription.id}
          className="bg-base-200 rounded-xl p-5 shadow-md w-80 space-y-4"
        >
          {/* Header */}
          <div className="flex items-center gap-2 text-lg font-semibold">
            <CreditCard className="text-cyan-400" size={20} />
            Subscription
          </div>
          <p className="text-sm text-gray-400">Manage your membership</p>

          {/* Plan */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-400">
              {subscription.plan}
            </h2>
            <p className="text-sm text-gray-300">
              ${subscription.price}/{subscription.interval}
            </p>
          </div>

          {/* Status */}
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Status</span>
            <span
              className={`flex items-center gap-1 ${
                subscription.status === "Active"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  subscription.status === "Active"
                    ? "bg-green-400"
                    : "bg-red-400"
                }`}
              ></span>
              {subscription.status}
            </span>
          </div>

          {/* Next Billing */}
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Next Billing</span>
            <span className="text-gray-200">{subscription.nextBilling}</span>
          </div>

          {/* Days Left */}
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Days Left</span>
            <span className="text-cyan-400 font-medium">
              {subscription.daysLeft} days
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-3">
            <Link to={'/member/subscription'}>
            <button className="btn bg-cyan-400 text-black font-semibold hover:bg-cyan-300 w-full">
              <DollarSign size={18} /> Manage Plan
            </button>
            </Link>
            <Link to={'/member/subscription/history'}>
            <button className="btn btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 w-full">
              <CreditCard size={18} /> Payment History
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCard;
