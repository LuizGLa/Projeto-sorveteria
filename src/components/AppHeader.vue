<template>

   <header>
     
    <div class="container">

        <nav class="navbar navbar-expand">

            <a href="" class="link navbar-brand mr-auto">

               <img src="./../assets/Logo.png" alt="sorvete e cia" 
               class="img d-inline-block align-top" id="logo"> 

            </a>

            <div class="links mr-2">

                <a href="" @click.prevent="$emit('change-component', 'home')" class="btn mr-4">Início</a>
                <a href="" @click.prevent="$emit('change-component', 'products')" class="btn mr-4">Produtos</a>
                <a href="" class="btn mr-3">Sobre</a>

            </div>

        </nav>

    </div>
      
   </header>
    
</template>


<script>
export default {

}

</script>



<style scoped>


header {
    background-color: rgb(50, 80, 170);
    box-shadow: 0px 2px 9px 0px rgba(127, 135, 236, 0.8);
}


#logo {
    width: 150px;
    height: 100%;
}

.links {
    display: inline-flex;
}

.link {
    color: antiquewhite;
    font-size: 30px;
    font-family: 'Rajdhani';
}

.links a {
    color: aliceblue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: .5s;

}

.links a:hover {
    color: rgb(32, 126, 208);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: aliceblue;
    transition: .5s;

}

.links a:focus {
    outline: none !important;
    box-shadow: none !important
}

</style>
