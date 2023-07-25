<template>
  <div :class="sender === '' ? 'd-flex justify-end' : 'd-flex justify-start'">
    <div class="border rounded-xl rounded-be-0 messageFitContent">
      <h5 class="pa-3">
        Sender: {{ sender }}
      </h5>
      <div class="px-3">
        {{ message }}
      </div>
      <div class="pa-3 d-flex justify-end">
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
      message: "",
    }
  },
}
</script>
<style scoped> .messageFitContent {
  width: fit-content;
}
</style>