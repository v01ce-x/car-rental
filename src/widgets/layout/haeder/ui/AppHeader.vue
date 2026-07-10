<script setup lang="ts">
import { NavigationHeader } from '@/features/header';
import { Routes } from '@/shared/lib';
import { AppButton, AppIcon, SwitchThemeButton } from '@/shared/ui';

import { HeaderVariants } from './header.variants.ts';

const { header, logo, title, button, icon } = HeaderVariants();
</script>

<template>
  <header>
    <div :class="header()">
      <router-link :to="Routes.catalog.path" :class="logo()">
        <AppIcon name="logo" class="w-7.5 h-5.5" />
        <h1 :class="title()">leasing</h1>
      </router-link>

      <div class="flex items-center gap-x-6">
        <SwitchThemeButton />

        <div class="flex items-center gap-x-6">
          <NavigationHeader />

          <AppButton variant="exit" :class="button()">
            <span class="text-[14px] font-bold">Выйти</span>
            <AppIcon name="exit" :class="icon()" />
          </AppButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
