import { tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'rounded-full px-6 cursor-pointer',
  variants: {
    variant: {
      primary: 'bg-button-primary py-3.75 w-full text-primary-foreground',
      exit: 'bg-black py-2.5 text-primary-foreground',
      secondary: 'bg-button-secondary py-3.75 w-full text-secondary'
    }
  }
});

export default ButtonVariants;
// export type ButtonVariants = VariantProps<typeof ButtonVariants>;
