import { VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import { ComponentProps } from "react";

export const linkVariants = cva("underline", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary",
    },
  },
});

interface LinkProps extends ComponentProps<typeof NextLink>, VariantProps<typeof linkVariants> {}

export function Link({ variant = "default", className, children, ...props }: LinkProps) {
  return (
    <NextLink {...props} className={linkVariants({ variant, className })}>
      {children}
    </NextLink>
  );
}
