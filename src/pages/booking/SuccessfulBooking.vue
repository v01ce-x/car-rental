<script setup lang="ts">
import {AppButton, AppDescription, AppIcon} from '@/shared/ui';
import { useRegistrationRentalStore } from '@/entities/car';
import { formatBookingRange } from '@/shared/utils';
import {Routes} from "@/shared/lib";

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
      <app-icon name="success" />
      <h3 class="text-2xl font-bold">Машина забронирована</h3>
    </div>
    <div class="grid gap-y-4">
      <div class="grid gap-y-4">
        <app-description
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
        <app-button variant="secondary">Посмотреть статус</app-button>
      </router-link>
      <router-link :to="Routes.catalog.path">
        <app-button variant="primary">На главную</app-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
