<template>
  <v-container class="bg-grey-lighten-1">
    <v-row class="pa-3 ma-3">
      <v-col justify="start">
        <AvatarComponent :toyNumber="1" :group="1" size="60" rounded="50" id="avatarShadow" />
      </v-col>
      <v-col justify="end">
        <h3 text-align="center" class="ma-7">
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
  box-shadow: 3px 2px 5px 1px #6c35ba8b;
}
</style>