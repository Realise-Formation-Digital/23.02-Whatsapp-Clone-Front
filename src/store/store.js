import { defineStore } from 'pinia'
import AxiosLib from '../libs/axios'
import { urls } from '../libs/consts'

const chatStore = defineStore('chat', {
  state: () => ({

  }),
  getters: {

  },
  actions:{
    async test(){
      try{
          const result = await AxiosLib.get(urls.message)
      }catch(e){
        throw new Error(e)
      }
    }
  }
})

export {chatStore}