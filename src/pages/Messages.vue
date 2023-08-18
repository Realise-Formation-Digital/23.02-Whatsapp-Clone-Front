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
        <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages"  :ref="targetRef">
          <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
          ></SingleMessage>
        </div>
        <div ref="targetRef"></div>
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
import { ref } from 'vue'

export default defineComponent({
  data() {
    return {
      roomsAndMessages: [],
      userName: '',
      roomName: '',
      targetRef: ref()
    }
  },
  name: "Messages",
  components: { InputMessage, userProfil, chatList, ChatBanner, SingleMessage },
  computed: {
    ...mapStores(chatStore)
  },
  async mounted() {
    if(localStorage.getItem('userName')){
      this.chatStore.setUserName(localStorage.getItem('userName'))
    }
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
    this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
  
    if (this.chatStore.getUserName == '') {
      this.$router.push('/login')
    };
    setTimeout(this.scrollToBottom, 500)
  },
  
  updated() {
    // this.scrollToBottom()
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
      this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' })
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