<script setup lang="ts">
import { AppHeader, AppFooter } from '@/widgets/layout';
</script>

<template>
  <div
    id="screen"
    class="flex flex-col justify-between min-h-screen max-w-300 w-full mx-auto py-8 sm:py-16 px-2"
  >
    <div>
      <AppHeader />

      <main class="my-4">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
