<script setup lang="ts">
import { watch } from 'vue';

import { FormFilter } from '@/features/home';
import { AppIcon } from '@/shared/ui';
import { scrollControl } from '@/shared/utils';

import { filterBarVariants } from './filter-bar.variants.ts';

interface Props {
  isOpenFilter: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'closeFilterBar'): void;
}>();

const { root, inner, header } = filterBarVariants();

watch(
  () => props.isOpenFilter,
  () => {
    scrollControl(props.isOpenFilter);
  }
);
</script>

<template>
  <transition name="filter-slide">
    <div v-if="isOpenFilter" class="fixed inset-0 bg-outline" @click="emit('closeFilterBar')">
      <aside :class="root()" @click.stop>
        <div :class="inner()">
          <div :class="header()">
            <h3 class="text-2xl font-bold">
              Фильтры
            </h3>
            <div class="p-2 cursor-pointer" @click="emit('closeFilterBar')">
              <AppIcon name="cross" class="w-6 h-6" />
            </div>
          </div>

          <FormFilter @close-filter-bar="emit('closeFilterBar')" />
        </div>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.filter-slide-enter-active,
.filter-slide-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.filter-slide-enter-from,
.filter-slide-leave-to {
  opacity: 0;
}

.filter-slide-enter-active .filter-sidebar,
.filter-slide-leave-active .filter-sidebar {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-slide-enter-from .filter-sidebar,
.filter-slide-leave-to .filter-sidebar {
  transform: translateX(100%);
}
</style>
