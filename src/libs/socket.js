import { io } from "socket.io-client";
import {socketServerUrl} from "./consts.js"


const socket = io(socketServerUrl)

// Returns the array of listeners for event  "new message".
socket.on("new-message", (...args) => {
    console.log('Recieved message', args)
    // setTimeout(this.scrollToBottom, 100)
    // this.roomsAndMessages[0].messages.push(args[0])
    console.log(args[0])
});
 export default io;