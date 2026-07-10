<script setup lang="ts">
interface Props {
  placeholder?: string;
}

defineProps<Props>();

const model = defineModel<string>();
</script>

<template>
  <textarea
    v-model="model"
    rows="4"
    :placeholder="placeholder"
    class="w-full placeholder:text-[20px] resize-none"
  />
</template>

<style scoped></style>
