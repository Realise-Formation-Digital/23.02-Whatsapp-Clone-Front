<template>
  <v-app class="rounded rounded-md">

    <v-app-bar flat name="app-bar">
      <userProfil></userProfil>
      <ChatBanner></ChatBanner>
    </v-app-bar>


    <v-navigation-drawer>
      <v-list>
        <v-list-item>
          <chatList></chatList>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <div v-if="roomsAndMessages.length > 0" v-for="messageItem in roomsAndMessages[0].messages">
        <SingleMessage :message="messageItem.message" :sender="messageItem.sender" :ts="messageItem.ts"
        ></SingleMessage>
      </div>

    </v-main>
    <v-footer app>
      <InputMessage @sendme="handleMessage" class="pr-8"/>
    </v-footer>
  </v-app>
</template>

<script>
import {defineComponent} from 'vue'
import chatCard from '../components/chatCard.vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'
import ChatBanner from '../components/ChatBanner.vue'
import SingleMessage from '../components/SingleMessage.vue'
import {mapStores} from 'pinia';
import {chatStore} from '../store/store'
import socket from '../libs/socket'

export default defineComponent({
  data() {
    return {
      roomsAndMessages: [],

    }
  },
  name: "Messages",
  components: {InputMessage, chatList, userProfil, chatCard, ChatBanner, SingleMessage},
  computed: {
    ...mapStores(chatStore)
  },
  async mounted() {
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
    this.roomsAndMessages = this.chatStore.getRoomsAndMessage;
    socket.on("new-message", (...args) => {
      console.log('Recieved message', args)
      this.roomsAndMessages[0].messages.push(args[0])
      console.log(args[0])
    });
    // if (this.chatStore.getUserName == '') {
    //   this.$router.push('/login')
    // }
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
    }
  },
})

</script>

<style scoped></style>