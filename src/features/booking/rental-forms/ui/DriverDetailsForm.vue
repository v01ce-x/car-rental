<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import type { DriverData } from '@/features/booking';

import { useRegistrationRentalStore } from '@/entities/car';
import { Routes } from '@/shared/lib';
import { AppButton, AppIcon, FormCheckbox, FormField, FormInput, FormTextarea } from '@/shared/ui';

const model = defineModel<DriverData>({ required: true });

const router = useRouter();
const registrationRentalStore = useRegistrationRentalStore();

const handleClick = () => {
  if (!model.value.approval && !Object.values(model.value).every((value) => !!value)) return;

  registrationRentalStore.setData(model.value);
  router.push(Routes.bookingSummary.path);
};

onMounted(() => {
  model.value.lastName = registrationRentalStore.rentalData.lastName;
  model.value.firstName = registrationRentalStore.rentalData.firstName;
  model.value.middleName = registrationRentalStore.rentalData.middleName;
  model.value.birthDate = registrationRentalStore.rentalData.birthDate;
  model.value.phone = registrationRentalStore.rentalData.phone;
  model.value.email = registrationRentalStore.rentalData.email;
  model.value.comment = registrationRentalStore.rentalData.comment;
  model.value.approval = registrationRentalStore.rentalData.approval;
});
</script>

<template>
  <form class="max-w-176 grid gap-y-6" @submit.prevent="handleClick()">
    <div class="lg:max-w-86 grid gap-y-6 w-full">
      <FormField label="Фамилия">
        <FormInput v-model="model.lastName" placeholder="Иванов" />
      </FormField>
      <FormField label="Имя">
        <FormInput v-model="model.firstName" placeholder="Иван" />
      </FormField>
      <FormField label="Отчество">
        <FormInput v-model="model.middleName" placeholder="Иванович" />
      </FormField>
      <FormField label="Дата рождения">
        <AppIcon name="calendar-days" class="w-4 h-4 text-input" />
        <FormInput
          v-model="model.birthDate"
          type="date"
          class="[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer"
        />
      </FormField>
      <FormField label="Телефон">
        <FormInput v-model="model.phone" placeholder="+7" type="tel" />
      </FormField>
      <FormField label="Email">
        <FormInput v-model="model.email" placeholder="Email" type="email" />
      </FormField>
      <FormField label="Комментарий" textarea>
        <FormTextarea v-model="model.comment" placeholder="Введите дополнительную информацию" />
      </FormField>
      <FormCheckbox v-model="model.approval" label="Принимаю условия соглашения" />
    </div>
    <div class="grid grid-cols-2 gap-4 w-full">
      <router-link :to="Routes.carSelection.path">
        <AppButton variant="secondary">
          Назад
        </AppButton>
      </router-link>
      <AppButton variant="primary">
        Продолжить
      </AppButton>
    </div>
  </form>
</template>

<style scoped></style>
