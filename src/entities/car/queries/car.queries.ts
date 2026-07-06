import { defineQuery, useQuery } from '@pinia/colada';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import {carService, useCarFiltersStore} from '@/entities/car';

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
