<template>
  <div :class="sender == chatStore.getUserName ? 'd-flex justify-end px-9 my-2' : 'd-flex justify-start px-9 my-2'">
    <div
      :class="sender == chatStore.getUserName ? 'border rounded-xl rounded-be-0 messageFitContent' : 'border rounded-xl rounded-ts-0 messageFitContent'"
      id="messageStyle">
      <h4 class="pa-3 px-9">
        {{ sender }}
      </h4>
      <div class="px-3">
        {{ message }}
      </div>
      <div class="px-3 py-2 d-flex justify-end">
        <v-chip>
          {{ todayFormattedDate_FullDateWellLongAndFullTime(ts) }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { chatStore } from "../store/store.js";
import dayjsMixins from "../mixins/dayjs.js";

export default {
  name: "SingleMessage",
  mixins: [dayjsMixins],
  computed: {
    ...mapStores(chatStore)
  },
  data: () => {
    return {

    }
  },
  mounted() {
    // this.message = this.chatStore.getMessage
  },
  props: {
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
  }
}
</script>
<style scoped> .messageFitContent {
   width: fit-content;
   min-width: 300px;
 }

 #messageStyle {
   background-color: #ffe69b;
   background-image: conic-gradient(#ffe683, #86f3fffb, #c9febcfb);
   box-shadow: -2px 1px 5px 1px #c0bfc4
 }
 </style>