<template>

        <v-form @submit.prevent="stepperStore.submitFormStepper" >
            <v-expand-transition>
                <v-stepper
                    :model-value="stepValue"     
                    hide-actions
                    v-show="isOpen"
                    class="rounded-b-0" 
                >
                    <StepperHeaders></StepperHeaders>
                    <StepperWindow></StepperWindow>
                    <StepperActions></StepperActions>
                </v-stepper>
            </v-expand-transition>
            <v-btn 
                @click="toggleService"
                :color="isOpen ? 'indigo' : 'success'"
                class="rounded-t-0"
            >
                {{ isOpen ? 'Свернуть' : 'Оставить заявку' }}
            </v-btn>
        </v-form>



</template>

<script setup>
import { useStepperStore } from '@/stores/stepperStore';
import { storeToRefs } from 'pinia';
import {watch, ref} from 'vue'
import StepperActions from './StepperActions'
import StepperHeaders from './StepperHeaders'
import StepperWindow from './StepperWindow'

const stepperStore = useStepperStore();
const {
    selectStepOne,
    selectStepTwo,
    selectStepThree,
    selectStepFour,
    stepValue
} = storeToRefs(stepperStore)
watch([selectStepOne, selectStepTwo, selectStepThree, selectStepFour, stepValue], () => stepperStore.verifyStep(), {deep: true})

const isOpen = ref(false)

const toggleService = () => {
    isOpen.value = !isOpen.value
}



</script>

<style lang="scss" scoped>
.v-form{
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
}

@media (min-width: 450px) and (max-width: 100vw) {
    .v-btn{
        height: 56px;
    }
}
</style>