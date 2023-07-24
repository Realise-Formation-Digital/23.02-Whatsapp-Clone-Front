<template>
    <v-container class="ma-0 pa-0">
    <v-row >
      <v-col cols="12" v-for="chatItem in chatList">
        <chatCard :chat-title="chatItem.name">
        </chatCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
import {chatStore} from '../store/store.js'
import { mapStores } from 'pinia';

export default {
  computed: {
    ...mapStores(chatStore)
  },

  mounted() {
    console.log('CHAT', this.chatStore.getRoomsAndMessage)
    this.chatList = this.chatStore.getRoomsAndMessage
  },

  name: "chatList",
  components: {
    chatCard,
  },

  data (){
    return {
      chatList: [],
    }
  },
  methods: {
  }
}
</script>

<style></style>