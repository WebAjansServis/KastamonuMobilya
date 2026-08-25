import { ServiceItem, ProjectItem, CustomerReview, ServiceArea, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: "Kastamobilya Marangoz ve Mobilya",
  shortName: "Kastamobilya",
  tagline: "Ölçünüze göre üretir, kaliteli işçilikle zamanında teslim ederiz.",
  phone: "0533 949 40 00",
  rawPhone: "05339494000",
  formattedPhone: "0533 949 40 00",
  address: "Boğazköy İstiklal, 30 Ağustos Cd. No:36, 34285 Arnavutköy/İstanbul",
  workingHours: "24 Saat Açık",
  primaryRegion: "Arnavutköy ve çevresi",
  googleRating: "5.0",
  googleReviewCount: "134+",
  yandexRating: "5.0",
  yandexReviewCount: "13+",
  masterName: "Sezgin Usta",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48052.123!2d28.7412!3d41.1842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa16fb6322bd5%3A0xd69bb89cf912534c!2zQm_En2F6a8O2eSDEsHN0aWtsYWwsIDMwIEHEn3VzdG9zIENkLiBObzozNiwgMzQyODUgQXJuYXZ1dGvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
};

export const WHATSAPP_MESSAGES = {
  general: "Merhaba, özel ölçü mobilya için bilgi almak istiyorum.",
  kitchen: "Mutfak dolabı yaptırmak istiyorum. Fiyat ve süreç hakkında bilgi alabilir miyim?",
  closet: "Gömme dolap yaptırmak istiyorum. Fotoğraf ve ölçü gönderebilirim.",
  repair: "Mobilya tamiri ve tadilatı için bilgi almak istiyorum.",
  assembly: "Demonte dolap kurulumu / montajı için yardıma ihtiyacım var."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "mutfak-dolabi",
    title: "Özel Ölçü Mutfak Dolabı",
    shortDesc: "Alanınıza ve kullanım alışkanlıklarınıza göre özel ölçü mutfak dolapları.",
    fullDesc: "Mutfağınızın her santimetresini değerlendiren modern, ergonomik ve uzun ömürlü özel ölçü mutfak dolapları üretiyoruz. Akrilik, membran veya lake kapak seçenekleriyle mutfağınızı yeniliyoruz.",
    iconName: "ChefHat",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    features: ["Milimetrik Ölçü ve Üretim", "Soft-Close Yavaş Kapanan Menteşeler", "Suya ve Neme Dayanıklı Gövde", "Ücretsiz Keşif ve Çizim Desteği"]
  },
  {
    id: "gomme-dolap",
    title: "Gömme Dolap",
    shortDesc: "Duvar ölçülerinize tam uyum sağlayan fonksiyonel ve şık gömme dolaplar.",
    fullDesc: "Tavandan tabana, duvardan duvara boşluk bırakmadan üretilen gömme dolaplar ile evinizde maksimum depolama alanı sağlıyoruz. Sürgü kapak veya akordiyon kapak çözümleri.",
    iconName: "Maximize2",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    features: ["Atıl Alanları Değerlendirme", "Özel İç Bölme & Çekmece Tasarımı", "Sessiz Raylı Kapak Sistemleri", "Aynalı ve Ahşap Kapak Seçenekleri"]
  },
  {
    id: "gardirop",
    title: "Gardırop",
    shortDesc: "Yatak odanıza uygun ölçü ve tasarımda özel üretim gardıroplar.",
    fullDesc: "Giysileriniz, ayakkabılarınız ve aksesuarlarınız için tam ihtiyacınıza göre bölümlendirilmiş iç mimariye sahip gardırop üretimi.",
    iconName: "Shirt",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    features: ["Işıklı Askılık Çözümleri", "Gizli Çekmece ve Takı Bölmeleri", "Kişiselleştirilebilir Raf Yapısı", "Dayanıklı MDF Lam Gövde"]
  },
  {
    id: "vestiyer-portmanto",
    title: "Vestiyer & Portmanto",
    shortDesc: "Giriş alanınızı düzenleyen şık ve kullanışlı portmanto çözümleri.",
    fullDesc: "Evinizin ilk izlenimi olan antre alanları için ayakkabılık, mont askılığı, boy aynası ve gizli depolama hazneleri içeren şık portmantolar.",
    iconName: "DoorOpen",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    features: ["Gömme ve Standart Tasarımlar", "Oturma Puf İçi Depolama", "Entegre LED Aydınlatma", "Boy Aynası Uyumlu"]
  },
  {
    id: "banyo-dolabi",
    title: "Banyo Dolabı",
    shortDesc: "Banyonuzun ölçülerine uygun dayanıklı ve estetik banyo dolapları.",
    fullDesc: "Nem ve su buharına tam dirençli malzemelerden özel üretilen çamaşır sepetli, aynalı ve lavabo altı banyo dolapları.",
    iconName: "Bath",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: ["Neme Dayanıklı Özel Malzeme", "Gizli Çamaşır Sepeti Modülü", "Tezgah Üstü & Gömme Lavabo Çözümleri", "Aynalı İlaç & Bakım Dolapları"]
  },
  {
    id: "ozel-olcu-mobilya",
    title: "Özel Ölçü Mobilya",
    shortDesc: "Standart ürünlerin yetmediği alanlar için tamamen size özel üretim.",
    fullDesc: "Mimari girintiler, kolon arkaları ve kavisli alanlar gibi standart mağaza mobilyalarının uymadığı her yer için sıfırdan marangozluk üretimi.",
    iconName: "Ruler",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: ["Tüm Girinti ve Çıkıntılara Uyum", "Sezgin Usta Güvencesiyle Çizim", "Zengin Renk ve Kartela Seçeneği", "Kişiye Özel İmalat"]
  },
  {
    id: "mobilya-tamiri",
    title: "Mobilya & Dolap Tamiri",
    shortDesc: "Eskiyen, bozulan veya yenilenmesi gereken mobilyalarınız için tamir ve tadilat.",
    fullDesc: "Kırık kapaklar, düşen raylar, sarkan menteşeler, yıpranmış kapaklar veya tezgah altı çürümeleri titizlikle onarıyor ve ilk günkü sağlamlığına kavuşturuyoruz.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: ["Menteşe & Ray Değişimi", "Mutfak Kapak Yenileme", "Tezgah Altı Çürüme Onarımı", "Söz Verilen Günde Teslim"]
  },
  {
    id: "dolap-montaji",
    title: "Dolap Montajı & Kurulum",
    shortDesc: "Ambalajlı veya ikinci el aldığınız demonte dolapların profesyonel kurulumu.",
    fullDesc: "IKEA, Koçtaş, Vivense vb. demonte mobilyaların veya taşınma esnasında sökülen dolaplarınızın teraziye alınarak sorunsuz ve sağlam montajı.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    features: ["Demontaj ve Yeniden Montaj", "Duvara Güvenli Sabitleme", "Lazer Terazi İle Hizalama", "Hızlı ve Temiz İşçilik"]
  }
];

export const ADDITIONAL_SERVICES = [
  "Çamaşır ve Kurutma Makinesi Dolabı",
  "Mutfak Dolabı Kapak Değişimi (Akrilik & Membran)",
  "Mutfak Tezgah Altı / Üstü Tadilat",
  "Merdiven Altı Değerlendirme Dolabı",
  "İş Yeri & Mağaza Banko / Mobilya Uygulamaları",
  "Özel Tasarım TV Ünitesi ve Kitaplık"
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Modern Akrilik Mutfak Dolabı Uygulaması",
    category: "mutfak",
    categoryLabel: "Mutfak Dolabı",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    description: "Arnavutköy villa projesinde kulpsuz, yavaş kapanır mekanizmalı, led aydınlatmalı özel ölçü mutfak dolabı imalatı.",
    location: "Arnavutköy Merkez"
  },
  {
    id: "p2",
    title: "Duvardan Duvara Aynalı Sürgü Gömme Dolap",
    category: "gomme-dolap",
    categoryLabel: "Gömme Dolap",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description: "Boğazköy'de atıl tavan boşluğunu sıfırlayan özel raylı sürgü kapaklı gömme gardırop.",
    location: "Boğazköy İstiklal"
  },
  {
    id: "p3",
    title: "Giriş Alanına Özel Boy Aynalı Portmanto",
    category: "vestiyer",
    categoryLabel: "Vestiyer & Portmanto",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Hadımköy konutlarında gizli ayakkabılıklı ve puf hazneli ahşap dokulu portmanto uygulaması.",
    location: "Hadımköy"
  },
  {
    id: "p4",
    title: "Çift Lavabolu Neme Dayanıklı Banyo Dolabı",
    category: "banyo",
    categoryLabel: "Banyo Dolabı",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    description: "Başakşehir dairesinde suya dayanıklı gövde ve banyo aynası kombinli banyo modülü.",
    location: "Başakşehir 4. Etap"
  },
  {
    id: "p5",
    title: "Merdiven Altı Özel Değerlendirme Dolabı",
    category: "ozel-mobilya",
    categoryLabel: "Özel Mobilya",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    description: "Kayabaşı müstakil evde merdiven altındaki eğimli alana özel çekmeceli dolap çözümü.",
    location: "Kayabaşı"
  },
  {
    id: "p6",
    title: "Çamaşır ve Kurutma Makinesi Üstü Kule Dolap",
    category: "ozel-mobilya",
    categoryLabel: "Özel Mobilya",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80",
    description: "Çamaşır ve kurutma makinesini estetik şekilde gizleyen deterjan hazneli dolap imalatı.",
    location: "Şamlar"
  },
  {
    id: "p7",
    title: "Mutfak Kapak Değişimi & Tezgah Altı Onarımı",
    category: "tamirat",
    categoryLabel: "Tamirat & Tadilat",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Eski mutfağın kırık kapakları sökülerek yüksek kaliteli akrilik kapaklarla sıfırlanması.",
    location: "Yeniköy"
  },
  {
    id: "p8",
    title: "Minimalist Yatak Odası Gardırobu",
    category: "gomme-dolap",
    categoryLabel: "Gardırop",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    description: "Doğal ceviz detaylı, led askılıklı ve fonksiyonel çekmeceli özel gardırop imalatı.",
    location: "Çatalca"
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: "r1",
    author: "Su Gun",
    platform: "Google",
    rating: 5,
    comment: "Özel üretim mobilya siparişlerimi yaptılar, ray dolap ve portmanyo özel ölçü ile yapıldı. Çok beğendik. Sezgin bey çizimleriyle yardımcı oldu. Fiyatları uygun üretimleri kaliteli, kendilerine teşekkür ederiz.",
    date: "Son günlerde",
    serviceType: "Ray Dolap & Portmanto",
    verified: true
  },
  {
    id: "r2",
    author: "Gokhan Gokhan",
    platform: "Google",
    rating: 5,
    comment: "Arnavutköy marangoz mobilyaya mutfak dolabı ve gardırop yaptı. Ellerine sağlık, uygun fiyat ve her bütçeye göre işleri var.",
    date: "Yakın zamanda",
    serviceType: "Mutfak Dolabı & Gardırop",
    verified: true
  },
  {
    id: "r3",
    author: "Muhammed Can Yaray",
    platform: "Google",
    rating: 5,
    comment: "Mutfak dolabı yaptı eline sağlık teşekkür, zamanında teslim etti.",
    date: "Geçen ay",
    serviceType: "Mutfak Dolabı",
    verified: true
  },
  {
    id: "r4",
    author: "Bedia Arslan",
    platform: "Google",
    rating: 5,
    comment: "Arnavutköy marangoz ve mobilya atölyesine mutfak dolabı ve gömme dolap işleri yaptırdım. Memnun kaldım. Zamanında teslim etti.",
    date: "3 ay önce",
    serviceType: "Mutfak & Gömme Dolap",
    verified: true
  },
  {
    id: "r5",
    author: "İsmail Kansız",
    platform: "Google",
    rating: 5,
    comment: "İşin ehli usta. Sözünün eri, dediği gün geldi. Dolaplarımı teslim etti. Tamirat işlerimi halletti.",
    date: "4 ay önce",
    serviceType: "Dolap Teslimat & Tamirat",
    verified: true
  },
  {
    id: "r6",
    author: "Memo",
    platform: "Google",
    rating: 5,
    comment: "Googledan buldum şansıma çok iyi geldi ustalar titiz kaliteli işçilik yapıyor.",
    date: "5 ay önce",
    serviceType: "Özel Ölçü Mobilya",
    verified: true
  },
  {
    id: "r7",
    author: "sametK",
    platform: "Google",
    rating: 5,
    comment: "İşçilikte bir numara.",
    date: "6 ay önce",
    serviceType: "Marangozluk Hizmeti",
    verified: true
  },
  {
    id: "r8",
    author: "Serkan Güven",
    platform: "Yandex",
    rating: 5,
    comment: "Güvenilir, memnun kaldım. Tavsiye ederim arkadaşlar. Uygun fiyat, kaliteli işçilik.",
    date: "2 ay önce",
    serviceType: "Özel İmalat Mobilya",
    verified: true
  }
];

export const ADVANTAGES = [
  {
    title: "Özel Ölçü Üretim",
    desc: "Alanınıza milimetrik tam uyum sağlayan ve atıl alan bırakmayan çözümler.",
    icon: "Ruler"
  },
  {
    title: "Usta İşçilik",
    desc: "Detaylara ve malzeme kalitesine önem veren deneyimli marangozluk ustalığı.",
    icon: "Award"
  },
  {
    title: "Zamanında Teslim",
    desc: "Söz verilen tarihe sadık kalınarak gününde montaj ve teslimat garantisi.",
    icon: "Clock"
  },
  {
    title: "Uygun Fiyat",
    desc: "Aracı olmadan atölyeden doğrudan satış ile yüksek kaliteyi bütçenize uygun sunuyoruz.",
    icon: "Banknote"
  },
  {
    title: "Baştan Sona Hizmet",
    desc: "Keşif, ölçü, çizim, imalat, nakliye, montaj ve tamirat süreçleri tek elde.",
    icon: "CheckCircle2"
  },
  {
    title: "Arnavutköy ve Çevresi",
    desc: "Arnavutköy merkezli hızlı keşif ekibimiz ile komşu tüm bölgelere kesintisiz hizmet.",
    icon: "MapPin"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Arnavutköy", desc: "Merkez atölyemiz ile tüm mahallelere anında keşif ve hızlı montaj.", distance: "Merkez Atölye", popularServices: ["Mutfak Dolabı", "Gömme Dolap", "Portmanto"] },
  { name: "Boğazköy", desc: "Boğazköy İstiklal lokasyonumuzda komşu sitelere özel ölçü marangozluk.", distance: "0 km (Atölye Yeri)", popularServices: ["Gardırop", "Mobilya Tamiri", "Montaj"] },
  { name: "Hadımköy", desc: "Hadımköy konutları ve sanayi projeleri için özel mobilya imali.", distance: "10 dk", popularServices: ["Özel Ölçü Mutfak", "Gömme Gardırop"] },
  { name: "Kayabaşı", desc: "Kayabaşı ve Kayaşehir toplu konutlarında ray dolap ve vestiyer çözümleri.", distance: "15 dk", popularServices: ["Vestiyer", "Banyo Dolabı"] },
  { name: "Başakşehir", desc: "Başakşehir konut projelerine mimari detaylı ahşap ve mobilya uygulaması.", distance: "18 dk", popularServices: ["Mutfak Kapak Yenileme", "Özel Mobilya"] },
  { name: "Şamlar", desc: "Müstakil ev ve villalar için merdiven altı ve özel ahşap marangozluk.", distance: "12 dk", popularServices: ["Merdiven Altı Dolap", "Gardırop"] },
  { name: "Yeniköy", desc: "Yeniköy sahil ve yerleşim alanlarında mobilya tadilatı ve yeni imalat.", distance: "15 dk", popularServices: ["Dolap Montajı", "Mutfak Tadilatı"] },
  { name: "Karaburun", desc: "Karaburun sahil konutlarına suya ve neme dayanıklı mobilya montajı.", distance: "20 dk", popularServices: ["Banyo Dolabı", "Mutfak Dolabı"] },
  { name: "Deliklikaya", desc: "Deliklikaya bölgesi ev ve iş yeri ahşap mobilya imalat hizmeti.", distance: "14 dk", popularServices: ["İş Yeri Mobilyası", "Gardırop"] },
  { name: "Çatalca", desc: "Çatalca villa ve bahçe evleri özel ölçü marangoz imalatı.", distance: "25 dk", popularServices: ["Özel Tasarım Mobilya", "Gömme Dolap"] }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "İletişime Geçin",
    desc: "İhtiyacınızı WhatsApp veya telefon üzerinden anlatan kısa bir mesaj atın veya bizi arayın."
  },
  {
    step: "02",
    title: "Ölçü & Keşif",
    desc: "Adresinize gelip alanınızı milimetrik değerlendirerek hassas ölçülerinizi alalım."
  },
  {
    step: "03",
    title: "Tasarım & Fiyat",
    desc: "Bütçenize ve kullanımınıza en uygun malzeme, kapak modeli ve şeffaf fiyatlandırmayı sunalım."
  },
  {
    step: "04",
    title: "Üretim & Montaj",
    desc: "Atölyemizde hazırlanan mobilyanızı belirtilen günde getirip temiz işçilikle monte edelim."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Özel ölçü mobilya yapıyor musunuz?",
    answer: "Evet! İşletmemizin ana uzmanlık alanı tamamen sizin duvar ölçülerinize, evinizin mimari yapısına ve ihtiyaçlarınıza göre özel ölçü mutfak dolabı, gömme dolap, gardırop ve vestiyer imalatı yapmaktır."
  },
  {
    question: "Mutfak dolabı fiyatları nasıl belirleniyor?",
    answer: "Mutfak dolabı fiyatları kullanılan dolap metresine (metretül), seçilen kapak türüne (Akrilik, Membran, Lake, MDF Lam), tezgah seçeneğine ve iç aksesuar donanımlarına göre şeffaf bir şekilde hesaplanır."
  },
  {
    question: "Ölçü almak için eve geliyor musunuz?",
    answer: "Evet, Arnavutköy ve çevresindeki tüm mahallelere usta keşif ekibimiz gelerek milimetrik ölçü alır. Ölçü alımı sırasında malzeme kataloglarımızı ve renk seçeneklerimizi de incelersiniz."
  },
  {
    question: "Gömme dolap yaptırmak istiyorum, nasıl ilerliyoruz?",
    answer: "Bizimle WhatsApp veya telefon üzerinden iletişime geçtiğinizde önce alanın yaklaşık boyutunu veya fotoğrafını paylaşabilirsiniz. Ardından adresinizde keşif yapıp iç bölme düzenini (askılık, çekmece, raf) birlikte tasarlıyoruz."
  },
  {
    question: "Demonte mobilya montajı yapıyor musunuz?",
    answer: "Evet! IKEA, Koçtaş veya internetten demonte (ambalajlı) olarak satın aldığınız ya da taşınırken sökülen tüm dolap, gardırop ve mobilyaların teraziye alınarak kurulumunu yapıyoruz."
  },
  {
    question: "Mutfak dolabı kapaklarını değiştiriyor musunuz?",
    answer: "Evet! Mutfak dolabınızın gövdesi sağlamsa sadece kapaklarını yeni nesil çizilmez akrilik veya mebran kapaklarla değiştirerek mutfağınızı çok daha ekonomik bir bütçeyle tamamen yeniliyoruz."
  },
  {
    question: "Mobilya tamiri yapıyor musunuz?",
    answer: "Evet. Sarkmış kapak menteşeleri, kırık çekmece rayları, tezgah altı çürümeleri, mobilya ayak tamiri ve söküm-takım işlerinizi titizlikle hallediyoruz."
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer: "Arnavutköy merkez, Boğazköy, Hadımköy, Kayabaşı, Başakşehir, Şamlar, Yeniköy, Karaburun, Deliklikaya, Çatalca ve yakın tüm çevre ilçelere aktif hizmet sunuyoruz."
  },
  {
    question: "Ne kadar sürede teslim ediyorsunuz?",
    answer: "İşin büyüklüğüne göre değişmekle birlikte standart özel ölçü dolap projelerimizi anlaşmaya varılan ve söz verilen gün içerisinde (genellikle 7-12 iş günü arası) atölyemizde hazırlayıp montajını tamamlıyoruz."
  },
  {
    question: "WhatsApp üzerinden fotoğraf gönderip fiyat alabilir miyim?",
    answer: "Kesinlikle! Yaptırmak istediğiniz alanın fotoğrafını, yaklaşık ölçülerini ve aklınızdaki fikri WhatsApp numaramıza (0533 949 40 00) gönderdiğinizde Sezgin Usta size hızlıca ön bilgilendirme ve tahmini teklif sunar."
  }
];
