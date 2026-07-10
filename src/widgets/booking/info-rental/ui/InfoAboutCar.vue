<script setup lang="ts">
import { computed } from 'vue';

import type { RentalData } from '@/features/booking';

import { useRegistrationRentalStore } from '@/entities/car';
import { AppDescription } from '@/shared/ui';
import { formatBookingRange } from '@/shared/utils';

interface Props {
  rentalData: RentalData;
}

const props = defineProps<Props>();

const registrationRentalStore = useRegistrationRentalStore();

const rentalRange = computed(() =>
  formatBookingRange(props.rentalData.startDate, props.rentalData.endDate)
);
const printAddress = (address: string | undefined): string => address || 'Заполните поле';
</script>

<template>
  <article class="bg-secondary py-6 px-10 w-full h-fit grid gap-y-4 rounded-3xl">
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
      :description="printAddress(rentalData.pickupLocation)"
      label="Место получения"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <AppDescription
      :description="printAddress(rentalData.returnLocation)"
      label="Место возврата"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
  </article>
</template>

<style scoped></style>
