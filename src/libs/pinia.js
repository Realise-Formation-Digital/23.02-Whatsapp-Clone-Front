import { createPinia } from 'pinia'
import axiosLibs from './axios'

const pinia = createPinia()
const tchatStore = defineStore("tchat",{
    state: () =>({
        roomsList: [],
        messagesList: []
    }),
    
    getters: {
    getAllRooms: (state) => state.roomsList,
    getAllMessage: (state) => state.messagesList,
    },

    actions:{
    async getRoomsList(roomsList){
        this.axiosLibs.get()
        console.log(roomsList)
        console.log("[Actions] [store] [getRoomsList] get all Rooms from serveur");
        try{
            let result = await axios.get("http://localhost:3001/");
            const list = result.data;
            this.roomsList = list.data;
            console.log();
        }catch (e) {
            console.error(e);
        }
    },
    async getMessagesList(messagesList){
        this.axiosLibs.get(){
            "message": message.data,
            "roomId": room.data,
            "sender": ""
        }
        console.log(messagesList)
        console.log("[Actions] [store] [getMessagesList] get all messages from serveur");
        try{
            let result = await axios.get("http://localhost:3001/");
            const list = result.data;
            this.messagesList = list.data;
            console.log();
        }catch (e) {
            console.error(e);
        }
    },
    }



})
export { tchatStore };













export default pinia

