<template>
    <v-container fluid class="bg-pink-lighten-5">
        <v-row>
            <v-col cols="12">
                <chatCard :chatTitle="chatName"  :chatLastMessage="chatLastMessage">
                </chatCard>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
import chatStore from '../store/store.js'
export default {

    computed: {
        ...mapStores(chatStore)
    },

    async mounted(){
    await this.chatStore.getAllRoomsByUser()
    },
    name: "chatList",
    components: {
        chatCard,
    },
    data: () => ({
        return: {
            roomsByUser: [],
            roomId,
            admins,
            guestId,
            avatar,
            messages,
            chatName, 
            ts

        },
    }),
    methods: {
        async getAllRoomsByUser() {
            await this.chatStore.getAllRoomsByUser(this.username, this.roomId, 
            this.admins, this.guestsId, this.message, this.avatar, this.chatName, this.ts)

        }
    }
}
</script>
    
<style></style>