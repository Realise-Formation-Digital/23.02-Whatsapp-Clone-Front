<template>
  <v-timeline-item>
    <div :class="sender == chatStore.getUserName ? 'd-flex justify-end px-9 my-2' :
      'd-flex justify-start px-9 my-2'">
      <div :class="sender == chatStore.getUserName ? 'border rounded-xl rounded-be-0 messageFitContent' :
        'border rounded-xl rounded-ts-0 messageFitContent'" :style="gradCardsMess">
        <!-- sender of the messages -->
        <v-card-title class="pa-9 px-16 text-purple-darken-4 text-start" id="titleFont">
          {{ sender }}
        </v-card-title>
        <!-- message content -->
        <v-card-text>
          <div class="px-13 text-start" id="generalFont">
            {{ message }}
          </div>
        </v-card-text>
        <v-card-text class="px-3 py-2 d-flex justify-end">
          <!-- date -->
          <v-row align-self="start">
            <v-col cols="8" no-gutter>
              <v-chip class="ma-8 pa-5 text-start" color="purple-darken-4" prepend-icon="mdi-email">
                {{ todayFormattedDate_FullDateWellLongAndFullTime(ts) }}
              </v-chip>
            </v-col>
            <v-col justify="end" cols="3" align-self="center" class="pa-7">
              <!-- button for messages deletions -->
              <v-btn class="bg-deep-purple-darken-2 text-light-blue-lighten-4" variant="flat" @click="deleteMessage()"><svg-icon type="mdi" class="font-weight-thin" :path="path"></svg-icon></v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      <!-- sender of the messages -->
      </div>
    </div>
  </v-timeline-item>

</template>
<script>
import { mapStores } from "pinia";
import { chatStore } from "../store/store.js";
import dayjsMixins from "../mixins/dayjs.js";
import { gradCardsMess } from "../libs/consts";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTrashCanOutline } from '@mdi/js';


export default {
  name: "my-cool-component",
  components: {
    SvgIcon
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
      gradCardsMess
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
    // calls the store.js
    async deleteMessage() {
      try{
        await this.chatStore.deleteMessageAxios(this.id)
           console.log('[singleMessage][deleteMessageAxios]', this.id)
      }catch(e){
        console.error
      }
    },
  }
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


</style>