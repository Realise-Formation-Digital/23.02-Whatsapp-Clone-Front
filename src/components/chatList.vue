<template>
    <v-container fluid class="bg-pink-lighten-5">
        <v-row>
            <v-col cols="12">
                <chatCard :chatTitle="chatTitle" :chatDescription="chatDescription" :chatLastMessage="chatLastMessage">
                </chatCard>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import chatCard from './chatCard.vue'
export default {
    components: {
        chatCard,
    },
    data: () => ({
        return: {
            chatlist: [
            ]
        },
    })
}



methods: {

}


</script>

<style>
</style>