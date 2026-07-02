<script setup lang="ts">
interface Props {
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <input type="text" :placeholder="placeholder" />
</template>
