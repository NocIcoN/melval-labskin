import type {
  NavItem,
  Treatment,
  Doctor,
  Testimonial,
  Product,
  Article,
  Branch,
  Promo,
  FAQ,
  StatItem,
  GalleryItem,
} from "@/types";

// ─── Navigation ─────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Treatment", href: "/treatments" },
  { label: "Produk", href: "/products" },
  { label: "Dokter", href: "/doctors" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "Artikel", href: "/articles" },
  { label: "Promo", href: "/promo" },
  { label: "Kontak", href: "/contact" },
];

// ─── Stats ──────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 100, suffix: "K+", label: "Happy Customers" },
  { value: 3, suffix: "+", label: "Klinik Aktif" },
  { value: 4.9, suffix: "/5", label: "Rating Ulasan" },
  { value: 98, suffix: "%", label: "Rekomendasikan Melval" },
];

// ─── Treatments ─────────────────────────────────────────────
export const TREATMENTS: Treatment[] = [
  {
    id: "t-001",
    slug: "infus-whitening-snow-white",
    name: "Infus Whitening Snow White",
    tagline: "Cerah merata untuk kulit muda",
    description:
      "Dirancang khusus untuk usia 15–25 tahun. Formula ringan dengan kandungan Glutathione dan Vitamin C untuk mencerahkan kulit secara menyeluruh.",
    category: "whitening",
    image: "",
    duration: "60 menit",
    targetAge: "15–25 tahun",
    benefits: [
      "Menaikan tone kulit seluruh tubuh",
      "Meratakan warna kulit",
      "Membantu penyembuhan jerawat",
      "Immune booster",
      "Membantu penyembuhan luka",
    ],
    ingredients: ["Glutathione", "Vitamin C", "Vitamin E"],
    packages: [{ name: "Single Session", price: 500000 }],
    isBestSeller: true,
    isFeatured: true,
    order: 1,
  },
  {
    id: "t-002",
    slug: "infus-whitening-double-cell",
    name: "Infus Whitening Double Cell",
    tagline: "Lebih cerah, lebih cepat",
    description:
      "Varian untuk usia 15–20 tahun dengan dosis yang disesuaikan usia muda namun memberikan hasil optimal.",
    category: "whitening",
    image: "",
    duration: "60 menit",
    targetAge: "15–20 tahun",
    benefits: [
      "Menaikan tone kulit seluruh tubuh",
      "Membantu penyembuhan jerawat",
      "Immune booster",
    ],
    ingredients: ["Glutathione", "Stem Cell", "Vitamin C"],
    packages: [{ name: "Single Session", price: 750000 }],
    isFeatured: true,
    order: 2,
  },
  {
    id: "t-003",
    slug: "infus-whitening-chromosome-cell",
    name: "Infus Whitening Chromosome Cell",
    tagline: "Formula 7x lebih efektif",
    description:
      "Untuk usia 25+ dengan formula kompleks yang bekerja 7x lebih cepat dalam memutihkan dan meremajakan kulit.",
    category: "whitening",
    image: "",
    duration: "90 menit",
    targetAge: "25 tahun ke atas",
    benefits: [
      "Memutihkan kulit secara signifikan",
      "Meratakan warna kulit",
      "Melembabkan kulit",
      "Mencegah penuaan dini",
      "Anti aging",
      "Membantu penyembuhan flek",
      "Immune booster",
      "Mengandung Stem Cell",
    ],
    ingredients: ["Glutathione", "Stem Cell", "Collagen", "Vitamin C & E"],
    packages: [
      { name: "Paket 1", price: 1000000 },
      { name: "Paket 2", price: 1250000 },
      { name: "Paket 3", price: 1500000 },
    ],
    isBestSeller: true,
    isFeatured: true,
    order: 3,
  },
  {
    id: "t-004",
    slug: "infus-whitening-sirivana",
    name: "Infus Whitening Princess Sirivana",
    tagline: "Perawatan premium untuk usia 30+",
    description:
      "Diformulasikan untuk usia 30 tahun ke atas dengan kandungan vitamin 7x lebih kompleks. Mencerahkan 3x lebih cepat dan membantu menunda proses penuaan.",
    category: "whitening",
    image: "",
    duration: "120 menit",
    targetAge: "30 tahun ke atas",
    benefits: [
      "Memutihkan kulit",
      "Meratakan warna kulit",
      "Melembabkan kulit",
      "Menunda Menopause",
      "Mencegah penuaan dini",
    ],
    ingredients: ["Glutathione Premium", "Stem Cell", "Collagen", "Vitamin C & E", "NCTF"],
    packages: [{ name: "Paket Sirivana", price: 1750000 }],
    isFeatured: true,
    order: 4,
  },
  {
    id: "t-005",
    slug: "chromosome-vvip",
    name: "Chromosome VVIP",
    tagline: "Perawatan tertinggi untuk 40+",
    description:
      "Perawatan premium untuk usia 40 tahun ke atas dengan dosis dan vitamin berkali lipat lebih tinggi.",
    category: "whitening",
    image: "",
    duration: "150 menit",
    targetAge: "40 tahun ke atas",
    benefits: [
      "Memutihkan kulit",
      "Meratakan warna kulit",
      "Anti aging ekstrem",
      "Meregenerasi sel kulit",
      "Memperlambat menopause",
      "Stem Cell aktif",
    ],
    packages: [
      { name: "Premium", price: 3000000 },
      { name: "Diamond", price: 3750000 },
      { name: "Platinum", price: 4500000 },
    ],
    order: 5,
  },
  {
    id: "t-006",
    slug: "fat-freezing",
    name: "Fat Freezing Cryolipolysis",
    tagline: "Langsing tanpa operasi",
    description:
      "Teknologi terkini untuk membekukan dan menghilangkan sel lemak secara permanen tanpa prosedur bedah.",
    category: "slimming",
    image: "",
    duration: "60 menit per area",
    benefits: [
      "Mengurangi lemak membandel",
      "Non-invasif, tanpa operasi",
      "Hasil permanen",
      "Tanpa downtime",
    ],
    packages: [{ name: "Per Sesi", price: 1000000 }],
    isBestSeller: true,
    isFeatured: true,
    order: 6,
  },
  {
    id: "t-007",
    slug: "face-lipolysis",
    name: "Face Lipolysis",
    tagline: "Wajah tirus tanpa operasi",
    description:
      "Perawatan untuk membentuk kontur wajah dan mengurangi lemak wajah secara efektif.",
    category: "facial",
    image: "",
    duration: "45 menit",
    benefits: ["Wajah lebih tirus", "Kontur tegas", "Tanpa efek samping"],
    packages: [
      { name: "Regular", price: 1900000 },
      { name: "Platinum", price: 2500000 },
    ],
    order: 7,
  },
  {
    id: "t-008",
    slug: "stem-cell-miss-v",
    name: "Stem Cell Miss V",
    tagline: "Perawatan intim premium",
    description:
      "Perawatan khusus area intim wanita dengan teknologi Stem Cell untuk regenerasi dan peremajaan.",
    category: "body",
    image: "",
    duration: "60 menit",
    benefits: ["Peremajaan area intim", "Regenerasi sel", "Meningkatkan kepercayaan diri"],
    packages: [{ name: "Single Session", price: 2500000 }],
    order: 8,
  },
];

// ─── Doctors ────────────────────────────────────────────────
export const DOCTORS: Doctor[] = [
  {
    id: "d-001",
    name: "dr. Sarah Amelia",
    title: "dr.",
    specialty: "Aesthetic & Anti-Aging Specialist",
    photo: "",
    bio: "Dokter spesialis estetika dengan pengalaman lebih dari 8 tahun dalam bidang perawatan kulit dan anti-aging. Berpengalaman menangani lebih dari 5.000 pasien.",
    education: [
      "S1 Kedokteran Umum – Universitas Indonesia",
      "Fellowship Aesthetic Medicine – Bangkok, Thailand",
    ],
    certifications: [
      "Certified Aesthetic Practitioner",
      "Botox & Filler Certified",
      "Laser Therapy Certified",
    ],
    branch: "jakarta",
  },
  {
    id: "d-002",
    name: "dr. Anisa Putri",
    title: "dr.",
    specialty: "Skin Whitening & Dermatology",
    photo: "",
    bio: "Spesialis whitening dan dermatologi dengan keahlian khusus dalam infus whitening therapy. Telah membantu ribuan pelanggan mendapatkan kulit cerah yang sehat.",
    education: [
      "S1 Kedokteran – Universitas Airlangga",
      "Spesialis Dermatologi – RSUD Dr. Soetomo Surabaya",
    ],
    certifications: [
      "Certified Dermatologist",
      "IV Therapy Specialist",
    ],
    branch: "malang",
  },
  {
    id: "d-003",
    name: "dr. Rizky Fahmi",
    title: "dr.",
    specialty: "Body Contouring & Slimming",
    photo: "",
    bio: "Ahli body contouring dan slimming treatment dengan teknologi terkini. Pengalaman 6 tahun dalam menangani program langsing medis.",
    education: [
      "S1 Kedokteran – Universitas Brawijaya",
      "Fellowship Body Contouring – Seoul, Korea",
    ],
    certifications: [
      "Certified Cryolipolysis Practitioner",
      "Body Sculpting Specialist",
    ],
    branch: "surabaya",
  },
];

// ─── Testimonials ───────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tm-001",
    name: "Revanda Putri",
    treatment: "Infus Whitening Snow White",
    rating: 5,
    review:
      "Setelah 3 sesi infus whitening Snow White, kulit saya jauh lebih cerah dan merata! Dokternya sangat profesional dan pelayanannya nyaman banget. Sudah rekomendasiin ke semua teman.",
    beforeImage: "",
    afterImage: "",
    branch: "malang",
    date: "2024-05-12",
  },
  {
    id: "tm-002",
    name: "Lailatul Hasanah",
    treatment: "Infus Whitening Chromosome Cell",
    rating: 5,
    review:
      "Baru 2 kali infus sudah keliatan hasilnya! Kulit lebih glowing dan fleknya berkurang drastis. Tempatnya bersih dan nyaman, stafnya ramah.",
    branch: "jakarta",
    date: "2024-06-03",
  },
  {
    id: "tm-003",
    name: "Maya Sari",
    treatment: "Fat Freezing Cryolipolysis",
    rating: 5,
    review:
      "Udah 3 bulan setelah fat freezing, lemak di perut dan paha berkurang signifikan! Puas banget sama hasilnya. Dokter dan timnya sangat helpful.",
    branch: "surabaya",
    date: "2024-04-20",
  },
  {
    id: "tm-004",
    name: "Dewi Rahayu",
    treatment: "Infus Whitening Princess Sirivana",
    rating: 5,
    review:
      "Sebagai ibu berusia 35 tahun, saya sangat puas dengan Sirivana Package. Kulit terasa lebih kencang dan cerah. Efek penuaan terasa berkurang. Worth it banget!",
    branch: "jakarta",
    date: "2024-05-28",
  },
  {
    id: "tm-005",
    name: "Fitri Ayu",
    treatment: "Face Lipolysis Platinum",
    rating: 5,
    review:
      "Wajah saya terlihat jauh lebih tirus dan kontur lebih tegas setelah 2 sesi. Hasilnya natural, tidak ada efek samping. Sangat merekomendasikan!",
    branch: "malang",
    date: "2024-06-10",
  },
  {
    id: "tm-006",
    name: "Rini Wulandari",
    treatment: "Chromosome VVIP Diamond",
    rating: 5,
    review:
      "Investasi terbaik untuk kulit saya! Di usia 42 tahun, hasilnya luar biasa. Kulit terlihat 10 tahun lebih muda. Pelayanan premium yang benar-benar worth it.",
    branch: "jakarta",
    date: "2024-06-15",
  },
];

// ─── Products ───────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: "p-001",
    slug: "brightening-glow-serum",
    name: "Brightening Glow Serum",
    tagline: "Cerah seketika, glowing sepanjang hari",
    description:
      "Serum pencerah kulit dengan kandungan Glutathione, Niacinamide, dan Vitamin C untuk hasil yang optimal.",
    category: "serum",
    image: "",
    price: 285000,
    volume: "30ml",
    benefits: ["Mencerahkan kulit", "Meratakan tone", "Anti-oksidan"],
    skinType: ["Normal", "Kombinasi", "Berminyak"],
    isBestSeller: true,
  },
  {
    id: "p-002",
    slug: "brightening-facial-wash",
    name: "Brightening Facial Wash",
    tagline: "Bersih sempurna, kulit lebih cerah",
    description:
      "Sabun cuci muka dengan formula gentle yang membersihkan sekaligus mencerahkan kulit tanpa efek kering.",
    category: "cleanser",
    image: "",
    price: 125000,
    volume: "100ml",
    benefits: ["Membersihkan mendalam", "Mencerahkan", "Tidak menyebabkan kering"],
    skinType: ["Semua Jenis Kulit"],
    isNew: true,
  },
  {
    id: "p-003",
    slug: "brightening-toner",
    name: "Brightening Toner",
    tagline: "Hidrasi optimal, siap untuk serum",
    description:
      "Toner pencerah dengan kandungan AHA ringan dan Hyaluronic Acid untuk kulit terhidrasi dan siap menerima perawatan.",
    category: "toner",
    image: "",
    price: 175000,
    volume: "150ml",
    benefits: ["Hidrasi mendalam", "Mengecilkan pori", "Mencerahkan"],
    skinType: ["Normal", "Kering", "Kombinasi"],
    isBestSeller: true,
  },
  {
    id: "p-004",
    slug: "brightening-day-cream",
    name: "Brightening Day Cream SPF 30",
    tagline: "Cerah terlindungi sepanjang hari",
    description:
      "Krim siang dengan SPF 30 yang mencerahkan sekaligus melindungi kulit dari paparan sinar UV.",
    category: "moisturizer",
    image: "",
    price: 210000,
    volume: "30g",
    benefits: ["SPF 30 protection", "Mencerahkan", "Melembabkan"],
    skinType: ["Semua Jenis Kulit"],
  },
  {
    id: "p-005",
    slug: "sunscreen-spf50",
    name: "Melval Sunscreen SPF 50+ PA++++",
    tagline: "Proteksi maksimal kulit Indonesia",
    description:
      "Sunscreen dengan perlindungan tinggi yang ringan di kulit, tidak meninggalkan white cast, cocok untuk kulit Asia.",
    category: "sunscreen",
    image: "",
    price: 165000,
    volume: "40ml",
    benefits: ["SPF 50+ PA++++", "No white cast", "Ringan di kulit", "Water resistant"],
    skinType: ["Semua Jenis Kulit"],
    isBestSeller: true,
    isNew: true,
  },
];

// ─── Articles ───────────────────────────────────────────────
export const ARTICLES: Article[] = [
  {
    id: "a-001",
    slug: "manfaat-infus-whitening-untuk-kulit",
    title: "5 Manfaat Infus Whitening yang Wajib Kamu Tahu",
    excerpt:
      "Infus whitening bukan sekadar tren kecantikan — ini adalah prosedur medis yang memberikan manfaat nyata untuk kesehatan kulit.",
    coverImage: "",
    category: "Beauty Hack",
    author: "dr. Sarah Amelia",
    publishedAt: "2024-06-10",
    readingTime: 5,
    tags: ["infus whitening", "kecantikan", "kesehatan kulit"],
  },
  {
    id: "a-002",
    slug: "cara-merawat-kulit-setelah-infus-whitening",
    title: "Cara Merawat Kulit Setelah Infus Whitening agar Hasilnya Maksimal",
    excerpt:
      "Setelah melakukan infus whitening, perawatan yang tepat akan menentukan seberapa lama dan maksimal hasilnya.",
    coverImage: "",
    category: "Skincare Tips",
    author: "dr. Anisa Putri",
    publishedAt: "2024-06-05",
    readingTime: 4,
    tags: ["after care", "skincare", "tips"],
  },
  {
    id: "a-003",
    slug: "fat-freezing-vs-diet",
    title: "Fat Freezing vs Diet: Mana yang Lebih Efektif untuk Tubuh Ideal?",
    excerpt:
      "Perbandingan lengkap antara prosedur fat freezing dan program diet konvensional dalam mencapai tubuh ideal.",
    coverImage: "",
    category: "Body Treatment",
    author: "dr. Rizky Fahmi",
    publishedAt: "2024-05-28",
    readingTime: 6,
    tags: ["fat freezing", "slimming", "tubuh ideal"],
  },
  {
    id: "a-004",
    slug: "kenali-kandungan-infus-whitening",
    title: "Kenali 4 Kandungan Utama Infus Whitening dan Fungsinya",
    excerpt:
      "Glutathione, Stem Cell, Collagen, dan Vitamin C&E — inilah bahan-bahan yang bekerja di balik hasil cerah kulit kamu.",
    coverImage: "",
    category: "Beauty Science",
    author: "dr. Sarah Amelia",
    publishedAt: "2024-05-20",
    readingTime: 7,
    tags: ["glutathione", "stem cell", "collagen", "vitamin c"],
  },
];

// ─── Branches ───────────────────────────────────────────────
export const BRANCHES: Branch[] = [
  {
    id: "jakarta",
    name: "Melval Labskin Jakarta",
    address: "Jl. Gajah Mada No.174, Keagungan, Kec. Taman Sari",
    city: "Jakarta Barat",
    phone: "+62 821 4219 6415",
    whatsapp: "6282142196415",
    maps: "https://maps.google.com/?q=Melval+Labskin+Jakarta",
    image: "",
    operatingHours: [
      { days: "Senin – Jumat", hours: "09:00 – 20:00" },
      { days: "Sabtu – Minggu", hours: "09:00 – 18:00" },
    ],
  },
  {
    id: "malang",
    name: "Melval Labskin Malang",
    address: "Jl. Guntur No.29, Oro-Oro Dowo",
    city: "Kota Malang",
    phone: "+62 821 4219 6415",
    whatsapp: "6282142196415",
    maps: "https://maps.google.com/?q=Melval+Labskin+Malang",
    image: "",
    operatingHours: [
      { days: "Senin – Jumat", hours: "09:00 – 20:00" },
      { days: "Sabtu – Minggu", hours: "09:00 – 18:00" },
    ],
  },
  {
    id: "surabaya",
    name: "Melval Labskin Surabaya",
    address: "Jl. Raya Darmo Permai II No.3A, Sukomanunggal",
    city: "Surabaya",
    phone: "+62 821 4219 6415",
    whatsapp: "6282142196415",
    maps: "https://maps.google.com/?q=Melval+Labskin+Surabaya",
    image: "",
    operatingHours: [
      { days: "Senin – Jumat", hours: "09:00 – 20:00" },
      { days: "Sabtu – Minggu", hours: "09:00 – 18:00" },
    ],
  },
  {
    id: "bali",
    name: "Melval Labskin Bali",
    address: "COMING SOON",
    city: "Bali",
    phone: "+62 821 4219 6415",
    whatsapp: "6282142196415",
    maps: "https://maps.google.com/?q=Melval+Labskin+Bali",
    image: "",
    operatingHours: [
      { days: "Senin – Jumat", hours: "09:00 – 20:00" },
      { days: "Sabtu – Minggu", hours: "09:00 – 18:00" },
    ],
  }
];

// ─── Promos ─────────────────────────────────────────────────
export const PROMOS: Promo[] = [
  {
    id: "pr-001",
    title: "Flash Sale Infus Whitening",
    subtitle: "Snow White Package",
    description: "Dapatkan infus whitening Snow White dengan harga spesial terbatas!",
    image: "",
    badge: "FLASH SALE",
    originalPrice: 500000,
    discountedPrice: 350000,
    discountPercent: 30,
    expiresAt: "2024-07-31T23:59:59",
    ctaLabel: "Ambil Promo",
    ctaHref: "/booking",
    isFlashSale: true,
    treatment: "Infus Whitening Snow White",
  },
  {
    id: "pr-002",
    title: "Beli 5 Gratis 2",
    subtitle: "Chromosome Cell Package",
    description: "Beli paket Chromosome Cell 5 sesi, gratis 2 sesi bonus!",
    image: "",
    badge: "BOMBASTIS",
    ctaLabel: "Konsultasi Sekarang",
    ctaHref: "/booking",
    treatment: "Infus Whitening Chromosome Cell",
  },
  {
    id: "pr-003",
    title: "Langsing 12 Minggu",
    subtitle: "Promo Kilat",
    description: "Program langsing 12 minggu dengan bonus 4x Fat Freezing gratis!",
    image: "",
    badge: "FREE 4x FAT FREEZING",
    originalPrice: 25000000,
    discountedPrice: 17500000,
    discountPercent: 30,
    ctaLabel: "Daftar Sekarang",
    ctaHref: "/booking",
    treatment: "Program Langsing 12 Minggu",
  },
];

// ─── FAQs ───────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    id: "faq-001",
    question: "Apakah infus whitening aman?",
    answer:
      "Ya, infus whitening di Melval Labskin sangat aman karena dilakukan oleh tenaga medis profesional dan bersertifikat. Kandungan yang digunakan sudah teruji secara klinis dan tidak memiliki efek samping berbahaya jika dilakukan sesuai prosedur.",
    category: "Keamanan",
  },
  {
    id: "faq-002",
    question: "Berapa lama efek infus whitening bertahan?",
    answer:
      "Efek infus whitening umumnya bertahan 3–6 bulan, tergantung pada jenis treatment, jumlah sesi, dan perawatan mandiri yang dilakukan. Penggunaan skincare yang tepat dan perlindungan matahari dapat memperpanjang efeknya.",
    category: "Treatment",
  },
  {
    id: "faq-003",
    question: "Kapan saya bisa melihat hasilnya?",
    answer:
      "Banyak pelanggan mulai merasakan perubahan setelah 1–2 sesi pertama. Hasil yang optimal biasanya terlihat setelah 3–5 sesi tergantung kondisi kulit masing-masing individu.",
    category: "Hasil",
  },
  {
    id: "faq-004",
    question: "Apakah ada usia minimum untuk infus whitening?",
    answer:
      "Usia minimum untuk infus whitening di Melval Labskin adalah 15 tahun. Kami memiliki paket khusus yang diformulasikan sesuai kelompok usia untuk memastikan keamanan dan efektivitas yang optimal.",
    category: "Treatment",
  },
  {
    id: "faq-005",
    question: "Apakah saya bisa konsultasi terlebih dahulu?",
    answer:
      "Tentu saja! Kami menyediakan konsultasi gratis dengan dokter kami sebelum memulai treatment. Anda bisa menghubungi kami via WhatsApp atau mengisi form booking untuk menjadwalkan konsultasi.",
    category: "Konsultasi",
  },
  {
    id: "faq-006",
    question: "Berapa jarak antar sesi infus whitening?",
    answer:
      "Jarak yang direkomendasikan antar sesi adalah 1–2 minggu. Ini memberikan waktu yang cukup bagi tubuh untuk memproses dan memaksimalkan manfaat dari setiap sesi.",
    category: "Treatment",
  },
  {
    id: "faq-007",
    question: "Apakah fat freezing menyakitkan?",
    answer:
      "Prosedur fat freezing umumnya tidak menyakitkan. Anda mungkin merasakan sensasi dingin dan sedikit tidak nyaman di awal, namun area tersebut akan mati rasa setelah beberapa menit. Prosedur ini non-invasif dan tidak memerlukan pemulihan.",
    category: "Treatment",
  },
];

// ─── WhatsApp ───────────────────────────────────────────────
export const WHATSAPP_NUMBER = "6282142196415";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo Melval Labskin, saya ingin konsultasi gratis mengenai treatment.";

// ─── Social Media ───────────────────────────────────────────
export const SOCIAL_MEDIA = {
  instagram: "https://instagram.com/melvallabskin",
  tiktok: "https://tiktok.com/@melvallabskin",
  facebook: "https://facebook.com/melvallabskin",
};

// ─── SEO Defaults ───────────────────────────────────────────
export const SEO_DEFAULTS = {
  siteName: "Melval Labskin",
  titleTemplate: "%s | Melval Labskin",
  defaultTitle: "Melval Labskin | Spesialis Infuse Whitening Indonesia",
  defaultDescription:
    "Melval Labskin adalah klinik kecantikan spesialis Infuse Whitening & Slimming Treatment dengan tenaga medis profesional. Konsultasi gratis, hasil terjamin.",
  siteUrl: "https://www.melvallabskin.org",
  ogImage: "",
};

// ─── Gallery Items ─────────────────────────────────────────
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-001",
    title: "Before & After Infus Whitening",
    description: "Transformasi kulit pelanggan setelah 3 sesi infus whitening.",
    src: "",
    alt: "Before and after infus whitening",
    category: "Infus Whitening",
  },
  {
    id: "g-002",
    title: "Fat Freezing Results",
    description: "Hasil nyata pengurangan lemak setelah 2 sesi fat freezing.",
    src: "",
    alt: "Fat freezing results",
    category: "Fat Freezing",
  },
];