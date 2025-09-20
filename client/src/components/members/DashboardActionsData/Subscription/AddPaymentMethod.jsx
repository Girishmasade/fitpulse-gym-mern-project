import { CreditCard, Plus, Landmark, QrCode } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddPaymentSubscriptionModel from "./AddPaymentSubscriptionModel";

const AddPaymentMethod = () => {
  // subscription slice stored under subscriptionStore in your store (adjust if different)
  const { history } = useSelector((state) => state.subscriptionStore || { history: [] });
  const [openModel, setOpenModel] = useState(false);
  console.log("Payment methods history:", history);

  return (
    <div className="w-[30%] bg-gray-800 rounded-lg border border-gray-700 p-6">
      {/* Header */}
      <h1 className="text-2xl flex gap-2 items-center font-semibold">
        <CreditCard className="text-cyan-500" />
        Payment Method
      </h1>
      <p className="text-sm text-gray-400">Choose how you'd like to pay</p>

      {/* Saved Methods */}
      <div className="mt-8">
        <h3 className="text-sm text-gray-300 font-medium">Saved Payment Methods</h3>

        {Array.isArray(history) && history.length > 0 ? (
          history.map((entry) => {
            // expect normalized entry: { id, method, data, timestamp }
            const { id, method, data } = entry;
            console.log("Rendering payment method:", entry);
            
            return (
              <div
                key={id}
                className="flex items-start gap-3 mt-4 p-4 border border-gray-700 rounded-lg hover:border-cyan-500 transition"
              >
                {method === "card" && data?.cardNumber && (
                  <>
                    <CreditCard className="text-cyan-400 mt-1" />
                    <div className="flex flex-col gap-1 text-sm">
                      <p className="text-gray-400">
                        Card Holder: <span className="text-white">{data.cardHolderName || "Unknown"}</span>
                      </p>
                      <p className="text-gray-400">
                        Card Number:{" "}
                        <span className="text-white">
                          {(() => {
                            const raw = data.cardNumber ?? "";
                            return raw.length >= 4 ? `**** **** **** ${raw.slice(-4)}` : raw || "****";
                          })()}
                        </span>
                      </p>
                      <p className="text-gray-400">
                        Expiry: <span className="text-white">{data.expiryDate || "--/--"}</span>
                      </p>
                    </div>
                  </>
                )}

                {method === "upi" && data?.upiId && (
                  <>
                    <QrCode className="text-cyan-400 mt-1" />
                    <div className="flex flex-col gap-1 text-sm">
                      <p className="text-gray-400">
                        UPI ID: <span className="text-white">{data.upiId}</span>
                      </p>
                      <p className="text-gray-400">
                        Provider: <span className="text-white">{data.upiProviderName || "Unknown"}</span>
                      </p>
                    </div>
                  </>
                )}

                {method === "netBanking" && data?.bankName && (
                  <>
                    <Landmark className="text-cyan-400 mt-1" />
                    <div className="flex flex-col gap-1 text-sm">
                      <p className="text-gray-400">
                        Bank: <span className="text-white">{data.bankName}</span>
                      </p>
                    </div>
                  </>
                )}

                {/* If shape differs, as a fallback show JSON */}
                {!["card", "upi", "netBanking"].includes(method) && (
                  <div className="text-sm text-gray-400">
                    <pre className="text-xs text-gray-400">{JSON.stringify(entry, null, 2)}</pre>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col gap-2 mt-6 justify-center items-center text-gray-400">
            <Plus className="w-8 h-8" />
            <p className="text-sm">No payment method added yet</p>
          </div>
        )}
      </div>

      <hr className="mt-4 border-gray-700" />

      {/* Add Button */}
      <button
        onClick={() => setOpenModel(true)}
        className="w-full rounded-lg p-2 my-4 border border-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-black text-cyan-300 transition"
      >
        Add Payment Method
      </button>

      <hr className="border-gray-700" />

      {/* Modal */}
      {openModel && <AddPaymentSubscriptionModel openModel={openModel} setOpenModel={setOpenModel} />}
    </div>
  );
};

export default AddPaymentMethod;
