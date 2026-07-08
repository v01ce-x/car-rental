<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const currentTheme = ref('');

const isTheme = () => {
  return currentTheme.value === 'dark';
};

const switchTheme = () => {
  currentTheme.value === 'dark' ? (currentTheme.value = 'light') : (currentTheme.value = 'dark');
};

watch(currentTheme, (newTheme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

onMounted(() => {
  currentTheme.value = localStorage.getItem('theme') ?? '';
});
</script>

<template>
  <div @click="switchTheme()" class="w-12 h-6.5 rounded-full p-0.5 bg-surface cursor-pointer">
    <div
      class="rounded-full bg-surface-foreground h-full w-1/2 duration-300"
      :class="isTheme() ? 'translate-x-full' : 'translate-x-0'"
    />
  </div>
</template>

<style scoped></style>
