<script setup lang="ts">
import { AppButton, AppIcon } from '@/shared/ui';
import NavigationHeader from '@/features/header/navigation/ui/NavigationHeader.vue';
</script>

<template>
  <header
    class="flex justify-between items-center p-3 w-full rounded-full border border-hard shadow-xs"
  >
    <div class="flex gap-x-1 items-start cursor-pointer">
      <app-icon name="logo" class="w-7.5 h-5.5" />
      <h1 class="uppercase font-extrabold text-button-primary">leasing</h1>
    </div>

    <div class="flex items-center gap-x-6">
      <navigation-header />

      <app-button variant="exit" class="group flex gap-x-2 items-center">
        <span class="text-[14px] font-bold">Выйти</span>
        <app-icon name="exit" class="w-4 h-4 group-hover:translate-x-0.5 duration-300" />
      </app-button>
    </div>
  </header>
</template>

<style scoped></style>
