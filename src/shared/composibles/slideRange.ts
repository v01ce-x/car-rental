import { useDraggable } from '@vueuse/core';
import { type Ref, watch } from 'vue';

export const slideRange = (
  marker: Ref<HTMLElement | null>,
  container: Ref<HTMLElement | null>,
  width: Ref<number>,
  isEndPosition: boolean = false,
) => {
  const { style, position } = useDraggable(marker, {
    initialValue: { x: 0, y: 3 },

    containerElement: container,

    onMove(pos) {
      pos.y = 3;

      if (isEndPosition && pos.x >= width.value - 16) {
        pos.x = width.value;
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
