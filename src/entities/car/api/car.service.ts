import type {Car, Filters} from '@/entities/car/types';
import type { ApiResponse } from '@/shared/api';

import { api } from '@/shared/api';

export const carService = {
  cars: (filters: Filters | {}) => api.get<ApiResponse<Car[]>>('cars/info', {
    params: filters
  }).then((res) => res.data.data),
  carDetail: (id: number) =>
    api.get<ApiResponse<Car>>(`cars/info/${id}`).then((res) => res.data.data)
};
