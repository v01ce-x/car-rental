<script setup lang="ts">
import type { Color } from '@/entities/filter';

interface Props {
  colors: Color[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid gap-y-1">
    <h4>Цвет</h4>
    <div class="flex justify-between">
      <div
        v-for="color in colors"
        :key="color.id"
        class="border-2 border-ring w-10 h-10 rounded-full cursor-pointer"
        :style="{ backgroundColor: color.color }"
      />
    </div>
  </div>
</template>

<style scoped></style>
