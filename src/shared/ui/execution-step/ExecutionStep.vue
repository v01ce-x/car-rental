<script setup lang="ts">
defineProps<{ step: number }>();
</script>

<template>
  <div class="grid gap-y-1">
    <span>Шаг {{ step }} из 3</span>

    <div class="relative">
      <div class="w-full h-1 bg-muted rounded-full" />
      <div
        class="absolute bg-blue-600 h-1 top-0 left-0 rounded-full"
        :style="{ width: `${(100 / 3) * step}%` }"
      />
    </div>
  </div>
</template>

<style scoped></style>
