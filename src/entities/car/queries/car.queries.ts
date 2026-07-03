import { defineQuery, useQuery } from '@pinia/colada';
import { CAR_KEYS } from './car.keys.ts';
import { carService } from '@/entities/car';

export const useCars = defineQuery(() => {
  return useQuery({
    key: CAR_KEYS.all,
    query: () => carService.products()
  });
});
