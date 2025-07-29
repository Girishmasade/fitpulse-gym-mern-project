import React, { useState } from "react";

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

    // TODO: Call backend API to change password here

    alert("Password updated!");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="w-full flex justify-center items-center py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 bg-opacity-90 backdrop-blur-md rounded-xl border border-[#39FF14] p-6 space-y-5 text-white shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center">Change Password</h2>

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
    </div>
  );
};

export default ChangePassword;
