<script setup lang="ts">
import { ref } from 'vue';

import { Routes } from '@/shared/lib';
import { AppIcon, SwitchThemeButton } from '@/shared/ui';
import footerVariants from '@/widgets/layout/footer/ui/footer.variants.ts';

const NAVIGATIONS = [
  {
    id: 1,
    icon: 'car-front',
    name: 'Аренда',
    path: Routes.catalog.path
  },
  {
    id: 2,
    icon: 'history',
    name: 'История',
    path: ''
  },
  {
    id: 3,
    icon: 'user',
    name: 'Профиль',
    path: ''
  }
];

const { navigations, navigationsInner, accentBlock, accentItem } = footerVariants();

const position = ref<'translate-x-[200%]' | 'translate-x-0' | 'translate-x-full'>('translate-x-0');
const currentIndex = ref<number>(1);

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
</script>

<template>
  <footer class="sm:hidden grid gap-y-2">
    <SwitchThemeButton class="w-full" />

    <div :class="navigations()">
      <div :class="navigationsInner()">
        <router-link
          v-for="item of NAVIGATIONS"
          :key="item.id"
          :to="item.path"
          class="p-2 rounded-full cursor-pointer flex flex-col items-center gap-y-2"
          :class="currentIndex === item.id ? 'text-[#FBFBFB]' : ''"
          @click="[getPosition(item.id), (currentIndex = item.id)]"
        >
          <AppIcon :name="item.icon" class="w-6 h-6" />
          <span class="text-[12px] font-semibold capitalize duration-500">{{ item.name }}</span>
        </router-link>
      </div>

      <div :class="accentBlock()">
        <div :class="[position, accentItem()]">
          <span>-</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
