<template>
      
    <InputMessage @sendme="handleMessage"/>
  
  <chatList>
  </chatList>
</template>

<script>
import {defineComponent} from 'vue'
import chatList from '../components/chatList.vue'
import InputMessage from '../components/InputMessage.vue'



export default defineComponent({
  name: "Messages",
  components:{InputMessage, chatList},
  methods:{
    handleMessage(data){
      console.log(data)
    }
  }
})

</script>

<style scoped>

</style>