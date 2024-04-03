<template>
    <v-stepper-actions>
        <template v-slot:prev="{ props }">
            <v-btn
                :disabled="isPrevDisabled"
                @click="stepperStore.prevStep()"
                :class="stepValue===4?'step-hide': ''"
            >
                Назад
                
            </v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn
                :disabled="isNextDisabled"
                @click.stop="stepperStore.nextStep(stepValue)"
                :class="isLastStep ? 'btn-submit' : '' || stepValue===4?'step-hide': ''"
            >
                {{ isLastStep ? 'Отправить' : 'Дальше' }}
            </v-btn>
        </template>
    </v-stepper-actions>
</template>

<script setup>
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';
const stepperStore = useStepperStore();
const {
    isNextDisabled,
    isPrevDisabled,
    isLastStep,
    stepValue
} = storeToRefs(stepperStore)

</script>