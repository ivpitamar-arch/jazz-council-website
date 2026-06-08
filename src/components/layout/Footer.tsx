import Link from "next/link";

const footerLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/membership", label: "הצטרפות" },
  { href: "/donations", label: "תרומות" },
  { href: "/articles", label: "מאמרים" },
  { href: "/contact", label: "צור קשר" },
];


export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent/20 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 bg-accent" />
              </div>
              <span className="font-bold text-lg">מועצת הג&apos;אז הישראלי (ע&quot;ר)</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              ארגון גג לקהילת הג&apos;אז בישראל. מקדמים אמנות, מחזקים קהילה, ומחברים
              בין אמנים, מחנכים ואוהבי מוסיקה.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-accent mb-4">ניווט</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="font-semibold text-accent mb-4">צרו קשר</h3>
            <ul className="space-y-2 text-white/70 text-sm mb-6">
              <li>
                {/* TODO: replace with real email */}
                דוא&quot;ל:{" "}
                <a
                  href="mailto:info@jazzcouncil.org.il"
                  className="hover:text-accent transition-colors"
                >
                  info@jazzcouncil.org.il
                </a>
              </li>
              <li>
                {/* TODO: replace with real phone */}
                טלפון: <span>052-258-0547</span>
              </li>
              <li>
                {/* TODO: replace with real address */}
                כתובת: תל אביב, ישראל
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} מועצת הג&apos;אז הישראלי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
