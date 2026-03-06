import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  cta,
  highlighted,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col ${
        highlighted
          ? "border-brand bg-white shadow-[0_8px_30px_rgba(232,115,26,0.12)] scale-105"
          : "border-border bg-white hover:border-brand/30 hover:shadow-md"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-4xl font-extrabold">{price}</span>
          {priceNote && (
            <span className="text-text-muted text-sm">/ {priceNote}</span>
          )}
        </div>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Icon name="fa-check" className="text-emerald-500 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={highlighted ? "#" : "/kontakt"}
        variant={highlighted ? "primary" : "outline"}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  );
}
