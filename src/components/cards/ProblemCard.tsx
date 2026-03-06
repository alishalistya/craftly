import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

interface ProblemCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <FadeUp>
      <div className="bg-white rounded-[14px] p-8 flex gap-5 items-start border border-border-light transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <div className="w-12 h-12 min-w-12 rounded-xl flex items-center justify-center text-xl bg-amber-100 text-amber-dark">
          <Icon name={icon} />
        </div>
        <div>
          <h3 className="text-base font-bold mb-1.5">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </FadeUp>
  );
}
