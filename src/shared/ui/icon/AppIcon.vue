<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

interface Props {
  name: string;
}

const props = defineProps<Props>();

const svgComponent = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`));
</script>

<template>
  <component :is="svgComponent" />
</template>

<style scoped></style>
