<template>
    <v-text-field
      label="Номер телефона"
      placeholder="8 (999) 999-99-99"
      v-model="selectStepFour.phone"
      v-mask="'+7 (###) ###-##-##'"
      max="18"
      min="18"
    ></v-text-field>
  </template>
  
  <script setup>
    import { useStepperStore } from '@/stores/stepperStore';
    import { storeToRefs } from 'pinia';

    const stepperStore = useStepperStore();
    const {
      selectStepFour
    } = storeToRefs(stepperStore)

  </script>
  