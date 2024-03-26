<template>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-crosshairs-gps" title="Главная" value="main" link :to="{ name: 'index' }"></v-list-item>
        <v-list-item prepend-icon="mdi-land-plots-marker" title="Земельный участок" value="plot"></v-list-item>
        <v-list-item prepend-icon="mdi-greenhouse" title="Технический план" value="plan"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker-path" title="Вынос границ" value="boundaries"></v-list-item>
        <v-list-item prepend-icon="mdi-vector-arrange-below" title="Раздел" value="division"></v-list-item>
        <v-list-item prepend-icon="mdi-vector-union" title="Перераспределение" value="redistribution"></v-list-item>
    </v-list>
</template>

<script setup>

</script>