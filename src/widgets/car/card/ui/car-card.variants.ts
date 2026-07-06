import { tv } from 'tailwind-variants';

export const CarCardVariants = tv({
  slots: {
    image:
      'aspect-video rounded-2xl border  border-button-secondary hover:border-button-primary hover:shadow-[3px_3px_0_var(--color-button-primary)] duration-300',
    context: 'flex flex-col gap-y-2 font-medium'
  }
});
