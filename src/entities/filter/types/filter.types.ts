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

export interface Filter {
  bodyTypes: BodyType[];
  brands: Brand[];
  colors: Color[];
  steering: SteeringType[];
  transmission: TransmissionType[];
}
