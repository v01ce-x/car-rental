<script setup lang="ts">
import { useCars } from '@/entities/car';
import { CarCard } from '@/widgets/car';

const { data: cars } = useCars();
</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <CarCard v-for="car in cars" :key="car.id" :car />
  </div>
</template>

<style scoped></style>
