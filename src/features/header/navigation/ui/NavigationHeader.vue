<script setup lang="ts">
import { AppIcon, CircleButton } from '@/shared/ui';
import { NAVIGATION_BUTTONS } from '@/entities';
</script>

<template>
  <nav class="flex items-center gap-x-4">
    <template v-for="button of NAVIGATION_BUTTONS" :key="button.id">
      <router-link :to="button.link">
        <circle-button type="link">
          <app-icon :name="button.iconName" class="w-5 h-5" />
        </circle-button>
      </router-link>
    </template>
  </nav>
</template>

<style scoped></style>
