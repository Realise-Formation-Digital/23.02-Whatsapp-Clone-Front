import { io } from "socket.io-client";

const socket = io('http://localhost:3000')

socket.on('new-message', (...args) => {
  console.log('Received message',args)
})