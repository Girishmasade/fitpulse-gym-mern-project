import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import electricSvg from "/electric.svg";

const Sidebar = () => {

const userRole = useSelector((state) => state.auth?.user?.role);
const role = userRole?.toLowerCase() || localStorage.getItem("roles")?.toLowerCase();

  console.log("Sidebar role:", role);

  const dispatch = useDispatch();
  
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => pathname === path;

  const roleLinks = {
    owner: [
      { name: "Dashboard", path: "/owner/dashboard" },
      { name: "Users", path: "/owner/users" },
      { name: "Settings", path: "/owner/settings" },
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
    <aside className="flex flex-col justify-between h-screen bg-[#121820] w-[240px] text-sm">
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
              className={`${commonClass} ${
                isActive(link.path)
                  ? "bg-[#39FF14] text-black shadow-[0_0_20px_3px_rgba(0,255,100,0.4)]"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Profile & Logout */}
      <div className="p-4 space-y-2">
        <Link
          to={profilePath}
          className={`${commonClass} ${
            isActive(profilePath)
              ? "bg-[#39FF14] text-black shadow-[0_0_20px_3px_rgba(0,255,100,0.4)]"
              : "text-gray-300"
          }`}
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className={`${commonClass} text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full text-left`}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
