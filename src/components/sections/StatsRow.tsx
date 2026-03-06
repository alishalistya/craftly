import FadeUp from "@/components/ui/FadeUp";
import { stats } from "@/data/features";

export default function StatsRow() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark to-dark-lighter text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <FadeUp key={stat.label}>
              <div className="text-5xl font-extrabold text-amber mb-2">
                {stat.value}
              </div>
              <div className="text-base text-gray-300">{stat.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
