<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        fixed
        app
        :width="300"
    >
        <v-list>
            <v-list-item
                :prepend-avatar="logo"
                title="Плесецк кадастр"
            ></v-list-item>
        </v-list>
        <v-divider></v-divider>

        <MenuContent></MenuContent>
    </v-navigation-drawer>
</template>

<script setup>
import logo from '../images/logo_512x512.png'
</script>