import { defineStore } from 'pinia'
import axios from "axios";

const chatStore = defineStore('chat', {
  state: () => ({
    userName: ''
  }),
  getters: {
    getUserName: (state) => state.userName
  },
  actions:{
    async postUser(body) {
      console.log("[chatStore][Post] post user name", route, body);
      try{
        const result = await AxiosLib.post("http://localhost:3001/users/login", body)
        console.log(result)
      }catch(e){
      throw new Error(e)
    }

    },
  }
})

export {chatStore}