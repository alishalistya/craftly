import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import BlogCard from "@/components/cards/BlogCard";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog – Tipps & Wissen für Handwerksbetriebe",
  description:
    "Praxistipps, Ratgeber und Branchenwissen rund um Lagerverwaltung, Materialwirtschaft und Digitalisierung im Handwerk.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Wissen für das <span class='text-brand'>Handwerk</span>"
        subtitle="Praxistipps, Ratgeber und Branchenwissen rund um Lagerverwaltung, Materialwirtschaft und Digitalisierung im Handwerk."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-16 text-text-muted">
            <p>Weitere Artikel folgen in K&uuml;rze.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
