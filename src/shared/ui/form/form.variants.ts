import { tv } from 'tailwind-variants';

export const formVariants = tv({
  slots: {
    input:
      'flex items-center cursor-pointer gap-x-2 px-3 py-1.5 bg-primary-foreground rounded-full text-foreground border border-input',
    rangeSlider:
      'absolute top-1/2 -translate-1/2 w-3 h-3 border border-button-primary bg-button-secondary rounded-full z-10'
  }
});
