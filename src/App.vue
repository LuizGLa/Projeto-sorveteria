<template>
  <div id="app">
    <AppHeader />
   
    <AppSection/>

    <appFooter/>


  </div>

</template>



<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppSection from './components/AppSection';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSection
  }
}


</script>




<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

html, body, #app {
  height: auto;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(50, 80, 170), #c9def7);
 
}

</style>
