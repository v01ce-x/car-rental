<script setup lang="ts">
import { SearchBar } from '@/features/home';
import { ProductGrid } from '@/widgets/home';
</script>

<template>
  <div class="grid gap-y-10">
    <search-bar />

    <product-grid />
  </div>
</template>

<style scoped></style>
