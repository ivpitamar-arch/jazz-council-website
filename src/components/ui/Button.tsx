"use client";

import Link from "next/link";
import { motion } from "motion/react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90 border border-accent",
  secondary:
    "bg-transparent text-dark/70 border border-dark/30 hover:border-dark hover:text-dark",
  ghost:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-dark",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <MotionLink href={href} className={classes} whileTap={{ scale: 0.96 }}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}
