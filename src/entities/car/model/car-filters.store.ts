import { defineStore } from 'pinia';
import { reactive } from 'vue';

import type { Filters } from '@/entities/car';

export const useCarFiltersStore = defineStore('carFilters', () => {
  const defaultFiltersBase = {
    search: '',
    brand: '',
    bodyType: '',
    steering: '',
    color: '',
    minPrice: 0,
    maxPrice: 10_000,
    transmission: ''
  };

  const filters = reactive({ ...defaultFiltersBase });

  const setFilters = (values: Partial<Filters>) => {
    Object.assign(filters, values);
  };

  const getActiveFilters = (): Partial<Filters> =>
    Object.entries(filters).reduce((acc, [key, value]) => {
      if (value === '' || value === null || value === undefined) {
        return acc;
      }

      return { ...acc, [key]: value };
    }, {} as Partial<Filters>);

  return {
    filters,
    setFilters,
    getActiveFilters
  };
});
