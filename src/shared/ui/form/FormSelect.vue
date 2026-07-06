<script setup lang="ts">
import { ref } from 'vue';

import { AppIcon } from '@/shared/ui';

interface Props {
  label: string;
  placeholder: string;
}

defineProps<Props>();

const selectElement = ref<HTMLSelectElement | null>(null);
const isOpen = ref(false);
</script>

<template>
  <div ref="selectElement" class="relative flex flex-col gap-y-1" @click="isOpen = !isOpen">
    <h4 class="capitalize text-[14px] font-medium">
      {{ label }}
    </h4>
    <div
      class="flex justify-between items-center px-3 py-3.5 rounded-full border border-input text-input cursor-pointer capitalize"
    >
      <span>{{ placeholder }}</span>
      <div class="p-1">
        <AppIcon name="arrow" class="w-5 h-5" />
      </div>
    </div>

    <transition name="select-dropdown">
      <div v-if="isOpen" class="" />
    </transition>
  </div>
</template>

<style scoped>
.error-leave-active,
.error-enter-active {
  transition: 0.3s ease-in-out;
}

.select-dropdown-enter-active,
.select-dropdown-leave-active {
  transform-origin: top center;
  transition:
    opacity 220ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.select-dropdown-enter-from,
.select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-18px) scaleY(0.92);
}

.select-dropdown-enter-to,
.select-dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
</style>
