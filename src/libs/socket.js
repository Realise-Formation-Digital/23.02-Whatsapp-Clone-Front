import { io } from "socket.io-client";
import { socketServerUrl } from "./consts.js";
import { chatStore } from "./../store/store.js";

// initialisation client
const socket = io(socketServerUrl);
const chatSt = chatStore ();

// Returns array of listeners for event "new message".
socket.on("new-message", (...args) => {
  const chatSt = chatStore();
  console.log(
    "[socket][on] listening to messages",
    chatSt.getRoomsAndMessage[0].messages
  );
  console.log("Recieved message", args);
});

const messageId = this.chatSt.getRoomsAndMessage[0].messages
console.log('BBBBBBOOOM', messageId)
find(this.chatSt.getRoomsAndMessage[0].messages._id);
// const foundMessage 
console.log('YYYYY', message)
socket.emit("sending message to recievers");
