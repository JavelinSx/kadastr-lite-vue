<template>
    <h1 class="text-h4 pa-8 pb-0 text-center">Кадастровые работы в отношении земельных участков</h1>

    <v-divider class="w-100 mt-8"></v-divider>

    <v-container class="position-relative d-flex flex-column align-center">
      <h1 class="text-h5 pa-4 text-center text-decoration-underline">Уточнение местоположения границ и площади земельных участков</h1>

      <v-container class="plot-content">
        <CorrectionDescriptionData></CorrectionDescriptionData>
      </v-container>

      <v-expansion-panels multiple class="ga-3">
        <CorrectionWhenNeedData></CorrectionWhenNeedData>
        <CorrectionApproveData></CorrectionApproveData>
      </v-expansion-panels>

      <StepperService :select-step-one=1 :select-step-two=1 :step-value=2></StepperService>

    </v-container>

    <v-divider class="w-100 mt-8"></v-divider>

    <v-container class="position-relative d-flex flex-column align-center">
      <h1 class="text-h5 pa-4 text-center text-decoration-underline">Формирование (образование) земельных участков из земель</h1>

      <DescriptionData></DescriptionData>

      <v-expansion-panels multiple class="ga-3">

        <MethodsData></MethodsData>
        <FormingData></FormingData>
        <ConditionsData></ConditionsData>
        <RegistrationData></RegistrationData>

      </v-expansion-panels>

      <StepperService :select-step-one=1 :select-step-two=5 :step-value=2></StepperService>

    </v-container>
    
    <v-container class="position-relative d-flex flex-column align-center">
      <h1 class="text-h5 pa-4 text-center text-decoration-underline">Перераспределение земельных участков</h1>

      <DescriptionRedistributionData></DescriptionRedistributionData>

      <v-expansion-panels multiple class="ga-3">

        <WhatRedistributionData></WhatRedistributionData>
        <ConitionsRedistributionData></ConitionsRedistributionData>
        <PurposesRedistributionData></PurposesRedistributionData>
        <OrderReditributionData></OrderReditributionData>
        <MunicipalRedistributionData></MunicipalRedistributionData>
        
      </v-expansion-panels>

      <StepperService :select-step-one=1 :select-step-two=2 :step-value=2></StepperService>

    </v-container>
    <v-divider class="w-100 mt-8"></v-divider>
</template>

<script setup>
import CorrectionDescriptionData from '~/components/content/PlotPage/Correction/CorrectionDescriptionData.vue'
import CorrectionWhenNeedData from '~/components/content/PlotPage/Correction/CorrectionWhenNeedData.vue'
import CorrectionApproveData from '~/components/content/PlotPage/Correction/CorrectionApproveData.vue';

import DescriptionData from '~/components/content/PlotPage/Forming/DescriptionData.vue';
import MethodsData from '~/components/content/PlotPage/Forming/MethodsData.vue';
import FormingData from '~/components/content/PlotPage/Forming/FormingData.vue';
import ConditionsData from '~/components/content/PlotPage/Forming/ConditionsData.vue';
import RegistrationData from '~/components/content/PlotPage/Forming/RegistrationData.vue';

import ConitionsRedistributionData from '~/components/content/PlotPage/Redistribution/ConitionsRedistributionData.vue';
import DescriptionRedistributionData from '~/components/content/PlotPage/Redistribution/DescriptionRedistributionData.vue';
import MunicipalRedistributionData from '~/components/content/PlotPage/Redistribution/MunicipalRedistributionData.vue';
import OrderReditributionData from '~/components/content/PlotPage/Redistribution/OrderReditributionData.vue';
import PurposesRedistributionData from '~/components/content/PlotPage/Redistribution/PurposesRedistributionData.vue';
import WhatRedistributionData from '~/components/content/PlotPage/Redistribution/WhatRedistributionData.vue';

import StepperService from '~/components/StepperService.vue';

</script>

<style lang="scss">
.plot-content{
  display: grid;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 20px;
  @media (min-width: 768px) and (max-width: 100vw){
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    
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