<script setup lang="ts">
import { useCarDetail } from '@/entities/car';
import { CarDetailInfo, CarDetailPreview } from '@/widgets/car';
import { AppIcon } from '@/shared/ui';
import { Routes } from '@/shared/lib';

const { data: carDetail } = useCarDetail();
</script>

<template>
  <router-link :to="Routes.catalog" class="sm:hidden group flex gap-x-3 items-center mb-4">
    <app-icon name="arrow" class="group-hover:-translate-x-1 duration-300 w-5 h-5 rotate-90" />
    <span class="text-xl font-bold">К списку машин</span>
  </router-link>

  <div v-if="carDetail" class="grid lg:grid-cols-2 gap-10 items-start">
    <CarDetailInfo :car-detail="carDetail" class="order-1 lg:order-0" />

    <CarDetailPreview :media="carDetail.media" :name="carDetail.name" class="order-0 lg:order-1" />
  </div>
</template>

<style scoped></style>
