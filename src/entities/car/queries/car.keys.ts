import type {Filters} from "@/entities/car";

export const CAR_QUERY_KEYS = {
  all: ['cars'] as const,
  byFilters: (filters: Filters | {}) => [...CAR_QUERY_KEYS.all, 'filters', {...filters}] as const,
  carDetail: (id: number) => [...CAR_QUERY_KEYS.all, 'detail', id] as const
};
