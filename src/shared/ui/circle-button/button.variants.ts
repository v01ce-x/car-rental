import { tv } from 'tailwind-variants';

export const CircleButtonVariants = tv({
  base: 'rounded-full cursor-pointer bg-button-secondary',
  variants: {
    variant: {
      arrow: 'p-1.5',
      link: 'p-1.5',
      filter: 'p-4'
    }
  }
});

export default CircleButtonVariants;
