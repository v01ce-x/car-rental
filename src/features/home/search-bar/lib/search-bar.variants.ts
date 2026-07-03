import { tv } from 'tailwind-variants';

export const SearchBarVariants = tv({
  slots: {
    dateSearch:
      '[&_input]:bg-primary-foreground! [&_input]:rounded-full! [&_input]:text-input! [&_input]:border-input!',
    center: 'flex items-center gap-x-4'
  }
});

export default SearchBarVariants;
