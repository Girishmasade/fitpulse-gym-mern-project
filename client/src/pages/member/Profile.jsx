// ProfilePage.jsx
import React, { useState, useRef } from "react";
import {
  Edit3,
  Save,
  X,
  Camera,
  CreditCard,
  Calendar,
  User,
} from "lucide-react";

/**
 * Full Profile Page with View / Edit toggle.
 * - Tailwind classes assumed
 * - Replace icons, colors or layout as you like
 */

const initialProfile = {
  fullName: "Alex Johnson",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  birthday: "1990-03-15",
  gender: "Male",
  emergencyContact: "Jane Johnson - (555) 987-6543",
  memberSince: "January 2024",
  membership: {
    name: "Premium",
    status: "Active",
    joinDate: "January 15, 2024",
    renewal: "July 15, 2024",
    totalPaid: "$354",
    sessionsUsed: 18,
    sessionsLeft: 12,
  },
  stats: {
    workouts: 18,
    totalHours: 12.5,
  },
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);

  // local form state used while editing
  const [form, setForm] = useState(initialProfile);
  const avatarInputRef = useRef(null);

  // start editing (copy current profile into form)
  const handleEdit = () => {
    setForm(profile);
    setEditing(true);
    // focus first input if needed...
  };

  // cancel editing: discard changes
  const handleCancel = () => {
    setForm(profile); // reset
    setEditing(false);
  };

  // save changes: commit form to profile and exit edit mode
  const handleSave = () => {
    // Add simple validation if required
    setProfile((prev) => ({ ...prev, ...form }));
    setEditing(false);
  };

  const onChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onAvatarClick = () => {
    avatarInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // For demo: convert to data URL (not for production)
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm((prev) => ({ ...prev, avatarDataUrl: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#0b0f12] p-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-[#20ff83]">My Profile</h1>
            <p className="text-gray-400 mt-1">Manage your account and preferences</p>
          </div>

          <div className="flex items-center gap-3">
            {editing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 bg-transparent border border-gray-600 text-gray-200 px-4 py-2 rounded-md hover:text-[#20ff83]"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-[#20ff83] text-black px-4 py-2 rounded-md font-semibold hover:brightness-95"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-[#0ef36a] px-4 py-2 rounded-md text-black font-medium hover:brightness-95"
              >
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Main layout: left content + right sidebar */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <div className="col-span-8">
            {/* Basic Information card */}
            <div className="bg-gradient-to-br from-[#0f1315]/80 to-[#0b0e10]/60 border border-[#1f2a2a] rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-1">Basic Information</h2>
              <p className="text-sm text-gray-400 mb-6">Your personal details and contact information</p>

              <div className="flex gap-6">
                {/* Avatar + meta */}
                <div className="w-48">
                  <div className="relative">
                    <div
                      className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden"
                      style={{
                        boxShadow: "inset 0 0 30px rgba(0,0,0,0.6)",
                      }}
                    >
                      {form.avatarDataUrl ? (
                        <img src={form.avatarDataUrl} alt="avatar" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-gray-500">
                          <User className="w-12 h-12" />
                        </div>
                      )}
                    </div>

                    <button
                      onClick={onAvatarClick}
                      className="absolute -bottom-2 left-0 bg-[#10f37a] p-2 rounded-full border border-black shadow-md hover:scale-105"
                      title="Change avatar"
                    >
                      <Camera className="w-4 h-4" />
                    </button>

                    <input
                      type="file"
                      accept="image/*"
                      ref={avatarInputRef}
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </div>

                  <div className="mt-3">
                    <div className="text-lg font-semibold">{profile.fullName}</div>
                    <div className="text-sm text-gray-400">Member since {profile.memberSince}</div>
                    <div className="inline-block mt-2 px-3 py-1 text-xs bg-[#0ef36a] text-black rounded-full font-semibold">Premium Member</div>
                  </div>
                </div>

                {/* Form fields */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Full Name */}
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-300 mb-1">Full Name</span>
                      <input
                        type="text"
                        value={editing ? form.fullName : profile.fullName}
                        onChange={(e) => onChange("fullName", e.target.value)}
                        disabled={!editing}
                        className={`p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                      />
                    </label>

                    {/* Email */}
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-300 mb-1">Email</span>
                      <input
                        type="email"
                        value={editing ? form.email : profile.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        disabled={!editing}
                        className={`p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                      />
                    </label>

                    {/* Phone */}
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-300 mb-1">Phone</span>
                      <input
                        type="text"
                        value={editing ? form.phone : profile.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        disabled={!editing}
                        className={`p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                      />
                    </label>

                    {/* Birthday */}
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-300 mb-1">Birthday</span>
                      <div className="relative">
                        <input
                          type="date"
                          value={editing ? form.birthday : profile.birthday}
                          onChange={(e) => onChange("birthday", e.target.value)}
                          disabled={!editing}
                          className={`w-full p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </label>

                    {/* Gender */}
                    <label className="flex flex-col">
                      <span className="text-sm text-gray-300 mb-1">Gender</span>
                      <select
                        value={editing ? form.gender : profile.gender}
                        onChange={(e) => onChange("gender", e.target.value)}
                        disabled={!editing}
                        className={`p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </label>

                    {/* Emergency Contact */}
                    <label className="flex flex-col col-span-2">
                      <span className="text-sm text-gray-300 mb-1">Emergency Contact</span>
                      <input
                        type="text"
                        value={editing ? form.emergencyContact : profile.emergencyContact}
                        onChange={(e) => onChange("emergencyContact", e.target.value)}
                        disabled={!editing}
                        className={`p-3 rounded-lg bg-[#0d1112] border ${editing ? "border-cyan-500" : "border-[#1f2626]"} focus:outline-none`}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Health & Fitness placeholder (below) */}
            <div className="mt-6 bg-gradient-to-br from-[#0f1315]/80 to-[#0b0e10]/60 border border-[#1f2a2a] rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Health & Fitness</h3>
              <p className="text-gray-400">Track your workouts, body stats and progress here.</p>
              {/* Placeholder content */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="p-4 bg-[#0c1112] rounded-lg border border-[#172021] text-center">
                  <div className="text-3xl font-bold text-[#20ff83]">{profile.stats.workouts}</div>
                  <div className="text-sm text-gray-400">Workouts</div>
                </div>
                <div className="p-4 bg-[#0c1112] rounded-lg border border-[#172021] text-center">
                  <div className="text-3xl font-bold text-[#20ff83]">{profile.stats.totalHours}h</div>
                  <div className="text-sm text-gray-400">Total Time</div>
                </div>
                <div className="p-4 bg-[#0c1112] rounded-lg border border-[#172021] text-center">
                  <div className="text-3xl font-bold text-[#20ff83]">—</div>
                  <div className="text-sm text-gray-400">Goal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column (sidebar) */}
          <div className="col-span-4 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#0f1315]/80 to-[#0b0e10]/60 border border-[#1f2a2a] rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Membership</h4>
                <CreditCard className="text-cyan-400" />
              </div>

              <div className="mt-4 text-center">
                <div className="inline-block px-6 py-2 bg-[#0ef36a] rounded-full text-black font-semibold text-sm">
                  {profile.membership.name}
                </div>
                <div className="text-sm text-gray-400 mt-2">Status: {profile.membership.status}</div>
              </div>

              <div className="mt-4 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Join Date:</span>
                  <span className="text-gray-200">{profile.membership.joinDate}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Renewal:</span>
                  <span className="text-gray-200">{profile.membership.renewal}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Total Paid:</span>
                  <span className="text-[#20ff83]">{profile.membership.totalPaid}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Sessions Used:</span>
                  <span className="text-gray-200">{profile.membership.sessionsUsed}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Sessions Left:</span>
                  <span className="text-[#20ff83]">{profile.membership.sessionsLeft}</span>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-cyan-400 rounded-md text-cyan-300 hover:bg-cyan-500 hover:text-black">
                Upgrade Plan
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#0f1315]/80 to-[#0b0e10]/60 border border-[#1f2a2a] rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Quick Stats</h4>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0c1112] rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#20ff83]">{profile.stats.workouts}</div>
                  <div className="text-sm text-gray-400">Workouts</div>
                </div>
                <div className="p-4 bg-[#0c1112] rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#20ff83]">{profile.stats.totalHours}h</div>
                  <div className="text-sm text-gray-400">Total Time</div>
                </div>
              </div>
            </div>

            {/* Small placeholder for spacing */}
            <div className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
