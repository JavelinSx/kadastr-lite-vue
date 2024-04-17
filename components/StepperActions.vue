<template>
    <v-stepper-actions>
        <template v-slot:prev="{ props }">
            <v-btn
                :disabled="isPrevDisabled"
                @click="stepperStore.prevStep()"
            >
                Назад
                
            </v-btn>
        </template>
        <template v-slot:next="{ props }">

            <v-btn
                v-if="isLastStep"
                :disabled="isNextDisabled"
                class='btn-submit'
                type="submit"
            >
                Отправить
            </v-btn>

            <v-btn
                v-if="!isLastStep"
                :disabled="isNextDisabled"
                @click.stop="stepperStore.nextStep(stepValue)"
                type=""
            >
                Дальше
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