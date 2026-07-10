import { tv } from 'tailwind-variants';

export const FormFilterVariants = tv({
  slots: {
    root: 'flex flex-col flex-1 gap-y-5 justify-between h-full overflow-y-auto overflow-x-hidden p-2',
    buttons: 'flex flex-col sm:flex-row gap-4 w-full'
  }
});

export default FormFilterVariants;
