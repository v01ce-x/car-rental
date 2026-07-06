import { tv } from 'tailwind-variants';

export const HeaderVariants = tv({
  slots: {
    header:
      'flex justify-between items-center p-3 w-full rounded-full border border-hard shadow-xs',
    logo: 'flex gap-x-1 items-start cursor-pointer',
    title: 'uppercase font-extrabold',
    button: 'group flex gap-x-2 items-center text-primary-foreground',
    icon: 'w-4 h-4 group-hover:translate-x-0.5 duration-300'
  }
});
