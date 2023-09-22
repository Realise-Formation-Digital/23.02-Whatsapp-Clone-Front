<template>
  <v-app class="rounded rounded-md bg-yellow-lighten-4">

    <v-app-bar flat name="app-bar">
      <userProfil :user-name="userName">
      </userProfil>
      <ChatBanner :room-name="roomName">
      </ChatBanner>
    </v-app-bar>


    <v-navigation-drawer class="bg-orange-lighten-3">
      <chatList>
      </chatList>
    </v-navigation-drawer>


    <v-main>
      <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages" :ref="targetRef">
        <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
          :id="messageItem._id">
        </SingleMessage>
      </div>
      <div ref="targetRef"></div>
    </v-main>
    <v-footer app id="footerShadow">
      <InputMessage @sendme="handleMessage" class="pr-8" />
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
      lastMessageId: [],
      getRoomsAndMessage: [],
      roomsAndMessages: [],
      userName: '',
      roomName: '',
      targetRef: ref()
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
    ...mapState(chatStore, {
      roomsAndMessages: 'roomsAndMessages'
    }),
    // if watcher sees reactivity-> computed calls scroll to newMessage

/*    roomsAndMessages () {
      if (this.chatStore.roomsAndMessages.length > 0){
        console.log('computed', this.chatStore.roomsAndMessages[0].messages)
        return this.chatStore.roomsAndMessages[0].messages
      }

       /!*this.scrollToBottom(this.lastMessageId)
       console.log('COMPUTED')
       return (this.lastMessageId)*!/
    }*/
  },

  watch: {
    roomsAndMessages: {
      deep: true,
      handler(){
        setTimeout(this.scrollToBottom, 500)
      }
    }
    //observe store's getRoomsAndMessages last message changes
/*    test(newMessage, oldMessage) {
      console.log('Watch')
      newMessage = this.lastMessageId
      console.log('WATCH', newMessage, oldMessage)
    }*/
/*    'chatStore.suscribe': {
      deep: true,
      handler(newVal) {
        console.log(newVal)
      }
    }*/
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

    // async observeLastMessage(){
    // await this.chatStore.getRoomsAndMessage[0].messages[0]._id
    // console.log('observeLastMessage', this.chatStore.getRoomsAndMessage[0].messages[0]._id)
    // },

    scrollToBottom() {
      //call ref data and the watcher to trigger scroll
      this.$refs.targetRef.scrollIntoView({ behavior: "smooth" });
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