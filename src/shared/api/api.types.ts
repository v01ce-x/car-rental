export interface ApiResponse<T> {
  data: T;
  meta: Record<string, number>;
  success: boolean;
}
