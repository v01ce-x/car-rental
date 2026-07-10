<script setup lang="ts">
import { AppButton, AppDescription } from '@/shared/ui';

interface Item {
  description: string;
  label: string;
}

interface Props {
  items: Item[];
  path: string;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="grid gap-y-4">
    <h4 class="text-2xl font-medium">
      {{ title }}
    </h4>
    <AppDescription
      v-for="item of items"
      :key="item.label"
      :description="item.description"
      :label="item.label"
      size-text-description="md"
      size-text-label="sm"
      variant="clean"
    />
    <div class="w-full h-px rounded-full bg-muted" />
    <router-link :to="path">
      <AppButton class="md:hidden" variant="secondary">
        Редактировать данные
      </AppButton>
    </router-link>
  </div>
</template>

<style scoped></style>
