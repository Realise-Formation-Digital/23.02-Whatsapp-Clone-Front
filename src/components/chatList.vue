<template>
    <v-container fluid>
        <v-col v-if="chatStore.getRoomsAndMessage.length > 0">
            <chatCard v-for="chat in chatStore.getRoomsAndMessage" :chat-title="chat.name"
                :chat-last-message="chat.messages[chat.messages.length-1].message" 
                :ts="chat.messages[chat.messages.length-1].ts" :style="gradCardsMess">
            </chatCard>
        </v-col>
    </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
import { chatStore } from '../store/store.js'
import { mapStores } from 'pinia';
import { gradCardsMess } from '../libs/consts';

export default {
    name: "chatList",
    components: {
        chatCard,
    },
    data: () => {
        return {
            gradCardsMess
        }
    },

    computed: {
        ...mapStores(chatStore),

        
    },

    methods: {
        enterConversation() {
        },
    }
}


</script>
<style></style>