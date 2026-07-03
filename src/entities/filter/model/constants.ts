import type { Filter } from '@/entities/filter';

export const FILTER_DATA: Filter = {
  brands: [
    {
      id: 1,
      brand: 'haval'
    },
    {
      id: 2,
      brand: 'hyundai'
    },
    {
      id: 3,
      brand: 'volkswagen'
    },
    {
      id: 4,
      brand: 'kia'
    },
    {
      id: 5,
      brand: 'geely'
    }
  ],
  bodyTypes: [
    {
      id: 1,
      bodyType: 'седан'
    },
    {
      id: 2,
      bodyType: 'внедорожник'
    },
    {
      id: 3,
      bodyType: 'купе'
    },
    {
      id: 4,
      bodyType: 'хэтчбек'
    },
    {
      id: 5,
      bodyType: 'кабриолет'
    }
  ],
  colors: [
    {
      id: 1,
      color: 'black'
    },
    {
      id: 2,
      color: 'white'
    },
    {
      id: 3,
      color: 'red'
    },
    {
      id: 4,
      color: 'silver'
    },
    {
      id: 5,
      color: 'blue'
    },
    {
      id: 6,
      color: 'grey'
    },
    {
      id: 7,
      color: 'orange'
    }
  ],
  steering: [
    {
      id: 1,
      type: 'любой'
    },
    {
      id: 2,
      type: 'левый'
    },
    {
      id: 3,
      type: 'правый'
    }
  ],
  transmission: [
    {
      id: 1,
      type: 'любая'
    },
    {
      id: 2,
      type: 'автомат'
    },
    {
      id: 3,
      type: 'механика'
    }
  ]
};
