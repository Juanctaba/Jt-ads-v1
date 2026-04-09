import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-lg hover:shadow-[var(--accent)]/25 hover:shadow-xl",
    secondary:
      "border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-white hover:border-white/30 bg-[var(--bg-surface)]",
    ghost:
      "text-[var(--accent-light)] hover:text-white underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
