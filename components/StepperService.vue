<template>
    <Teleport to="body">
      <div v-if="isOpenForm" class="stepper-overlay">
        <div class="stepper-content">
          <v-btn @click="stepperStore.toggleOpenForm" class="stepper-close-btn">X</v-btn>
          <v-form class="stepper-window" @submit.prevent="stepperStore.submitFormStepper">
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
          </v-form>
        </div>
      </div>
			<v-snackbar v-model="snackBarView">
            Заявка успешно отправлена!
            <template v-slot:actions>
              <v-btn
                color="green"
                variant="text"
                @click="stepperStore.snackBarClose()"
              >
                Закрыть
              </v-btn>
            </template>
      </v-snackbar>
    </Teleport>
  
    <v-btn
      @click="stepperStore.toggleOpenForm"
      color="success"
      class="rounded-t-0 w-100 mt-4"
      text="Оставить заявку"
    >
      
    </v-btn>
  </template>
  
  <script setup>
  import { useStepperStore } from '@/stores/stepperStore';
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';
	import { toRefs } from 'vue';
  import StepperActions from './StepperActions';
  import StepperHeaders from './StepperHeaders';
  import StepperWindow from './StepperWindow';
  
  const props = defineProps({
    selectStepOne: Number,
    selectStepTwo: Number,
		stepValue: Number
  })

  
  const stepperStore = useStepperStore();
	stepperStore.updateStateInProps(props.selectStepOne, props.selectStepTwo, props.stepValue)

	const {
			selectStepOne,
			selectStepTwo,
			selectStepThree,
			selectStepFour,
			stepValue, 
			isOpenForm,
			snackBarView
	} = storeToRefs(stepperStore)
	watch([selectStepOne, selectStepTwo, selectStepThree, selectStepFour, stepValue], () => stepperStore.verifyStep(), {deep: true})
  </script>
  
  <style lang="scss" scoped>
  .stepper-close-btn{
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 9;
		
		@media (min-width:830px) and (max-width: 1024px){
			right: 200px;
		}
		@media (min-width:1025px) and (max-width: 1366px){
			right: 380px;
		}
		@media (min-width:1367px) and (max-width: 100vw){
			right: 647px;
		}
  }
  .stepper-overlay {
		padding-top: 60px;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
  
  .stepper-content {
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  
  .stepper-window {
    position: relative;
    top: 60px;
    display: flex;
    flex-direction: column;
  }
  
  @media (min-width: 768px) {
    .stepper-content {
      max-width: 650px;
    }
  }
  </style>
  