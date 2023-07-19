<template>
    <v-container class="ma-0 pa-0">
    <v-row >
      <v-col cols="12">
        <chatCard>
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

  async mounted() {
    await this.chatStore.getAllRoomsByUser(this.chatStore.getUserName)
  },

  name: "chatList",
  components: {
    chatCard,
  },

  data: () => ({
    return: {
      roomsAndMessages: [],
    },
  }),
  methods: {
  }
}
</script>

<style></style>