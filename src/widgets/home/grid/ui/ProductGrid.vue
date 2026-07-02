<script setup lang="ts">
import { useCars } from '@/entities/car';
import { ProductCard } from '@/widgets/home';

const { data: cars } = useCars();
</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <ProductCard v-for="car in cars" :car />
  </div>
</template>

<style scoped></style>
