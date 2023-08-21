import { io } from "socket.io-client";
import { socketServerUrl } from "./consts.js";
import { chatStore } from './../store/store.js';
// initialisation client
const socket = io(socketServerUrl);

    // Returns array of listeners for event "new message".
    socket.on("new-message", (...args) => {
        const chatSt = chatStore()
        console.log ('CIAOMIAO', chatSt.getRoomsAndMessage[0].messages)
      console.log("Recieved message", args);
    });

    socket.emit("new-message");


export default io;
