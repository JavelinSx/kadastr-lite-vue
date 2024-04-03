// stores/stepperStore.js
import { defineStore } from 'pinia';
import { itemsForStepperServiceI, itemsServiceI } from '@/utils/data'; // Импорт из вашего файла data.js

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    stepValue: 0,
    isLastStep: false,
    isNextDisabled: true,
    isPrevDisabled: true,
    selectStepOne: 0,
    selectStepTwo: [],
    selectStepThree: null,
    selectStepFour: null,
    totalStep: 4,
    itemsForStepperService: itemsForStepperServiceI,
    itemsService: itemsServiceI
  }),
  actions: {
    updateStepValue(value) {
      this.isLastStep = value === this.totalStep - 1;
      this.stepValue < 1 ? (this.isPrevDisabled = true) : (this.isPrevDisabled = false);
    },
    updateSelectStepOne(value) {
      this.selectStepOne = value;
      this.selectStepTwo = [];
      this.itemsService.forEach((item) => {
        item.forEach((itemI) => {
          itemI.defaultValue = false;
        });
      });
      console.log(this.itemsService)
    },
    nextStep(step) {
      if(!this.isLastStep){
          this.stepValue = this.stepValue+1 
      } else {
          this.submitFormStepper()
      }
      this.updateStepValue(step)
      console.log(this.stepValue)
    },
    prevStep(){
        this.stepValue = this.stepValue-1
        this.selectStepTwo = []
    },
    submitFormStepper() {
        console.log('hello')
    },
    toggleButtonNext() {
        this.isNextDisabled = false
    },
    checkSelectOptionStepTwo(id) {
      return this.selectStepTwo.includes(id);
   }


    // Дополнительные действия по необходимости
  }
});
