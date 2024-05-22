<template>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-crosshairs-gps" title="Главная" value="main" link :to="{ name: 'index' }"></v-list-item>
        <v-list-item prepend-icon="mdi-land-plots-marker" title="Земельные участки" value="plot" link :to="{ name: 'plot' }"></v-list-item>
        <v-list-item prepend-icon="mdi-greenhouse" title="Здания" value="plan" link :to="{ name: 'plan' }"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker-path" title="Геодезия" value="boundaries" link :to="{ name: 'boundaries' }"></v-list-item>
        <v-list-item prepend-icon="mdi-account-question" title="Часто задаваемые вопросы" value="questions" link :to="{ name: 'questions' }"></v-list-item>
    </v-list>
</template>

<script setup>

</script>