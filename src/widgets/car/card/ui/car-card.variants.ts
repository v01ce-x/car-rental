import { tv } from 'tailwind-variants';

export const CarCardVariants = tv({
  slots: {
    image:
      'aspect-video rounded-2xl border border-surface-foreground hover:border-primary hover:shadow-[3px_3px_15px_var(--color-primary)] duration-300',
    context: 'flex flex-col gap-y-2 font-medium'
  }
});
