<script setup lang="ts">
import { Routes } from '@/shared/lib';
import { AppIcon } from '@/shared/ui';
</script>

<template>
  <router-link :to="Routes.catalog.path" class="flex gap-x-1 items-start cursor-pointer">
    <AppIcon name="logo" class="w-7.5 h-5.5" />
    <h1 class="uppercase font-extrabold">
      leasing
    </h1>
  </router-link>
</template>

<style scoped></style>
