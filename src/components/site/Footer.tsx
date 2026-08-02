import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">Aquamek</p>
            <p className="text-sm text-muted-foreground">
              Evinizə təmiz su – Bakı və bütün Azərbaycan
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+994505154130" className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-4 w-4" />
              +994 50 515 41 30
            </a>
            <a href="mailto:info@aquamek.az" className="flex items-center gap-1.5 hover:text-primary">
              <Mail className="h-4 w-4" />
              sales@emaars.org
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Heydər Əliyev pr., Qafqaz Business Center, Bakı
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              09:00 – 20:00
            </span>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aquamek. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
}
