<template>
    <v-app>
      <!-- для мобильных устройств -->
      <MobileMenu v-if="mobile"></MobileMenu>
      <DesktopMenu v-else></DesktopMenu>
      <!-- для десктопных устройств -->
      <v-main class="main">

          <NuxtPage /> <!-- Место для контента страницы -->

      </v-main>
    </v-app>
  </template>

<script setup>
  import { useDisplay } from 'vuetify';
  import mainPC from '../images/main-pc.jpg'
  import mainMobile from '../images/main-mobile.jpg'
  import mainTablets from '../images/main-tablet.jpg'
  const {mobile, width} = useDisplay()
  const imageResolution = (width) => {
    if(width<500){
      return mainMobile
    }
    if(width<1024){
      return mainTablets
    }
     else {
      return mainPC
    }

  }
</script>
<style lang="scss">
.parallax-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); /* черный цвет с 50% непрозрачности */
}
.v-row{
  margin: 0;
}
.main{
  color: #191919;
  min-width: 320px !important;
  background: url('../images/main.jpg')
}
.v-card-title{
  white-space: wrap;
}
.v-container{
  max-width: 1170px !important;
  @media (min-width: 1024px) and (max-width: 100vw) {
    max-width: 1340px !important;
  }
}
.parallax__content{
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-parallax{
  .v-img__img{
    
  }
}
.v-responsive__content{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
  