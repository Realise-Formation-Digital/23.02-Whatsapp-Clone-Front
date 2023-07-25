<template>
  <v-container fluid>
    <v-col>
        <chatCard v-for="chat in chatStore.getRoomsAndMessage" :chat-title="chat.name"
            :chat-last-message="this.chatLastMessage" :ts="chat.ts">
        </chatCard>
    </v-col>
  </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
import { chatStore } from '../store/store.js'
import { mapStores } from 'pinia';

export default {
    name: "chatList",
    components: {
        chatCard,
    },
    data: () => {
return{
    messageList: [],
    // roomList: []
}
    },

    computed: {
        ...mapStores(chatStore)
    },
    async mounted() {

        this.messageList = await this.chatStore.getRoomsAndMessage.this.roomId
        console.log('[messageList] [GET] [messageListByRoom]', this.messageList)

        // this.roomList = await this.chatStore.getRoomsAndMessage.name
        // console.log('[roomList] [GET] [roomListByUser]', this.roomList)
    },


    methods: {
        enterConversation() {
        },
        getLastMessage() {
            if (this.messageList > 1) {
                this.chatLastMessage = this.messageList.slice(-1)
                console.log('getting lastMessage from list', this.chatLastMessage);
            }
        }
    }
}


</script>
<style></style>