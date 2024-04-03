<template>
    <v-sheet>
        <v-stepper
            :model-value="stepValue"     
            hide-actions
        >
            <StepperHeaders></StepperHeaders>
            <StepperWindow></StepperWindow>
            <StepperActions></StepperActions>
        </v-stepper>
    </v-sheet>
</template>

<script setup>
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';
import {watch} from 'vue'
import StepperActions from './StepperActions'
import StepperHeaders from './StepperHeaders'
import StepperWindow from './StepperWindow'

const stepperStore = useStepperStore();
const {
    stepValue
} = storeToRefs(stepperStore)
</script>