import { createSlice } from "@reduxjs/toolkit";

const ChatStoreSlice = createSlice({
  name: "chatStore",
  initialState: {
    users: [
      { id: "1", username: "JohnDoe", role: "member" },
      { id: "2", username: "JaneSmith", role: "trainer" },
      { id: "3", username: "MikeJohnson", role: "member" },
      { id: "4", username: "EmilyDavis", role: "trainer" },
      { id: "5", username: "ChrisBrown", role: "member" },
    ],
    selectedChat: null,
    messages: [],
    chats: [],
  },

  reducers: {
    setUSers: (state, actions) => {
      state.users = actions.payload;
    },
    setSelectedChat: (state, actions) => {
      state.selectedChat = actions.payload;
      state.messages = [];
    },
    setAddMessage: (state, actions) => {
      state.messages.push(actions.payload);
    },
    setChats: (state, actions) => {
      state.chats = actions.payload;
    },
  },
});

export const { setSelectedChat, setAddMessage, setChats, setUSers } =
  ChatStoreSlice.actions;
export default ChatStoreSlice.reducer;
