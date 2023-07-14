import { defineStore } from 'pinia'
import AxiosLib from '../libs/axios'
import { urls } from '../libs/consts'

const chatStore = defineStore('chat', {
  state: () => ({
    userName: '',
    roomId: '64b0f1080d5b918c6944a699'
  }),
  getters: {
    getUserName: (state) => state.userName,
    getRoomId: (state) => state.roomId,
  },
  actions:{
    setUserName(value){
      this.userName = value
    },

    async postUser(userName) {
      let json = {
        "username" : userName
      }
      console.log("[chatStore][Post] post user name",json);
      try{
        const result = await AxiosLib.postUser(urls.userLogin, json)
        console.log(result)
      }catch(e){
      throw new Error(e)
    }

    },
    async test(){
      try{
          const result = await AxiosLib.get(urls.message)
      }catch(e){
        throw new Error(e)
      }
    },

    async postMessage(body) {
      try{
        const result = await AxiosLib.post(urls.message, body)
        console.log(result)
      }catch(e){
      throw new Error(e)
     }
    },

    async getAllRoomsByUser(){
      try {
        const result = await AxiosLib.get(urls.message + urls.roomsByUser);
        console.log(result)
      } catch (error) {
        
      }
    }
  }
})

export {chatStore}