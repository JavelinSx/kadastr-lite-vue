// stores/stepperStore.js
import { defineStore } from 'pinia';
import { itemsForStepperServiceI, itemsServiceI, cityListI } from '@/utils/data'; // Импорт из вашего файла data.js

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    stepValue: 0,
    isLastStep: false,
    isNextDisabled: true,
    isPrevDisabled: true,
    formData: {},
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
    loading: false,
    isOpenForm: false,
    snackBarView: false,
  }),
  actions: {

    //Actions <------------

    nextStep(step) {
      if (!this.isLastStep) {
        this.stepValue = this.stepValue + 1
      }
      this.updateStepValue(step)
      this.verifyStep()
      this.scrollToUpForm()
    },
    prevStep(step) {
      this.stepValue = this.stepValue - 1
      if (this.isLastStep) {
        this.isLastStep = false
      }
      this.updateStepValue(step)
      this.verifyStep()
      this.scrollToUpForm()
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
        this.snackBarView = true
        this.loading = false
        this.isLastStep = false
        this.stepValue = 0
        this.formData = {}
        this.selectStepOne = 0
        this.selectStepTwo = 0
        this.selectStepThree = {
          city: '',
          street: ''
        }
        this.selectStepFour = {
          phone: '',
          fullName: ''
        }
        this.itemsArea = []
        this.isOpenForm = false
      }
    },
    toggleButtonNext() {
      this.isNextDisabled = true
    },
    toggleOpenForm() {
      this.isOpenForm = !this.isOpenForm
    },
    snackBarClose() {
      this.snackBarView = false
    },

    //Functions <------------

    listArea(search) {
      if (search.length > 0) {
        this.itemsArea = cityListI
      } else {
        this.itemsArea = []
      }
    },
    scrollToUpForm() {
      const formEl = document.querySelector('.v-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    verifyStep() {
      if (this.stepValue === 0) {
        this.selectStepOne !== 0 ? this.isNextDisabled = false : this.isNextDisabled = true
      }
      if (this.stepValue === 1) {
        this.selectStepTwo !== 0 ? this.isNextDisabled = false : this.isNextDisabled = true
      }
      if (this.stepValue === 2) {
        this.selectStepThree.city.length > 3 && this.selectStepThree.street.length > 3 ? this.isNextDisabled = false : this.isNextDisabled = true
      }
      if (this.stepValue === 3) {
        this.selectStepFour.fullName.length > 0 && this.selectStepFour.phone.length === 18 ? this.isNextDisabled = false : this.isNextDisabled = true
      }
    },

    //UpdatesState <------------
    updateStepValue(value) {
      this.isLastStep = value + 1 === this.totalStep - 1;
      this.stepValue <= 0 ? (this.isPrevDisabled = true) : (this.isPrevDisabled = false);
    },
    updateStateInProps(selectStepOne, selectStepTwo, stepValue) {
      this.selectStepOne = selectStepOne
      this.selectStepTwo = selectStepTwo
      this.stepValue = stepValue
      this.updateStepValue(stepValue - 1)
    },

    //правила для следующего или предыдущего шага

    updateSelectStepOne(value) {
      this.selectStepOne = value;
    },
    updateSelectStepTwo(value) {
      this.selectStepTwo = value;
    },
    //правила для каждого из шагов
  }
});
