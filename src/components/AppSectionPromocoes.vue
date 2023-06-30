<template>
    <section>


         <div class="container">

            <AppSectionPromocoesIndividual
               img-name="Fresh.png"
               img-info="promo 1"
               promo-title="Sabores Refrescantes em Promoção: Aproveite os Picolés Fresh e Sinta o Verão!"
               promo-content="Resgate seu cupom ao lado e desfrute de 15% de desconto nos irresistíveis picolés Fresh! Refresque-se com sabores deliciosos e economize nesta promoção imperdível!"
               code-promo="FRESH15%"
            />

            <AppSectionPromocoesIndividual
               img-name="acai.png"
               img-info="promo 2"
               promo-title="Sabor Refrescantes em Promoção: Aproveite o Picolé Açaí e Sinta o Verão!"
               promo-content="Resgate seu cupom ao lado e desfrute de 15% de desconto no irresistível picolé Açaí! Refresque-se com sabores deliciosos e economize nesta promoção imperdível!"
               code-promo="ACAI15%"
            />


            <AppSectionPromocoesIndividual
               img-name="Kids.png"
               img-info="promo 3"
               promo-title="Sabores Refrescantes em Promoção: Aproveite os Picolés Kids e Sinta o Verão!"
               promo-content="Resgate seu cupom ao lado e desfrute de 15% de desconto nos irresistíveis picolés Kids! Refresque-se com sabores deliciosos e economize nesta promoção imperdível!"
               code-promo="KIDS15%"
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