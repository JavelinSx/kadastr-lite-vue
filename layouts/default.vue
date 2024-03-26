<template>
    <v-app>
      <!-- для мобильных устройств -->
      <MobileMenu v-if="mobile"></MobileMenu>
      <DesktopMenu v-else></DesktopMenu>
      <!-- для десктопных устройств -->
      <v-main>
        <NuxtPage /> <!-- Место для контента страницы -->
      </v-main>
    </v-app>
  </template>

<script setup>
  import { useDisplay } from 'vuetify';

  const {mobile} = useDisplay()
</script>
  