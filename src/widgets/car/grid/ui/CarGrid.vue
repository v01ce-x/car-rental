<script setup lang="ts">
import { CarCard } from '@/widgets/car';
import type {Car} from "@/entities/car";

interface Props {
  cars: Car[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <CarCard v-for="car in cars" :key="car.id" :car />
  </div>
</template>

<style scoped></style>
