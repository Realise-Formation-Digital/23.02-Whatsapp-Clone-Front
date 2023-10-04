<template>
  <v-app>
    <v-app-bar flat name="app-bar">
      <userProfil :user-name="userName">
      </userProfil>
      <ChatBanner :room-name="roomName">
      </ChatBanner>
    </v-app-bar>


    <v-navigation-drawer permanent class="gradDrawer">
      <chatList fluid class="ma-0 pa-0">
      </chatList>
    </v-navigation-drawer>

    <v-main class="degrMain">
      <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages" :ref="targetScroll">
        <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
          :id="messageItem._id">
        </SingleMessage>
      </div>
      <div ref="targetRef"></div>
    </v-main>
    <v-footer app class="DegrInput bg-indigo-darken-4">
      <InputMessage @sendme="handleMessage" class="DegrInput pr-8" />
    </v-footer>
  </v-app>
</template>

<script>
import {defineComponent, ref} from 'vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'
import ChatBanner from '../components/ChatBanner.vue'
import SingleMessage from '../components/SingleMessage.vue'
import { mapStores, mapState } from 'pinia';
import { chatStore } from '../store/store';
import { socket } from '../libs/socket.js'


export default defineComponent({
  data() {
    return {
      roomsAndMessages: [],
      userName: '',
      roomName: '',
      targetScroll: ref,
    }

  },
  name: "Messages",
  components: { InputMessage, userProfil, chatList, ChatBanner, SingleMessage,},


  async mounted() {
    console.log('Mounted Messages')
    console.log('[Messages][Set userName, logging]')
    //if logged in LocalStorage, set username in store
    if (localStorage.getItem('userName')) {
      this.chatStore.setUserName(localStorage.getItem('userName'))
    }
    //wait for rooms and messages by username
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
    this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
    //if username is empty, go to login page
    if (this.chatStore.getUserName == '') {
      this.$router.push('/login')
      console.log('[Messages][not logged, go to loggin page]')
    };
  },

  computed: {
    //gives acces to all store
    ...mapStores(chatStore),
    // gives access to pinia's "this.chatStore.roomsAndMessage"
    // inside message component - !! especially in computed !!
    // same as reading from chatStore.roomsAndMessage[]
    ...mapState(chatStore, {
      roomsAndMessages: 'roomsAndMessages'
    }),
  },
  
  // if watcher sees reactivity in roomsAndMessage
  watch: {
    //our watchers name is the same as propriety in store 
    roomsAndMessages: {
      //deep means that every single little change will be noticed
      deep: true,
      //mandatory in deep watchers
      handler(){
        setTimeout(this.scrollToBottom, 500)
      }
    }
  },

  methods: {
    async handleMessage(data) {
      console.log('Component Message', this.chatStore) // data contient le message
      try {
        //post message with axios and store
        await this.chatStore.sendMessage(this.chatStore.getUserName,
          data, this.chatStore.getRoomId) 

        this.scrollToBottom()
      } catch (e) {
        console.error(e)
      }
    },

    scrollToBottom() {
      //call ref data and the watcher to trigger scroll
      this.$refs.targetRef.scrollIntoView({ behavior: "smooth" });
      console.log('scrollToBottom')
    },
  },
})

</script>
<style>

.gradDrawer{
  background-image: linear-gradient( to right, rgb(25, 2, 53) , rgb(50, 74, 193));
};
.degrMain {
  background-image: radial-gradient(#6fb6f8fb, #e076c2ad) !important; 
  }; 

.DegrInput {
    background-color: radial-gradient(#73b2fffb, #b52bffad) !important; 
  }; 

  

</style>