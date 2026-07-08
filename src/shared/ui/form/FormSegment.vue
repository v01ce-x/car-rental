<script setup lang="ts" generic="T extends { id: number }">
import { ref } from 'vue';

import { translations } from '@/shared/utils';

interface Props {
  items: T[];
  label: string;
  getLabel: (item: T) => string;
}

const props = defineProps<Props>();

const model = defineModel();

const position = ref<'translate-x-[200%]' | 'translate-x-0' | 'translate-x-full'>('translate-x-0');

const getPosition = (accent: number): void => {
  switch (accent) {
    case 2:
      position.value = 'translate-x-full';
      break;
    case 3:
      position.value = 'translate-x-[200%]';
      break;
    default:
      position.value = 'translate-x-0';
  }
};

const handleClick = (item: T): void => {
  getPosition(item.id);
  model.value = props.getLabel(item);
};
</script>

<template>
  <div class="grid gap-y-1">
    <h4 class="capitalize text-[14px] font-medium">
      {{ label }}
    </h4>

    <div class="relative bg-segment rounded-full">
      <div class="w-full rounded-full grid grid-cols-3 justify-items-center p-1 relative z-10">
        <p
          v-for="item of items"
          :key="item.id"
          class="p-2 text-[18px] capitalize font-bold rounded-full cursor-pointer"
          @click="handleClick(item)"
        >
          {{ translations[getLabel(item)] }}
        </p>
      </div>

      <div class="grid grid-cols-3 w-full absolute flex-1 p-1 top-0 select-none">
        <div
          class="relative rounded-full bg-primary-foreground p-2 text-[18px] text-transparent duration-400 shadow-2xl"
          :class="position"
        >
          ------
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
