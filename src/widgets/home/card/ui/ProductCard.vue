<script setup lang="ts">
import { AppButton } from '@/shared/ui';
import type { Car } from '@/entities';
import { computed } from 'vue';
import { getTypeTransmission, imageAdapter } from '@/shared/utils';

interface Props {
  car: Car;
}

const props = defineProps<Props>();

const coverImage = computed(() => {
  return props.car.media.filter((media) => media.isCover)[0].url;
});
</script>

<template>
  <article class="flex flex-col gap-y-2">
    <img :src="imageAdapter(coverImage)" alt="" class="aspect-video" />

    <div class="flex flex-col gap-y-2 font-medium">
      <div class="flex flex-col">
        <h3 class="text-foreground">{{ car.name }}</h3>
        <h4 class="text-surface text-[14px]">{{ getTypeTransmission(car.transmission) }}</h4>
      </div>
      <div class="flex flex-col">
        <span class="text-foreground">{{ car.price }} &#8381;</span>
        <span class="text-surface text-[14px]">112 000 ₽ за 14 дней</span>
      </div>
    </div>

    <app-button variant="secondary">Подробнее</app-button>
  </article>
</template>

<style scoped></style>
