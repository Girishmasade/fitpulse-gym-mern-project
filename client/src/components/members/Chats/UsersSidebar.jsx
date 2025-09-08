import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedChat } from "../../../redux/api/chatStoreSlice";
import { motion } from "framer-motion";
const UsersSidebar = () => {
  const { users, selectedChat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="w-1/3 h-full min-h-screen bg-gray-900 border-r border-gray-800 overflow-y-auto rounded-lg">
      {/* Header */}
      <h2 className="p-4 font-bold text-lg border-b border-gray-800 text-white">
        Messages
      </h2>

      {/* Users List */}
      <ul className="space-y-1 p-2">
        {!users || users.length === 0 ? (
          <p className="p-4 text-gray-400">No users available</p>
        ) : (
          users.map((u) => (
            <li
              key={u._id}
              onClick={() => dispatch(setSelectedChat(u))}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200
                ${
                  selectedChat?._id === u._id
                    ? "bg-gray-700 text-white shadow-md hover:bg-gray-800"
                    : "hover:bg-gray-800 text-gray-200 "
                }`}
            >
              {/* Avatar */}
              {u.avatar ? (
                <img
                  src={u.avatar}
                  alt={u.username}
                  className="w-12 h-12 rounded-full object-cover border border-gray-700"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-lg">
                  {u.username?.charAt(0).toUpperCase()}
                </div>
              )}

              {/* Info */}
              <div className="flex flex-col">
                <span className="font-semibold text-md">{u.username}</span>
                <span className="text-sm text-gray-400">{u.role}</span>
              </div>          
            </li>
          ))
        )}
      </ul>
    </motion.div>
  );
};

export default UsersSidebar;
