<template>
  <userProfil>
  </userProfil>
  <InputMessage @sendme="handleMessage" />

  <chatList>
  </chatList>
</template>

<script>
import { defineComponent } from 'vue'
import chatCard from '../components/chatCard.vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'
import userProfil from '../components/userProfil.vue'

import { mapStores } from 'pinia';
import {chatStore} from '../store/store'


export default defineComponent({
  name: "Messages",
  components: { InputMessage, chatList, userProfil, chatCard },
  computed: {
    ...mapStores(chatStore)
  },
  methods: {
    handleMessage(data) {
      console.log(data)
    }
  },
  sendMessage(body){
    
  }
})

</script>

<style scoped></style>