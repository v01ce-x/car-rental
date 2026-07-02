<script setup lang="ts">
import AppHeader from '@/widgets/layout/ui/AppHeader.vue';
</script>

<template>
  <div class="max-w-300 w-full mx-auto my-16">
    <app-header />

    <main><slot /></main>
  </div>
</template>

<style scoped></style>
