<template>
    <section>


         <div class="container">

            <AppSectionPromocoesIndividual
               img-name="Fresh.png"
               img-info="promo 1"
               promo-title="Descubra os incríveis sabores dos picolés Fresh!"
               promo-content="Cada mordida é uma explosão de sabores naturais e revigorantes que vão despertar seus sentidos. Feitos com ingredientes cuidadosamente selecionados, esses picolés oferecem uma combinação perfeita de texturas suaves e refrescantes."
               
            />

            <AppSectionPromocoesIndividual
               img-name="acai.png"
               img-info="promo 2"
               promo-title="Delicie-se com o refrescante sabor do picolé de açaí!"
               promo-content="Feitos com a polpa pura do açaí, esses picolés proporcionam uma explosão de sabor autêntico em cada lambida. Além de serem uma verdadeira delícia, os picolés de açaí são uma opção nutritiva, pois são ricos em antioxidantes e nutrientes. "
               
            />


            <AppSectionPromocoesIndividual
               img-name="Kids.png"
               img-info="promo 3"
               promo-title="Divirta-se com os deliciosos picolés Kids!"
               promo-content="Com cores vibrantes e sabores doces, eles são a opção perfeita para alegrar o dia das crianças (e até mesmo dos adultos). Esses picolés são feitos com ingredientes seguros e são especialmente projetados para agradar o paladar dos pequenos."
              
            />


         </div>
       


    </section>
</template>

<script>

import AppSectionPromocoesIndividual from './AppSectionPromocoesIndividual';

export default {
    
    components: {
        AppSectionPromocoesIndividual


    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
}



</style>