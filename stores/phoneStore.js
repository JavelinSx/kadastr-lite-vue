import { defineStore } from 'pinia';

export const usePhoneStore = defineStore('phone', {
  state: () => ({
    phoneNumber: '',
  }),
  actions: {
    setPhoneNumber(value) {
      this.phoneNumber = value;
    },
  },
});