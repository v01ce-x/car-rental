import type { Ref } from 'vue';

import { useDraggable } from '@vueuse/core';
import { watch } from 'vue';

export const slideRange = (
  marker: Ref<HTMLElement | null>,
  container: Ref<HTMLElement | null>,
  width: Ref<number>,
  isEndPosition: boolean = false,
  getPeerX?: () => number
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
    }
  });

  if (isEndPosition) {
    watch(
      width,
      (newWidth) => {
        if (newWidth > 0) {
          position.value.x = newWidth;
        }
      },
      { once: true }
    );
  }

  return { style, position };
};
