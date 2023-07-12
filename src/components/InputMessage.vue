<template>
    <!-- <v-container>
        Possibilité de recupérer le message  via : {{ msgText }}
    </v-container> -->

    <v-container class="pa-10">
        <v-row>
            <v-col cols="10">
                <v-textarea v-model="msgText" variant="solo" auto-grow bg-color="cyan-lighten-4">

                </v-textarea>
            </v-col>
            <v-col cols="2">
                <v-btn class="ml-2 rounded rainbow" icon="mdi-emoticon-happy-outline"></v-btn>
                <br>
                <br>
                <v-btn class="ml-2 rounded" icon="mdi-send" color="teal-accent-3"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import '@mdi/font/css/materialdesignicons.css'
export default {
    data() {
        return {
            msgText: '',
        };
    },
};
</script>



<style scoped>
.rainbow{
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
}



</style>