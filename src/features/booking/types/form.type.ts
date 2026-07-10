export interface RentalData {
  endDate: string | undefined;
  pickupLocation: string | undefined;
  returnLocation: string | undefined;
  startDate: string | undefined;
}

export interface DriverData {
  approval: boolean;
  birthDate: string | undefined;
  comment: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  middleName: string | undefined;
  phone: string | undefined;
}
