<template>
  <v-card class="rounded-xl rounded-be-0 bg-pink-accent-1 ma-0 pa-4" @click="enterConversation()" id="conversationStyle">
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

export default {
  mixins: [dayjsMixins],

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
    // roomList: {
    //   type: String,
    //   default: "",
    //   required: true
    // },
    ts: {
      type: Number,
      default: new Date().getTime(),
      required: false
    }
  },

  data() {
    return {
    }
  },
}
</script>
<style>
#conversationStyle {
  box-shadow: -3px 2px 5px 1px #6c35ba8b;
  border: 3px solid bisque;
}
</style>