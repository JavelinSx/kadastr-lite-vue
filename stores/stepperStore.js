// stores/stepperStore.js
import { defineStore } from 'pinia';
import { itemsForStepperServiceI, itemsServiceI, cityListI } from '@/utils/data'; // Импорт из вашего файла data.js

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    stepValue: 0,
    isLastStep: false,
    isNextDisabled: true,
    isPrevDisabled: true,
    formData:{},
    selectStepOne: 0,
    selectStepTwo: 0,
    selectStepThree: {
      city: '',
      street: ''
    },
    selectStepFour: {
      phone: '',
      fullName: ''
    },
    totalStep: 4,
    itemsForStepperService: itemsForStepperServiceI,
    itemsService: itemsServiceI,
    itemsArea: [],
    resetStepper: false
  }),
  actions: {
    listArea(search) {
      if(search.length>0){
        this.itemsArea = cityListI
      } else {
        this.itemsArea = []
      }
    },
    updateStepValue (value) {
      this.isLastStep = value+1 === this.totalStep - 1;
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
      this.selectStepThree = this.phoneNumber;
    },
    nextStep(step) {
      if(!this.isLastStep){
          this.stepValue = this.stepValue+1 
      } else {
          this.submitFormStepper()
      }
      this.updateStepValue(step)
    },
    prevStep(){
        this.stepValue = this.stepValue-1
        this.selectStepTwo = []
    },
    async submitFormStepper() {
        try {
          this.formData = {
            stepOne: itemsForStepperServiceI[this.selectStepOne - 1].label,
            stepTwo: itemsServiceI[this.selectStepOne - 1][this.selectStepTwo - 1].label,
            stepThree: this.selectStepThree,
            stepFour: this.selectStepFour
          }

          await fetchStepper(this.formData)
          this.stepValue = 0
          this.formData = {}
          this.selectStepOne = 0,
          this.selectStepTwo = 0,
          this.selectStepThree = {
            city: '',
            street: ''
          },
          this.selectStepFour = {
            phone: '',
            fullName: ''
          },
          this.itemsArea = []

        } catch (error) {
        }
    },
    toggleButtonNext() {
        this.isNextDisabled = true
    },
    verifyStep() {
      console.log(this.selectStepThree.city)
      this.stepValue===0 && this.selectStepOne !== 0 ? this.isNextDisabled=false : this.isNextDisabled=true
      this.stepValue===1 && this.selectStepTwo !== 0 ? this.isNextDisabled=true : this.isNextDisabled=false
      this.stepValue===2 && ((this.selectStepThree.city && (this.selectStepThree.city.length !== 0)) && (this.selectStepThree.street && (this.selectStepThree.street.length !== 0))) ? this.isNextDisabled=false : this.isNextDisabled=false
      this.stepValue===3 && ((this.selectStepFour.fullName.length !== 0) && (this.selectStepFour.phone.length !== 0)) ? this.isNextDisabled=false : this.isNextDisabled=false   
    }
    // Дополнительные действия по необходимости
  }
});
