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
import {inject} from 'vue'
import StepperActions from './StepperActions'
import StepperHeaders from './StepperHeaders'
import StepperWindow from './StepperWindow'

const stepValue = inject('stepValue')

</script>