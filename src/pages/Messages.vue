<template>
  <v-app class="rounded rounded-md bg-yellow-lighten-4">

    <v-app-bar flat name="app-bar">
      <userProfil :user-name="userName">
      </userProfil>
      <ChatBanner :room-name="roomName">
      </ChatBanner>
    </v-app-bar>


    <v-navigation-drawer class="bg-lime-lighten-1">
      <chatList>
      </chatList>
    </v-navigation-drawer>


    <v-main>
      <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages" ref="targetRef">
        <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
          :id="messageItem._id">
        </SingleMessage>
      </div>
    </v-main>
    <v-footer app id="footerShadow">
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
import { mapStores } from 'pinia';
import { chatStore } from '../store/store';
import { socket } from '../libs/socket.js'


export default defineComponent({
  data() {
    return {
      lastMessageId: [],
      getRoomsAndMessage: [],
      roomsAndMessages: [],
      userName: '',
      roomName: '',
    }
  },
  name: "Messages",
  components: { InputMessage, userProfil, chatList, ChatBanner, SingleMessage, socket },


  async mounted() {
    console.log('Mounted MEsasges')
    console.log('[Messages][Set userName, logging]')
    // //if logged in LocalStorage, set username in store
    if (localStorage.getItem('userName')) {
      this.chatStore.setUserName(localStorage.getItem('userName'))
    }
    // this.lastMessageId = this.chatStore.getRoomsAndMessage[0].messages[0]._id
    // //wait for rooms and messages by username
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
    this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
    // //if username is empty, go to login page
    if (this.chatStore.getUserName == '') {
      this.$router.push('/login')
      console.log('[Messages][not logged, go to loggin page]')
    };
  },

  computed: {
    ...mapStores(chatStore),

    // if watcher sees reactivity-> computed calls scroll to newMessage
    // watchAndReactAtMessage() {
    //   this.scrollToBottom(this.lastMessageId)
    //   console.log('COMPUTED')
    //   return (this.lastMessageId)
    // }
  },

  watch: {
    //observe store's getRoomsAndMessages last message changes
    // watchAndReactAtMessage(newMessage, oldMessage) {
    //   newMessage = this.lastMessageId,
    //     console.log('WATCH', newMessage, oldMessage)
    // }
  },

  methods: {
    async handleMessage(data) {
      console.log('Component Message', this.chatStore) // data contient le message
      try {
        //post message with axios and store
        await this.chatStore.sendMessage(this.chatStore.getUserName,
          data, this.chatStore.getRoomId)
      } catch (e) {
        console.error(e)
      }
    },

    // async observeLastMessage(){
    // await this.chatStore.getRoomsAndMessage[0].messages[0]._id
    // console.log('observeLastMessage', this.chatStore.getRoomsAndMessage[0].messages[0]._id)
    // },

    scrollToBottom() {
      //call ref data and the watcher to trigger scroll
      //this.$refs.targetRef.scrollIntoView({ behavior: "smooth" });
      console.log('SCROLLTOBOTTOM')
    },
  },
})

</script>

<style scoped>
.chat-window {
  height: auto;
  overflow-y: auto;
}

;

#footerShadow {
  box-shadow: 100px 100px 202px 50px #f340cc8b;
}
</style>