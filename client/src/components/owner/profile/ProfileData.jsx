import { Crown, Settings, Shield } from "lucide-react";
import ProfileImage from "./ProfileImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChangePassword from "../ChangePassword";

const ProfileData = () => {
  const [isEditing, setisEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const toggleEdit = () => {
    setisEditing(!isEditing);
  };

  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    phone: "",
    bio: "",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 p-2 w-full">
      {/* LEFT SIDE: Admin Profile Section */}
      <div className="flex flex-col gap-4 w-full lg:w-[60%] bg-zinc-900 p-3 rounded-md">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl text-white font-semibold">
              Administrator Information
            </h1>
            <span className="text-gray-600 text-sm">
              Your personal and professional details
            </span>
          </div>

          <button
            onClick={toggleEdit}
            className="p-2 border border-[#39FF14] hover:bg-[#37ff14a4] w-[80px] hover:text-black cursor-pointer h-[40px] rounded-md text-sm"
          >
            {isEditing ? "Save" : "Update"}
          </button>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-4 pt-4">
            <ProfileImage isEditing={isEditing} />

            <div className="flex flex-col pl-4 gap-1">
              <h1 className="text-lg text-white font-semibold">Admin User</h1>
              <p className="text-gray-400">System Administrator</p>
              <p className="flex items-center justify-center w-[150px] rounded-lg bg-red-400 hover:bg-[#39FF14] hover:cursor-pointer gap-2 text-sm text-black">
                <Crown className="w-4 h-4" /> Super Admin
              </p>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-sm">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-200 text-md">Full Name</label>
              <input
                type="text"
                name="fullname"
                disabled={!isEditing}
                placeholder="Admin User"
                value={formData.fullname}
                onChange={onchange}
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-white"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-200 text-md">Email</label>
              <input
                type="email"
                name="email"
                disabled={!isEditing}
                placeholder="admin@gmail.com"
                value={formData.email}
                onChange={onchange}
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-white"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-200 text-md">Phone</label>
              <input
                type="text"
                name="phone"
                disabled={!isEditing}
                value={formData.phone}
                onChange={onchange}
                placeholder="Enter Your Phone no."
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-white"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-200 text-md">Department</label>
              <input
                type="text"
                value="Management"
                disabled
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-200 text-md">Start Date</label>
              <input
                type="text"
                value="27/3/2025"
                disabled
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-white"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-gray-200 text-md">Bio</label>
              <textarea
                name="bio"
                disabled={!isEditing}
                value={formData.bio}
                onChange={onchange}
                className="bg-[#1e1e1e] px-3 py-2 rounded-md border border-gray-600 text-white resize-none min-h-[100px]"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col gap-4 w-full lg:w-[40%] p-3 rounded-md">
        <div className="bg-zinc-900 p-3 rounded-md flex flex-col gap-4 py-5">
          <h1 className="text-xl font-semibold text-gray-300 flex gap-3 items-center">
            <Settings />
            Quick Actions
          </h1>

          <div className="flex items-center justify-center p-2 text-md border border-[#39FF14] cursor-pointer rounded-lg hover:bg-[#39FF14] text-[#39FF14] hover:text-black gap-5">
            <Link to="/owner/settings">System Settings</Link>
          </div>
          <div className="flex items-center justify-center p-2 text-md border border-[#14dcff] cursor-pointer rounded-lg hover:bg-[#14dcff] text-[#14dcff] hover:text-black gap-5">
            <Link to="/owner/users">Manage Users</Link>
          </div>
          <button
            onClick={() => setShowPasswordForm(true)}
            className="flex items-center justify-center p-2 text-md border border-[#afb8ac] cursor-pointer rounded-lg hover:bg-[#afb8ac] text-[#afb8ac] hover:text-black gap-5"
          >
            Change Password
          </button>
        </div>

        <div className="bg-zinc-900 p-3 rounded-md flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-gray-300 flex gap-3 items-center">
            <Shield className="text-red-500" />
            Access Permissions
          </h1>

          {["User Management", "System Settings", "Data Export"].map(
            (item, idx) => (
              <div
                key={idx}
                className="flex justify-between bg-gray-800 p-2 rounded-md"
              >
                <div className="flex flex-col p-1">
                  <p className="text-sm font-semibold">{item}</p>
                  <span className="text-xs text-[#39FF14]">Full Access</span>
                </div>
                <p className="border border-red-500 h-[30px] py-1 rounded-lg text-red-500 px-1">
                  critical
                </p>
              </div>
            )
          )}
        </div>
      </div>
      <ChangePassword show={showPasswordForm} setShow={setShowPasswordForm} />
    </div>
  );
};

export default ProfileData;
