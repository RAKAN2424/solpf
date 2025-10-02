export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  thumb: string;
  heroImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
  paymentPlan: { label: string; value: string }[];
  prices: { unit: string; area: string; price: string }[];
  virtualTourUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'mazarine',
    title: 'Mazarine',
    subtitle: 'New Alamein • By City Edge Developments',
    price: 'From EGP 7,287,000',
    thumb: 'https://i.ibb.co/LDNDwg7B/Whisk-df74f5decd0f5df911843fe1b702788bdr.jpg',
    heroImage: 'https://i.ibb.co/LDNDwg7B/Whisk-df74f5decd0f5df911843fe1b702788bdr.jpg',
    description: 'Mazarine Apartments features a wide variety of contemporary residential, penthouses, and mixed-use units…',
    highlights: [
      'Developer: City Edge Developments.',
      'Unit Area: 140 m².',
      'Prime lagoon-front community inside New Alamein.',
    ],
    gallery: [
      "https://i.ibb.co/MTQF5zY/Whisk-52d6fb0f49b204aa3d34708873afcd75dr-1.jpg",
      "https://i.ibb.co/LzTc5146/Whisk-66cb3ade99daddb94064a6ada97f58fcdr.jpg",
      "https://i.ibb.co/9kPt8BGK/Whisk-354ed78ba8c78ec8233447644bc63d53dr.jpg",
      "https://i.ibb.co/nMVWd44K/Whisk-4382ffd80bffec7998a4a98260310130dr.jpg",
      "https://i.ibb.co/PZXMsfd8/Whisk-402fac5e05006f693714b0ea61cb74bfdr.jpg",
      "https://i.ibb.co/nq4RQyNy/Whisk-ca3341ce6e5749090e840e8922316a26dr.jpg"
    ],
    paymentPlan: [
        { label: 'Price', value: 'EGP 7,287,000' },
        { label: 'Down Payment (1.2%)', value: '~ 87,444 EGP' },
        { label: 'After 3 months (5%)', value: '~ 364,350 EGP' },
        { label: 'Monthly Installment', value: '~ 21,635 EGP' },
        { label: 'Second Year (5%)', value: '~ 364,350 EGP' },
        { label: 'Third Year (10%)', value: '~ 728,700 EGP' },
        { label: 'Fourth Year (4.5%)', value: '~ 327,915 EGP' },
    ],
    prices: [
      { unit: 'Apartment', area: '140 m²', price: 'EGP 7,287,000' }
    ],
  },
  {
    slug: 'latin-bahary',
    title: 'Latin District — Bahary',
    subtitle: 'New Alamein • By City Edge Developments',
    price: 'From EGP 9,187,000',
    thumb: 'https://i.ibb.co/N6RyK3DS/Whisk-d90fb112b52cd41b24140ec413560fc9dr.jpg',
    heroImage: 'https://i.ibb.co/N6RyK3DS/Whisk-d90fb112b52cd41b24140ec413560fc9dr.jpg',
    description: 'Mediterranean-style apartments minutes from the beach.',
    highlights: [
      'Developer: City Edge Developments.',
      'Unit Area: 120 m².',
      'Minutes from the beach.',
    ],
    gallery: [
        "https://i.ibb.co/PGZJCzKs/Whisk-ffdb7478778dedb88aa4f168d6734170dr.jpg",
        "https://i.ibb.co/qLypffZ3/Whisk-d8fb6dcbbae95cea44a4cccf9f8ac4c8dr.jpg",
        "https://i.ibb.co/23CZgbVW/Whisk-b2d08d06ed13b87abd74b2bfc19ada7cdr.jpg",
        "https://i.ibb.co/mCySCVrT/Whisk-02363896446cedf95fa4360b74e2124fdr.jpg",
        "https://i.ibb.co/G47h8Hrt/Whisk-3047a823fbaa48caa6148cdc4043f2bfdr.jpg",
        "https://i.ibb.co/vb0m6C9/Whisk-1ec9c3aea1b0ed1a79d48a28a022a025dr.jpg"
    ],
    virtualTourUrl: 'https://cityedgedevelopments.com/public/vt/NewAlamein360-LD05.html',
    paymentPlan: [
        { label: 'Price', value: 'EGP 9,187,000' },
        { label: 'Down Payment (1.2%)', value: '~ 110,244 EGP' },
        { label: 'After 3 months (5%)', value: '~ 459,350 EGP' },
        { label: 'Monthly Installment', value: '~ 27,276 EGP' },
        { label: 'Second Year (5%)', value: '~ 459,350 EGP' },
        { label: 'Third Year (10%)', value: '~ 918,700 EGP' },
        { label: 'Fourth Year (4.5%)', value: '~ 413,415 EGP' },
    ],
    prices: [
      { unit: 'Apartment', area: '120 m²', price: 'EGP 9,187,000' }
    ],
  },
  {
    slug: 'latin-qebly',
    title: 'Latin District — Qebly',
    subtitle: 'New Alamein • By SED & City Edge Developments',
    price: 'From EGP 7,303,000',
    thumb: 'https://i.ibb.co/PGZJCzKs/Whisk-ffdb7478778dedb88aa4f168d6734170dr.jpg',
    heroImage: 'https://i.ibb.co/PGZJCzKs/Whisk-ffdb7478778dedb88aa4f168d6734170dr.jpg',
    description: 'Courtyards & retail.',
    highlights: [
        'Developers: SED & City Edge.',
        '181 m² — 3 Bedrooms.',
        'Courtyards & retail.',
    ],
    gallery: [
        "https://i.ibb.co/N6RyK3DS/Whisk-d90fb112b52cd41b24140ec413560fc9dr.jpg",
        "https://i.ibb.co/G47h8Hrt/Whisk-3047a823fbaa48caa6148cdc4043f2bfdr.jpg",
        "https://i.ibb.co/vb0m6C9/Whisk-1ec9c3aea1b0ed1a79d48a28a022a025dr.jpg",
        "https://i.ibb.co/C3B9vxnR/Whisk-e49aa49d6ac76f2aea64ddf610b0f031dr.jpg",
        "https://i.ibb.co/pBsbgkvm/Whisk-02363896446cedf95fa4360b74e2124fdr.jpg",
        "https://i.ibb.co/67Ycypc0/Whisk-9f95505041fc328a8cd48861c36ba6d8dr.jpg"
    ],
    paymentPlan: [
        { label: 'Price', value: 'EGP 7,303,000' },
        { label: 'Down Payment (1.2%)', value: '~ 87,000 EGP' },
        { label: 'After 3 Months (5%)', value: '~ 365,000 EGP' },
        { label: 'Monthly Installment', value: '~ 25,000 EGP' },
        { label: 'Second Year (5%)', value: '~ 365,000 EGP' },
        { label: 'Third Year (10%)', value: '~ 730,000 EGP' },
        { label: 'Fourth Year (4.5%)', value: '~ 328,000 EGP' },
    ],
    prices: [
      { unit: 'Apartment — 3BD', area: '181 m²', price: 'EGP 7,303,000' }
    ],
  },
  {
    slug: 'north-edge',
    title: 'North Edge Towers',
    subtitle: 'New Alamein • By City Edge Developments',
    price: 'From EGP 35,760,000',
    thumb: 'https://i.ibb.co/N6FcvrLN/Whisk-3c63763f27a7338996a47d711a265ee3dr.jpg',
    heroImage: 'https://i.ibb.co/N6FcvrLN/Whisk-3c63763f27a7338996a47d711a265ee3dr.jpg',
    description: 'Seafront high-rise.',
    highlights: [
      'Developer: City Edge Developments.',
      '217 m² — 2 Bedrooms.',
      'Seafront high-rise.',
    ],
    gallery: [
        "https://i.ibb.co/MDrTd0gf/Whisk-fa72cbd49d4a278bdfc45cfdded59846dr-1.jpg",
        "https://i.ibb.co/0V93HwM7/Whisk-97675cd1bd1e06481684ebd7a7a08646dr.jpg",
        "https://i.ibb.co/Y4Dbkj5C/Whisk-503c2ef5be8ca66b8074ac8d995b5f75dr.jpg",
        "https://i.ibb.co/PvNYbfSF/Whisk-25f1816d8ab0971b7aa434a49f7712e9dr.jpg",
        "https://i.ibb.co/Kxm3PJvM/Whisk-23f2fd64b055c76bdd34f0b9f9be2e18dr.jpg",
        "https://i.ibb.co/N6FcvrLN/Whisk-3c63763f27a7338996a47d711a265ee3dr.jpg"
    ],
    paymentPlan: [
        { label: 'Price', value: 'EGP 35,760,000' },
        { label: 'Down Payment (1.2%)', value: '~ 429,120 EGP' },
        { label: 'After 3 months (5%)', value: '~ 1,788,000 EGP' },
        { label: 'Monthly Installment', value: '~ 106,171 EGP' },
        { label: 'Second Year (5%)', value: '~ 1,788,000 EGP' },
        { label: 'Third Year (10%)', value: '~ 3,576,000 EGP' },
        { label: 'Fourth Year (4.5%)', value: '~ 1,609,000 EGP' },
    ],
    prices: [
      { unit: 'Sky Apartment — 2BD', area: '217 m²', price: 'EGP 35,760,000' }
    ],
  },
];


export const translations = {
    en: {
      navProps: 'Properties',
      navStore: 'Services',
      navContact: 'Contact',
      navAbout: 'About',
      heroTitle: 'SIGHT REAL ESTATE <strong>DEVELOPMENT</strong>',
      heroTag: 'Sustainable solutions and strategic locations for office & commercial spaces.',
      ctaView: 'View Gallery',
      ctaWhatsapp: 'WhatsApp',
      galleryTitle: 'PROPERTY GALLERY',
      viewDetails: 'View Details',
      highlights: 'Highlights',
      gallery: 'Gallery',
      paymentPlan: 'Payment Plan',
      prices: 'Prices',
      unit: 'Unit',
      area: 'Area',
      price: 'Price',
      bookNow: 'Book Now',
      backToHome: 'Back to Home',
      virtualTour: '360° Virtual Tour',
      aboutTab: 'About SIGHT',
      locTab: 'Our Locations',
      credits: '© SIGHT Real Estate Development — Strong presence across Egypt; offices and commercial specialists.',
      requestCallback: 'Request a Call Back',
      formTitle: 'Leave your info & we will contact you',
      name: 'Name',
      namePh: 'Your name',
      phone: 'Phone',
      phonePh: '0100 000 0000',
      email: 'Email',
      emailPh: 'your@email.com',
      sendWhats: 'Send via WhatsApp',
      connectTitle: 'Connect With Us',
      cookieText: 'This website uses cookies to ensure you get the best experience on our website.',
      cookieBtn: 'Got it!',
      ourServices: 'Our Services',
      service1Title: 'Property Valuation',
      service1Desc: 'Accurate and up-to-date property valuations to help you make informed decisions.',
      service2Title: 'Investment Consulting',
      service2Desc: 'Expert advice on real estate investment opportunities to maximize your returns.',
      service3Title: 'Legal Assistance',
      service3Desc: 'Comprehensive legal support for all your real estate transactions, ensuring a smooth process.',
    },
    ar: {
      navProps: 'المشاريع',
      navStore: 'خدماتنا',
      navContact: 'تواصل معنا',
      navAbout: 'عن الشركة',
      heroTitle: 'سايت للتطوير <strong>العقاري</strong>',
      heroTag: 'حلول مستدامة ومواقع استراتيجية للمساحات المكتبية والتجارية.',
      ctaView: 'شاهد المشاريع',
      ctaWhatsapp: 'واتساب',
      galleryTitle: 'معرض المشاريع',
      viewDetails: 'عرض التفاصيل',
      highlights: 'أبرز المميزات',
      gallery: 'معرض الصور',
      paymentPlan: 'خطة السداد',
      prices: 'الأسعار',
      unit: 'الوحدة',
      area: 'المساحة',
      price: 'السعر',
      bookNow: 'احجز الآن',
      backToHome: 'العودة للرئيسية',
      virtualTour: 'جولة افتراضية 360°',
      aboutTab: 'عن سايت',
      locTab: 'مواقعنا',
      credits: '© سايت للتطوير العقاري — حضور قوي في جميع أنحاء مصر، متخصصون في المكاتب والمحلات التجارية.',
      requestCallback: 'اطلب إعاده الاتصال',
      formTitle: 'اترك معلوماتك وسنتصل بك',
      name: 'الاسم',
      namePh: 'اسمك',
      phone: 'رقم الهاتف',
      phonePh: '01000000000',
      email: 'البريد الإلكتروني',
      emailPh: 'your@email.com',
      sendWhats: 'أرسل عبر واتساب',
      connectTitle: 'تواصل معنا',
      cookieText: 'يستخدم هذا الموقع ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة.',
      cookieBtn: 'حسناً!',
      ourServices: 'خدماتنا',
      service1Title: 'تقييم العقارات',
      service1Desc: 'تقييمات دقيقة ومحدثة للعقارات لمساعدتك في اتخاذ قرارات مستنيرة.',
      service2Title: 'استشارات استثمارية',
      service2Desc: 'نصائح الخبراء حول فرص الاستثمار العقاري لتعظيم عوائدك.',
      service3Title: 'مساعدة قانونية',
      service3Desc: 'دعم قانوني شامل لجميع معاملاتك العقارية، مما يضمن عملية سلسة.',
    }
  };
  
const WHATSAPP_PHONE_NUMBER = "201099993903";

interface ContactDetails {
  name?: string;
  phone?: string;
  email?: string;
  projectTitle?: string;
}

export const generateWhatsappUrl = (details: ContactDetails): string => {
  let message = `Hello SIGHT Real Estate,\n`;

  if (details.name) {
    message += `\nMy name is ${details.name}.`;
  }
  if (details.phone) {
    message += `\nMy phone number is ${details.phone}.`;
  }
  if (details.email) {
    message += `\nMy email is ${details.email}.`;
  }

  if (details.projectTitle) {
    message += `\n\nI am interested in the "${details.projectTitle}" project.`;
  } else {
    message += `\n\nI would like to inquire about your properties.`;
  }

  message += `\n\nPlease contact me. Thank you.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message.trim())}`;
};
