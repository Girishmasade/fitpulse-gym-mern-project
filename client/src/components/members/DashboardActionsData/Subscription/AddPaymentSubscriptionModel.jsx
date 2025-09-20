import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setHistory } from "../../../../redux/api/subscriptionStoreSlice";
import { CreditCard, ThumbsUp, Landmark, X } from "lucide-react";


const AddPaymentSubscriptionModel = ({ openModel, setOpenModel }) => {
  if (!openModel) return null; // safe early return

  const [tabs, setTabs] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    zipCode: ""
  });
  const [upi, setUpi] = useState({
    upiId: "",
    upiProviderName: ""
  });
  const [netBanking, setNetBanking] = useState({ bankName: "" });

  const dispatch = useDispatch();

  const setInHistory = (rawData) => {
    // basic validation
    if (tabs === "card") {
      if (!rawData.cardNumber.trim() || !rawData.cardHolderName.trim()) {
        alert("Please provide card number and cardholder name.");
        return;
      }
    } else if (tabs === "upi") {
      if (!rawData.upiId.trim()) {
        alert("Please provide a UPI ID.");
        return;
      }
    } else if (tabs === "netBanking") {
      if (!rawData.bankName) {
        alert("Please select a bank.");
        return;
      }
    }

    // normalize payload: add an id and method type so parent can render correctly
    const payload = {
      id: Date.now().toString(),
      method: tabs,
      timestamp: new Date().toISOString(),
      ...rawData
    };

    dispatch(setHistory(payload)); // adjust this to match your reducer expectations
    setOpenModel(false);
    // optional: reset local state if you want
  };

  const iconForPayment = (type) => {
  if (type === "card")
    return (
      <div className="flex flex-col items-center gap-1">
        <CreditCard className="w-6 h-6" />
        <span className="text-xs">Card</span>
      </div>
    );
  if (type === "upi")
    return (
      <div className="flex flex-col items-center gap-1">
        <ThumbsUp className="w-6 h-6" />
        <span className="text-xs">UPI</span>
      </div>
    );
  if (type === "netBanking")
    return (
      <div className="flex flex-col items-center gap-1">
        <Landmark className="w-6 h-6" />
        <span className="text-xs">NetBank</span>
      </div>
    );
  return null;
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="border w-[30%] bg-gray-800 border-white rounded-lg p-4">
        <button
          onClick={() => setOpenModel(false)}
          className="flex items-end justify-end w-full cursor-pointer hover:text-cyan-500"
        >
          <X />
        </button>

        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-[#39ff14]">Add Payment Method</h1>
          <p className="text-sm text-gray-400">Choose your preferred payment method</p>
        </div>

        <div className="mt-4 flex gap-4">
          {["card", "upi", "netBanking"].map((type) => (
            <div key={type}>
              <button
                onClick={() => setTabs(type)}
                className={`border rounded-lg p-4 ${
                  tabs === type
                    ? "border-cyan-500 text-cyan-500"
                    : "border-gray-600 text-gray-400 hover:border-cyan-500 hover:text-cyan-500"
                }`}
              >
                {iconForPayment(type)}
              </button>
            </div>
          ))}
        </div>

        <hr className="mt-3" />

        <div className="mt-4">
          {tabs === "card" ? (
            <div>
              <form className="flex flex-col gap-4">
                <label>
                  Card Number
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={19}
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, cardNumber: e.target.value })
                    }
                  />
                </label>

                <div className="flex gap-4">
                  <label className="flex-1">
                    Expiry Date
                    <input
                      type="text"
                      className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) =>
                        setFormData({ ...formData, expiryDate: e.target.value })
                      }
                    />
                  </label>

                  <label className="w-1/3">
                    CVC
                    <input
                      type="text"
                      maxLength={4}
                      className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData({ ...formData, cvv: e.target.value })
                      }
                    />
                  </label>
                </div>

                <label>
                  Cardholder Name
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="John Doe"
                    value={formData.cardHolderName}
                    onChange={(e) =>
                      setFormData({ ...formData, cardHolderName: e.target.value })
                    }
                  />
                </label>

                <label>
                  ZIP / Postal Code
                  <input
                    type="text"
                    maxLength={10}
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="12345"
                    value={formData.zipCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipCode: e.target.value })
                    }
                  />
                </label>
              </form>
            </div>
          ) : tabs === "upi" ? (
            <div>
              <form className="flex flex-col gap-4">
                <label>
                  UPI ID
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="example@upi"
                    value={upi.upiId}
                    onChange={(e) => setUpi({ ...upi, upiId: e.target.value })}
                  />
                </label>

                <label>
                  UPI Provider Name
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="Google Pay, PhonePe, Paytm etc"
                    value={upi.upiProviderName}
                    onChange={(e) =>
                      setUpi({ ...upi, upiProviderName: e.target.value })
                    }
                  />
                </label>
              </form>
            </div>
          ) : (
            <div>
              <form className="flex flex-col gap-4">
                <label>
                  Select Your Bank
                  <select
                    className="w-full mt-1 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    value={netBanking.bankName}
                    onChange={(e) =>
                      setNetBanking({ ...netBanking, bankName: e.target.value })
                    }
                  >
                    <option value="">Select Your Bank</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="SBI">State Bank of India</option>
                    <option value="AXIS">Axis Bank</option>
                    <option value="KOTAK">Kotak Mahindra Bank</option>
                    <option value="PNB">Punjab National Bank</option>
                    <option value="IDFC">IDFC First Bank</option>
                    <option value="YESBANK">Yes Bank</option>
                    <option value="INDUSIND">IndusInd Bank</option>
                    <option value="FEDERAL">Federal Bank</option>
                  </select>
                </label>
              </form>
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-4 justify-center items-center w-full">
          <button
            onClick={() => setOpenModel(false)}
            className="w-full p-2 rounded-md border border-gray-400 cursor-pointer bg-transparent hover:bg-[#39ff14] text-white hover:text-black"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              setInHistory(
                tabs === "card" ? formData : tabs === "upi" ? upi : netBanking
              )
            }
            className="w-full bg-cyan-500 p-2 text-black cursor-pointer hover:bg-cyan-400 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentSubscriptionModel;
