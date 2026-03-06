import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function BenefitCard({ icon, title, description, bgColor, iconColor }: BenefitCardProps) {
  return (
    <FadeUp>
      <div className="text-center p-9 rounded-2xl bg-white border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] h-full">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl ${bgColor} ${iconColor}`}
        >
          <Icon name={icon} />
        </div>
        <h3 className="text-base font-bold mb-2">{title}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </FadeUp>
  );
}
