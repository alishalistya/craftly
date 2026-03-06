import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  label,
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  children,
}: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 bg-gradient-to-br from-brand-light via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {label && (
            <FadeUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-brand mb-3">
                {label}
              </span>
            </FadeUp>
          )}
          <FadeUp>
            <h1
              className="text-5xl font-extrabold leading-tight mb-5"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </FadeUp>
          {subtitle && (
            <FadeUp>
              <p className="text-lg text-text-muted mb-8 max-w-lg mx-auto">
                {subtitle}
              </p>
            </FadeUp>
          )}
          {(ctaText || secondaryCtaText) && (
            <FadeUp>
              <div className="flex gap-4 justify-center flex-wrap">
                {ctaText && ctaHref && (
                  <Button href={ctaHref}>{ctaText}</Button>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Button href={secondaryCtaHref} variant="outline">
                    {secondaryCtaText}
                  </Button>
                )}
              </div>
            </FadeUp>
          )}
        </div>
        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}
