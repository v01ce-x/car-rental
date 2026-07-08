import type { Ref } from 'vue';

import { useDraggable } from '@vueuse/core';
import { watch } from 'vue';

export const slideRange = (
  marker: Ref<HTMLElement | null>,
  container: Ref<HTMLElement | null>,
  width: Ref<number>,
  isEndPosition: boolean = false,
  getPeerX?: () => number,
  valueRef?: Ref<number>,
  minMax?: { min: number; max: number },
  onPositionChange?: (x: number) => void
) => {
  const { style, position } = useDraggable(marker, {
    initialValue: { x: 0, y: 3 },
    containerElement: container,

    onMove(pos) {
      pos.y = 3;

      if (isEndPosition) {
        if (pos.x >= width.value - 16) {
          pos.x = width.value;
        }
        if (getPeerX && pos.x < getPeerX()) {
          pos.x = getPeerX();
        }
      } else {
        if (getPeerX && pos.x > getPeerX()) {
          pos.x = getPeerX();
        }
      }

      if (onPositionChange) {
        onPositionChange(pos.x);
      }
    }
  });

  if (valueRef && minMax) {
    watch(
      [width, valueRef],
      ([newWidth, newValue]) => {
        if (newWidth <= 0) return;

        const ratio = (newValue - minMax.min) / (minMax.max - minMax.min);
        let targetX = ratio * newWidth;

        if (isEndPosition && getPeerX && targetX < getPeerX()) targetX = getPeerX();
        if (!isEndPosition && getPeerX && targetX > getPeerX()) targetX = getPeerX();

        position.value.x = targetX;
      },
      { immediate: true }
    );
  }

  return { style, position };
};
