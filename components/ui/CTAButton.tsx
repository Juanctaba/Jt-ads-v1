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
    "inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm hover:shadow-md hover:shadow-[var(--accent)]/20",
    secondary:
      "border border-gray-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-gray-300 bg-white",
    ghost:
      "text-[var(--accent)] hover:text-[var(--accent-hover)] underline-offset-4 hover:underline",
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
