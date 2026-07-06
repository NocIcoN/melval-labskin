import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-coral text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5",
  secondary:
    "bg-brand-black text-white hover:bg-brand-black/90",
  outline:
    "border-2 border-coral text-coral-700 bg-transparent hover:bg-coral-50",
  ghost: "bg-transparent text-brand-black hover:bg-brand-gray-light",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-brand-sm hover:shadow-brand",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Base Button atom. All CTAs across the site should compose this
 * rather than re-styling buttons inline, so brand styling stays consistent.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-inter font-medium",
          "transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
