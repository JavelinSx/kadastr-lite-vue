<template>
    <img class="index-background-img" :src="backgroundImage">

    <v-container class="index-container">
        <v-row>
            <v-col class="index-phone">
                <h3>8 (902) 552-20-52</h3>
                <h3>Андрей Николаевич</h3>
            </v-col>
        </v-row>
        <v-row class="index-description" justify="center" align="center">
            <v-col cols="0" md="2" lg="10"></v-col>
            <v-col 
                cols="12" 
                class="text-center">
                <v-container class="index-title-container">
                    <h1 class="index-title">Кадастровые работы под ключ</h1>
                    <h4 class="index-subtitle">Уточните границы, оформите дом или квартиру и будьте спокойны, что все сделали верно и по закону</h4>
                </v-container>
            </v-col>

        </v-row>



        <v-sheet>
            <v-stepper  :model-value="stepValue" hide-actions>
                <v-stepper-header float>
                    <v-stepper-item value="1">
                    </v-stepper-item>
                    <v-divider></v-divider>
                    <v-stepper-item value="2">
                    </v-stepper-item>
                    <v-divider></v-divider>
                    <v-stepper-item value="3">
                    </v-stepper-item>
                    <v-divider></v-divider>
                    <v-stepper-item value="4">
                    </v-stepper-item>
                </v-stepper-header>
                <v-stepper-window>
                    <v-stepper-window-item value="1">
                            <v-card title="Выберите вид кадастровых работ">
                                <img :src="boundares">
                                <v-checkbox
                                    label="Уточнение границ земельного участка(межевание)"
                                >
                                
                                </v-checkbox>
                            </v-card>
                            <v-card title="lorem1">
                                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                            </v-card>
                            <v-card title="lorem1">
                                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                            </v-card>
                            <v-card title="lorem1">
                                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                            </v-card>


                    </v-stepper-window-item>
                    <v-stepper-window-item value="2">
                        <v-card title="lorem2">
                            <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                        </v-card>
                    </v-stepper-window-item>
                    <v-stepper-window-item value="3">
                        <v-card title="lorem3">
                            <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                        </v-card>
                    </v-stepper-window-item>
                    <v-stepper-window-item value="4">
                        <v-card title="lorem4">
                            <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nam!</v-card-text>
                        </v-card>
                    </v-stepper-window-item>
                </v-stepper-window>
                <v-stepper-actions next-text="Дальше" prev-text="Назад" @click:next="nextStep" @click:prev="prevStep" >
                    
                </v-stepper-actions>

            </v-stepper>
        </v-sheet>

    </v-container>


</template>

<script setup>
import backgroundImage from '../images/diploma.webp'
import boundares from '../images/services/boundaries.jpg'
import {ref} from 'vue'
const stepperItems = ['','','','']
const stepperQuestions = ['Необходимый вид кадастровых работ', 'Где требуется провести работы?', 'Пожелания по срочности выполнения', 'Ваш номер телефона для связи']
const stepValue = ref(1)
const nextStep = () => {
    stepValue.value = stepValue.value+1
}
const prevStep = () => {
    stepValue.value = stepValue.value-1
}

</script>

<style lang="scss">
.v-window-item{
    .v-card-title{
        font-size: 1rem;
    }

    img{
        height: 300px;
        object-fit: cover;
    }
    
}
.index-container{
    color: #eeeeee;
    max-width: 100vw;
    height: 300px;
    max-height: 600px;
    position: relative;
    margin: 0;
    background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 35.29%, 0) 0%,
    hsla(0, 0%, 34.53%, 0.034375) 16.36%,
    hsla(0, 0%, 32.42%, 0.125) 33.34%,
    hsla(0, 0%, 29.18%, 0.253125) 50.1%,
    hsla(0, 0%, 24.96%, 0.4) 65.75%,
    hsla(0, 0%, 19.85%, 0.546875) 79.43%,
    hsla(0, 0%, 13.95%, 0.675) 90.28%,
    hsla(0, 0%, 7.32%, 0.765625) 97.43%,
    hsla(0, 0%, 0%, 0.8) 100%
  );
}
.index-phone{
    text-align: end;
}
.index-description{
    margin-top: 0 !important;
}
.index-background-img{
    position: relative; // Теперь правильно установлено для родителя
    min-height: 370px;
    max-height: 800px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(0px);
}

.index-title-container{
    max-width: max-content;

}
.index-title{
    line-height: 2.2rem;
}
.index-subtitle{
    padding-top: 1rem;
    width: 280px;
    margin: auto;

    @media  screen and (min-width:450px) {
        width: 370px;
        text-align: start;
        margin: 0;
    }
}

</style>