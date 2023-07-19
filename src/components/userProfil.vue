<template>
  <v-container class="bg-cyan-lighten-4">
    <v-row class="pa-3 ma-3">
      <v-col justify="start">
        <AvatarComponent :toyNumber='4' :size="60" rounded="50" group="2" id="avatarShadow"/>
      </v-col>
      <v-col justify="end">
        <h3 text-align="center" class="ma-7">
          {{ username }}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import AvatarComponent from './AvatarComponent.vue'
import {mapStores} from "pinia";
import {chatStore} from "../store/store.js";

export default {
  components: {AvatarComponent},
  computed: {
    ...mapStores(chatStore)
  },
  props: {},
  data: () => {
    return {
      username: ''
    }
  },
  mounted() {
    this.username = this.chatStore.getUserName
  },
}
</script>
<style>
#avatarShadow {
  box-shadow: 10px 10px 12px 1px #6c35ba8b;
}
</style>