import { api, type ApiResponse } from '@/shared/api';
import type { Car } from '@/entities/car/types';

export const carService = {
  products: () => api.get<ApiResponse<Car[]>>('cars/info').then((res) => res.data.data)
};
