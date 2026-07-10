<script setup lang="ts">
import type { Car } from '@/entities/car';

import { Routes } from '@/shared/lib';
import { AppButton, AppDescription, AppIcon } from '@/shared/ui';
import { translations } from '@/shared/utils';

interface Props {
  carDetail: Car;
}

defineProps<Props>();
</script>

<template>
  <div class="pl-3 grid gap-y-4">
    <div class="hidden lg:block">
      <router-link :to="Routes.catalog.path" class="group flex items-center gap-x-2 p-2">
        <AppIcon name="arrow" class="w-4 h-4 rotate-90 duration-300 group-hover:-translate-x-1" />
        <span>Назад</span>
      </router-link>
    </div>

    <div>
      <h2 class="text-2xl font-medium">
        Характеристики
      </h2>
      <div>
        <AppDescription
          label="Марка"
          :description="carDetail.brand"
          variant="bordered"
          size-text-description="sm"
          size-text-label="md"
        />
        <AppDescription
          label="Тип кузова"
          :description="translations[carDetail.bodyType]"
          variant="bordered"
          size-text-description="sm"
          size-text-label="md"
        />
        <AppDescription
          label="Сторона руля"
          :description="translations[carDetail.steering]"
          variant="bordered"
          size-text-description="sm"
          size-text-label="md"
        />
        <AppDescription
          label="Коробка передач"
          :description="translations[carDetail.transmission]"
          variant="bordered"
          size-text-description="sm"
          size-text-label="md"
        />
        <AppDescription
          label="Цвет"
          :description="translations[carDetail.color]"
          variant="bordered"
          size-text-description="sm"
          size-text-label="md"
        />
      </div>
    </div>

    <div class="grid gap-y-4 mt-2">
      <div class="flex items-center gap-x-6 justify-between">
        <h3 class="text-xl sm:text-2xl font-medium">
          Стоимость
        </h3>
        <b class="font-bold text-xl sm:text-2xl">{{ carDetail.price }} &#8381; за 1 день</b>
      </div>
      <span class="font-medium">Аренда на 14 дней</span>
      <b class="font-bold text-[28px] sm:text-[32px]">Итог: {{ carDetail.price * 14 }} &#8381;</b>

      <router-link :to="Routes.carSelection.path">
        <AppButton variant="primary" class="sm:max-w-80">
          Забронировать
        </AppButton>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
