import { tv } from 'tailwind-variants';

export const SearchBarVariants = tv({
  slots: {
    rent: 'flex flex-col sm:flex-row items-center gap-x-4 w-full xl:w-auto',
    buttons: 'flex items-center gap-x-4 w-full xl:w-auto'
  }
});

export default SearchBarVariants;
