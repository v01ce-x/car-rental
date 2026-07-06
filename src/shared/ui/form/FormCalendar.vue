<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker';

import '@vuepic/vue-datepicker/dist/main.css';

const model = defineModel<number>();
</script>

<template>
  <VueDatePicker v-model="model" />
</template>

<style scoped></style>
