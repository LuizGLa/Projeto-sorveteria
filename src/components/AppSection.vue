<template>

  <div>
    
    <AppSectionBanner/>
    <AppSectionPromocoes/>
    <AppSectionWhatsapp/>

  

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
   }
}

</script>

<style scoped>



</style>