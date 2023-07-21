import { io } from "socket.io-client";


//connection au serveur socket.io pour ecouter les evt
const socket = io("http://localhost:3000", {
});

io.on('connecter', (socket)=> {
 socket.on('msg du chat', (msg)=>{
  io.emit('msg du chat', msg)
 })
});


server.listen(3000, ()=>{})











// socket.on("new-message", (...args) => {
// console.log('Recieved message', args)
//   });
//  export default i;
export default io;