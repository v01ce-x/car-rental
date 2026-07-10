<script setup lang="ts">
import buttonVariants from './button.variants.ts';

interface ButtonVariants {
  variant: 'exit' | 'primary' | 'secondary';
}

defineProps<ButtonVariants>();
</script>

<template>
  <button :class="buttonVariants({ variant })">
    <slot />
  </button>
</template>
