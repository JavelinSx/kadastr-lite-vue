<template>

    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Плесецк кадастр</v-toolbar-title>
    </v-app-bar>
  
    <!-- NavigationDrawer для мобильных устройств -->
    <v-navigation-drawer
      app
      temporary
      v-model="toggleBurger"
      :width="300"
    >
      <!-- Содержимое drawer, аналогичное вашему текущему -->
      <MenuContent></MenuContent>
    </v-navigation-drawer>

</template>
<script setup>

    import { ref } from 'vue';

    const toggleBurger = ref(false)
    const toggleMenu = () => {
      toggleBurger.value = !toggleBurger.value
    }
</script>