<script setup lang="ts">
import { formVariants } from './form.variants.ts';

interface Props {
  label?: string;
  isDate?: boolean;
}

defineProps<Props>();

const { input } = formVariants();
</script>

<template>
  <div class="max-w-80 w-full flex flex-col gap-y-1">
    <label class="text-[14px]">{{ label }}</label>
    <div :class="isDate ? input() : ''">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
