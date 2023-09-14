<template>
  <v-app class="rounded rounded-md bg-grey-lighten-2">

    <v-app-bar flat name="app-bar">
      <userProfil :user-name="userName">
      </userProfil>
      <ChatBanner :room-name="roomName">
      </ChatBanner>
    </v-app-bar>


    <v-navigation-drawer class="bg-grey-lighten-2">
      <chatList>
      </chatList>
    </v-navigation-drawer>


    <v-main>
      <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages">
        <SingleMessage :ref="lastMessageTarget" :message="messageItem.message"
          :sender="messageItem.sender" :ts="messageItem.ts" :id="messageItem._id">
        </SingleMessage>
      </div>
    </v-main>
    <v-footer app class="bg-grey-lighten-2" id="footerShadow">
      <InputMessage @sendme="handleMessage" class="pr-8" />
    </v-footer>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'
import ChatBanner from '../components/ChatBanner.vue'
import SingleMessage from '../components/SingleMessage.vue'
import { mapStores } from 'pinia';
import { chatStore } from '../store/store';

export default defineComponent({
  data() {
    return {
      lastMessage: "",
      lastMessageTarget: ref(),
      getRoomsAndMessage: [],
      roomsAndMessages: [],
      userName: '',
      roomName: '',
    }
  },
  name: "Messages",
  components: { InputMessage, userProfil, chatList, ChatBanner, SingleMessage },
  computed: {
    ...mapStores(chatStore)
  },
  async mounted() {
    console.log('ciao2')
    //if logged in LocalStorage, set username in store
    if (localStorage.getItem('userName')) {
      this.chatStore.setUserName(localStorage.getItem('userName'))
    }
    console.log('ciao')
    //wait for rooms by username
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName),
      this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
    //if username is empty, go to login page
    if (this.chatStore.getUserName == '') {
      this.$router.push('/login')
    };
  },

  methods: {
    //post message with axios and store
    async handleMessage(data) {
      try {
        await this.chatStore.sendMessage(this.chatStore.getUserName,
          data, this.chatStore.getRoomId)
          this.newMessage()
      } catch (e) {
        console.error(e)
      }
    },

    async newMessage(lastMessage) {
      try {
        //all rooms and all messages in each
        await this.chatStore.sendMessage && this.chatStore.insertMessageBySocket(this.getRoomsAndMessage, this.roomsAndMessages)
        console.log('Alala', this.chatStore.sendMessage && this.chatStore.insertMessageBySocket (this.getRoomsAndMessage, this.roomsAndMessages))
        if (this.chatStore.getRoomsAndMessage > this.chatStore.roomsAndMessages) {
          console.log('lYas')
          //id last message
          lastMessage = this.getRoomsAndMessages[0].messages[0];
          console.log('[Messages][newMessage][lastMessageId]', lastMessage)
          this.scrollToBottom()
        }
      } catch (e) {
        console.error(e)
      }
    },
    scrollToBottom(lastMessageId) {
      lastMessageId = this.$refs.querySelector("#lastMessageId");
      lastMessageId.scrollIntoView({ behavior: "smooth" });
    }

  }
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