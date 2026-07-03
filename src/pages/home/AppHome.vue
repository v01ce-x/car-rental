<script setup lang="ts">
import { SearchBar } from '@/features/home';
import { FilterBar, ProductGrid } from '@/widgets/home';
</script>

<template>
  <div class="grid gap-y-10">
    <search-bar />

    <product-grid />
    <teleport to="#screen">
      <filter-bar />
    </teleport>
    <filter-bar />
  </div>
</template>

<style scoped></style>
