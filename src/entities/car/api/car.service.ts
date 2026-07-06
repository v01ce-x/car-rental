import type { Car } from '@/entities/car/types';
import type { ApiResponse } from '@/shared/api';

import { api } from '@/shared/api';

export const carService = {
  cars: () => api.get<ApiResponse<Car[]>>('cars/info').then((res) => res.data.data),
  carDetail: (id: number) =>
    api.get<ApiResponse<Car>>(`cars/info/${id}`).then((res) => res.data.data)
};
