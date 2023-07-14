<template>
    <v-container class="pa-10 bg-blue">
        <v-row>
            <v-col cols="11">
                <v-textarea v-model="msgText" variant="solo" auto-grow bg-color="cyan-lighten-4">
                  
                </v-textarea>
            </v-col>
            <v-col cols="1">
                
                  <v-btn @click="show = !show">
                    <Emoji v-show="show"/>
                </v-btn>
                <br>
                <br>
                <v-btn class="pa-3" icon="mdi-send" @click="sendMessage()" rounded="xl" color="teal-accent-3" v-show="!show"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import Emoji from './Emoji.vue';
import '@mdi/font/css/materialdesignicons.css'

export default {
    data() {
        return {
            msgText: '',
            show:false

        };

    },
    components: { Emoji },
    //receuillir les informations stocké dans msgText qui correspond à la valeur de l'input
    methods: {
        sendMessage() {
            this.$emit('sendme', this.msgText)
            this.msgText = ""
        },
        
    }
}
</script>



<style scoped>
.rainbow {
    background: linear-gradient(25deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
}
</style>