<script setup lang="ts">
interface Props {
  placeholder?: string;
  type?: string;
}

defineProps<Props>();

const model = defineModel();
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    onclick="type === 'date' ? this.showPicker() : ''"
    class="placeholder-input text-input w-full"
  />
</template>
