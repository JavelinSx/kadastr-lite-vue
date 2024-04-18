<template>
    <h1 class="text-center pa-8 text-h4">О нас</h1>
    <v-timeline side="end">
      <v-timeline-item
        v-for="data in dataContent"
        :key="data.id"
        :dot-color="data.color"
        size="small"
        width="230"
      >

        <v-card
            class="mx-auto"
            max-width="230"
        >
            <v-img
                height="200px"
                :src="data.img"
                cover
            ></v-img>
            <v-card-title :class="`text-${data.color}`">
                {{ data.title }}
            </v-card-title>
            <v-card-text>
                {{ data.subtitile }}
            </v-card-text>
    
        </v-card>



      </v-timeline-item>
    </v-timeline>
  </template>

<script setup>
  import one from '../images/about/1.webp'
  import two from '../images/about/2.webp'
  import three from '../images/about/3.webp'
  import four from '../images/about/4.webp'

    const dataContent = [
        {   
            id:1,
            title: 'Опыт более 15 лет',
            subtitile: 'Плесецкий район от Самодеда до Кенозеро',
            img: one,
            color:'green-lighten-1'
        },
        {   
            id:2,
            title: 'Индивидуальный подход',
            subtitile: 'Мы работаем как с физ. лицами, так и с юр. лицами',
            img: two,
            color:'green-darken-3'
        },
        {   
            id:3,
            title: 'Полный спектр услуг от кадастра до геодезии',
            subtitile: 'Сертификаты на работы как по кадастру так и геодезии(маркшейдерии)',
            img: three,
            color:'green-lighten-1'
        },
        {   
            id:4,
            title: 'Бесплатные консультации',
            subtitile: 'Мы разберём любую вашу проблему связанную с землёй или недвижимостью',
            img: four,
            color:'green-darken-3'
        },
    ]
  
</script>

<style lang="scss" scoped>
.v-card-title{
    white-space: pre-wrap;
    line-height: 1.5rem;
    font-size: 1.2rem;
}
</style>