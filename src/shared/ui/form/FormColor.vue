<script setup lang="ts">
import type { Color } from '@/entities/car';

interface Props {
  colors: Color[];
}

defineProps<Props>();

const model = defineModel();

const handleClick = (color: Color): void => {
  model.value = color.color;
};
</script>

<template>
  <div class="grid gap-y-1">
    <h4>Цвет</h4>
    <div class="flex justify-between items-center h-14">
      <div
        v-for="color in colors"
        :key="color.id"
        class="border-2 border-ring rounded-full cursor-pointer duration-500"
        :class="model === color.color ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-8 h-8 sm:w-10 sm:h-10'"
        :style="{ backgroundColor: color.color }"
        @click="handleClick(color)"
      />
    </div>
  </div>
</template>

<style scoped></style>
