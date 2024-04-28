<template>

        <v-form @submit.prevent="stepperStore.submitFormStepper" >
            <v-expand-transition>
                <v-stepper
                    :model-value="stepValue"     
                    hide-actions
                    v-show="isOpenForm"
                    class="rounded-b-0" 
                >
                    <StepperHeaders></StepperHeaders>
                    <StepperWindow></StepperWindow>
                    <StepperActions></StepperActions>
                </v-stepper>

            </v-expand-transition>



            <v-btn 
                @click="stepperStore.toggleOpenForm"
                :color="isOpenForm ? 'indigo' : 'success'"
                class="rounded-t-0"
            >
                {{ isOpenForm ? 'Свернуть' : 'Оставить заявку' }}
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
    stepValue, 
    isOpenForm
} = storeToRefs(stepperStore)
watch([selectStepOne, selectStepTwo, selectStepThree, selectStepFour, stepValue], () => stepperStore.verifyStep(), {deep: true})




</script>

<style lang="scss" scoped>
.v-form{
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    z-index: 100;
    @media  screen and (min-width:768px) {
        max-width: 650px;
    }
}
.v-stepper.v-sheet{
    position: absolute;
    top: 36px;
    width: 100%;
    @media  screen and (min-width:768px) {
        top: 58px; 
    }
}

@media (min-width: 450px) and (max-width: 100vw) {
    .v-btn{
        height: 56px;
    }
}
</style>