import { defineStore } from 'pinia'
import AxiosLib from '../libs/axios'
import { urls } from '../libs/consts'

const chatStore = defineStore('chat', {
  state: () => ({
    message:'',
    userName: '',
    roomId: '64b0f1080d5b918c6944a699',
    roomsAndMessages: []
  }),
  getters: {
    getMessage: (state) => state.message,
    getUserName: (state) => state.userName,
    getRoomId: (state) => state.roomId,
    getRoomsAndMessage: (state) => state.roomsAndMessages
  },
  actions:{
    setUserName(value){
      this.userName = value
    },

    SetMessage(value){
      this.message = value
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

    /**
     * Login Function
     * @async
     * @param {String} username - the username that we need for our login
     * @returns {Promise<void>}
     */
    async login(username) {
      console.log('[UserStore][login] Logging in with params', username)
      try {
        const result = await AxiosLib.post(urls.userLogin, {username: username})
        console.log('Result', result)
        this.userName = result.username
      }catch (e) {
        console.error(e)
      }
    },

    async sendMessage(sender, message, roomId) {
      console.log('[UserMessage][Messages] message send', message , sender , roomId)
      try{
        const result = await AxiosLib.post(urls.message,{message: message , roomId: roomId, sender: sender})
        console.log('Ciao', result)
        this.message = result.message
        console.log('Message inserted', this.message)
      }catch (e){
        console.error(e)
      }
    },


    async getAllRoomsByUser(){
      try {
        const result = await AxiosLib.get(urls.message + urls.roomsByUser);
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export {chatStore}