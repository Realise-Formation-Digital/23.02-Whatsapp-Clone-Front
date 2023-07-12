<template>
      
    <InputMessage @sendme="handleMessage"/>
  
</template>

<script>
import {defineComponent} from 'vue'
import InputMessage from '../components/InputMessage.vue'



export default defineComponent({
  name: "Messages",
  components:{InputMessage},
  methods:{
    handleMessage(data){
      console.log(data)
    }
  }
})

</script>

<style scoped>

</style>