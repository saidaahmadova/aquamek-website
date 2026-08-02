import { Link } from "@tanstack/react-router";

const links = [
  { to: "/kataloq", label: "Məhsullar" },
  { href: "/#ustunlukler", label: "Üstünlüklər" },
  { href: "/#reyler", label: "Rəylər" },
  { href: "/#elaqe", label: "Əlaqə" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="truncate text-lg font-bold tracking-tight">Aquamek</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-primary"
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            )
          )}
        </nav>
        <a
          href="tel:+994505154130"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-opacity hover:opacity-90"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">+994 50 515 41 30</span>
          <span className="sm:hidden">Zəng</span>
        </a>
      </div>
    </header>
  );
}
