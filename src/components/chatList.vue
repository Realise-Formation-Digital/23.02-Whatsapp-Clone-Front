<template>
    <v-container fluid>
        <v-col>
            <chatCard v-for="chat in chatStore.getRoomsAndMessage" :chat-title="chat.name"
                :chat-last-message="displayLastMessage" :ts="displayLastMessage.ts" :style="gradientStyle">
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
            displayLastMessage: '',
            gradientStyle
        }
    },

    computed: {
        ...mapStores(chatStore),

        
    },

    async mounted() {
        this.getLastMessage(this.messageList, this.displayLastMessage)
        console.log('Mounted', this.displayLastMessage)


        this.displayLastMessage = await this.messageList[this.messageList.length - 1].message
                // this.displayLastMessage = this.messageList.messages.pop()
                console.log('BBBOOOUUUMdisplayLastMessage', this.displayLastMessage)
        // this.getLastMessage(this.displayLastMessage)
        // console.log('BBBOOOUUUMdisplayLastMessage', this.displayLastMessage)

        // this.chatLastMessage = this.messageList.pop(this.messageList.length-1)
        // this.chatLastMessage = this.chatStore.roomsAndMessages[0].messages
        // console.log('BBBOOOOMgetting lastMessage from list', this.chatLastMessage);

    },


    methods: {
        enterConversation() {
        },
        async getLastMessage() {
            this.messageList = await this.chatStore.getRoomsAndMessage[0].messages,   
            console.log('[chatList][messageList]', this.messageList)
            if (this.messageList >= 1) {
                this.displayLastMessage = this.messageList[this.messageList.length - 1].message
                // this.displayLastMessage = this.messageList.messages.pop()
                console.log('BBBOOOUUUMdisplayLastMessage', this.displayLastMessage)
            }
        }
    }
}


</script>
<style></style>