import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  variants: {
    variant: {
      bordered: 'py-4 border-b border-b-ring flex items-center justify-between',
      clean: 'grid gap-y-0.5'
    },
    sizeTextDescription: {
      sm: 'text-[14px]',
      md: 'text-[18px]'
    },
    sizeTextLabel: {
      sm: 'text-[14px]',
      md: 'text-[16px]'
    }
  }
});

export type DescriptionProps = VariantProps<typeof descriptionVariants>;
