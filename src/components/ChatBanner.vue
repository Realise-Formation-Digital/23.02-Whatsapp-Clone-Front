<template>
   <v-container class="bg-cyan-lighten-4">
    <v-row >
    <v-col ><h3 class="text-center pt-2">RoomName{{ roomName }}</h3></v-col>
    <v-col cols="1" class="me-6"><v-avatar icon="$vuetify"></v-avatar></v-col>   
    <v-col><v-btn class="bg-cyan-lighten-5" @click="handleLogout()">Logout</v-btn></v-col> 
    </v-row>
</v-container>
</template>

<script>
import {mapStores} from 'pinia';
import {chatStore} from '../store/store'

    export default {
        data: () => {
            return {
            }
        },
        name: 'ChatBanner',
        props: {
            roomName: {
                type: String,
                default: '',
                required: true
            }
        },
        computed: {
            ...mapStores(chatStore)
        },
        
        methods: {
            handleLogout() {
                localStorage.removeItem("userName");
                this.chatStore.setUserName('')
                if (this.chatStore.getUserName == '') {
                    this.$router.push('/login')
                };
            }
        }
    }
</script>

