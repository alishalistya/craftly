import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { footerNavSections } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-dark text-text-light pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-white mb-3 block">
              Craft<span className="text-brand">ly</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Die kostenlose Lagerverwaltung f&uuml;r das deutsche Handwerk.
              Einfach, digital und immer griffbereit.
            </p>
            <div className="flex gap-3">
              <SocialLink icon="fa-linkedin-in" label="LinkedIn" />
              <SocialLink icon="fa-instagram" label="Instagram" />
              <SocialLink icon="fa-facebook-f" label="Facebook" />
            </div>
          </div>

          {/* Nav columns */}
          {footerNavSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {section.title}
              </h4>
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-text-light py-1 hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-dark-lighter pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <span>&copy; {new Date().getFullYear()} Craftly. Alle Rechte vorbehalten.</span>
          <span>
            Mit <Icon name="fa-heart" className="text-brand mx-1" /> f&uuml;r
            das Handwerk gemacht.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, label }: { icon: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-10 h-10 rounded-lg bg-dark-lighter flex items-center justify-center text-text-light hover:bg-brand hover:text-white transition-all"
    >
      <Icon name={icon} className="fab" />
    </a>
  );
}
