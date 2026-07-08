<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, ref, toRef } from 'vue';

import type { Price } from '@/entities/car';

import { slideRange } from '@/shared/utils';

import { formVariants } from './form.variants.ts';

const { rangeSlider } = formVariants();

const MIN_LIMIT = 0;
const MAX_LIMIT = 10000;

const model = defineModel<Price>({ required: true });

const minPriceElement = ref<HTMLElement | null>(null);
const maxPriceElement = ref<HTMLElement | null>(null);
const sliderContainer = ref<HTMLElement | null>(null);

const { width } = useElementBounding(sliderContainer);

const updatePriceFromX = (x: number, isMax: boolean) => {
  if (width.value === 0) return;
  const ratio = x / width.value;
  const calculatedValue = Math.round(MIN_LIMIT + ratio * (MAX_LIMIT - MIN_LIMIT));

  if (isMax) {
    model.value.maxPrice = calculatedValue;
  } else {
    model.value.minPrice = calculatedValue;
  }
};

const { style: styleMaxPrice, position: positionMaxPrice } = slideRange(
  maxPriceElement,
  sliderContainer,
  width,
  true,
  () => positionMaxPrice.value.x,
  toRef(() => model.value.maxPrice as number),
  { min: MIN_LIMIT, max: MAX_LIMIT },
  (x) => updatePriceFromX(x, true)
);

const { style: styleMinPrice, position: positionMinPrice } = slideRange(
  minPriceElement,
  sliderContainer,
  width,
  false,
  () => positionMinPrice.value.x,
  toRef(() => model.value.minPrice as number),
  { min: MIN_LIMIT, max: MAX_LIMIT },
  (x) => updatePriceFromX(x, false)
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
  <div ref="sliderContainer" class="h-1.5 w-full bg-surface-foreground rounded-full relative">
    <div class="bg-blue-600 h-1.5 absolute rounded-full" :style="activeTrackStyle" />

    <div
      ref="minPriceElement"
      :class="rangeSlider()"
      :style="styleMinPrice"
      class="-translate-x-1/2 touch-none absolute z-20"
    />

    <div
      ref="maxPriceElement"
      :class="rangeSlider()"
      :style="styleMaxPrice"
      class="-translate-x-1/2 touch-none absolute z-20"
    />
  </div>
</template>
