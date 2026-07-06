<script setup lang="ts">
import AppHeader from '@/widgets/layout/ui/AppHeader.vue';
</script>

<template>
  <div id="screen" class="max-w-300 w-full mx-auto my-16">
    <AppHeader />

    <main class="my-4">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
