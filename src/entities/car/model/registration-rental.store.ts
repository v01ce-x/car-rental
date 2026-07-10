import { defineStore } from 'pinia';
import { reactive } from 'vue';

import type { RegistrationRental } from '@/entities/car';

export const useRegistrationRentalStore = defineStore('registrationRentalStore', () => {
  const rentalData = reactive({
    carName: '',
    price: 0,
    carId: 0,
    startDate: '',
    endDate: '',
    pickupLocation: '',
    returnLocation: '',
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    phone: '',
    email: '',
    comment: '',
    approval: false
  });

  const setData = (values: RegistrationRental) => {
    Object.assign(rentalData, values);
  };

  const removeCarData = () => {
    rentalData.carName = '';
    rentalData.price = 0;
    rentalData.carId = 0;
  };

  return {
    rentalData,
    setData,
    removeCarData
  };
});
