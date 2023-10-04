<template>
    <v-container>
        <v-row>
            <v-col cols="11">
                <v-textarea hide-details class="bg-light-blue-lighten-3" :style="{backgroundImage: 'radial-gradient(#86f3fffb, #712089ad)'}" v-model="msgText" variant="outlined" auto-grow @keydown.enter.prevent="sendMessageOnEnter">
                </v-textarea>
            </v-col>
            <v-col cols="1">
                <v-dialog  v-model="dialog" width="auto">
                    <template v-slot:activator="{ props }">
                        <v-btn :class="showEmojis" v-bind="props" @click="show = !show" class="pa-3" variant="flat" rounded="xl"
                            icon="mdi-emoticon-happy-outline" color="deep-purple-lighten-3"></v-btn>
                    </template>
                    <v-card>
                        <EmojiPicker variant="flat" v-model="msgText" @select="onSelectEmoji" />
                        <v-card-actions>
                            <v-btn block @click="dialog = false">Revenir au message</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <br>
                <br>
                <v-btn class="pa-3" icon="mdi-send" @click="sendMessage()" rounded="xl" variant="flat" color="deep-purple-lighten-3"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import EmojiPicker from "vue3-emoji-picker";
import "../../node_modules/vue3-emoji-picker/dist/style.css";
import '@mdi/font/css/materialdesignicons.css';

export default {
    name: "inputMessage",

    data() {
        return {
            dialog: false,
            showEmojis: false,
            msgText: '',
            show: false,
        };

    },
    components: {
        EmojiPicker: EmojiPicker
    },
    props: {

    },

    methods: {
        onSelectEmoji(emoji) {
            this.msgText += emoji.i;
        },

        //emit to parent value of msgText and selected emoji
        sendMessage() {
            this.$emit('sendme', this.msgText, this.emoji)
            this.msgText = ""
        },

        sendMessageOnEnter(pressEnter) {
            //prevent enter touch (enter = keyCode.13) to go to next line  
            if (pressEnter.keyCode === 13 && !pressEnter.shiftKey) {
                this.sendMessage();
            }
        }
    }
}
</script>
<style>
 .DegrInput{
    background-color: radial-gradient( #4d95ed, #1A237E); 
  }; 
</style>