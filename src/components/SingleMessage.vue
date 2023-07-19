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
          {{ ts }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {chatStore} from "../store/store.js";


export default {
  name: "SingleMessage",
  computed: {
    ...mapStores(chatStore)
  },
  data: () => {
    return {
      message: "",
    }
  },
  mounted() {
    console.log('ciao', this.chatStore.getMessage())
    this.message = this.chatStore.getMessage
  },
  props: {
    body: {
      type: String,
      default: 'Hikfsdklfjsdkljfsdjfklsdjklfsfsdfsdfsdfs',
      required: false
    },
    sender: {
      type: String,
      default: '',
      required: false
    },
    ts: {
      type: Number,
      default: new Date,
      required: false
    }
  }
}
</script>
<style scoped> .messageFitContent {
  width: fit-content;
}
</style>