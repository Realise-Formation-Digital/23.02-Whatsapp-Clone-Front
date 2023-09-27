<template>
  <v-timeline-item>
    <div :class="sender == chatStore.getUserName ? 'd-flex justify-end px-9 my-2' :
      'd-flex justify-start px-9 my-2'">
      <div :class="sender == chatStore.getUserName ? 'border rounded-xl rounded-be-0 messageFitContent' :
        'border rounded-xl rounded-ts-0 messageFitContent'" :style="gradientStyle">
        <!-- sender of the messages -->
        <v-card-title class="pa-9 px-16 text-purple-darken-4" id="titleFont">
          {{ sender }}
        </v-card-title>
        <!-- message content -->
        <v-card-text>
          <div class="px-13" id="generalFont">
            {{ message }}
          </div>
        </v-card-text>
        <v-card-text class="px-3 py-2 d-flex justify-end">
          <!-- date -->
          <v-row align-self="start">
            <v-col cols="8" align="start" no-gutter>
              <v-chip class="ma-15 pa-5" color="purple-darken-4" prepend-icon="mdi-email">
                {{ todayFormattedDate_FullDateWellLongAndFullTime(ts) }}
              </v-chip>
            </v-col>
            <v-col justify="end" cols="3" align-self="center" class="pa-7">
              <!-- button for messages deletions -->
              <v-btn class="bg-orange-lighten-5" @click="deleteMessageFunc(id)"><svg-icon type="mdi"
                  :path="path"></svg-icon></v-btn>
            </v-col>
          </v-row>
        </v-card-text>
  <div :class="sender == chatStore.getUserName ?
    'd-flex justify-end px-9 my-2' :
    'd-flex justify-start px-9 my-2'">
    <div :class="sender == chatStore.getUserName ?
      'border rounded-xl rounded-be-0 messageFitContent' :
      'border rounded-xl rounded-ts-0 messageFitContent'" :style="gradientStyle">
      <!-- sender of the messages -->
      <h4 class="pa-3 px-9">
        {{ sender }}
      </h4>
      <!-- message content -->
      <div class="px-3">
        {{ message }}
      </div>
      <!-- date -->
      <div class="px-3 py-2 d-flex justify-end">
        <v-chip>
          {{ todayFormattedDate_FullDateWellLongAndFullTime(ts) }}
        </v-chip>
        <!-- button for messages deletions -->
        <v-col><v-btn class="bg-orange-darken-2" @click="deleteMessage(id)"> <svg-icon type="mdi"
              :path="path"></svg-icon></v-btn></v-col>
      </div>
    </div>
  </v-timeline-item>

</template>
<script>
import { mapStores } from "pinia";
import { chatStore } from "../store/store.js";
import dayjsMixins from "../mixins/dayjs.js";
import { gradientStyle } from "../libs/consts";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTrashCanOutline } from '@mdi/js';
import {socket} from '../libs/socket.js'


export default {
  name: "my-cool-component",
  components: {
    SvgIcon, socket
  },
  name: "SingleMessage",
  mixins: [dayjsMixins],
  //take the store/store.js, its like if it was in SingleMsg

  computed: {
    ...mapStores(chatStore)
  },

  data: () => {
    return {
      path: mdiTrashCanOutline,
      gradientStyle,
    }
  },

  props: {
    //anything send to the parent
    id: {
      type: String,
      default: '',
      required: true
    },
    message: {
      type: String,
      default: '',
      required: false
    },
    sender: {
      type: String,
      default: '',
      required: false
    },
    ts: {
      type: Number,
      default: new Date().getTime(),
      required: false
    }
  },
  methods: {
    //calls the store.js
    deleteMessageFunc(messageId) {
      this.chatStore.deleteMessageFunc(messageId)
    },
  },
}
    async deleteMessage(messageId) {
      await this.chatstore.deleteMessageFunc(messageId) || this.chatStore.deleteMessageBySocket(getUserName)
        console.log('[singleMessage][deleteMessageFunc]',messageId, getUserName)
      },
    },
  }




</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Urbanist:wght@500&display=swap');

#titleFont {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: bold
};

#generalFont {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: light;
};

/* #testDegr {
  background-color: rgb(16, 74, 55);
    background-image: conic-gradient(#ffe683, #86f3fffb, #c9febcfb); 
    box-shadow: -1px 1px 4px 1px #ba61358b  
  }; */
</style>