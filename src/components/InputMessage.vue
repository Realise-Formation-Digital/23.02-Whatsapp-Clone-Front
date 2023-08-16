<template>
    <v-container class="bg-grey-lighten-1">
        <v-row>
            <v-col cols="11">
                <v-textarea v-model="msgText" variant="solo" auto-grow bg-color="grey-lighten-2">
                </v-textarea>
            </v-col>
            <v-col cols="1">
                <v-dialog v-model="dialog" width="auto">
                    <template v-slot:activator="{ props }">
                        <v-btn :class="showEmojis" v-bind="props" @click="show = !show" id="rainbowStyle" rounded="xl"
                            icon="mdi-emoticon-happy-outline"></v-btn>
                    </template>

                    <v-card>
                        <EmojiPicker v-model="msgText" @select="onSelectEmoji" />
                        <v-card-actions>
                            <v-btn color="red" block @click="dialog = false">Revenir au message</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <br>
                <br>
                <v-btn class="pa-3" icon="mdi-send" @click="sendMessage()" rounded="xl" id="rainbowStyle"></v-btn>
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
            dialog: false,
            showEmojis: false,
            msgText: '',
            show: false,
        };

    },
    components: {
        EmojiPicker: EmojiPicker,
    },
    methods: {
        // toggleEmojis() {
        //     this.showEmojis = !this.showEmojis;
        // },
        onSelectEmoji(emoji) {
            this.msgText += emoji.i;
        },

        //receuillir les informations stocké dans msgText qui correspond à la valeur de l'input
        sendMessage() {
            this.$emit('sendme', this.msgText, this.emoji)
            this.msgText = ""
        }
    }
}
</script>



<style scoped>
#rainbowStyle {
    background-image: conic-gradient(#ffb55afb, #86f3fffb,#7ccbfffb);
    /* background: linear-gradient(25deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3); */
}
</style>