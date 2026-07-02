<script setup lang="ts">
import buttonVariants from './button.variants.ts';

interface ButtonVariants {
  variant: 'primary' | 'secondary' | 'exit';
}

defineProps<ButtonVariants>();
</script>

<template>
  <button :class="buttonVariants({ variant: variant })">
    <slot />
  </button>
</template>
