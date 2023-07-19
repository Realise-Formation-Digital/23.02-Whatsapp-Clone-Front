<template>
  <v-app class="rounded rounded-md">

  <v-app-bar flat name="app-bar">
    <userProfil></userProfil>
    <ChatBanner></ChatBanner>
  </v-app-bar>

  
  <v-navigation-drawer  >
        <v-list>
         <v-list-item> <chatList></chatList>  </v-list-item> 
        </v-list>
  </v-navigation-drawer>



    <v-main >
    <SingleMessage></SingleMessage>
    
    
  </v-main>
  <v-footer app>
    <InputMessage @sendme="handleMessage" class="pr-8"/>
  </v-footer>

  
  
</v-app>
</template>

<script>
import { defineComponent } from 'vue'
import chatCard from '../components/chatCard.vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'
import ChatBanner from '../components/ChatBanner.vue'
import SingleMessage from '../components/SingleMessage.vue'

import { mapStores } from 'pinia';
import {chatStore} from '../store/store'


export default defineComponent({
  data() {
    return {
      rooms:""
    }
  },
  name: "Messages",
  components: { InputMessage, chatList, userProfil, chatCard, ChatBanner, SingleMessage },
  computed: {
    ...mapStores(chatStore)
  },
  mounted()  {
    this.rooms = this.chatStore.getAllRoomsByUser
    console.log(this.rooms)
  },
  methods: {

   async handleMessage(data) {
    //todo faire check si ils sont vide
      try{
        await this.chatStore.getMessage(this.chatStore.getUserName,data,this.chatStore.roomId)
      } catch(e) {
        console.error(e)
      }
      
        
      
    }
    
  },
})

</script>

<style scoped></style>