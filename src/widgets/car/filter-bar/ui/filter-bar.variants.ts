import { tv } from 'tailwind-variants';

export const filterBarVariants = tv({
  slots: {
    root: 'absolute right-0 top-0 z-100 p-3 max-w-135 w-full h-full',
    header: 'flex items-center justify-between text-foreground',
    inner:
      'flex flex-col gap-y-2.5 bg-primary-foreground h-full rounded-2xl p-6 overflow-hidden pb-3'
  }
});
