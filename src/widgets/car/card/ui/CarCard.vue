<script setup lang="ts">
import { computed } from 'vue';

import type { Car } from '@/entities/car';

import router from '@/app/router';
import { Routes } from '@/shared/lib';
import { AppButton } from '@/shared/ui';
import { imageAdapter, translations } from '@/shared/utils';

import { CarCardVariants } from './car-card.variants.ts';

interface Props {
  car: Car;
}

const props = defineProps<Props>();

const { image, context } = CarCardVariants();

const coverImage = computed(() => props.car.media.filter((media) => media.isCover)[0].url);

const handleClick = () => router.push(Routes.carDetail.path.replace(':id', String(props.car.id)));
</script>

<template>
  <article class="flex flex-col gap-y-2">
    <img :src="imageAdapter(coverImage)" alt="" :class="image()" />

    <div :class="context()">
      <div class="flex flex-col">
        <h3 class="text-foreground">
          {{ car.name }}
        </h3>
        <h4 class="text-surface text-[14px]">
          {{ translations[car.transmission] }}
        </h4>
      </div>
      <div class="flex flex-col">
        <span class="text-foreground">{{ car.price }} &#8381;</span>
        <span class="text-surface text-[14px]">{{ car.price * 14 }} &#8381; за 14 дней</span>
      </div>
    </div>

    <AppButton variant="secondary" @click="handleClick()"> Подробнее </AppButton>
  </article>
</template>
