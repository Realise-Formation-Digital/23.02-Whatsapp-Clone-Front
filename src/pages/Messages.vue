<template>
  <v-app>
  <v-app-bar>
    <userProfil></userProfil>
    <ChatBanner></ChatBanner>
  </v-app-bar>
  <v-navigation-drawer>
    <chatList></chatList>
  </v-navigation-drawer>
  <v-main>
    <SingleMessage></SingleMessage>
  </v-main>
  <v-footer>
    <InputMessage @sendme="handleMessage" />
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


export default defineComponent({
  name: 'App',
  name: "Messages",
  components: { InputMessage, chatList, userProfil, chatCard, ChatBanner, SingleMessage },
  methods: {
    handleMessage(data) {
      console.log(data)
    }
  }
})

</script>

<style scoped></style>