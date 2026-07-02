<script setup lang="ts">
import CircleButtonVariants from './button.variants.ts';

interface Props {
  type: 'arrow' | 'link' | 'filter';
}

defineProps<Props>();
</script>

<template>
  <button :class="CircleButtonVariants({ variant: type })">
    <slot />
  </button>
</template>

<style scoped></style>
