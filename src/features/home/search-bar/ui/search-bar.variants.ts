import { tv } from 'tailwind-variants';

export const SearchBarVariants = tv({
  slots: {
    root: 'max-w-143.5 xl:max-w-full w-full flex flex-col xl:flex-row gap-3 items-center justify-between',
    rent: 'flex flex-col sm:flex-row items-center gap-x-4 w-full xl:w-auto',
    buttons: 'flex items-center gap-x-4 w-full xl:w-auto',
    calendar: '[&::-webkit-calendar-picker-indicator]:hidden cursor-pointer',
    filter: 'p-4 bg-secondary hover:bg-secondary-hover duration-300 cursor-pointer rounded-full'
  }
});

export default SearchBarVariants;
