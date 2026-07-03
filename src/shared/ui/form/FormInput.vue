<script setup lang="ts">
interface Props {
  placeholder?: string;
  type?: string;
}

defineProps<Props>();

const model = defineModel<string>({ default: '' });
</script>

<template>
  <input :type="type" v-model="model" :placeholder="placeholder" class="placeholder-input" />
</template>
