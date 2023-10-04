<template>
   <v-container class="bg-deep-purple-darken-2">
    <v-row >
    <v-col class="ml-16" cols="">
        <h3 class="text-center text-cyan-accent-2 font-weight-thin ml-16" id="titleFont" align-self="center">RoomName{{ roomName }}</h3>
    </v-col>
    <v-col cols="3"  align-self="center">
    </v-col>   
    <v-col cols="3" align-self="center">
        <v-btn class="bg-light-blue-lighten-4 text-deep-purple-darken-2 font-weight-normal" variant="flat" @click="handleLogout()">Logout</v-btn>
    </v-col> 
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
<style>
</style>

