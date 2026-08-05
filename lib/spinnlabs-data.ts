// lib/spinnlabs-data.ts

// ============ INTERFACES ============

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SpinnLabJourneySection {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  steps: JourneyStep[];
  footerNote?: string;
}

export interface TechnologyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SpinnLabTechnologiesSection {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  technologies: TechnologyCard[];
}

export interface SpinnLabSubItem {
  slug: string;
  title: string;
  href: string;
}

export interface ExpertiseFeature {
  title: string;
  description: string;
}

export interface ExpertiseGalleryImage {
  src: string;
  alt: string;
}

export interface SpinnLabExpertiseSection {
  eyebrow?: string;
  heading: string;
  features: ExpertiseFeature[];
  gallery: ExpertiseGalleryImage[];
  joinTitle: string;
  joinDescription: string;
  joinCta: { label: string; href: string };
}

export interface SpinnLabSIG {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface SpinnLabOutreachSection {
  eyebrow?: string;
  heading: string;
  description: string;
  sigs: SpinnLabSIG[];
}

export interface SpinnLabHero {
  title: string;
  description: string;
  backgroundImage: string;
  collageImage?: string;
  heroSteps?: { title: string; icon: string }[];
}

export interface SpinnLabTextImageBlock {
  id: number;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  // 🆕 Naye optional variables design support ke liye:
  title?: string;
  duration?: string;
  schedule?: string;
  price?: string;
  ctaLink?: string;
}

export interface SpinnLabStat {
  value: string;
  label: string;
}

// 🆕 UPDATED: highlight is now optional
export interface SpinnLabStatsBanner {
  singleImage?: { src: string; alt: string };
  images?: { src: string; alt: string }[];
  stats?: SpinnLabStat[];
  highlight?: {
    title: string;
    description: string;
    icon?: string;
  };
}

export interface SpinnLabTechHubBanner {
  logo: string;
  tagline: string;
  collageImage: string;
  collageAlt: string;
}

export interface SpinnLabClient {
  name: string;
  image: string;
}

export interface SpinnLabClientsSection {
  heading: string;
  subheading: string;
  clients: SpinnLabClient[];
}

export interface SpinnLabDetail {
  slug: string;
  hero: SpinnLabHero;
  outreachSection?: SpinnLabOutreachSection;
  expertiseSection?: SpinnLabExpertiseSection;
  journeySection?: SpinnLabJourneySection;
  technologiesSection?: SpinnLabTechnologiesSection;
  textImageBlocks?: SpinnLabTextImageBlock[];
  statsBanner?: SpinnLabStatsBanner;
  techHubBanner?: SpinnLabTechHubBanner;
  clientsSection?: SpinnLabClientsSection;
}

// ============ SUB-NAV DATA ============

export const spinnLabsSubItems: SpinnLabSubItem[] = [
  { slug: "overview", title: "Overview", href: "/Spinnlabs/overview" },
  { slug: "academia", title: "Academia", href: "/Spinnlabs/academia" },
  { slug: "industry", title: "Industry", href: "/Spinnlabs/industry" },
  {
    slug: "centers-of-expertise",
    title: "Centers of Expertise",
    href: "/Spinnlabs/centers-of-expertise",
  },
  { slug: "startups", title: "Startups", href: "/Spinnlabs/startups" },
];

// ============ PAGE DATA ============

export const spinnLabsData: SpinnLabDetail[] = [
  // ==================== OVERVIEW ====================
  {
    slug: "overview",
    hero: {
      title: "Overview",
      description:
        "SPINN Labs serves as a hub for innovators and entrepreneurs. As a member of our organization you will join a community of innovators, industry experts, academics and others who are seeking to make Pakistan and the world a better place. Receive mentoring from tech industry experts. Have the opportunity to apply for funding and opportunity to participate in tech meet ups and apply for training courses.",
      backgroundImage: "/spinnlabs/hero-bg-hex.jpg",
      collageImage: "/spinnlabs/hero-collage.png",
    },

    textImageBlocks: [
      {
        id: 1,
        text: "We are imaginative risk-takers, willing to challenge status quo assumptions and transform hardworking individuals into successful professionals. We consider multiple sources of evidence and diverse perspectives to review performance, note progress, and engage in continuous improvement. We share leadership and responsibility in our work with youth by committing time and effort to ensure more effective outcomes.",
        image: "/spinnlabs/1.jpg",
        imageAlt: "SPINN Labs mentors discussing strategy",
        reverse: false,
      },
      {
        id: 2,
        text: "Appreciate every CS graduate has a unique potential to become a valuable resource. Base our work on knowledge insights about global industry skill requirements. Respect dignity, worth, and uniqueness of each individual. Recognize that adults achieve their full potential in the context of relationships that are based on trust and respect.",
        image: "/spinnlabs/2.jpg",
        imageAlt: "SPINN Labs graduates group photo",
        reverse: true,
      },
    ],   
    techHubBanner: {
      logo: "/spinnlabs/tech-hub-logo.png",
      tagline: "Tech Hub for innovators and entrepreneurs",
      collageImage: "/spinnlabs/tech-hub-collage.jpg",
      collageAlt: "SPINN Labs events and workshops collage",
    },
 
    statsBanner: {
      singleImage: {
        src: "/spinnlabs/3.png",
        alt: "SPINN Labs impact — universities and faculty advisors",
      },
    },

    clientsSection: {
      heading: "Customers we are proud to work with.",
      subheading:
        "Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.",
      clients: [
        { name: "Keysight Technologies", image: "/spinnlabs/clients/keysight.png" },
      ],
    },
  },

  // ==================== ACADEMIA ====================
  {
    slug: "academia",
    hero: {
      title: "Academia",
      description:
        "The Academic Outreach Program at SpinnLabs is focused on introducing the faculty and students to the technologies and opportunities that exist in industry today.",
      backgroundImage: "/spinnlabs/hero-bg-hex.jpg",
      collageImage: "/spinnlabs/hero-collage.png",
    },

    outreachSection: {
      eyebrow: "Academic Outreach Program",
      heading: "Special Interest Groups (SIGs)",
      description:
        "The Academic Outreach Program at SpinnLabs is focused on introducing the faculty and students to the technologies and opportunities that exist in the industry so they can understand the challenges and solve them resulting in innovation, entrepreneurship, and startups. We have four technology Special Interest Groups (SIGs) to facilitate this process.",
      sigs: [
        {
          id: "ai",
          title: "Artificial Intelligence",
          description:
            "Explore machine learning, deep learning, and AI-driven solutions transforming every industry.",
          icon: "/services/icon6.png",
          href: "#ai",
        },
        {
          id: "cloud",
          title: "Cloud",
          description:
            "Master cloud-native architectures across AWS, Azure, and GCP for scalable systems.",
          icon: "/services/icon11.png",
          href: "#cloud",
        },
        {
          id: "iot",
          title: "IoT",
          description:
            "Connect the physical and digital worlds through smart devices, sensors, and edge computing.",
          icon: "/services/icon7.png",
          href: "#iot",
        },
        {
          id: "cybersecurity",
          title: "Cybersecurity",
          description:
            "Build resilient defenses against evolving cyber threats through hands-on research and training.",
          icon: "/services/icon5.png",
          href: "#cybersecurity",
        },
      ],
    },

    techHubBanner: {
      logo: "/spinnlabs/tech-hub-logo.png",
      tagline: "Tech Hub for innovators and entrepreneurs",
      collageImage: "/spinnlabs/tech-hub-collage.jpg",
      collageAlt: "SPINN Labs events and workshops collage",
    },

    clientsSection: {
      heading: "Customers we are proud to work with.",
      subheading:
        "Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.",
      clients: [
        { name: "K-Electric", image: "/spinnlabs/clients/k-electric.png" },
      ],
    },
  },

  // ==================== INDUSTRY ====================
  {
    slug: "industry",
    hero: {
      title: "Industry",
      description:
        "Bridging the gap between academia and industry through partnerships, internships, and real-world project engagements.",
      backgroundImage: "/spinnlabs/hero-bg-hex.jpg",
      collageImage: "/spinnlabs/hero-collage.png",
    },

    outreachSection: {
      eyebrow: "Industry Outreach Program",
      heading: "Special Interest Groups (SIGs)",
      description:
        "SpinnLabs partners with leading industry players to co-develop breakthrough solutions across sectors. Our Industry SIGs unite subject matter experts, researchers, and business leaders to solve real-world challenges together.",
      sigs: [
        {
          id: "innovation-oil-gas",
          title: "Innovation in Oil and Gas",
          description:
            "Drive digital transformation across upstream, midstream, and downstream operations with AI and IoT.",
          icon: "/services/icon6.png",
          href: "#innovation-oil-gas",
        },
        {
          id: "electric-grid",
          title: "Securing the Electric Grid",
          description:
            "Modernize grid infrastructure with advanced cybersecurity, monitoring, and resilience frameworks.",
          icon: "/services/icon11.png",
          href: "#electric-grid",
        },
        {
          id: "innovation-textile",
          title: "Innovation in Textile",
          description:
            "Bring automation, quality intelligence, and supply-chain visibility to textile manufacturing.",
          icon: "/services/icon7.png",
          href: "#innovation-textile",
        },
        {
          id: "banking",
          title: "Banking",
          description:
            "Reimagine banking with digital-first experiences, secure platforms, and intelligent automation.",
          icon: "/services/icon5.png",
          href: "#banking",
        },
        {
          id: "metaverse",
          title: "Metaverse",
          description:
            "Explore immersive, spatial computing experiences that redefine how enterprises engage users.",
          icon: "/services/icon8.png",
          href: "#metaverse",
        },
      ],
    },

    techHubBanner: {
      logo: "/spinnlabs/tech-hub-logo.png",
      tagline: "Tech Hub for innovators and entrepreneurs",
      collageImage: "/spinnlabs/tech-hub-collage.jpg",
      collageAlt: "SPINN Labs events and workshops collage",
    },
  },

  // ==================== CENTERS OF EXPERTISE ====================
  {
    slug: "centers-of-expertise",
    hero: {
      title: "Welcome to our Global Centers of Expertise",
      description:
        "At SPS, we believe in the power of collaboration, innovation, and collective expertise. We are thrilled to invite you to join our distinguished Center of Expertise, a fraternity of subject matter experts dedicated to advancing knowledge, fostering collaboration, and shaping the future of technology.",
      backgroundImage: "/spinnlabs/hero-bg-hex.jpg",
      collageImage: "/spinnlabs/hero-collage.png",
    },

    expertiseSection: {
      eyebrow: "Why Join Us",
      heading: "What Sets Us Apart",
      features: [
        {
          title: "Dynamic Community of Experts",
          description:
            "Immerse yourself in a vibrant community of professionals who excel in their respective fields. Connect with like-minded experts who share your passion and commitment to pushing the boundaries of knowledge.",
        },
        {
          title: "Collaborative Knowledge Exchange",
          description:
            "Our Center of Expertise provides a platform for open dialogue and knowledge exchange. Engage in thought-provoking discussions, share insights, and collaborate on innovative solutions to industry challenges.",
        },
        {
          title: "Access to Exclusive Resources",
          description:
            "Stay ahead of the curve with privileged access to cutting-edge research, industry reports, and curated content. Our members enjoy a wealth of resources designed to keep them informed and at the forefront of their expertise.",
        },
        {
          title: "Influence Industry Trends",
          description:
            "Be a key player in shaping the future of information technology. Contribute your expertise to discussions, workshops, and events that influence industry best practices and set new standards.",
        },
        {
          title: "Professional Development Opportunities",
          description:
            "Elevate your skills and knowledge through specialized workshops, training sessions, and events tailored to the evolving needs of our dynamic industry.",
        },
      ],
      gallery: [
        { src: "/spinnlabs/5.jpg", alt: "AI-powered mobile technology" },
        { src: "/Hero/we-img1.jpg", alt: "Neural network visualization" },
        { src: "/products/products.jpg", alt: "Team collaboration in tech" },
      ],
      joinTitle: "How to Join",
      joinDescription:
        "Becoming a part of our Center of Expertise is a simple step towards a more enriching professional journey. Join our Global Centers of Expertise today and be a driving force in the evolution of information technology. Together, let's redefine excellence.",
      joinCta: { label: "Register Now", href: "#register" },
    },
  },

  // ==================== STARTUPS ====================
  {
    slug: "startups",
    hero: {
      title: "Startups",
      description:
        "Experience our streamlined Six-Step Entrepreneurship Journey: 'Propose' your startup story, vision, and unique selling points; 'Create' a comprehensive business plan; 'Formulate' equity allocation model; 'Sign' entrepreneurship agreement; 'Execute' with a focus on tracking milestones and adapting strategies; and 'Spin-Off' when ready to become an independent business unit. Let's collaborate for your success!",
      backgroundImage: "/spinnlabs/hero-bg-hex.jpg",
      collageImage: "/spinnlabs/hero-collage.png",
      heroSteps: [
        { title: "Propose Idea", icon: "lucide:lightbulb" },
        { title: "Create Plan", icon: "lucide:file-edit" },
        { title: "Equity Model", icon: "lucide:pie-chart" },
        { title: "Sign Agreement", icon: "lucide:file-signature" },
        { title: "Execute Plan", icon: "lucide:play-circle" },
        { title: "Launch Startup", icon: "lucide:rocket" },
      ],
    },

    journeySection: {
      eyebrow: "The Process",
      heading: "Our Six-Step Entrepreneurship Journey",
      subheading:
        "A proven framework designed to take your idea from concept to launch — with expert guidance at every step.",
      steps: [
        {
          id: 1,
          title: "Propose Idea",
          description:
            "Share your startup's story with us. Describe your idea, how it solves industry challenges, and what sets it apart from the competition. Introduce your team, their expertise, and the mentors supporting you.",
          icon: "lucide:lightbulb",
        },
        {
          id: 2,
          title: "Create Plan",
          description:
            "Craft a comprehensive business plan that covers every aspect of your venture, from product development to branding and legal protection. Embrace equity allocation with the Slicing Pie method for fair distribution.",
          icon: "lucide:file-edit",
        },
        {
          id: 3,
          title: "Equity Model",
          description:
            "The equity model is a financial framework that allocates ownership shares based on each party's contributions to a venture, ensuring a fair distribution of ownership and responsibility.",
          icon: "lucide:pie-chart",
        },
        {
          id: 4,
          title: "Sign Agreement",
          description:
            "Please review the terms and conditions carefully before signing the agreement. The parties involved are now ready to sign the agreement, solidifying their commitment to the project.",
          icon: "lucide:file-signature",
        },
        {
          id: 5,
          title: "Execute Plan",
          description:
            "Stay on track with your startup journey. Monitor milestones, timeframes, and deliverables. Keep product development, team building, and go-to-market strategies on course.",
          icon: "lucide:play-circle",
        },
        {
          id: 6,
          title: "Launch Startup",
          description:
            "When the time is right, spin off your venture into an independent business unit. Operate autonomously, pursue your own objectives, and seize focused growth opportunities.",
          icon: "lucide:rocket",
        },
      ],
      footerNote: "We look forward to joining forces to support your success.",
    },

    technologiesSection: {
      eyebrow: "Areas of Innovation",
      heading: "Technologies",
      subheading:
        "Cutting-edge domains where we mentor, build, and accelerate breakthrough startups.",
      technologies: [
        {
          id: "ai",
          title: "Artificial Intelligence",
          description:
            "We develop AI-based solutions for corporates & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT.",
          icon: "/services/icon5.png",
        },
        {
          id: "cloud",
          title: "Cloud",
          description:
            "From building a holistic strategy through implementing and managing robust cloud technologies, SPS specialists are dedicated to making sure you get the most out of the cloud. They bring leadership and experience with integrating the latest cloud services to help you build secure industry solutions.",
          icon: "/services/icon6.png",
        },
        {
          id: "cybersecurity",
          title: "Cybersecurity",
          description:
            "SPS Cybersecurity team covers Digital Trust, User & Data Security, Mobile Device Management, Threat Management, SIEM systems, Application Security, Network Security, Keysight Professional Services, Help Desk Services, and Security Operations.",
          icon: "/services/icon7.png",
        },
        {
          id: "iot",
          title: "IoT",
          description:
            "SPS IoT practice covers end-to-end solutions: connected devices, edge computing, sensor integration, real-time telemetry, and secure data pipelines — enabling smarter operations across industries.",
          icon: "/services/icon8.png",
        },
      ],
    },

    techHubBanner: {
      logo: "/spinnlabs/tech-hub-logo.png",
      tagline: "Tech Hub for innovators and entrepreneurs",
      collageImage: "/spinnlabs/tech-hub-collage.jpg",
      collageAlt: "SPINN Labs events and workshops collage",
    },
  },
];

// ============ HELPERS ============

export function getSpinnLabBySlug(slug: string) {
  return spinnLabsData.find((s) => s.slug === slug);
}

export function getAllSpinnLabSlugs() {
  return spinnLabsData.map((s) => ({ slug: s.slug }));
}