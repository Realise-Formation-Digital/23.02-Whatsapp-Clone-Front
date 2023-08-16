<template>
  <v-card class="rounded-xl rounded-be-0 ma-0 pa-4" @click="enterConversation()" :style="gradientStyle">
    <v-card-title class="text-center text-truncate">
      {{ chatTitle }}
    </v-card-title>
    <v-card-subtitle>
      {{ chatLastMessage }}
    </v-card-subtitle>
    <v-chip>
      {{ todayFormattedDate_FullTime(ts) }}
    </v-chip>
  </v-card>
</template>

<script>
import dayjsMixins from '../mixins/dayjs';
import { gradientStyle } from '../libs/consts';

export default {
  mixins: [dayjsMixins,],

  name: "chatCard",
  props: {
    chatTitle: {
      type: String,
      default: "",
      required: true,
    },
    chatLastMessage: {
      type: String,
      default: "",
      required: true
    },
   
    ts: {
      type: Number,
      default: new Date().getTime(),
      required: false
    }
  },

  data() {
    return {
      gradientStyle
    }
  },
}
</script>
<style>


</style>