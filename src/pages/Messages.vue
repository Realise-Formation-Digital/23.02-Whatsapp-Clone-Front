<template>
  <v-app>
  <v-app-bar>
    <userProfil></userProfil>
    <ChatBanner></ChatBanner>
  </v-app-bar>
  <v-navigation-drawer app expand-on-hover>
    <v-divider></v-divider>
    <v-list dense nav>
    <chatList></chatList>
  </v-list>
  </v-navigation-drawer>
  <v-main>
    <SingleMessage class="pa-5"></SingleMessage>
    
    <v-footer-app>
      <InputMessage @sendme="handleMessage" />
    </v-footer-app>
  </v-main>
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
  name: 'App',
  name: "Messages",
  components: { InputMessage, chatList, userProfil, chatCard, ChatBanner, SingleMessage },
  computed: {
    ...mapStores(chatStore)
  },
  methods: {
    handleMessage(data) {
      let json = {
       "message": data,
       "roomId": this.chatStore.getRoomId,
       "sender": this.chatStore.getUserName
      }
      if(json.message && json.roomId && json.sender !== '') {
        console.log(data)
        this.chatStore.postMessage(json) 
      } else {
        console.error('error :)')
      }
    }
    
  },
})

</script>

<style scoped></style>