export type NewsItem = {
  id: string;
  category: string;
  title: string;
  href: string;
  image: string;
  date: string; // ISO, e.g. "2026-06-20"
  readTime?: string;
  featured?: boolean;
};

export const NEWS_INTRO = {
  eyebrow: "Insights",
  title: "Stay Updated With",
  highlight: "Our Latest News & Insights",
  cta: { label: "View All", href: "/news" },
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "ibm-panel",
    category: "News Update",
    title: 'Hash Malik at a cloud partner panel discussion — "Succeeding with IBM"',
    href: "/news/ibm-cloud-panel",
    image: "/products/head.jpg",
    date: "2026-06-20",
    readTime: "2 min read",
    featured: true,
  },
  {
    id: "iot-summit",
    category: "IoT Summit",
    title: "SPS makes a push into IoT through Mars rover demo",
    href: "/news/iot-summit-mars-rover",
    image: "/products/Vertical.jpeg",
    date: "2026-06-12",
    readTime: "3 min read",
  },
  {
    id: "ai-security",
    category: "Expert Opinion",
    title: "How to Secure & Monitor Your AI Models",
    href: "/news/secure-ai-models",
    image: "/products/services.jpg",
    date: "2026-06-05",
    readTime: "5 min read",
  },
];