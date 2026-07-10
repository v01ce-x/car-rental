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
  rents?: unknown[];
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

export interface rentCarInfo {
  status: string;
  pickupLocation: string;
  returnLocation: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  email: string;
  phone: string;
  comment: string;
  _id: string;
  created: string;
  updated: string;
}

export interface RegistrationRental {
  approval?: boolean;
  carId?: string | number;
  birthDate?: string;
  carName?: string;
  comment?: string;
  email?: string;
  endDate?: number;
  startDate?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phone?: string;
  pickupLocation?: string;
  price?: number;
  returnLocation?: string;
}
