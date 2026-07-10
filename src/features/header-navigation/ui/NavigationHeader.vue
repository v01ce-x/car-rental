<script setup lang="ts">
import { AppIcon, CircleButton } from '@/shared/ui';

const NAVIGATION_BUTTONS = [
  {
    id: 1,
    iconName: 'history',
    path: ''
  },
  {
    id: 2,
    iconName: 'user',
    path: ''
  }
];
</script>

<template>
  <nav class="flex items-center gap-x-4">
    <template v-for="button of NAVIGATION_BUTTONS" :key="button.id">
      <router-link :to="button.path">
        <CircleButton type="link">
          <AppIcon :name="button.iconName" class="w-5 h-5" />
        </CircleButton>
      </router-link>
    </template>
  </nav>
</template>

<style scoped></style>
