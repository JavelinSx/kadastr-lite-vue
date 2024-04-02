<template>
    <v-stepper-actions>
        <template v-slot:prev="{ props }">
            <v-btn
                :disabled="isPrevDisabled"
                @click="prevStep"
                :class="stepValue===4?'step-hide': ''"
            >
                Назад
                
            </v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn
                :disabled="isNextDisabled"
                @click="nextStep"
                :class="isLastStep ? 'btn-submit' : '' || stepValue===4?'step-hide': ''"
            >
                {{ isLastStep ? 'Отправить' : 'Дальше' }}
            </v-btn>
        </template>
    </v-stepper-actions>
</template>

<script setup>
import {inject} from 'vue'

const isNextDisabled = inject('isNextDisabled')
const isPrevDisabled = inject('isPrevDisabled')
const stepValue = inject('stepValue')
const isLastStep = inject('isLastStep')

const nextStep = () => {
    if(isLastStep){
        stepValue.value = stepValue.value+1
    } else {
        submitFormStepper()
    }


}
const prevStep = () => {
    stepValue.value = stepValue.value-1
}
const submitFormStepper = () => {
    console.log('hello')
}
</script>