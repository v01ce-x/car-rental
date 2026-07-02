import {tv} from "tailwind-variants";

export const ButtonVariants = tv({
  base: 'rounded-full px-6',
  variants: {
    variant: {
      primary: 'bg-button-primary py-3.75 w-full text-primary-foreground',
      exit: 'bg-black py-3 w-full text-primary-foreground',
      secondary: 'bg-button-secondary py-3.75 w-full text-secondary'
    }
  }
})

export default ButtonVariants;