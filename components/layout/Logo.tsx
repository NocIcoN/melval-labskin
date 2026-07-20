import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  type?: "full" | "icon";
  variant?: "coral" | "white";
  width?: number;
  className?: string;
}

export default function Logo({ type = "full", variant = "coral", width, className }: LogoProps) {
  const isIcon = type === "icon";
  const src = isIcon ? "/icons/logo-icon.ico" : "/icons/logo-logotype.svg";
  const w = width ?? (isIcon ? 40 : 160);
  const h = isIcon ? Math.round(w / 1.115) : Math.round(w / 1.701);

  return (
    <Link href="/" aria-label="Melval Labskin — Beranda" className={cn("inline-flex items-center", className)}>
      <Image src={src} alt="Melval Labskin" width={w} height={h} priority
        style={variant === "white" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </Link>
  );
}