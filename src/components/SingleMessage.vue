<template>
  <div :class="sender == chatStore.getUserName ? 'd-flex justify-end px-9 my-2' : 'd-flex justify-start px-9 my-2'">
    <div :class="sender == chatStore.getUserName ? 'border rounded-xl rounded-be-0 messageFitContent bg-green-lighten-1' : 'border rounded-xl rounded-ts-0 messageFitContent bg-blue-lighten-3'">
      <h4 class="pa-3 px-9">
       {{ sender }}
      </h4>
      <div class="px-3">
        {{ message }}
      </div>
      <div class="px-3 py-2 d-flex justify-end">
        <v-chip>
          {{ todayFormattedDate_FullDateWellLongAndFullTime (ts) }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {chatStore} from "../store/store.js";
import dayjsMixins from "../mixins/dayjs.js";

export default {
  name: "SingleMessage",
  mixins:[dayjsMixins],
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
</style>