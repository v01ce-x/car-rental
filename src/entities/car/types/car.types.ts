export interface CarMedia {
  isCover: boolean;
  url: string;
}

export interface Car {
  bodyType: string;
  brand: string;
  color: string;
  id: number;
  location: string;
  media: CarMedia[];
  name: string;
  price: number;
  rents: unknown[];
  steering: string;
  transmission: string;
}

export interface Brand {
  brand: string;
  id: number;
}

export interface BodyType {
  bodyType: string;
  id: number;
}

export interface Color {
  color: string;
  id: number;
}

export interface SteeringType {
  id: number;
  type: string;
}

export interface TransmissionType {
  id: number;
  type: string;
}

export interface MockFilters {
  bodyTypes: BodyType[];
  brands: Brand[];
  colors: Color[];
  steering: SteeringType[];
  transmission: TransmissionType[];
}

export interface Price {
  maxPrice: number | '';
  minPrice: number | '';
}

export interface Filters {
  bodyType: string;
  brand: string;
  color: string;
  maxPrice: number | '';
  minPrice: number | '';
  search: string;
  steering: string;
  transmission: string;
}
