<script setup lang="ts">
import { computed } from 'vue';

import type { DriverData } from '@/features/booking';

import { useRegistrationRentalStore } from '@/entities/car';
import { AppDescription } from '@/shared/ui';
import { formatBookingRange, formatDate, formatFIO } from '@/shared/utils';

interface Props {
  driver: DriverData;
}

defineProps<Props>();

const registrationRentalStore = useRegistrationRentalStore();

const rentalRange = computed(() =>
  formatBookingRange(
    registrationRentalStore.rentalData.startDate,
    registrationRentalStore.rentalData.endDate
  )
);
const print = (value: string | undefined): string => value || 'Заполните поле';
</script>

<template>
  <article class="hidden lg:grid gap-y-4 h-fit flex-1 bg-secondary rounded-3xl py-6 px-10">
    <h3 class="text-[24px] font-bold">
      Ваше бронирование
    </h3>
    <AppDescription
      :description="registrationRentalStore.rentalData.carName"
      label="Машина"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="rentalRange"
      label="Дата аренды"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="registrationRentalStore.rentalData.pickupLocation"
      label="Место получения"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="registrationRentalStore.rentalData.returnLocation"
      label="Место возврата"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="formatFIO(driver.lastName, driver.firstName, driver.middleName)"
      label="ФИО"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="formatDate(driver.birthDate)"
      label="Дата рождения"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="print(driver.phone)"
      label="Номер телефона"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="print(driver.email)"
      label="Email"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="print(driver.comment)"
      label="Комментарий"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
  </article>
</template>

<style scoped></style>
