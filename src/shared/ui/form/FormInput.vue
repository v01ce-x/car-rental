<script setup lang="ts">
interface Props {
  placeholder?: string;
  type?: string;
}

defineProps<Props>();

const model = defineModel<string>({ default: '' });
</script>

<template>
  <input v-model="model" :type="type" :placeholder="placeholder" class="placeholder-input" />
</template>
