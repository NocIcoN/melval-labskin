import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-coral text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5",
  secondary: "bg-brand-black text-white hover:bg-brand-black/90",
  outline: "border-2 border-gold text-gold-700 bg-transparent hover:bg-gold-50",
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
 * Anchor-based CTA button. Use this for navigation (internal routes,
 * WhatsApp deep links, external URLs) instead of wrapping <Button> in <Link>,
 * which avoids invalid nested interactive markup.
 */
export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-inter font-medium",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
