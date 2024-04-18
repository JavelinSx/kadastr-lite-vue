<template>
    <img class="index-background-img" :src="backgroundImage">
    
    <v-container class="index-container">
        <v-row class="index-container-phone-row">
            <v-col class="index-phone">
                <h3>8 (902) 552-20-52</h3>
                <h3>Андрей Николаевич</h3>
            </v-col>
        </v-row>
        <v-row class="index-description" justify="center" align="center">
            <v-col 
                cols="12" 
                class="text-center">
                <v-container class="index-title-container">
                    <h1 class="index-title">Кадастровые и геодезические работы под ключ</h1>
                    <h4 class="index-subtitle">Уточните границы, оформите недвижимость и гарантируйте точность съемок. Будьте уверены в правильности и законности каждого шага.</h4>
                </v-container>
            </v-col>
        </v-row>

        <StepperService></StepperService>

    </v-container>

    <v-row class="content">

        <v-col class="content-col pa-0">
            <v-container class="pa-0">
                <AboutUsContent></AboutUsContent>
            </v-container>
        </v-col>

        <v-col class="content-col content-col-down pa-0">
            <v-container class="pa-0">
                <TimeLineContent></TimeLineContent>
            </v-container>
        </v-col>

    </v-row>

</template>

<script setup>
import backgroundImage from '../images/diploma.webp'

</script>

<style lang="scss">
.content{
    margin: 0;
    justify-content: center;
}
.content-col{
    max-width: 550px;
}
.content-col-down{
    @media (min-width: 450px) and (max-width: 100vw) {
        margin-top: 20rem;
    }
}
.timeline-content{
    @media (min-width: none) and (max-width: none) {
        
    }
}
.index-container-phone-row{
    flex: none;
}
.index-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #eeeeee;
    max-width: 100vw;
    height: 470px;
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
  
  @media  screen and (min-width:450px) {
        height: 600px;
    }
}
.index-phone{
    text-align: end;
}
.index-container-phone-row{
    align-self: end;
}
.index-description{
    margin-top: 0 !important;
}
.index-background-img{
    position: relative; // Теперь правильно установлено для родителя
    min-height: 500px;
    max-height: 600px;
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