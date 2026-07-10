import { defineMutation, defineQuery, useMutation, useQuery } from '@pinia/colada';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { carService, useCarFiltersStore, useRegistrationRentalStore } from '@/entities/car';
import { Routes } from '@/shared/lib';

import { CAR_QUERY_KEYS } from './car.keys.ts';

export const useCars = defineQuery(() => {
  const carFiltersStore = useCarFiltersStore();

  return useQuery({
    key: () => CAR_QUERY_KEYS.byFilters(carFiltersStore.getActiveFilters()),

    query: () => carService.cars(carFiltersStore.getActiveFilters())
  });
});

export const useCarDetail = () => {
  const route = useRoute();
  const carId = computed(() => route.params.id);

  return useQuery({
    key: CAR_QUERY_KEYS.carDetail(+carId.value),
    query: () => carService.carDetail(+carId.value)
  });
};

export const useRentCar = defineMutation(() => {
  const registrationRentalStore = useRegistrationRentalStore();
  const router = useRouter();

  return useMutation({
    mutation: () => {
      const payload = {
        ...registrationRentalStore.rentalData,
        startDate: new Date(registrationRentalStore.rentalData.startDate).getTime(),
        endDate: new Date(registrationRentalStore.rentalData.endDate).getTime()
      };
      const { price, approval, ..._payload } = payload;

      return carService.rentCar(_payload);
    },
    onSuccess: () => {
      router.push(Routes.successfulBooking.path);
    }
  });
});
