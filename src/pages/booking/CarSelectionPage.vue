<script setup lang="ts">
import { reactive } from 'vue';

import { BookingNavigation, RentalDetailsForm } from '@/features/booking';
import { ExecutionStep } from '@/shared/ui';
import { InfoAboutCar } from '@/widgets/booking';

const LINKS = [
  {
    name: 'бронирование машин',
    path: ''
  }
];

const rentalData = reactive({
  startDate: '',
  endDate: '',
  pickupLocation: '',
  returnLocation: ''
});
</script>

<template>
  <div class="flex gap-4">
    <div class="grid gap-y-6 max-w-176 w-full">
      <BookingNavigation :links="LINKS" />

      <h2 class="text-[24px] font-bold">
        Бронирование машин
      </h2>

      <ExecutionStep :step="1" />

      <RentalDetailsForm v-model="rentalData" />
    </div>

    <InfoAboutCar :rental-data="rentalData" class="hidden md:block" />
  </div>
</template>

<style scoped></style>
