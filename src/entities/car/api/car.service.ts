import type { Car, Filters, RegistrationRental, rentCarInfo } from '@/entities/car/types';
import type { ApiResponse, ApiResponseRent } from '@/shared/api';

import { api } from '@/shared/api';

export const carService = {
  cars: (filters?: Partial<Filters>) =>
    api
      .get<ApiResponse<Car[]>>('cars/info', {
        params: filters
      })
      .then((res) => res.data),

  carDetail: (id: number) =>
    api.get<ApiResponse<Car>>(`cars/info/${id}`).then((res) => res.data.data),

  rentCar: (rentData: RegistrationRental) =>
    api.post<ApiResponseRent<Car> & rentCarInfo>('cars/rent', rentData).then((res) => res.data)
};
