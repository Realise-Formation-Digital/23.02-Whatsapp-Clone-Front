<template >
  <v-container fluid class="bg-purple-lighten-4 h-screen">
    <v-row class="h-screen">
      <v-col class="d-flex justify-center align-self-center">
    
  <v-sheet rounded="xl" h-screen min-width="330" max-width="340">
    <v-card rounded="lg" class="px-6 py-8 bg-cyan-lighten-4 text-center" >
      <v-avatar class="mb-6" icon="mdi-account"  size="x-large"></v-avatar>
      <p class="mb-4">{{ chatStore.getUserName }}</p>    
      <v-form>
        <v-text-field
            v-model="chatStore.getUserName"
            label="User name"
            clearable
            >
        </v-text-field>  
        <br>
        <v-btn
          block
          color="green-accent-2"
          size="large"
          type="submit"
          variant="elevated"
          @click.prevent="login(chatStore.getUserName)"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</v-col>
</v-row>
</v-container>
 
</template>

<script>
import {defineComponent} from 'vue';
import { mapStores } from 'pinia';
import {chatStore} from '../store/store'
import { initCustomFormatter } from 'vue';

export default defineComponent({
  name: "Login",
  data: () => {
    return {
      
    }
  },
  computed: {
    ...mapStores(chatStore)
  },
  methods: {
    async login(body) {
      console.log("[LoginVue][Post] post user name", route, body);
      await 
      this.$router.push('/messages')
      console.log(chatStore.getUserName)
    }
  }
})
</script>

<style scoped>

</style>