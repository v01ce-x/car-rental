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
