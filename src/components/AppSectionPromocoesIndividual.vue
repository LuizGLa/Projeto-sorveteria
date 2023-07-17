<template>
    <div class="row">

        <div class="col-3">

            <img :src="require('../assets/promoção/' + this.imgName)" :alt="imgInfo" :class="delayView">

        </div>

        <div class="col-7">

            <h2 :class="delayView">{{ promoTitle }}</h2>

            <p :class="delayView">{{ promoContent }}</p>

          
        </div>


    </div>
</template>

<script>

export default {

    data() {
        return {
            showCode: false
        };
    },
    props: {
        imgName: {
            type: String,
            required: true
        },
        imgInfo: {
            type: String,
            required: true
        },
        promoTitle: {
            type: String,
            required: true
        },
        promoContent: {
            type: String,
            required: true
        },

        delayView: {
            type: String,
            required: true
        }

    },

    methods: {
        
    },

   
};
</script>

<style scoped>

@font-face {
    font-family: 'Vista Slab OT';
    src:url('../assets/fonts/VistaSlabOT-Black.woff2') format('woff2'),
        url('../assets/fonts/VistaSlabOT-Black.woff') format('woff'),
        url('../assets/fonts/VistaSlabOT-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

 .row {
    margin-bottom: 40px;

 }


 img {
    width: 100%;
 }
 h2 {
    color: aliceblue;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: Vista Slab OT, serif;
    font-size: 35px;
 }

 p {
    font-family: Vista Slab OT, serif;
    color: rgb(20, 29, 83);
   
 }

</style>