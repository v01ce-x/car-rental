<script setup lang="ts">
import { Routes } from '@/shared/lib';
import { AppIcon } from '@/shared/ui';

interface Link {
  name: string;
  path: string;
}

interface Props {
  links: Link[];
}

defineProps<Props>();
</script>

<template>
  <nav class="flex gap-2 flex-wrap items-center text-muted-foreground p-2">
    <router-link :to="Routes.catalog.path">
      <AppIcon name="home" class="w-4 h-4" />
    </router-link>

    <div
      v-for="(item, index) of links"
      :key="item.name"
      class="flex shrink-0 gap-x-2 items-center first-letter:uppercase"
    >
      <AppIcon name="arrow" class="w-4 h-4 -rotate-90" />
      <router-link
        :to="item.path"
        class="text-[14px]"
        :class="links.length - 1 === index ? 'text-primary font-semibold' : ''"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
