<template>
  <v-container class="bg-lime-darken-2">
    <v-row>
      <v-col cols="3" align-self="center" justify="end" class="ml-16 mr-0">
        <AvatarComponent class="ml-16 mr-0" justify="end" :toyNumber="10" :group="2" :rounded="50" id="avatarShadow" />
      </v-col>
      <v-col justify="start">
        <h3 cols="9" align-self="center" class="ml-0 mr-16 ma-7 pa-1 text-amber-lighten-5" id="titleFont">
          {{ this.chatStore.getUserName }}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import AvatarComponent from './AvatarComponent.vue'
import { mapStores } from "pinia";
import { chatStore } from "../store/store.js";

export default {
  name: 'userProfil',
  components: { AvatarComponent },
  props: {
    userName: {
      type: String,
      default: '',
      required: true
    },
  },
  data: () => {
    return{
      toyNumber: [],
      group: []
    }
  },

  computed: {
    ...mapStores(chatStore)
  },

  mounted() {
    this.username = this.chatStore.getUserName
  },

}
</script>
<style>

#avatarShadow {
  box-shadow: 3px 2px 5px 1px #ba61358b;
}
</style>