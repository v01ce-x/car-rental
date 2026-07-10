<script setup lang="ts">
import type { Car } from '@/entities/car';

import { CarCard } from '@/widgets/car';

interface Props {
  cars: Car[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
    <CarCard v-for="car in cars" :key="car.id" :car />
  </div>
</template>

<style scoped></style>
