<script setup lang="ts">
import { formVariants } from './form.variants.ts';
import { useElementBounding } from '@vueuse/core';
import {computed, ref, watch} from 'vue';
import { slideRange } from '@/shared/composibles';

const { rangeSlider } = formVariants();

const minPrice = ref<HTMLElement | null>(null);
const maxPrice = ref<HTMLElement | null>(null);
const sliderContainer = ref<HTMLElement | null>(null);

const { width } = useElementBounding(sliderContainer);

const { style: styleMinPrice, position: positionMinPrice } = slideRange(
  minPrice,
  sliderContainer,
  width,
  false
);
const { style: styleMaxPrice, position: positionMaxPrice } = slideRange(
  maxPrice,
  sliderContainer,
  width,
  true
);

const activeTrackStyle = computed(() => {
  const leftOffset = positionMinPrice.value.x;
  const trackWidth = positionMaxPrice.value.x - positionMinPrice.value.x;

  return {
    left: `${leftOffset}px`,
    width: `${trackWidth}px`
  };
});
</script>

<template>
  <div ref="sliderContainer" class="h-1.5 w-full bg-button-secondary rounded-full relative">
    <div class="bg-blue-600 h-1.5 relative rounded-full" :style="activeTrackStyle" />
    <div
        ref="minPrice"
        :class="rangeSlider()"
        :style="styleMinPrice"
        class="-translate-x-1/2 touch-none absolute z-20"
    />

    <div
        ref="maxPrice"
        :class="rangeSlider()"
        :style="styleMaxPrice"
        class="-translate-x-1/2 touch-none absolute z-20"
    />
  </div>
</template>
