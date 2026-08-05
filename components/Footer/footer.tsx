import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import {
  FOOTER_CONTACT,
  FOOTER_ABOUT,
  FOOTER_SOCIALS,
  FOOTER_COLUMNS,
} from "@/lib/footer";

export default function Footer() {
  return (
    <footer className="bg-[#03122F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* ============ MAIN GRID ============ */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* About — 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo/logo.jpg"
                alt="SPS"
                width={48}
                height={48}
                className="rounded-md"
              />
              <span className="text-lg font-bold">SPS</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {FOOTER_ABOUT}
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              {FOOTER_SOCIALS.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition hover:bg-cyan-400 hover:text-[#03122F]"
                >
                  <Icon icon={s.icon} width={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ============ CONTACT ROW ============ */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          {FOOTER_CONTACT.map((item) => {
            const content = (
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0057B8]">
                  <Icon icon={item.icon} width={16} />
                </div>
                <div>
                  <p className="text-xs text-white/60">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <Link key={item.label} href={item.href} className="hover:opacity-80">
                {content}
              </Link>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/60 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Software Productivity Strategists, Inc.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cyan-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cyan-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}