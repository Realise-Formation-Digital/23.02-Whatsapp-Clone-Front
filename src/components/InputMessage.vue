<template>
    <v-container class="pa-10 bg-blue">
        <v-row>
            <v-col cols="11">
                <!-- <v-textarea v-model="msgText" variant="solo" auto-grow bg-color="cyan-lighten-4">

                </v-textarea> -->
                <EmojiPicker v-model="msgText" picker-type="textarea" style="background-color: rgb(42, 125, 198);" @select="onSelectEmoji" />
            </v-col>
            <v-col cols="1">
                <v-btn class="pa-3" icon="mdi-send" @click="sendMessage()" rounded="xl" color="teal-accent-3"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import EmojiPicker from "vue3-emoji-picker";
import "../../node_modules/vue3-emoji-picker/dist/style.css";
import '@mdi/font/css/materialdesignicons.css'

export default {
    data() {
        return {
            msgText: '',
        };
        
    },
    components: {
        EmojiPicker: EmojiPicker,
    },
    methods: {
        onSelectEmoji(emoji) {
            this.msgText += emoji.i;
        },
        
        showEmoji(emoji) {
            alert(`emoji ${emoji.i} selected, check console for details`);
        },
        //receuillir les informations stocké dans msgText qui correspond à la valeur de l'input
        sendMessage() {
            this.$emit('sendme', this.msgText)
            this.msgText = "",
            this.emoji =""
        }
    }
}
</script>



<style scoped>
.rainbow {
    background: linear-gradient(25deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
}
</style>