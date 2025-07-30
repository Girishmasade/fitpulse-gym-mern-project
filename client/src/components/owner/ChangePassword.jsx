import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const ChangePassword = ({ show, setShow }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Call backend API here
    alert("Password updated!");
    setShow(false);
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setShow(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="w-full max-w-md bg-zinc-900 border border-[#39FF14] rounded-xl p-6 shadow-xl text-white">
              <Dialog.Title className="text-2xl font-semibold text-center mb-4">
                Change Password
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Current Password */}
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    required
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md bg-gray-800 border border-gray-600"
                  />
                </div>

                {/* New Password */}
                <div className="flex flex-col">
                  <label className="text-sm mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    required
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md bg-gray-800 border border-gray-600"
                  />
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md bg-gray-800 border border-gray-600"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setShow(false)}
                    className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-md transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-[#39FF14] hover:bg-green-400 text-black font-semibold py-2 rounded-md transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChangePassword;
