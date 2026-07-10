<script setup lang="ts">
import { NavigationHeader } from '@/features/header-navigation';
import { AppButton, AppIcon, AppLogo, SwitchThemeButton } from '@/shared/ui';

import { HeaderVariants } from './header.variants.ts';

const { header, button, icon } = HeaderVariants();
</script>

<template>
  <header>
    <div :class="header()">
      <AppLogo />

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
