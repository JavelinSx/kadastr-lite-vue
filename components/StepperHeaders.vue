<template>
    <v-stepper-header float >

        <v-stepper-item value="1" :complete="stepValue>=1" :color="stepValue>=1?'success':''">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="2" :complete="stepValue>=2" :color="stepValue>=2?'success':''">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="3" :complete="stepValue>=3" :color="stepValue>=3?'success':''">
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="4" :complete="stepValue>=4" :color="stepValue>=4?'success':''">
        </v-stepper-item>

    </v-stepper-header>
</template>

<script setup>
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';
const stepperStore = useStepperStore();
const {
    stepValue
} = storeToRefs(stepperStore)


</script>