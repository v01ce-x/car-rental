<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const model = defineModel<number>();
</script>

<template>
  <vue-date-picker v-model="model" />
</template>

<style scoped></style>
