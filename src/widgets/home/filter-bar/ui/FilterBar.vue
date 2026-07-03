<script setup lang="ts">
import { AppButton, AppIcon, FormPrice, FormSegment, FormSelect } from '@/shared/ui';
import { FILTER_DATA } from '@/entities';
</script>

<template>
  <div class="fixed inset-0 bg-outline">
    <aside class="absolute right-0 top-0 p-3 max-w-125 w-full h-full">
      <div
        class="flex flex-col justify-between gap-y-2.5 bg-primary-foreground h-full rounded-2xl p-6"
      >
        <div class="flex items-center justify-between text-foreground">
          <h3 class="text-2xl font-bold">Фильтры</h3>
          <div class="p-2 cursor-pointer">
            <app-icon name="cross" class="w-6 h-6" />
          </div>
        </div>

        <div class="grid gap-y-6">
          <form-select label="марка" placeholder="Выберите марку" />
          <form-select label="Тип кузова" placeholder="Выберите кузов" />
          <form-segment label="Руль" :items="FILTER_DATA.steering" />
          <form-segment label="Коробка передач" :items="FILTER_DATA.transmission" />
          <form-price />
        </div>

        <div class="flex gap-x-4 w-full">
          <app-button variant="secondary">Сбросить фильтры</app-button>
          <app-button variant="primary">Найти</app-button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped></style>
