import Link from "next/link";
import Icon from "@/components/ui/Icon";
import FadeUp from "@/components/ui/FadeUp";

interface TradeCardProps {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  description: string;
}

export default function TradeCard({ slug, shortName, icon, color, description }: TradeCardProps) {
  return (
    <FadeUp>
      <Link
        href={`/loesungen/${slug}`}
        className="block bg-white rounded-2xl p-8 border border-border transition-all duration-300 hover:border-brand hover:shadow-[0_8px_30px_rgba(232,115,26,0.1)] hover:-translate-y-1 h-full"
      >
        <div
          className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 text-white bg-gradient-to-br ${color}`}
        >
          <Icon name={icon} />
        </div>
        <h3 className="text-lg font-bold mb-2">{shortName}</h3>
        <p className="text-sm text-text-muted mb-4">{description}</p>
        <span className="text-brand font-semibold text-sm inline-flex items-center gap-2">
          Mehr erfahren <Icon name="fa-arrow-right" className="text-xs" />
        </span>
      </Link>
    </FadeUp>
  );
}
