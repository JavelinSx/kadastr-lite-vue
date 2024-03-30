<template>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-crosshairs-gps" title="Главная" value="main" link :to="{ name: 'index' }"></v-list-item>
        <v-list-item prepend-icon="mdi-land-plots-marker" title="Земельный участок" value="plot" link :to="{ name: 'plot' }"></v-list-item>
        <v-list-item prepend-icon="mdi-greenhouse" title="Технический план" value="plan" link :to="{ name: 'plan' }"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker-path" title="Вынос границ" value="boundaries" link :to="{ name: 'boundaries' }"></v-list-item>
        <v-list-item prepend-icon="mdi-vector-arrange-below" title="Раздел" value="division" link :to="{ name: 'division' }"></v-list-item>
        <v-list-item prepend-icon="mdi-vector-union" title="Перераспределение" value="redistribution" link :to="{ name: 'redistribution' }"></v-list-item>
    </v-list>
</template>

<script setup>

</script>