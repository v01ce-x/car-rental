export interface Brand {
  id: number;
  brand: string;
}

export interface BodyType {
  id: number;
  bodyType: string;
}

export interface Color {
  id: number;
  color: string;
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
  brands: Brand[];
  bodyTypes: BodyType[];
  colors: Color[];
  steering: SteeringType[];
  transmission: TransmissionType[];
}
