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
    loading: false
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
      this.stepValue <= 0 ? (this.isPrevDisabled = true) : (this.isPrevDisabled = false);
    },
    updateSelectStepOne(value) {
      this.selectStepOne = value;
    },
    updateSelectStepTwo(value) {
      this.selectStepTwo = value;
    },
    updateSelectStepThree() {
      this.selectStepThree = this.phoneNumber;
    },
    nextStep(step) {
      if(!this.isLastStep){
          this.stepValue = this.stepValue+1 
      }
      this.updateStepValue(step)
      this.verifyStep()
    },
    prevStep(step){
        this.stepValue = this.stepValue-1
        if(this.isLastStep){
          this.isLastStep = false
        }
        this.updateStepValue(step)
        this.verifyStep()
    },
    async submitFormStepper() {

        try {
          this.loading = true
          this.formData = {
            stepOne: itemsForStepperServiceI[this.selectStepOne - 1].label,
            stepTwo: itemsServiceI[this.selectStepOne - 1][this.selectStepTwo - 1].label,
            stepThree: this.selectStepThree,
            stepFour: this.selectStepFour
          }

          await fetchStepper(this.formData)

        } catch (error) {
        } finally {
          this.loading=false
          this.isLastStep = false
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
        }
    },
    toggleButtonNext() {
        this.isNextDisabled = true
    },
    verifyStep() {
      if(this.stepValue===0){
        this.selectStepOne !== 0 ? this.isNextDisabled=false : this.isNextDisabled=true
      }
      if(this.stepValue===1){
        this.selectStepTwo !== 0 ? this.isNextDisabled=false : this.isNextDisabled=true
      }
      if(this.stepValue===2){
        this.selectStepThree.city || this.selectStepThree.street ? this.isNextDisabled=false : this.isNextDisabled=true
      }
      if(this.stepValue===3){
        this.selectStepFour.fullName && this.selectStepFour.phone ? this.isNextDisabled=false : this.isNextDisabled=true
      }
    }
    // Дополнительные действия по необходимости
  }
});
