<template>
  <chatList>
  </chatList>
</template>

<script>
import {defineComponent} from 'vue'
import chatList from '../components/chatList.vue'

export default defineComponent({
  name: "Home",
  components:{
    chatList
  }
})
</script>

<style scoped>

</style>