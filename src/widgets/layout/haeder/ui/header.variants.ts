import { tv } from 'tailwind-variants';

export const HeaderVariants = tv({
  slots: {
    header:
      'hidden sm:flex justify-between items-center p-3 w-full rounded-full border border-hard shadow-xs',
    button: 'group flex gap-x-2 items-center text-primary-foreground',
    icon: 'w-4 h-4 group-hover:translate-x-0.5 duration-300'
  }
});
