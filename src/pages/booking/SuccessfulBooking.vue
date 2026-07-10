<script setup lang="ts">
import { useRegistrationRentalStore } from '@/entities/car';
import { Routes } from '@/shared/lib';
import { AppButton, AppDescription, AppIcon } from '@/shared/ui';
import { formatBookingRange } from '@/shared/utils';

const registrationRentalStore = useRegistrationRentalStore();
const RENTAL_DATA = [
  {
    label: 'Машина',
    description: registrationRentalStore.rentalData.carName
  },
  {
    label: 'Дата аренды',
    description: formatBookingRange(
      registrationRentalStore.rentalData.startDate,
      registrationRentalStore.rentalData.endDate
    )
  },
  {
    label: 'Место получения',
    description: registrationRentalStore.rentalData.pickupLocation
  },
  {
    label: 'Место возврата',
    description: registrationRentalStore.rentalData.returnLocation
  }
];
</script>

<template>
  <div class="max-w-101 grid gap-y-4 md:mt-8">
    <div class="grid gap-y-4">
      <AppIcon name="success" />
      <h3 class="text-2xl font-bold">
        Машина забронирована
      </h3>
    </div>
    <div class="grid gap-y-4">
      <div class="grid gap-y-4">
        <AppDescription
          v-for="item of RENTAL_DATA"
          :key="item.label"
          :description="item.description"
          :label="item.label"
          size-text-description="md"
          size-text-label="sm"
          variant="clean"
        />
      </div>
      <span class="text-surface font-medium">Вся информация была продублирована в SMS</span>
    </div>
    <div class="grid gap-y-4">
      <router-link to="">
        <AppButton variant="secondary">
          Посмотреть статус
        </AppButton>
      </router-link>
      <router-link :to="Routes.catalog.path">
        <AppButton variant="primary">
          На главную
        </AppButton>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
