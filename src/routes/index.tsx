import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Truck,
  Wrench,
  ShieldCheck,
  Award,
  Sparkles,
  Headset,
  Star,
  Check,
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";


import { Header } from "@/components/site/Header";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import heroImg from "@/assets/hero-water.jpg";
import filter1 from "@/assets/filter-1.jpg";
import filter2 from "@/assets/filter-2.jpg";
import filter3 from "@/assets/filter-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aquamek – Əks Osmos Su Filtrləri | Bakı" },
      {
        name: "description",
        content:
          "Aquamek – evinizə təmiz su. Əks osmos su filtrləri, pulsuz çatdırılma və quraşdırma, 2 il zəmanət. Bakı və bütün Azərbaycan üzrə.",
      },
      { property: "og:title", content: "Aquamek – Əks Osmos Su Filtrləri" },
      {
        property: "og:description",
        content:
          "Hər ev üçün təmiz su. Pulsuz çatdırılma və quraşdırma, 5 və 7 mərhələli əks osmos sistemləri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Elsea Digital Smart",
    img: filter1,
    price: "1400 ₼",
    tag: "Ən çox seçilən",
    desc: "7 mərhələli əks osmos sistemi – premium, nəzarətli seçim.",
    features: ["7 mərhələli təmizləmə", "12 l/saat məhsuldarlıq", "Sıxılmış karbon kartric"],
  },
  {
    name: "Elsea 300 GPD",
    img: filter2,
    price: "950 ₼",
    tag: "Çənsiz",
    desc: "Kompakt çənsiz dizayn – az yer tutur, birbaşa axınla təmiz su verir.",
    features: ["Çənsiz kompakt korpus", "2 qat güclü membran", "Səssiz nasos"],
  },
  {
    name: "Elsea Luxury",
    img: filter3,
    price: "1600 ₼",
    tag: "Premium",
    desc: "7 mərhələli sistem – mineral kartric suyun dadını və faydasını bərpa edir.",
    features: ["Mineral + alkali kartric", "Paslanmayan çən", "3 il zəmanət"],
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Pulsuz çatdırılma",
    text: "Bakı və bütün Azərbaycan üzrə sifarişlərinizi pulsuz çatdırırıq.",
  },
  {
    icon: Wrench,
    title: "Pulsuz quraşdırma",
    text: "Sertifikatlı ustalarımız filtri evinizdə əlavə ödəniş olmadan quraşdırır.",
  },
  {
    icon: ShieldCheck,
    title: "3 il zəmanət",
    text: "Bütün sistemlərə rəsmi 3 il zəmanət və ömürlük texniki dəstək verilir.",
  },
  {
    icon: Award,
    title: "Sertifikatlı ustalar",
    text: "Təcrübəli və sertifikatlaşdırılmış texniki personal tərəfindən quraşdırma.",
  },
  {
    icon: Sparkles,
    title: "Orijinal filtr elementləri",
    text: "Yalnız orijinal, keyfiyyətli filtr kartricləri və ehtiyat hissələri ilə işləyirik.",
  },
  {
    icon: Headset,
    title: "24/7 texniki dəstək",
    text: "Hər an zəng edə bilərsiniz – günün 24 saatı texniki dəstək xidmətimiz fəaldir.",
  },
];

const reviews = [
  {
    name: "Nigar Əliyeva",
    city: "Bakı, Nərimanov",
    text: "Sifariş verdikdən bir gün sonra gəlib quraşdırdılar. Suyun dadı tamamilə dəyişdi, artıq balon su almırıq.",
  },
  {
    name: "Elvin Məmmədov",
    city: "Sumqayıt",
    text: "Slim Flow modelini aldım. Mətbəxdə demək olar heç yer tutmur, işi də səssizdir. Ustalar çox peşəkar idi.",
  },
  {
    name: "Günel Həsənova",
    city: "Gəncə",
    text: "Mineral 7 sistemini uşaqlar üçün aldıq. Altı aydır problemsiz işləyir, servis vaxtını özləri xatırlatdılar.",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div className="text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Azərbaycan üzrə xidmət
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Hər Ev Üçün Təmiz Su
              </h1>
              <p className="mt-5 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
                Aquamek əks osmos su filtrləri ilə kran suyunuz təhlükəsiz içməli suya çevrilir.
                Çatdırılma və quraşdırma tamamilə pulsuzdur.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mehsullar"
                  className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-float transition-transform hover:-translate-y-0.5"
                >
                  Məhsullara bax
                </a>
                <a
                  href="#elaqe"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Pulsuz konsultasiya
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-primary-foreground">
                {[
                  ["4500+", "quraşdırma"],
                  ["99.9%", "təmizlik"],
                  ["24 saat", "çatdırılma"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-bold">{v}</dt>
                    <dd className="text-xs text-primary-foreground/75">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                width={1536}
                height={1024}
                alt="Mətbəxdə Aquamek əks osmos filtri və təmiz su stəkanı"
                className="w-full rounded-3xl shadow-float"
              />
            </div>
          </div>
        </section>

        {/* Delivery strip */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-3">
            {[
              [Truck, "Pulsuz çatdırılma", "Bütün Azərbaycan üzrə"],
              [Wrench, "Pulsuz quraşdırma", "Sertifikatlı ustalar"],
              [ShieldCheck, "2 il zəmanət", "Rəsmi servis dəstəyi"],
            ].map(([Icon, title, sub]) => {
              const I = Icon as typeof Truck;
              return (
                <div key={title as string} className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background text-primary shadow-card">
                    <I className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-secondary-foreground">
                      {title as string}
                    </p>
                    <p className="truncate text-sm text-muted-foreground">{sub as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section id="mehsullar" className="bg-soft-gradient py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Məhsullarımız
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Əks osmos filtr modelləri</h2>
              <p className="mt-3 text-muted-foreground">
                Mənzil, həyət evi və ofis üçün üç fərqli həll. Hər model quraşdırma və ilk servis
                daxil olmaqla təqdim olunur.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {products.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
                >
                  <div className="relative bg-secondary p-6">
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {p.tag}
                    </span>
                    <img
                      src={p.img}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      alt={`${p.name} əks osmos su filtri`}
                      className="mx-auto h-52 w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between gap-3 pt-4">
                      <span className="text-2xl font-bold text-primary">{p.price}</span>
                      <a
                        href="#elaqe"
                        className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Sifariş et
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="ustunlukler" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Üstünlüklər
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Niyə Aquamek?</h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reyler" className="bg-soft-gradient py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Rəylər</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Müştərilərimiz nə deyir</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.city}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="elaqe" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Əlaqə</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pulsuz konsultasiya alın</h2>
              <p className="mt-3 text-muted-foreground">
                Formu doldurun – mütəxəssisimiz 15 dəqiqə ərzində sizinlə əlaqə saxlayıb suyunuza
                uyğun modeli təklif etsin.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href="tel:+994505550101" className="font-medium hover:text-primary">
                    +994 50 515 41 30
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a href="mailto:info@aquamek.az" className="font-medium hover:text-primary">
                    sales@emaars.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">Bakı, Business Center, Heydər Əliyev pr. </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">Hər gün 09:00 – 20:00</span>
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-medium">
                  Ad, Soyad
                  <input
                    required
                    name="name"
                    placeholder="Adınızı yazın"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Telefon
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+994 __ ___ __ __"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Maraqlandığınız model
                  <select
                    name="model"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    {products.map((p) => (
                      <option key={p.name}>{p.name}</option>
                    ))}
                    <option>Hələ qərar verməmişəm</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Qeyd
                  <textarea
                    name="note"
                    rows={4}
                    placeholder="Ünvan və ya sualınız"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-opacity hover:opacity-90"
                >
                  Sifarişi göndər
                </button>
                {sent && (
                  <p className="rounded-xl bg-accent px-4 py-3 text-sm font-medium text-accent-foreground">
                    Təşəkkür edirik! Müraciətiniz qeydə alındı, tezliklə sizinlə əlaqə saxlayacağıq.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary py-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 text-sm text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p className="font-semibold text-secondary-foreground">Aquamek – Hər ev üçün təmiz su</p>
          <p>© {new Date().getFullYear()} Aquamek. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
