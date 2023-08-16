<template>
    <v-container fluid>
        <v-col>
            <chatCard v-for="chat in chatStore.getRoomsAndMessage" :chat-title="chat.name"
                :chat-last-message="chat.messages[chat.messages.length - 1].message"
                :ts="chat.messages[chat.messages.length - 1].ts" :style="gradientStyle">
            </chatCard>
        </v-col>
    </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
import { chatStore } from '../store/store.js'
import { mapStores } from 'pinia';
import { gradientStyle } from '../libs/consts';

export default {
    name: "chatList",
    components: {
        chatCard,
    },
    data: () => {
        return {
            messageList: [],
            chatLastMessage: {
            },
            gradientStyle
        }
    },

    computed: {
        ...mapStores(chatStore)
    },
    async mounted() {
        this.messageList = await this.chatStore.getRoomsAndMessage[0].message
        console.log('[messageList] [GET] [messageListByRoom]', this.messageList)
        this.getLastMessage()
        // this.roomList = await this.chatStore.getRoomsAndMessage.name
        // console.log('[roomList] [GET] [roomListByUser]', this.roomList)
    },


    methods: {
        enterConversation() {
        },
        getLastMessage() {
            if (this.messageList >= 1) {
                this.chatLastMessage = this.messageList.slice(-1)
                console.log('getting lastMessage from list', this.chatLastMessage);
            }
        }
    }
}


</script>
<style></style>