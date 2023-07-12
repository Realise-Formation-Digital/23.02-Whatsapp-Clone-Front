<template>
 
    <InputMessage/>
  
</template>

<script>
import {defineComponent} from 'vue'
import InputMessage from '../components/InputMessage.vue'


export default defineComponent({
  name: "Messages",
  components:{InputMessage}
})
</script>

<style scoped>

</style>