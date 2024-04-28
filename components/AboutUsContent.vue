<template>
    <v-divider  class="border-opacity-25 pa-6"></v-divider>
    <v-row>
        <v-col class="d-flex justify-left">
            <v-container>
                <v-timeline class="justify-left" :side="widthControl<600 ? 'end' : 'start'" :direction="widthControl<769 ? 'vertical' : 'horizontal'">
                <v-timeline-item
                    v-for="(data,index) in dataContent"
                    :key="data.id"
                    :dot-color="data.color"
                    size="large"
                    :width="widthControl<500 ? 250 : 300"
                    height="350"
                    :icon="`mdi-numeric-${index+1}`"
                >
                    <v-card
                        class="mx-auto"
                        variant="tonal"
                        elevation="10"
                    >
                        <v-img
                            :src="data.img"
                            cover
                            height="180"
                        ></v-img>
                        <v-card-title>
                            {{ data.title }}
                        </v-card-title>
                        <v-card-text class="about-card-text">
                            {{ data.subtitile }}
                        </v-card-text>
                
                    </v-card>
                </v-timeline-item>
                </v-timeline>
            </v-container>
        </v-col>
    </v-row>
    
  </template>

<script setup>
    import one from '../images/about/1.jpg'
    import two from '../images/about/2.jpg'
    import three from '../images/about/3.jpg'
    import four from '../images/about/4.jpg'
    import { ref } from 'vue';
    import { useDisplay } from 'vuetify'
    const { width } = useDisplay()

    const widthControl = ref(width)
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

<style lang="scss">

.v-card-title{
    white-space: pre-wrap;
    line-height: 1.5rem !important;
    font-size: 1.2rem;
    height: 80px;
    display: flex;
    align-items: center;
}
.v-timeline-divider__after{
    background: #eeeeee;
}
.v-timeline-divider__before{
    background: #eeeeee;
}
.about-card-text{
    height: 80px;
}
</style>