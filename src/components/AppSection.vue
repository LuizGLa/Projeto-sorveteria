<template>

  <div>
    
   <component :is="currentComponent"></component>
  

  </div>

</template>



<script>
import AppSectionBanner from './AppSectionBanner';
import AppSectionWhatsapp from './AppSectionWhatsapp';
import AppSectionPromocoes from './AppSectionPromocoes';

export default {
    components: {
    AppSectionBanner,
    AppSectionWhatsapp,
    AppSectionPromocoes
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