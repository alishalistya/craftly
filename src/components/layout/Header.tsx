"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="text-[0.95rem] font-medium text-text-secondary hover:text-brand transition-colors flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <Icon name="fa-chevron-down" className="text-xs" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-text-secondary hover:text-brand hover:bg-surface-subtle transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-[0.95rem] font-medium transition-colors ${
                      pathname === item.href
                        ? "text-brand"
                        : "text-text-secondary hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              className="ml-2 px-6 py-2.5 rounded-lg font-semibold text-sm bg-brand text-white shadow-[0_4px_14px_var(--color-brand-glow)] hover:bg-brand-dark hover:-translate-y-0.5 transition-all"
            >
              Kostenlos starten
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <span
              className={`block w-6 h-[2.5px] bg-text-primary rounded transition-all ${
                mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] bg-text-primary rounded transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] bg-text-primary rounded transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 z-40 transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {mainNavItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full flex justify-between items-center py-3.5 text-base font-medium text-text-secondary border-b border-border-light bg-transparent border-x-0 border-t-0 cursor-pointer"
                >
                  {item.label}
                  <Icon
                    name="fa-chevron-down"
                    className={`text-xs transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2.5 text-sm text-text-muted hover:text-brand transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block py-3.5 text-base font-medium text-text-secondary border-b border-border-light"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <Link
          href="/kontakt"
          className="block w-full text-center mt-4 px-6 py-3.5 rounded-lg font-semibold bg-brand text-white"
          onClick={() => setMobileOpen(false)}
        >
          Kostenlos starten
        </Link>
      </div>
    </>
  );
}
