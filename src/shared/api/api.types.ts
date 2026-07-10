export interface ApiResponse<T> {
  data: T;
  meta: Record<string, number>;
  success: boolean;
}

export interface ApiResponseRent<T> {
  success: boolean;
  rent: {
    carInfo: T;
  };
}
