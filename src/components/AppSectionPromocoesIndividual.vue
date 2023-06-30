<template>
    <div class="row">

        <div class="col-3">

            <img :src="require('../assets/promoção/' + this.imgName)" :alt="imgInfo">

        </div>

        <div class="col-7">

            <h2>{{ promoTitle }}</h2>

            <p>{{ promoContent }}</p>

            <button class="btn btn-info btn-sm" @click="showCodePromo">Cupom</button>
            
            <p2 v-if="showCode">{{ codePromo }}</p2>
          
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

        codePromo: {
            type: String,
            required: true
        }
    },

    methods: {
        showCodePromo() {
            this.showCode = !this.showCode
        }
    }

}
</script>

<style scoped>


 button {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
    text-decoration: none;
    transform: scale(1.2);
 }

 button:hover {
    transform: scale(1.3);
    text-decoration: none;
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
 }

 p {
    font-family: sans-serif;
 }

 p2 {
    margin-left: 20px;
    font-family:sans-serif;
    color:rgb(50, 80, 170);
    font-size: 15px;
    background-color: aliceblue;
    font-weight: bold;
    
 }

</style>