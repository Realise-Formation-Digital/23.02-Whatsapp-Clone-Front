import { io } from "socket.io-client";
import { socketServerUrl } from "./consts.js";
import { chatStore } from "./../store/store.js";

// initialisation client
const socket = io(socketServerUrl);

// Returns array of messages heard.
socket.on("new-message", (...args) => {
  console.log("[socket][listening to last message's id]", 
  args[0]._id);
  const chatSt = chatStore();
  chatSt.insertMessageBySocket(args[0]);
});

export { socket };
