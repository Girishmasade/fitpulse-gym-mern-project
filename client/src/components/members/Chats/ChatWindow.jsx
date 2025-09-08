import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paperclip } from "lucide-react";
import { setAddMessage } from "../../../redux/api/chatStoreSlice";
import { motion } from "framer-motion";

const ChatWindow = () => {
  const { selectedChat, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      sender: { username: user.username, id: user._id },
      text: newMessage,
    };

    dispatch(setAddMessage(message));
    setNewMessage("");
  };

  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-2/3 h-full min-h-screen bg-gray-800 border rounded-lg flex flex-col"
    >
      {/* Header section */}
      {!selectedChat ? (
        <p className="p-4 text-gray-300 italic text-center">
          👥 Pick someone from the list and start a chat!
        </p>
      ) : (
        <div className="py-2 px-4 flex flex-col border-b border-gray-600">
          <h2 className="font-bold text-md text-white">
            Chat with{" "}
            <span className="text-blue-400">{selectedChat.username}</span>
          </h2>
          <h3 className="text-sm text-gray-400">Status: offline</h3>
        </div>
      )}

      {/* // Messages display section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 ? (
          <p className="text-gray-400 italic text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              💌 No messages yet… send your first one!
            </motion.span>
          </p>
        ) : (
          messages.map((msg, index) => {
            const isMine = msg.sender.id === user._id;

            return (
              <div
                key={index}
                className={`chat ${isMine ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble ${
                    isMine ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
                  }`}
                >
                  <span className="font-bold">{msg.sender.username}: </span>
                  {msg.text}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* // Messages send section */}
      <div className="mt-auto p-4 border-t border-gray-600 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="input input-bordered flex-grow"
          placeholder="Type your message..."
        />
        <label className="cursor-pointer flex items-center">
          <Paperclip className="text-gray-300 hover:text-gray-400" />
          <input type="file" className="hidden" />
        </label>
        <button onClick={handleSend} className="btn btn-primary">
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
