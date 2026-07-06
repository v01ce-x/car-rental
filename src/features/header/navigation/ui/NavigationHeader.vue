<script setup lang="ts">
import { NAVIGATION_BUTTONS } from '@/entities/navigation';
import { AppIcon, CircleButton } from '@/shared/ui';
</script>

<template>
  <nav class="flex items-center gap-x-4">
    <template v-for="button of NAVIGATION_BUTTONS" :key="button.id">
      <router-link :to="button.link">
        <CircleButton type="link">
          <AppIcon :name="button.iconName" class="w-5 h-5" />
        </CircleButton>
      </router-link>
    </template>
  </nav>
</template>

<style scoped></style>
