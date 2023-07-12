<template>
    <!-- <v-container>
        Possibilité de recupérer le message  via : {{ msgText }}
    </v-container> -->

    <v-container>
    <v-textarea
      v-model="msgText"
    ></v-textarea>
  </v-container>
</template>


<script>
export default {
    data() {
        return {
            msgText:'',
        };
    },
};
</script>



<style scoped>
    
</style>