
<template>
  <v-container fluid id="Degr" class="Degr">
    <v-row class="h-screen">
      <v-col class="d-flex justify-center align-self-center"> 
  <v-sheet rounded="xl" h-screen min-width="330" max-width="340">
    <v-card  class="px-6 py-6 bg-cyan-accent-1 text-center text-#D1C4E9" variant="flat" id="ShadowCard">
      <AvatarComponent justify="center" :toyNumber="10" :group="2" rounded="50"/>
      <v-form>
        <v-text-field v-model="userName" label="User name" clearable :rules="nameRules" class="text-deep-purple-darken-2"></v-text-field>  
        <br>
        <v-btn block color="#D1C4E9" class="text-deep-purple-lighten-1 font-weight-normal" size="large" type="submit" variant="flat" id="ShadowCard" @click.prevent="login()">Login</v-btn>
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
import AvatarComponent from '../components/AvatarComponent.vue'
import { initCustomFormatter } from 'vue';

export default defineComponent({
  name: "Login",
  components: {
    AvatarComponent
  }, 

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

<style>
/* #testDegr {
  background-color: conic-gradient(#fef1bcfb, #fa98dead, #86f3fffb); 
  box-shadow: -1px 2px 6px 2px #ad23bc71;
}; */
.ShadowCard {
  box-shadow: 2px 2px 3px  #7b38af94
};

#Degr {
  background-color: radial-gradient(#4d95edfb, #e076c2ad); 
}; 


</style>


