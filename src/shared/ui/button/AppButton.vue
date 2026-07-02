<script setup lang="ts">

import buttonVariants from "./button.variants.ts";
</script>

<template>
  <button :class="buttonVariants({ variant: 'primary' })">
    <slot />
  </button>
</template>
