<template>
  <NuxtLayout>
    <v-app>
      
    </v-app>
  </NuxtLayout>
</template>

<script setup>

import {ref, provide, watch} from 'vue'
import { itemsForStepperServiceI, itemsServiceI } from './utils/data';
import { useStepperStore } from '@/stores/stepperStore';
const stepperStore = useStepperStore();


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