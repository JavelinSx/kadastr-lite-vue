<template>
    <h1 class="text-h4 pa-8 pb-0 text-center">Кадастровые работы в отношении земельных участков</h1>

    <v-divider class="w-100 mt-8"></v-divider>

    <v-container class="position-relative d-flex flex-column align-center">
      <h1 class="text-h5 pa-4 text-center text-decoration-underline">{{ plotData.title }}</h1>

      <v-container class="plot-content d-flex align-center flex-column">
        <v-img :src="correctionImg" width="100%" class="plot-img rounded"></v-img>
        <h2 class="text-body-1 pa-2 pl-8 pr-8 text-center">{{ plotData.description }}</h2>
      </v-container>

      <v-expansion-panels multiple class="ga-3">
        <v-expansion-panel
          v-for="(item, index) in plotData.info"
          :key="index"
          :title="item.title"
          :text="item.text"
        >
        </v-expansion-panel>
      </v-expansion-panels>

      <StepperService :select-step-one=1 :select-step-two=1 :step-value=3></StepperService>

    </v-container>

    <v-divider class="w-100 mt-8"></v-divider>

    <v-container class="position-relative d-flex flex-column align-center">
      <h1 class="text-h5 pa-4 text-center text-decoration-underline">{{ formingData.title }}</h1>

      <v-container class="plot-content d-flex align-center flex-column">
        <v-img :src="formingImg" width="100%" class="plot-img rounded"></v-img>
        <h2 class="text-body-1 pa-2 text-center">{{ formingData.description }}</h2>
      </v-container>

      <v-expansion-panels multiple class="ga-3">

        <v-expansion-panel
          :key="1"
          title="Порядок образования участка"
        >
          <v-expansion-panel-text>
            <v-list lines="three">
              <v-list-item
                v-for="(item, index) in formingData.order"
              >
                <v-list-item-subtitle>{{item}}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
          :key="2"
          :title="formingData.docs.title"
          :text="formingData.docs.text"
        >
        </v-expansion-panel>

      </v-expansion-panels>

      <StepperService :select-step-one=1 :select-step-two=4 :step-value=2></StepperService>

    </v-container>

    <v-divider class="w-100 mt-8"></v-divider>
</template>

<script setup>
import formingImg from '../images/services/landPlot/forming.jpg'
import correctionImg from '../images/services/landPlot/correction.jpg'
import { plotData, formingData } from '../utils/pagesData.js'
import StepperService from '~/components/StepperService.vue';
const test = () => {
  console.log('hello')
}
</script>

<style lang="scss">
.plot-content{
  overflow: hidden;
  @media (min-width: 768px) and (max-width: 100vw){
    flex-direction: row !important;
  }
}
.plot-img{
  max-width: 340px;
  @media (min-width: 768px) and (max-width: 100vw){
    float: left; 
    margin: 0 15px 15px 0; 
    max-width: 50%; 
  }

}
.v-container {
  z-index: 1;
}
.v-img-absolute {
  position: absolute;
  z-index: -1;
  left: 290px;
  transform: scale(-1, 1);
  @media (min-width: 500px) and (max-width: 100vw) {
    left: -30px;
    top: 45px;
    transform: none;
  }

  .v-img__img {
    object-fit: contain !important;
  }
}
.title-plot-card {
  height: 50px !important;
}
.v-card-title {
  height: 80px;
  display: flex;
  align-items: center;
  line-height: 1.5rem !important;
}
.v-timeline--vertical.v-timeline {
  height: auto;
}
.v-timeline-item__body {
  width: 100%;
}
</style>