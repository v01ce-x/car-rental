export const getTypeTransmission = (transmission: string) => {
  switch (transmission) {
    case 'automatic':
      return 'Автомат';

    case 'manual':
      return 'Механика';

    default:
      return transmission;
  }
};
