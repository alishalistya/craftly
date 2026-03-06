import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-block ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Dein Lagerhelfer"
        width={180}
        height={48}
        className={variant === "light" ? "brightness-0 invert" : ""}
        priority
      />
    </Link>
  );
}
