<script setup lang="ts">
import router from '@/app/router';
import { useRegistrationRentalStore, useRentCar } from '@/entities/car';
import { BookingNavigation } from '@/features/booking';
import { Routes } from '@/shared/lib';
import { AppButton, ExecutionStep } from '@/shared/ui';
import { formatBookingRange, formatDate, formatFIO } from '@/shared/utils';
import { InfoActual } from '@/widgets/booking';

const LINKS = [
  {
    name: 'Бронирование машины',
    path: Routes.carSelection.path
  },
  {
    name: 'Ваши данные',
    path: Routes.driverDetails.path
  },
  {
    name: 'Проверка данных',
    path: ''
  }
];

const registrationRentalStore = useRegistrationRentalStore();
const { mutateAsync } = useRentCar();

const ACTUAL_CAR = [
  {
    description: registrationRentalStore.rentalData.carName,
    label: 'Машина'
  },
  {
    description: formatBookingRange(registrationRentalStore.rentalData.startDate),
    label: 'Дата аренды'
  },
  {
    description: registrationRentalStore.rentalData.pickupLocation,
    label: 'Место получения'
  },
  {
    description: registrationRentalStore.rentalData.returnLocation,
    label: 'Место возврата'
  }
];
const ACTUAL_DRIVER = [
  {
    description: formatFIO(
      registrationRentalStore.rentalData.lastName,
      registrationRentalStore.rentalData.firstName,
      registrationRentalStore.rentalData.middleName
    ),
    label: 'ФИО'
  },
  {
    description: formatDate(registrationRentalStore.rentalData.birthDate),
    label: 'Дата рождения'
  },
  {
    description: registrationRentalStore.rentalData.phone,
    label: 'Номер телефона'
  },
  {
    description: registrationRentalStore.rentalData.email,
    label: 'Email'
  },
  {
    description: registrationRentalStore.rentalData.comment,
    label: 'Комментарий'
  }
];

const calculateRentalDays = (start?: string, end?: string): number => {
  if (!start || !end) return 0;

  const diff = new Date(end).getTime() - new Date(start).getTime();
  return Math.max(0, Math.round(diff / (1000 * 3600 * 24)));
};

const goBack = () => {
  router.push(Routes.driverDetails.path);
};

const onClick = () => {
  mutateAsync();
};
</script>

<template>
  <div class="max-w-211 grid gap-y-6">
    <BookingNavigation :links="LINKS" />

    <h2 class="text-[24px] font-bold">Проверка данных</h2>

    <ExecutionStep :step="3" />

    <h3 class="text-[24px] font-bold">Ваши заказ</h3>

    <div class="grid md:grid-cols-2 gap-10">
      <InfoActual title="Данные машины" :items="ACTUAL_CAR" :path="Routes.carSelection.path" />

      <InfoActual
        title="Данные заказчика"
        :items="ACTUAL_DRIVER"
        :path="Routes.driverDetails.path"
      />
    </div>

    <div class="hidden md:block bg-secondary w-full h-px rounded-full" />

    <span class="font-medium"
      >Аренда на
      {{
        calculateRentalDays(
          registrationRentalStore.rentalData.startDate,
          registrationRentalStore.rentalData.endDate
        )
      }}
      дней</span
    >

    <b class="text-[32px] fonr-bold"
      >Итого:
      {{
        calculateRentalDays(
          registrationRentalStore.rentalData.startDate,
          registrationRentalStore.rentalData.endDate
        ) * registrationRentalStore.rentalData.price
      }}
      &#8381;</b
    >

    <router-link :to="Routes.carSelection.path" class="hidden md:block">
      <AppButton variant="secondary"> Редактировать данные </AppButton>
    </router-link>
    <div class="grid md:grid-cols-2 gap-y-6 md:gap-x-4">
      <AppButton variant="secondary" @click="goBack()"> Назад </AppButton>
      <AppButton variant="primary" @click="onClick()"> Продолжить </AppButton>
    </div>
  </div>
</template>

<style scoped></style>
