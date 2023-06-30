<template>
    <section>
        <a class="whatsapp-link" href="http://api.whatsapp.com/send?1=pt_BR&phone=5533991023207" target="_blank"><i class="fab fa-whatsapp"></i></a>
        

    </section>



</template>



<script>




</script>



<style scoped>
   .whatsapp-link {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 70px;
  right: 40px;
  background-color: #0fb74d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 1px 1px 10px #4b4a4a ;
  text-decoration: none;
  z-index: 1000;
}

.whatsapp-link i {
  color: #ffffff;
  font-size: 29px;
}

.whatsapp-link:hover {
    width: 70px;
    height: 70px;
    transition: .5s;
}

.whatsapp-link:hover i {
    font-size: 35px;
    transition: .5s;
}

  



</style>
