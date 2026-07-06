<script setup lang="ts">
import { useCarDetail } from '@/entities/car';
import { CarDetailInfo, CarDetailPreview } from '@/widgets/car';

const { data: carDetail } = useCarDetail();
</script>

<template>
  <div v-if="carDetail" class="grid grid-cols-2 gap-x-10 items-start">
    <CarDetailInfo :car-detail="carDetail" />

    <CarDetailPreview :media="carDetail.media" :name="carDetail.name" />
  </div>
</template>

<style scoped></style>
