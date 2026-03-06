import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export default function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <FadeUp>
      <div className="bg-white rounded-2xl p-9 border border-border transition-all duration-300 hover:border-brand hover:shadow-[0_8px_30px_rgba(232,115,26,0.1)] h-full">
        <div
          className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 text-white bg-gradient-to-br ${gradient}`}
        >
          <Icon name={icon} />
        </div>
        <h3 className="text-lg font-bold mb-2.5">{title}</h3>
        <p className="text-[0.95rem] text-text-muted">{description}</p>
      </div>
    </FadeUp>
  );
}
