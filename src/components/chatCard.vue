<template>
  <v-card class="rounded-xl rounded-be-0 bg-pink-lighten-2 ma-0 pa-4" @click="enterConversation()">
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
<style></style>