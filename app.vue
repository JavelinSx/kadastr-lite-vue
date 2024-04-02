<template>
  <NuxtLayout>
    <v-app>
    </v-app>
  </NuxtLayout>
</template>

<script setup>

import {ref, provide, watch} from 'vue'

const stepValue = ref(0)
const isLastStep = ref(false)
const selectedStepperService = ref([])
const isNextDisabled = ref(true)
const isPrevDisabled = ref(true)
const totalStep = 4

provide('stepValue', stepValue)
provide('isLastStep', isLastStep)
provide('selectedStepperService', selectedStepperService)
provide('isNextDisabled', isNextDisabled)
provide('isPrevDisabled', isPrevDisabled)
provide('totalStep', totalStep)

watch(stepValue, (currentStep) => {
    isLastStep.value = currentStep === totalStep-1 //здесь нужно дописать проверка последнего шага
})

</script>

<style lang="scss">
.step-hide{
    display: none;
}
.step-verify{
    background-color: #8fee69;
}
.btn-submit{
    background-color: #8fee69;
}
</style>