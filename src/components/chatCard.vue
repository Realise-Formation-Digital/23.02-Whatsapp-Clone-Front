 <template>
 <v-card v-model="chatAlone" id="chatCardStyle" class="rounded-xl rounded-be-0 bg-pink-lighten-2 pa-4" @click="enterConversation()" >
    <v-card-title class="text-center text-truncate">
        {{ chatTitle }}
        titre de la conversation
        </v-card-title>
        <v-card-subtitle class="text-center">
            {{ chatDescription }}
           sous-titre de conversation
        </v-card-subtitle>
        <v-card-subtitle class="text-center">
            {{ chatLastMessage }}
            Je parle, je reparle et je reparle encore. 
        </v-card-subtitle>
    </v-card>
</template>
<script>
export default {
    props:{
        chatTitle: {
            type: String,
            default: "",
            required: true, 
        },
        chatDescription:{
            type: String,
            default: "",
            required: true
        },
        chatLastMessage: {
            type: String,
            default: "",
            required: true
        },
        data:([])=>{
            return{  
            }
        },
    },
    methods: {
enterConversation(){
// async loadMessages(){

// },
},
    }

}
</script>
<style>
/* #chatCardStyle{
    border-radius: 50%;    
} */
</style>