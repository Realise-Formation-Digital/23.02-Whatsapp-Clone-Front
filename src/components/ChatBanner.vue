<template>
   <v-container class="bg-lime-darken-2">
    <v-row >
    <v-col class="ml-16" cols="">
        <h3 class="text-center text-amber-lighten-5 ml-16" id="titleFont" align-self="center">RoomName{{ roomName }}</h3>
    </v-col>
    <v-col cols="3" class="me-6" align-self="center">
        <v-avatar class="ml-16" icon="$vuetify"></v-avatar>
    </v-col>   
    <v-col cols="3" align-self="center" class="ml-16">
        <v-btn class="bg-amber-lighten-5 ml-16" justify="end"  @click="handleLogout()">Logout</v-btn>
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

