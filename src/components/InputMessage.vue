<template>
    <!-- <v-container>
        Possibilité de recupérer le message  via : {{ text }}
    </v-container> -->

    <v-container>
    <v-textarea
      v-model="text"
    ></v-textarea>
  </v-container>
</template>


<script>
export default {
    data() {
        return {
            text:'',
        };
    },
};
</script>



<style scoped>
    
</style>