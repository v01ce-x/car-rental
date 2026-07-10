<script setup lang="ts">
import { reactive } from 'vue';

import { BookingNavigation, DriverDetailsForm } from '@/features/booking';
import { Routes } from '@/shared/lib';
import { ExecutionStep } from '@/shared/ui';
import { InfoRental } from '@/widgets/booking';

const LINKS = [
  {
    name: 'Бронирование машины',
    path: Routes.carSelection.path
  },
  {
    name: 'Ваши данные',
    path: ''
  }
];

const driverData = reactive({
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: '',
  phone: '',
  email: '',
  comment: '',
  approval: true
});
</script>

<template>
  <div class="flex justify-center gap-4">
    <div class="md:max-w-176 w-full grid gap-y-6">
      <BookingNavigation :links="LINKS" />

      <h2 class="text-[24px] font-bold">Ваши данные</h2>

      <ExecutionStep :step="2" />

      <DriverDetailsForm v-model="driverData" />
    </div>

    <InfoRental :driver="driverData" />
  </div>
</template>

<style scoped></style>
