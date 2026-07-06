<script setup lang="ts">
import { computed, ref } from 'vue';

import type { CarMedia } from '@/entities/car';

import { imageAdapter } from '@/shared/utils';
import { AppIcon, AppSliderButton } from '@/shared/ui';

interface Props {
  media: CarMedia[];
  name: string;
}

const props = defineProps<Props>();

const currentIndex = ref<number>(0);
const imagesSlider = computed(() => [
  ...props.media.filter((m) => m.isCover),
  ...props.media.filter((m) => !m.isCover)
]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imagesSlider.value.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + imagesSlider.value.length) % imagesSlider.value.length;
};
</script>

<template>
  <div class="grid gap-y-2">
    <h2 class="text-2xl font-bold">
      {{ name }}
    </h2>

    <div class="relative flex justify-center overflow-hidden rounded-2xl">
      <div class="absolute z-10 w-full flex items-center justify-between top-1/2 px-3" v-if="imagesSlider.length > 1">
        <app-slider-button @click="prevSlide()">
          <app-icon name="arrow" class="w-7 h-7 rotate-90" />
        </app-slider-button>
        <app-slider-button @click="nextSlide()">
          <app-icon name="arrow" class="w-7 h-7 -rotate-90" />
        </app-slider-button>
      </div>
      <div
        class="flex duration-500 ease-out will-change-transform"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="image in imagesSlider" :key="image.url" class="w-full h-96 shrink-0">
          <img
            :src="imageAdapter(image.url)"
            alt="Фото машины"
            class="w-full h-full object-cover select-none"
          />
        </div>
      </div>
    </div>

    <div
      v-if="imagesSlider.length > 1"
      class="grid gap-2 mt-1"
      :style="{ 'grid-template-columns': `repeat(${imagesSlider.length}, 1fr)` }"
    >
      <button
        v-for="(image, index) of imagesSlider"
        :key="image.url"
        type="button"
        class="relative h-20 rounded-xl overflow-hidden focus:outline-none transition-all duration-300 cursor-pointer"
        :class="
          index === currentIndex
            ? 'ring-2 ring-blue-500 opacity-100 scale-98'
            : 'opacity-60 hover:opacity-90'
        "
        @click="currentIndex = index"
      >
        <img
          :src="imageAdapter(image.url)"
          alt="Миниатюра"
          class="w-full h-full object-cover select-none"
        />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
