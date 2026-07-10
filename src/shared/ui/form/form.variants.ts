import { tv } from 'tailwind-variants';

export const formVariants = tv({
  slots: {
    field:
      'flex items-center cursor-pointer gap-x-2 px-3 py-1.5 bg-primary-foreground text-foreground border border-input',
    rangeSlider:
      'absolute top-1/2 -translate-1/2 w-3 h-3 border border-primary bg-surface-foreground rounded-full z-10',
    selectOptions:
      'absolute top-22 px-3 py-2 sm:py-3.5 bg-primary-foreground rounded-4xl border border-input w-full grid gap-y-2',
    selectTrigger:
      'flex justify-between items-center px-3 py-2 sm:py-3.5 rounded-full border border-input cursor-pointer capitalize',
    option:
      'capitalize not-last:border-b hover:text-foreground p-2 cursor-pointer hover:border-b-foreground duration-300'
  }
});
