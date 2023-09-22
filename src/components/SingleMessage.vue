<template>
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
        <v-col><v-btn class="bg-red" @click="deleteMessageFunc(id)"> <svg-icon type="mdi"
              :path="path"></svg-icon></v-btn></v-col>
      </div>
    </div>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { chatStore } from "../store/store.js";
import dayjsMixins from "../mixins/dayjs.js";
import { gradientStyle } from "../libs/consts";
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



</script>
<style scoped> .messageFitContent {
   width: fit-content;
   min-width: 300px;
 }
</style>