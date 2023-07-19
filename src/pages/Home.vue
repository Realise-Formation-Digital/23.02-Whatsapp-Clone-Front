<template>
  home
  <!--{{todayFormattedDate (1626093600)}}-->
</template>
 
<script>
import {defineComponent} from 'vue'
import dayjsMixins from '../mixins/dayjs';
export default defineComponent({
  name: 'Home',
  mixins: [dayjsMixins]
});
</script>

<style scoped>

</style>
