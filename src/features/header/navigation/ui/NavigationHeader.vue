<script setup lang="ts">
import { AppIcon } from '@/shared/ui';
import { NAVIGATION_BUTTONS } from '@/entities';
</script>

<template>
  <nav class="flex items-center gap-x-4">
    <template v-for="button of NAVIGATION_BUTTONS" :key="button.id">
      <router-link :to="button.link" class="p-1.5 bg-button-secondary rounded-full cursor-pointer">
        <app-icon :name="button.iconName" class="w-5 h-5" />
      </router-link>
    </template>
  </nav>
</template>

<style scoped></style>
