import { tv } from 'tailwind-variants';

export const FooterVariants = tv({
  slots: {
    navigations: 'relative bg-background shadow-2xl border border-hard rounded-full',
    navigationsInner: 'w-full rounded-full grid grid-cols-3 justify-items-center p-1 relative z-10',
    accentBlock: 'grid grid-cols-3 w-full h-full absolute flex-1 p-1 top-0 select-none',
    accentItem: ''
  }
});

export default FooterVariants;
