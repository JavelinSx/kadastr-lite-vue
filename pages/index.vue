<template>
  <v-container class="index-container">
    <v-row class="index-container-phone-row">
      <v-col class="index-phone">
        <h3>тел: 8 (909) 552-20-52</h3>
        <h3>Плесецк, ул. Кооперативная 4, 1 этаж </h3>
      </v-col>
    </v-row>
    <v-row class="index-description" justify="center" align="center">
      <v-col cols="12" class="text-center">
        <v-container class="index-title-container pa-0">
          <h1 class="index-title text-h3">
            <p>
              Кадастровый инженер
            </p>
            <p>
              Зуев Андрей Николаевич
            </p>
          </h1>
          <StepperService :select-step-one=0 :select-step-two=0 :step-value=0></StepperService>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  <v-row class="content" v-if="widthControl < 600">
    <v-col class="content-col pa-0">
      <v-container class="pa-0">
        <AboutUsContent></AboutUsContent>
        <TimeLineContent></TimeLineContent>
      </v-container>
    </v-col>
  </v-row>

  <v-container v-if="widthControl > 600">
    <AboutUsContent></AboutUsContent>
    <TimeLineContent></TimeLineContent>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
const { width } = useDisplay()
const widthControl = ref(width)
</script>

<style lang="scss">
.content {
  margin: 0;
  justify-content: center;
}

.index-container-phone-row {
  flex: none;
}

.index-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #191919;
  max-width: 100vw;
  width: 100%;
  position: relative;
  margin: 0;
}
.index-phone {
  text-align: end;
}
.index-container-phone-row {
  align-self: end;
}
.index-description {
  margin-top: 0 !important;
}
.index-background-img {
  position: relative; // Теперь правильно установлено для родителя
  min-width: 500px;
  max-width: 600px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(0px);
}

.index-title-container {
  position: relative;
  max-width: max-content;
}

.index-title {
  max-width: 300px;
  text-align: left;
  font-size: 2.5rem !important;
  @media screen and (min-width: 450px) {
    max-width: 800px;
  }
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
}
.index-subtitle {
  padding-top: 1rem;
  width: 280px;
  margin: auto;
  text-align: end;
  @media screen and (min-width: 450px) {
    width: 460px;
    text-align: end;
    margin: 0;
  }
}
</style>