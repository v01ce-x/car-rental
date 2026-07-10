<script setup lang="ts">
import { computed } from 'vue';

import type { DescriptionProps } from '@/shared/ui/description/description.variants.ts';

import { descriptionVariants } from '@/shared/ui/description/description.variants.ts';

interface Props {
  description: string;
  label: string;
  sizeTextDescription: DescriptionProps['sizeTextDescription'];
  sizeTextLabel: DescriptionProps['sizeTextLabel'];
  variant: DescriptionProps['variant'];
}

const props = defineProps<Props>();

const classes = computed(() =>
  descriptionVariants({
    variant: props.variant,
    sizeTextLabel: props.sizeTextLabel
  })
);
</script>

<template>
  <div :class="classes">
    <span class="text-surface">{{ label }}</span>
    <span class="first-letter:uppercase" :class="descriptionVariants({ sizeTextDescription })">{{
      description
    }}</span>
  </div>
</template>
