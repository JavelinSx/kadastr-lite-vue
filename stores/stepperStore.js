// stores/stepperStore.js
import { defineStore } from 'pinia';
import { itemsForStepperServiceI, itemsServiceI, itemsAreaI, geoFetch } from '@/utils/data'; // Импорт из вашего файла data.js

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    stepValue: 0,
    isLastStep: false,
    isNextDisabled: true,
    isPrevDisabled: true,
    selectStepOne: 0,
    selectStepTwo: 0,
    selectStepThree: '',
    selectStepFour: null,
    totalStep: 4,
    itemsForStepperService: itemsForStepperServiceI,
    itemsService: itemsServiceI,
    itemsArea: [
      'Федово',
      'Плесецк',
      'Савинский'
    ]
  }),
  actions: {
    searchArea: async function(value) {
      try {

        const result = await geoFetch(value);
        const itemTest = result.response.GeoObjectCollection.featureMember;
        console.log(itemTest)
        const transformArea = itemTest.map((item) => item.GeoObject.name)
        this.itemsArea = transformArea
      } catch (error) {
        console.error("Ошибка при выполнении geoFetch: ", error);
      }
    },
    updateStepValue (value) {
      this.isLastStep = value === this.totalStep - 1;
      this.stepValue < 1 ? (this.isPrevDisabled = true) : (this.isPrevDisabled = false);
    },
    updateSelectStepOne(value) {
      this.selectStepOne = value;
      this.selectStepTwo = 0;
    },
    updateSelectStepTwo(value) {
      this.selectStepTwo = value;
    },
    updateSelectStepThree(value) {
      this.selectStepThree = value;
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

    // Дополнительные действия по необходимости
  }
});
