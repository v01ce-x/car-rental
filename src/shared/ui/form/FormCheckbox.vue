<script setup lang="ts">
defineProps<{ label: string }>();

const model = defineModel<boolean>();
</script>

<template>
  <div class="flex items-center gap-x-2">
    <input v-model="model" type="checkbox" checked class="cursor-pointer" />
    <label class="font-medium">{{ label }} </label>
  </div>
</template>
