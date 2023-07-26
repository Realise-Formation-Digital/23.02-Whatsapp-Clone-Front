<template>
  <v-app class="rounded rounded-md">

    <v-app-bar flat name="app-bar">
      <userProfil :user-name="userName">
      </userProfil>
      <ChatBanner :room-name="roomName"> 
      </ChatBanner>
    </v-app-bar>


    <v-navigation-drawer> 
    <chatList>
    </chatList> 
    </v-navigation-drawer>


    <v-main>
      <!-- <button @click="scrollToBottom()">Scroll</button> -->
        <div v-if="roomsAndMessages.length > 0" v-for="(messageItem, index) in roomsAndMessages[0].messages" :id="index"
          >
          <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
          ></SingleMessage>
         
        </div>
        <div ref="target" id="staticDiv">Moj div</div>
    </v-main>
    <v-footer app>
      <InputMessage @sendme="handleMessage" class="pr-8" />
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'
import ChatBanner from '../components/ChatBanner.vue'
import SingleMessage from '../components/SingleMessage.vue'
import {mapStores} from 'pinia';
import {chatStore} from '../store/store'
import socket from '../libs/socket'
import { ref, nextTick } from 'vue'

export default defineComponent({
  data() {
    return {
      roomsAndMessages: [],
      userName: '',
      roomName: '',
      my: ref(),
      
      // chatLastMessage: '',
      // roomList: []
    }
  },
  name: "Messages",
  components: { InputMessage, userProfil, chatList, ChatBanner, SingleMessage },
  computed: {
    ...mapStores(chatStore)
  },
  async mounted() {
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
    this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
    socket.on("new-message", (...args) => {
      // console.log('Recieved message', args)
      this.roomsAndMessages[0].messages.push(args[0])
      // console.log(args[0])
      this.scrollToBottom()
    });
    

    if (this.chatStore.getUserName == '') {
      this.$router.push('/login')
    };
    console.log(this.roomsAndMessages[0].messages.length -1)
  },

  updated(){
    console.log('daniel')
  },
  
  methods: {

    async handleMessage(data) {
      //todo faire check si ils sont vide
      console.log('Component Message', this.chatStore) // data contient le message
      try {
        //await this.chatStore.getMessage(this.chatStore.getUserName,data,this.chatStore.roomId)
        await this.chatStore.sendMessage(this.chatStore.getUserName, data, this.chatStore.getRoomId)
      } catch (e) {
        console.error(e)
      }
    },

    scrollToBottom() {
    
      // this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' })
    }
  },
})

</script>

<style scoped>
.chat-window {
  height: auto;
  overflow-y: auto;
}
</style>