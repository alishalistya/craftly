import Link from "next/link";
import Icon from "@/components/ui/Icon";
import FadeUp from "@/components/ui/FadeUp";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ title, excerpt, category, date, readTime }: BlogCardProps) {
  return (
    <FadeUp>
      <article className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full flex flex-col">
        <div className="h-48 bg-gradient-to-br from-brand-light to-surface-subtle flex items-center justify-center">
          <Icon name="fa-newspaper" className="text-4xl text-brand/30" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3 text-xs text-text-light">
            <span className="bg-brand-light text-brand font-semibold px-2.5 py-1 rounded-full">
              {category}
            </span>
            <span>{new Date(date).toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-base font-bold mb-2 leading-snug">{title}</h3>
          <p className="text-sm text-text-muted flex-1 mb-4">{excerpt}</p>
          <Link href="/blog" className="text-brand font-semibold text-sm inline-flex items-center gap-2">
            Weiterlesen <Icon name="fa-arrow-right" className="text-xs" />
          </Link>
        </div>
      </article>
    </FadeUp>
  );
}
