import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import electricSvg from "/electric.svg";
import {
  House,
  Users,
  CreditCard,
  ChartColumn,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const userRole = useSelector((state) => state.auth?.user?.role);
  const role =
    userRole?.toLowerCase() || localStorage.getItem("roles")?.toLowerCase();

  console.log("Sidebar role:", role);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => pathname === path;

  const roleLinks = {
    owner: [
      { name: "Dashboard", path: "/owner/dashboard", icon: <House className="w-5 h-5"/> },
      { name: "Users", path: "/owner/users", icon: <Users className="w-5 h-5"/> },
      { name: "Plans", path: "/owner/settings", icon: <CreditCard className="w-5 h-5"/> },
      { name: "Reports", path: "/owner/settings", icon: <ChartColumn className="w-5 h-5"/> },
      { name: "Settings", path: "/owner/settings", icon: <Settings className="w-5 h-5"/> },
    ],
    member: [
      { name: "Dashboard", path: "/user/dashboard" },
      { name: "Bookings", path: "/user/bookings" },
      { name: "Progress", path: "/user/progress" },
      { name: "Chat", path: "/user/chat" },
    ],
    trainer: [
      { name: "Dashboard", path: "/trainer/dashboard" },
      { name: "Clients", path: "/trainer/clients" },
      { name: "Schedule", path: "/trainer/schedule" },
    ],
  };

  const profilePaths = {
    owner: "/owner/profile",
    member: "/user/profile",
    trainer: "/trainer/profile",
  };

  if (!role || !roleLinks[role]) {
    return <div className="text-white p-4">Unauthorized Role</div>;
  }

  const links = roleLinks[role];
  const profilePath = profilePaths[role];

  const commonClass =
    "block px-4 py-2 rounded-md transition hover:bg-black/50 hover:text-white";

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="flex flex-col justify-between min-h-screen bg-[#121820] w-[240px] text-sm">
      {/* Top Section */}
      <div className="p-4">
        <div className="flex items-center pl-4 pt-2 gap-2 text-white text-2xl font-bold">
          <Link to="/" className="flex items-center gap-1">
            <span>Fit</span>
            <img
              src={electricSvg}
              alt="logo"
              className="w-8 bg-[#39FF14] text-transparent bg-clip-text"
            />
            <span>Pluse</span>
          </Link>
        </div>

        <nav className="space-y-2 pt-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${commonClass} flex gap-2 ${
                isActive(link.path)
                  ? "bg-[#39FF14] text-black shadow-[0_0_20px_3px_rgba(0,255,100,0.4)]"
                  : "text-gray-300"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Profile & Logout */}
      <div className="p-4 space-y-2">
        <Link
          to={profilePath}
          className={`${commonClass} flex gap-2 items-center ${
            isActive(profilePath)
              ? "bg-[#39FF14] text-black shadow-[0_0_20px_3px_rgba(0,255,100,0.4)]"
              : "text-gray-300"
          }`}
        >
          <User className="w-5 h-5" />
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className={`${commonClass} flex gap-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full text-left cursor-pointer`}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
