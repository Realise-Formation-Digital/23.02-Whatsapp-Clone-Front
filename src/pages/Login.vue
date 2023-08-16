<template >
  <v-container fluid class="bg-purple-lighten-4 h-screen">
    <v-row class="h-screen">
      <v-col class="d-flex justify-center align-self-center">
    
  <v-sheet rounded="xl" h-screen min-width="330" max-width="340">
    <v-card rounded="lg" class="px-6 py-8 bg-cyan-lighten-4 text-center" >
      <v-avatar class="mb-6" icon="mdi-account"  size="x-large"></v-avatar>   
      <v-form>
        <v-text-field
            v-model="userName"
            label="User name"
            clearable
            :rules="nameRules"
            >
        </v-text-field>  
        <br>
        <v-btn
          block
          color="green-accent-2"
          size="large"
          type="submit"
          variant="elevated"
          @click.prevent="login()"
          
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
      userName:'',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
      ]
    }
  },
  computed: {
    ...mapStores(chatStore)
  },

  async mounted() {
    if(localStorage.getItem('userName')){
      
      this.userName = localStorage.getItem('userName');
      await this.chatStore.login(this.userName)
      
      this.$router.push('/messages')
    }
  },

  methods: {

    
    async login() {
      if(this.userName !== ''){
        console.log("[LoginVue][Post] post user name", this.userName);
        await this.chatStore.login(this.userName)
        this.handleLogin();

        //await this.chatStore.postUser(this.userName)
        this.$router.push('/messages')
        //console.log(this.chatStore.getUserName)
      } else {
        console.log('error')
      }
    },

    handleLogin() {
      // Effectuez la validation des informations d'identification ici

      // Si la validation réussit et l'utilisateur est authentifié :
      // Enregistrez l'état d'authentification dans le Local Storage
      localStorage.setItem('userName', this.userName);

      // Redirigez l'utilisateur vers la page des messages après la connexion réussie
      this.$router.push('/messages');
    }
  }
})
</script>

<style scoped>

</style>