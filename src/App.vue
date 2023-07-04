<template>
  <div id="app">
    <AppHeader
    @change-component="changeComponent" />
   
    <AppSection
    :current-component="currentSectionComponent"/>

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
  },

  data() {

    return {
      currentSectionComponent: 'AppSectionBanner'
    }

  },
  
  methods: {
    changeComponent(value) {

      let component;

        switch (value) {
          case 'home':
            default:
              component = 'AppSectionBanner';

              break;

              case 'products':
                component = 'AppSectionPromocoes';

                break;
        }

        this.currentSectionComponent = component;

    }
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
