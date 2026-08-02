import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Phone, Mail } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { products } from "@/data/products";

export const Route = createFileRoute("/kataloq/")({
  head: () => ({
    meta: [
      { title: "Aquamek Kataloq – Su Filtr Modelləri və Qiymətlər" },
      {
        name: "description",
        content:
          "Aquamek su filtri kataloqu: 6 əks osmos və su təmizləmə sistemi. Pulsuz çatdırılma, quraşdırma və rəsmi zəmanət. Bakı və bütün Azərbaycan üzrə.",
      },
      { property: "og:title", content: "Aquamek Kataloq – Su Filtr Modelləri" },
      {
        property: "og:description",
        content: "6 su filtri modeli. Ən uyğun qiymətə təmiz su – evinizə pulsuz çatdırılır.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kataloq,
});

function Kataloq() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-16">
        <section className="bg-hero-gradient">
          <div className="mx-auto max-w-6xl px-4 py-12 text-primary-foreground md:py-16">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link to="/" className="transition-colors hover:underline">
                Ana səhifə
              </Link>
              <ArrowRight className="h-4 w-4" />
              <span className="font-medium">Kataloq</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Su filtri kataloqu
            </h1>
            <p className="mt-3 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
              6 fərqli model arasından eviniz və büdcəniz üçün ən uyğun əks osmos sistemini
              seçin. Çatdırılma və quraşdırma həmişə pulsuzdur.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
              >
                <Link
                  to="/kataloq/$slug"
                  params={{ slug: p.slug }}
                  className="relative block bg-secondary p-6"
                >
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {p.tag}
                  </span>
                  <img
                    src={p.img}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt={`${p.name} su filtri`}
                    className="mx-auto h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold">
                    <Link
                      to="/kataloq/$slug"
                      params={{ slug: p.slug }}
                      className="transition-colors hover:text-primary"
                    >
                      {p.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <span className="text-2xl font-bold text-primary">{p.price}</span>
                    <Link
                      to="/kataloq/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Ətraflı bax
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-hero-gradient p-8 text-primary-foreground sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Hansı modeli seçməliyəm?</h2>
              <p className="mt-3 text-primary-foreground/85">
                Su analizinizi pulsuz edirik və sizə ən uyğun sistemi təklif edirik. Zəng edin
                və ya əlaqə formundan müraciət edin.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+994505154130"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  +994 50 515 41 30
                </a>
                <a
                  href="/#elaqe"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Mail className="h-4 w-4" />
                  Formu doldur
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
