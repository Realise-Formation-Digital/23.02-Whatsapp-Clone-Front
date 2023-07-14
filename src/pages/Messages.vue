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


export default defineComponent({
  name: "Messages",
  components: { InputMessage, chatList, userProfil, chatCard },
  methods: {
    handleMessage(data) {
      console.log(data)
    }
  }
})

</script>

<style scoped></style>