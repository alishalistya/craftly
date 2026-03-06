import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-brand text-white shadow-[0_4px_14px_var(--color-brand-glow)] hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,115,26,0.45)]",
  outline:
    "bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white",
  white:
    "bg-white text-brand hover:bg-gray-50 hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold cursor-pointer transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
