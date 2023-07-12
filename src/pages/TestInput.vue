<template>
    <v-app>
<v-app-bar>
    <router-view></router-view>
</v-app-bar>
    
 

<v-footer>
    <InputMessage />
</v-footer>

</v-app>
</template>

<script>
import InputMessage from "./components/InputMessage.vue"


export default {
    components: {InputMessage}
}

</script>

<style scoped>

</style>