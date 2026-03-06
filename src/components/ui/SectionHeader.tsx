import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ label, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <FadeUp>
        <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-brand mb-3">
          {label}
        </span>
      </FadeUp>
      <FadeUp>
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp>
          <p className="text-lg text-text-muted max-w-xl mx-auto">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
