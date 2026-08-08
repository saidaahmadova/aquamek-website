import filter1 from "@/assets/filter-1.jpg";
import filter2 from "@/assets/filter-2.jpg";
import filter3 from "@/assets/filter-3.jpg";
import filter4 from "@/assets/filter-4.jpg";
import filter5 from "@/assets/filter-5.jpg";
import filter6 from "@/assets/filter-6.jpg";
import heroWater from "@/assets/hero-water.jpg";

export type Product = {
  slug: string;
  name: string;
  img: string;
  gallery: string[];
  price: string;
  tag: string;
  desc: string;
  longDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "Digital Smart",
    name: "Elsea Digital Smart",
    img: filter1,
    gallery: [filter1],
    price: "",
    tag: "Ən çox seçilən",
    desc: "7 mərhələli əks osmos sistemi – premium, nəzarətli seçim.",
    longDesc:
      "Elsea suyunuzu 7 mərhələdə təmizləyir: mexaniki zərrəcikləri, xlor, ağır metallar və bakteriyaları tutur. Quraşdırma mətbəx şkafının altında aparılır və gündəlik istifadəyə heç bir maneə yaratmır.",
    features: ["7 mərhələli təmizləmə", "12 l/saat məhsuldarlıq", "Sıxılmış karbon kartric"],
    specs: [
      { label: "Mərhələ sayı", value: "7" },
      { label: "Məhsuldarlıq", value: "12 l/saat" },
      { label: "Çən həcmi", value: "10.6 litr" },
      { label: "Zəmanət", value: "3 il" },
      { label: "Quraşdırma", value: "Mətbəx şkafı altı" },
    ],
  },
  {
    slug: "300 GPD",
    name: "Elsea 300 GPD",
    img: filter2,
    gallery: [filter2],
    price: "",
    tag: "Çənsiz",
    desc: "Kompakt çənsiz dizayn – az yer tutur, birbaşa axınla təmiz su verir.",
    longDesc:
      "Elsea 300 GPD çənsiz texnologiya ilə işləyir: su anında təmizlənir və birbaşa krana ötürülür. Bu, suyun həmişə təzə olmasını təmin edir və şkafda 2 dəfə az yer tutur.",
    features: ["Çənsiz kompakt korpus", "2 qat güclü membran", "Səssiz nasos"],
    specs: [
      { label: "Mərhələ sayı", value: "6" },
      { label: "Məhsuldarlıq", value: "300 GPD (~50 l/saat)" },
      { label: "Çən", value: "Yoxdur (birbaşa axın)" },
      { label: "Zəmanət", value: "3 il" },
      { label: "Səs səviyyəsi", value: "< 50 dB" },
    ],
  },
  {
    slug: "Luxury",
    name: "Elsea Luxury",
    img: filter3,
    gallery: [filter3],
    price: "",
    tag: "Premium",
    desc: "7 mərhələli sistem – mineral kartric suyun dadını və faydasını bərpa edir.",
    longDesc:
      "Elsea Luxury 7 əks osmos təmizləməsindən sonra suya kalsium və maqnezium qaytarır, pH balansını bərpa edir. Nəticədə həm təhlükəsiz, həm də dadlı içməli su alırsınız. Paslanmayan poladdan antibakterial çən uzunömürlüdür.",
    features: ["Mineral + alkali kartric", "Paslanmayan çən", "3 il zəmanət"],
    specs: [
      { label: "Mərhələ sayı", value: "7" },
      { label: "Məhsuldarlıq", value: "15 l/saat" },
      { label: "Çən həcmi", value: "10.6 litr (paslanmayan polad)" },
      { label: "pH", value: "7.5 – 8.5 (alkali)" },
      { label: "Zəmanət", value: "3 il" },
    ],
  },
  {
    slug: "Gold Compact",
    name: "Sustera Gold Compact",
    img: filter4,
    gallery: [filter4],
    price: "",
    tag: "Kompakt",
    desc: "Yeddili mexaniki+karbon filtr – kran suyunun dadını və şəffaflığını bərpa edir.",
    longDesc:
      "Sustera Gold Compact büdcəyə uyğun başlanğıc həllidir. Mexaniki filtr qum, pas və zərrəcikləri, karbon filtr isə xlor və qoxunu tutur. Kartriclər 15 saniyəyə dəyişdirilir, xüsusi alət tələb olunmur. RO membran texnologiyası",
    features: ["Yeddili mərhələli təmizləmə", "Asan kartric dəyişmə", "Mətbəx üçün ideal"],
    specs: [
      { label: "Mərhələ sayı", value: "7" },
      { label: "Məhsuldarlıq", value: "15 l/saat" },
      { label: "Kartric ömrü", value: "6-8 ay" },
      { label: "Zəmanət", value: "3 il" },
      { label: "Quraşdırma", value: "Kran altı" },
    ],
  },
  {
    slug: "Gold Digital",
    name: "Sustera Gold Digital",
    img: filter5,
    gallery: [filter5],
    price: "",
    tag: "Digital",
    desc: "Elektrikli çənli su təmizləyici – kompakt ölçüdə praktik həll.",
    longDesc:
      "Sustera Gold Digital RO membran texnologiyası ilə suda qalan bakteriyaları 99.9% zərərsizləşdirir.",
    features: ["10.6 l güclü çən", "Enerjiyə qənaətli rejim"],
    specs: [
      { label: "Mərhələ sayı", value: "7" },
      { label: "Çən həcmi", value: "10.6 litr" },
      { label: "Güc", value: "35 Vt" },
      { label: "Quraşdırma", value: "Moyka altı" },
      { label: "Zəmanət", value: "3 il" },
    ],
  },
  {
    slug: "Gold Slim",
    name: "Sustera Gold Slim",
    img: filter6,
    gallery: [filter6],
    price: "",
    tag: "İncə",
    desc: "Bütün evi təmiz su ilə təmin edən güclü mərkəzi filtrasiya sistemi.",
    longDesc:
      "Sustera Gold Slim sistemi suyu tər təmiz içməli edir. Kirəc və pasın qarşısını alır, məişət texnikasının ömrünü uzadır.",
    features: ["6 mərhələli təmizləmə", "Gündə 200 l tutum", "İçməli su üçün"],
    specs: [
      { label: "Mərhələ sayı", value: "6" },
      { label: "Gündəlik tutum", value: "200 litr" },
      { label: "Korpus", value: "Yüksək təzyiqli kompozit" },
      { label: "Zəmanət", value: "3 il" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
