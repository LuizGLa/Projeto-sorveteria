<template>

  <div>
    

    <router-view></router-view>

    <AppSectionWhatsapp/>

  </div>

</template>



<script>

import AppSectionWhatsapp from './AppSectionWhatsapp';

export default {
    components: {
      AppSectionWhatsapp
      
   },
   data() {
    return {
    
    }
   },

   props: {
    currentComponent: String
   }
}

</script>

<style scoped>




</style>