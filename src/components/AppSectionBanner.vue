<template>
    <section>

        <div class="container">
          <div class="card" style="--cor:#03a9f4">
            <div class="caixaimg">
                <img src="../assets/Produtos.jpg">
            </div>
            <div class="conteudo">
                <h2>Produtos</h2>
                <p>Descubra os incríveis sabores da marca "Sorvete Amigo" disponíveis em nossa sorveteria! Delicie-se com uma variedade de opções que vão encantar o seu paladar.</p>
                <a href="">Ler mais</a>
            </div>
          </div>


          <div class="card" style="--cor:#03a9f4">
            <div class="caixaimg">
                <img src="../assets/Sorveteria.jpg">
            </div>
            <div class="conteudo">
                <h2>Quem somos</h2>
                <p>Em nossa sorveteria, você encontrará um ambiente acolhedor e convidativo, perfeito para desfrutar de momentos agradáveis 
                    com amigos e familiares. </p>
                <a href="">Ler mais</a>
            </div>
          </div>


        </div>

    </section>
</template>

<script>

</script>

<style scoped>
section {
    margin-top: 25px;
    padding: 0;
    box-sizing: border-box;
}

.container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 100px 110px;
   padding: 100px 50px;
}

.container .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgba(0, 0, 0,.35);
    background: #fff;
    transition: .5s;

}

.container .card:hover {
    height: 400px;
}

.container .card .caixaimg {
    position: absolute;
    top: 20px;
    width: 300px;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
    transition: .5s;
}

.container .card .caixaimg img,jpg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container .card:hover .caixaimg {
    top: -100px;
    scale: .75;
    box-shadow: 0 15px 45px rgba(0, 0, 0,.2);
}

.container .card .conteudo {
    position: absolute;
    top: 250px;
    width: 100%;
    height: 39px;
    overflow: hidden;
    padding: 0 30px;
    text-align: center;
    transition: .5s;

}

.container .card:hover .conteudo {
    top: 120px;
    height: 250px;
}

.container .card .conteudo h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3rem;
    color: var(--cor);
}

.container .card .conteudo p {
    color: #333;
}

.container .card .conteudo a {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 8px;
    background: var(--cor);
    color: #fff;
    transition: .5s;
}

.container .card .conteudo a:hover {
    background: #040305;
    transition: .5s;
}

</style>
