import { reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Filters } from "@/entities/car";

export const useCarFiltersStore = defineStore('carFilters', () => {

  const defaultFiltersBase = {
    search: '',
    brand: '',
    bodyType: '',
    steering: '',
    color: '',
    minPrice: 0,
    maxPrice: 1000000,
    transmission: '',
  };

  const filters = reactive({ ...defaultFiltersBase });

  const setFilters = (values: Partial<Filters>) => {
    Object.assign(filters, values);
  };

  const getActiveFilters = (): Partial<Filters> => {
    return Object.entries(filters).reduce((acc, [key, value]) => {
      if (value === '' || value === null || value === undefined) {
        return acc;
      }

      if (key === 'minPrice' && value === defaultFiltersBase.minPrice) return acc;
      if (key === 'maxPrice' && value === defaultFiltersBase.maxPrice) return acc;

      return { ...acc, [key]: value };
    }, {} as Partial<Filters>);
  };

  return {
    filters,
    setFilters,
    getActiveFilters,
  };
});
