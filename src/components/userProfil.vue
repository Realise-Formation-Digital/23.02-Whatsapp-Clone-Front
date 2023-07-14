<template>
    <v-container class="bg-cyan-lighten-4">
        <v-row cols=12 class="ma-3">
            <v-col justify="start" cols="4">
                <AvatarComponent :size="100" rounded="28" toy-number="3" id="avatarShadow" />
            </v-col>
            <v-col cols="8" justify="end">
                User information
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import AvatarComponent from './AvatarComponent.vue'


export default {
    components: { AvatarComponent },
    props: {
    },
    data: ()=>{
        return{
        }
    },

    async mounted (){
        await this.chat
    }
};
</script>
<style>
#avatarShadow {
    box-shadow: 10px 10px 12px 1px #0f1fff8b;
}
</style>