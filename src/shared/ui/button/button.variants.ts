import { tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'rounded-full px-6 cursor-pointer',
  variants: {
    variant: {
      primary:
        'bg-primary py-3.75 w-full text-primary-foreground hover:bg-primary-hover duration-300',
      exit: 'bg-primary py-2.5 text-primary-foreground hover:bg-primary-hover duration-300',
      secondary:
        'bg-surface-foreground py-3.75 w-full text-secondary-foreground hover:bg-surface-foreground-hover duration-300'
    }
  }
});

export default ButtonVariants;
