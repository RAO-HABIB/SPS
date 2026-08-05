export type HeroBullet = string;
export const HERO_BG_VIDEO = "/videos/hero-bg.mp4";
export type WhatIfData = {
  eyebrow: string;
  title: string;
  highlight: string;
  bullets: HeroBullet[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type CardSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  video: string;
};

export const WHAT_IF: WhatIfData = {
  eyebrow: "What If",
  title: "Your Business",
  highlight: "Could Do More?",
  bullets: [
    "You could enhance your Identity Management.",
    "You could modernize your legacy enterprise information systems.",
    "You could have Security Operations Center 24x7.",
    "You could have your Cyber Security environment managed for you.",
    "You could have Compliance Artifacts for your Auditors at click of a button.",
  ],
  primaryCta: { label: "Request Consultation", href: "/contact" },
  secondaryCta: { label: "How can we help you today", href: "/services" },
};

export const CARD_SLIDES: CardSlide[] = [
  {
    id: "cybersecurity",
    eyebrow: "Cybersecurity",
    title: "Defend. Detect.",
    highlight: "Respond.",
    description:
      "End-to-end protection across networks, identities & data — powered by 24x7 SOC, GRC and Threat Management.",
    video: "/videos/cybersecurity.mp4",
  },
  {
    id: "ai",
    eyebrow: "Artificial Intelligence",
    title: "Smarter Decisions,",
    highlight: "Faster Outcomes.",
    description:
      "Harness AI, Data Science & Automation to unlock insights and accelerate business growth at scale.",
    video: "/videos/ai.mp4",
  },
  {
    id: "cloud",
    eyebrow: "Cloud Solutions",
    title: "Scale Without",
    highlight: "Limits.",
    description:
      "Cloud migration, DevOps & modernization services designed for performance, security and cost efficiency.",
    video: "/videos/cloud.mp4",
  },
];

export const AUTOPLAY_MS = 2000;