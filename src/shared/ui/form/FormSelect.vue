<script setup lang="ts" generic="T extends { id: number }">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

import { AppIcon } from '@/shared/ui';
import { translations } from '@/shared/utils';

import { formVariants } from './form.variants.ts';

interface Props {
  label: string;
  options: T[];
  placeholder: string;
  getOption: (item: T) => string;
}

defineProps<Props>();

const model = defineModel<string>({
  default: ''
});

const { selectOptions, selectTrigger, option } = formVariants();

const selectElement = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const handleClick = (value: string) => {
  model.value = value;
  isOpen.value = false;
};

onClickOutside(selectElement, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="selectElement" class="relative flex flex-col gap-y-1">
    <h4 class="capitalize text-[14px] font-medium">
      {{ label }}
    </h4>
    <div
      :class="[selectTrigger(), model ? 'text-primary' : 'text-input']"
      @click="isOpen = !isOpen"
    >
      <span>{{ translations[model] ?? model ?? placeholder }}</span>
      <div class="p-1">
        <AppIcon name="arrow" class="w-5 h-5" />
      </div>
    </div>

    <transition name="select-dropdown">
      <div v-if="isOpen" :class="selectOptions()">
        <div
          v-for="item of options"
          :key="item.id"
          :class="[
            option(),
            getOption(item) === model ? 'border-primary text-primary' : 'border-input text-input'
          ]"
          @click="handleClick(getOption(item))"
        >
          {{ getOption(item) in translations ? translations[getOption(item)] : getOption(item) }}
        </div>
      </div>
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
