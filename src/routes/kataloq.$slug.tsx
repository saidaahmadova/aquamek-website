import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight, Phone, MessageCircle, Truck, Wrench, ShieldCheck } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/kataloq/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Məhsul tapılmadı – Aquamek" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} – ${product.price} | Aquamek`;
    return {
      meta: [
        { title },
        { name: "description", content: product.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: product.desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Məhsul tapılmadı</h1>
        <p className="mt-3 text-muted-foreground">
          Axtardığınız model kataloqda yoxdur. Bütün modellərə baxın.
        </p>
        <Link
          to="/kataloq"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Kataloqa qayıt
          <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const perks = [
  { icon: Truck, text: "Pulsuz çatdırılma" },
  { icon: Wrench, text: "Pulsuz quraşdırma" },
  { icon: ShieldCheck, text: "Rəsmi zəmanət" },
];

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const [active, setActive] = useState(0);
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const waLink = `https://wa.me/994505154130?text=${encodeURIComponent(
    `Salam, ${product.name} (${product.price}) modeli ilə maraqlanıram.`,
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-16">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Ana səhifə
            </Link>
            <ArrowRight className="h-3.5 w-3.5" />
            <Link to="/kataloq" className="hover:text-primary">
              Kataloq
            </Link>
            <ArrowRight className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground">{product.name}</span>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden rounded-3xl border border-border bg-secondary p-6">
                <img
                  src={product.gallery[active]}
                  width={1024}
                  height={1024}
                  alt={`${product.name} – şəkil ${active + 1}`}
                  className="mx-auto h-72 w-auto object-contain sm:h-96"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${product.name} şəkil ${i + 1}`}
                    className={`overflow-hidden rounded-2xl border-2 bg-secondary p-2 transition-colors ${
                      i === active ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={g}
                      width={512}
                      height={512}
                      loading="lazy"
                      alt=""
                      className="h-20 w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {product.tag}
              </span>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{product.name}</h1>
              <p className="mt-3 text-muted-foreground">{product.longDesc}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                <span className="text-sm text-muted-foreground">quraşdırma daxil</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp ilə sifariş et
                </a>
                <a
                  href="tel:+994505154130"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" />
                  Zəng et
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-4 text-sm">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-2 text-muted-foreground">
                    <p.icon className="h-4 w-4 text-primary" />
                    {p.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card">
                <h2 className="text-lg font-bold">Əsas xüsusiyyətlər</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="text-2xl font-bold">Texniki göstəricilər</h2>
            <dl className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-4 border-b border-border pb-3"
                >
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="text-sm font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Order CTA */}
        <section className="mx-auto mt-12 max-w-6xl px-4">
          <div className="rounded-3xl bg-hero-gradient p-8 text-center text-primary-foreground sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {product.name} sifariş edin – {product.price}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Çatdırılma və quraşdırma pulsuzdur. Sifarişi 24 saat ərzində quraşdırırıq.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-card transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Sifariş et
              </a>
              <a
                href="/#elaqe"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Formu doldur
              </a>
            </div>
          </div>
        </section>

        {/* Other products */}
        <section className="mx-auto mt-14 max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Digər modellər</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/kataloq/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="bg-secondary p-6">
                  <img
                    src={p.img}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt={`${p.name} su filtri`}
                    className="mx-auto h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                  <span className="mt-3 text-lg font-bold text-primary">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
