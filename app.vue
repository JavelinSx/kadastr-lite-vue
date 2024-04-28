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
.gradient-animation {
  background: linear-gradient(270deg, #E8F5E9, #81C784);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>