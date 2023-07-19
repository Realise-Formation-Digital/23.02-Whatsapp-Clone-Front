<template>
   <v-container class="bg-cyan-lighten-4">
    <v-row >
    <v-col ><h3 class="text-center pt-2">Room name {{ roomName }}</h3></v-col>
    <v-col cols="1" class="me-6"><v-avatar icon="$vuetify"></v-avatar></v-col>    
    </v-row>
</v-container>
</template>

<script>
    export default {
        data: () => {
            return {

            }
        },
        props: {
            roomName: {
                type: String,
                default: '',
                required: true
            }
        }
    }
</script>

