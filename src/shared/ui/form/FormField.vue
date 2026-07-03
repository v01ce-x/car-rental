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
  <div class="flex flex-col gap-y-1">
    <label class="text-[14px] capitalize">{{ label }}</label>
    <div :class="!isDate ? input() : ''">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
