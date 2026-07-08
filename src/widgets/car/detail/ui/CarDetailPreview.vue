<script setup lang="ts">
import { computed, ref } from 'vue';

import type { CarMedia } from '@/entities/car';

import { AppIcon, AppSliderButton } from '@/shared/ui';
import { imageAdapter } from '@/shared/utils';

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
const isOpenImage = ref(false);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imagesSlider.value.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + imagesSlider.value.length) % imagesSlider.value.length;
};

const openImage = () => {
  isOpenImage.value = true;
};
const closeImage = () => {
  isOpenImage.value = false;
};
</script>

<template>
  <div class="grid gap-y-2">
    <h2 class="text-2xl font-bold">
      {{ name }}
    </h2>

    <div class="relative flex justify-center overflow-hidden rounded-2xl">
      <div
        v-if="imagesSlider.length > 1"
        class="absolute z-10 w-full flex items-center justify-between top-1/2 px-3"
      >
        <AppSliderButton @click="prevSlide()">
          <AppIcon name="arrow" class="w-7 h-7 rotate-90" />
        </AppSliderButton>
        <AppSliderButton @click="nextSlide()">
          <AppIcon name="arrow" class="w-7 h-7 -rotate-90" />
        </AppSliderButton>
      </div>
      <div
        class="flex duration-500 ease-out will-change-transform"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="image in imagesSlider"
          :key="image.url"
          @click="openImage()"
          class="w-full h-96 shrink-0"
        >
          <img
            :src="imageAdapter(image.url)"
            alt="Фото машины"
            class="w-full h-full object-cover select-none cursor-pointer"
          />
        </div>
        <teleport to="#screen">
          <transition name="image">
            <div
              v-if="isOpenImage"
              @click="closeImage()"
              class="w-full h-full z-101 flex items-center justify-center fixed top-0 right-0 bg-outline select-none"
            >
              <div class="w-5/6 relative" @click.stop>
                <img
                  :src="imageAdapter(imagesSlider[currentIndex].url)"
                  alt="Машина"
                  class="w-full max-h-175 rounded-4xl"
                />
                <app-icon
                  name="cross"
                  @click="closeImage()"
                  class="w-6 h-6 cursor-pointer text-black absolute top-5 right-5"
                />
              </div>
            </div>
          </transition>
        </teleport>
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

<style scoped>
.image-enter-active,
.image-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.image-enter-from,
.image-leave-to {
  opacity: 0;
}

.image-enter-active .filter-sidebar,
.image-leave-active .filter-sidebar {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-enter-from .filter-sidebar,
.image-leave-to .filter-sidebar {
  transform: translateX(100%);
}
</style>
