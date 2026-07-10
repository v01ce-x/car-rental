<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import type { RentalData } from '@/features/booking';

import { useRegistrationRentalStore } from '@/entities/car';
import { Routes } from '@/shared/lib';
import { AppButton, AppIcon, FormField, FormInput } from '@/shared/ui';
import { adjustBookingDates } from '@/shared/utils';

const model = defineModel<RentalData>({ required: true });

const router = useRouter();
const registrationRentalStore = useRegistrationRentalStore();
const fromPath = ref<string | null>(null);

const goBack = () => {
  registrationRentalStore.setData(model.value);

  if (fromPath.value) {
    router.push(Routes.carDetail.path.replace(':id', String(fromPath.value?.at(-1))));
  } else {
    router.push(Routes.catalog.path);
  }
};

const handleClick = () => {
  if (!Object.values(model.value).every((value) => !!value)) return;

  registrationRentalStore.setData(model.value);
  router.push(Routes.driverDetails.path);
};

onMounted(() => {
  fromPath.value = localStorage.getItem('previous_route_path');

  model.value.startDate = registrationRentalStore.rentalData.startDate;
  model.value.endDate = registrationRentalStore.rentalData.endDate;
  model.value.pickupLocation = registrationRentalStore.rentalData.pickupLocation;
  model.value.returnLocation = registrationRentalStore.rentalData.returnLocation;
});

watch([() => model.value?.startDate, () => model.value?.endDate], ([newStart, newEnd]) => {
  if (!newStart || !newEnd) return;

  const adjusted = adjustBookingDates(newStart, newEnd);

  if (adjusted.endDate !== newEnd) {
    model.value.endDate = adjusted.endDate;
  }
  if (adjusted.startDate !== newStart) {
    model.value.startDate = adjusted.startDate;
  }
});
</script>

<template>
  <form class="grid gap-y-6" @submit.prevent="handleClick()">
    <div class="md:max-w-86 grid gap-y-6">
      <FormField label="Начало аренды">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="model.startDate"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>

      <FormField label="Конец аренды">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="model.endDate"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>

      <FormField label="Место получения">
        <FormInput v-model="model.pickupLocation" type="text" placeholder="Адрес" />
      </FormField>

      <FormField label="Место возврата">
        <FormInput v-model="model.returnLocation" type="text" placeholder="Адрес" />
      </FormField>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <AppButton variant="secondary" @click="goBack()">
        Назад
      </AppButton>
      <AppButton variant="primary">
        Продолжить
      </AppButton>
    </div>
  </form>
</template>

<style scoped></style>
