import { io } from "socket.io-client";
import pinia  from "./pinia";


const socket = io("http://localhost:3000", {
});

socket.on("new-message", (...args) => {
console.log('Recieved message', args)
  });
  
 export default io;
