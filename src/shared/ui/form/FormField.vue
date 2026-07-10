<script setup lang="ts">
import { formVariants } from './form.variants.ts';

interface Props {
  label?: string;
  textarea?: boolean;
}

defineProps<Props>();

const { field } = formVariants();
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label class="text-[14px]">{{ label }}</label>
    <div :class="[field(), textarea ? 'rounded-xl' : 'rounded-full']">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
