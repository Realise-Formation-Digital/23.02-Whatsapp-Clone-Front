<template>
  <v-card class="rounded-xl rounded-be-0 ma-0 pa-3" @click="enterConversation()" :style="gradCardsMess">
    <v-card-title class="text-center text-truncate pa-3 px-3 text-purple-darken-4" id="titleFont">
      {{ chatTitle }}
    </v-card-title>
    <v-card-subtitle class="px-3" id="generalFont">
      {{ chatLastMessage }}
    </v-card-subtitle>
    <v-chip class="ma-2"
      color="purple-darken-4"
      text-color="purple-darken-4"
      prepend-icon="mdi-email">
      {{ todayFormattedDate_FullTime(ts) }}
    </v-chip>
  </v-card>
</template>

<script>
import dayjsMixins from '../mixins/dayjs';
import { gradCardsMess } from '../libs/consts';

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
      gradCardsMess
    }
  },

}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Urbanist:wght@500&display=swap');

#titleFont{
font-family: 'Poppins', sans-serif;
font-size: 30px; 
font-weight: bold
}

#generalFont{
font-family: 'Poppins', sans-serif;
font-size: 20px; 
font-weight: light;
};


</style>