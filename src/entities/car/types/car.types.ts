interface CarMedia {
  url: string;
  isCover: boolean;
}

export interface Car {
  id: number;
  name: string;
  brand: string;
  media: CarMedia[];
  transmission: string;
  price: number;
  location: string;
  color: string;
  bodyType: string;
  steering: string;
}
