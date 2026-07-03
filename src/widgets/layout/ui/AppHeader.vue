<script setup lang="ts">
import { AppButton, AppIcon } from '@/shared/ui';
import { NavigationHeader } from '@/features/header';
import { HeaderVariants } from '../lib/header.variants.ts';

const { header, logo, title, button, icon } = HeaderVariants();
</script>

<template>
  <header :class="header()">
    <div :class="logo()">
      <app-icon name="logo" class="w-7.5 h-5.5" />
      <h1 :class="title()">leasing</h1>
    </div>

    <div class="flex items-center gap-x-6">
      <navigation-header />

      <app-button variant="exit" :class="button()">
        <span class="text-[14px] font-bold">Выйти</span>
        <app-icon name="exit" :class="icon()" />
      </app-button>
    </div>
  </header>
</template>

<style scoped></style>
