<template>
  home
</template>
 
<script>
import {defineComponent} from 'vue'
import dayjs from 'dayjs';
import dayjsMixins from '../mixins/dayjs';
export default defineComponent({
  name: 'Home',
  created() {
    const unixTimestamp = 1626093600; // Exemple de timestamp UNIX

    const date = dayjs.unix(unixTimestamp); //obligatoire

    const month = date.format('MM'); //convertir en ce que vous voulez (ou y'a le 'MM', regarder dans 
    //dayjs.js formattedDate ou https://day.js.org/docs/en/parse/string-format)

    console.log("exempledayjs:",month); // Affiche le mois correspondant au timestamp UNIX
  }
});
</script>

<style scoped>

</style>