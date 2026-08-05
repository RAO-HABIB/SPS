// lib/vertical-data.ts
export interface AlternatingSectionItem {
  id: number;
  tag?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface AlternatingSection {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items: AlternatingSectionItem[];
}

export interface VerticalSubItem {
  slug: string;
  title: string;
  href: string;
}

export interface VerticalCategory {
  slug: string;
  title: string;
  icon: string;
  subItems: VerticalSubItem[];
}

export interface VerticalSolution {
  title: string;
  href: string;
}

export interface VerticalServiceCard {
  title: string;
  description: string;
  href: string;
}

export interface VerticalServiceTab {
  id: string;
  label: string;
  cards: VerticalServiceCard[];
}

export interface VerticalClient {
  name: string;
  image: string;
}
export interface VerticalProductCard {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface VerticalProductTab {
  id: string;
  label: string;
  products: VerticalProductCard[];
}

export interface VerticalProductsSection {
  heading: string;
  subheading: string;
  tabs: VerticalProductTab[];
}

export interface VerticalDetail {
  slug: string;
  category: string;
  categorySlug: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  solutions: VerticalSolution[];

  // 🆕 Made optional so verticals can skip services entirely
  servicesHeading?: string;
  servicesSubheading?: string;
  serviceTabs?: VerticalServiceTab[];

  clients?: VerticalClient[];
  productsSection?: VerticalProductsSection;
  alternatingSection?: AlternatingSection;
}

// ============ CATEGORY NAV DATA ============
export const verticalCategories: VerticalCategory[] = [
  {
    slug: "public-sector",
    title: "Public Sector",
    icon: "lucide:landmark",
    subItems: [
      { slug: "government", title: "Government", href: "/Verticals/government" },
      { slug: "public-safety", title: "Public Safety", href: "/Verticals/public-safety" },
      { slug: "education", title: "Education", href: "/Verticals/education" },
      { slug: "healthcare-mid-atl", title: "Healthcare - Mid Atl", href: "/Verticals/healthcare-mid-atl" },
      { slug: "county-government", title: "County Government", href: "/Verticals/county-government" },
    ],
  },
  {
    slug: "industrials",
    title: "Industrials",
    icon: "lucide:factory",
    subItems: [
      { slug: "manufacturing", title: "Manufacturing", href: "/Verticals/manufacturing" },
      { slug: "textile", title: "Textile", href: "/Verticals/textile" },
      { slug: "utilities", title: "Utilities", href: "/Verticals/utilities" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "lucide:briefcase-medical",
    subItems: [
      { slug: "healthcare-compliance", title: "Compliance", href: "/Verticals/healthcare-compliance" },
      { slug: "interoperability", title: "Interoperability", href: "/Verticals/interoperability" },
      { slug: "multi-clinic", title: "Multi-Clinic", href: "/Verticals/multi-clinic" },
      { slug: "patient-experience", title: "Patient Experience", href: "/Verticals/patient-experience" },
      { slug: "telehealth", title: "Telehealth", href: "/Verticals/telehealth" },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: "lucide:shopping-cart",
    subItems: [
      { slug: "convenience-store", title: "Convenience Store", href: "/Verticals/convenience-store" },
      { slug: "retail-marketing", title: "Marketing", href: "/Verticals/retail-marketing" },
      { slug: "omni-channel", title: "Omni-channel", href: "/Verticals/omni-channel" },
      { slug: "personalization", title: "Personalization", href: "/Verticals/personalization" },
      { slug: "supply-chain", title: "Supply Chain", href: "/Verticals/supply-chain" },
    ],
  },
  {
    slug: "energy",
    title: "Energy",
    icon: "lucide:fuel",
    subItems: [
      { slug: "electric", title: "Electric", href: "/Verticals/electric" },
      { slug: "oil-gas", title: "Oil & Gas", href: "/Verticals/oil-gas" },
    ],
  },
  {
    slug: "financial",
    title: "Financial",
    icon: "lucide:wallet",
    subItems: [
      { slug: "banking", title: "Banking", href: "/Verticals/banking" },
      { slug: "insurance", title: "Insurance", href: "/Verticals/insurance" },
    ],
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    icon: "lucide:antenna",
    subItems: [
      { slug: "telcos", title: "Telcos", href: "/Verticals/telcos" },
    ],
  },
];

const defaultServiceTabs: VerticalServiceTab[] = [
  {
    id: "cybersecurity",
    label: "CYBERSECURITY",
    cards: [
      {
        title: "Network Visibility Operations Services",
        description:
          "The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments.",
        href: "/Services/network-security/network-visibility-operations",
      },
      {
        title: "Security Management as a Service - SMaaS",
        description: "24/7 managed security operations with continuous monitoring and rapid response.",
        href: "/Services/smaas",
      },
    ],
  },
  {
    id: "cloud",
    label: "CLOUD",
    cards: [
      {
        title: "Cloud Migration",
        description: "Seamless cloud migration to AWS, Azure, GCP with minimal downtime.",
        href: "/Services/migration",
      },
      {
        title: "DevOps",
        description: "Automated CI/CD pipelines and infrastructure-as-code for faster delivery.",
        href: "/Services/devops",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & AUTOMATION",
    cards: [
      {
        title: "Process Automation",
        description: "Automate repetitive workflows and boost operational efficiency.",
        href: "/Services/automation",
      },
    ],
  },
  {
    id: "collaboration",
    label: "COLLABORATION",
    cards: [
      {
        title: "Training Programs",
        description: "Certified training programs for your team's continuous learning.",
        href: "/Services/training",
      },
    ],
  },
  {
    id: "spinnlabs",
    label: "SPINNLABS",
    cards: [
      {
        title: "Innovation Lab",
        description: "Explore emerging technologies in our sandboxed innovation lab.",
        href: "#",
      },
    ],
  },
];

// ============ ALL VERTICAL DETAIL PAGES ============
export const verticalsData: VerticalDetail[] = [
  // ==================== PUBLIC SECTOR ====================
  {
    slug: "government",
    category: "Public Sector",
    categorySlug: "public-sector",
    heroTitle: "Government",
    heroDescription:
      "Governments have unprecedented momentum to deliver exceptional citizen services — and strengthen their readiness for future disruptions. In support, SPS remains committed to the service of governments and their citizens across segments including social services, government health, tax management, critical infrastructure, education, and national security.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Access Control", href: "#" },
      { title: "Body Worn Camera Solution", href: "#" },
    ],
    servicesHeading: "Our Services for Government",
    servicesSubheading: "Explore Government services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
    clients: [
      { name: "Federal Reserve", image: "/customers/US.png" },
      { name: "State of Hawaii", image: "/customers/Hawai.png" },
      { name: "Virginia", image: "/customers/virginia.webp" },
      { name: "US Air Force", image: "/customers/usair.png" },
      { name: "US Army", image: "/customers/usarmy.png" },
    ],
  },
  {
    slug: "public-safety",
    category: "Public Sector",
    categorySlug: "public-sector",
    heroTitle: "Public Safety",
    heroDescription:
      "Mission-critical systems for law enforcement, emergency response, and public safety agencies. SPS delivers secure, reliable technology solutions to help agencies protect and serve communities effectively.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Emergency Response Systems", href: "#" },
      { title: "Body Worn Camera Solution", href: "#" },
    ],
    servicesHeading: "Our Services for Public Safety",
    servicesSubheading: "Explore Public Safety services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "education",
    category: "Public Sector",
    categorySlug: "public-sector",
    heroTitle: "Education",
    heroDescription:
      "Digital learning platforms, campus management, and student engagement tools for education institutions. Transform teaching and learning with modern, secure, and scalable educational technology.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Learning Management System", href: "#" },
      { title: "Campus Security", href: "#" },
    ],
    servicesHeading: "Our Services for Education",
    servicesSubheading: "Explore Education services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
    productsSection: {
      heading: "Our Product for Education",
      subheading: "Explore Education products we provide across our core practices",
      tabs: [
        {
          id: "cybersecurity",
          label: "CYBERSECURITY",
          products: [
            {
              title: "IAM",
              description:
                "SPS has teamed up with Fischer Identity, a top-tier provider of Identity Governance and Administration (IGA) software and solutions to revolutionize how higher education institutions, universities and colleges, seamlessly automate identity lifecycle management, enforce robust password governance, simplify single sign-on/authentication, and ensure continuous compliance, Fischer Identity empowers institutions of all sizes to securely manage diverse identities.",
              icon: "lucide:zap",
              href: "#",
            },
          ],
        },
      ],
    },
    clients: [
      { name: "ACT SPS", image: "/customers/virginia.png" },
      { name: "Anne Arundel Public Schools", image: "/customers/Hawai.png" },
      { name: "Montgomery County Public Schools", image: "/customers/usair.png" },
      { name: "Scholastic", image: "/customers/usarmy.png" },
      { name: "UNLV", image: "/customers/indiana.webp" },
      { name: "VCU", image: "/customers/US.png" },
    ],
  },

  {
    slug: "healthcare-mid-atl",
    category: "Public Sector",
    categorySlug: "public-sector",
    heroTitle: "Healthcare - Mid Atlantic",
    heroDescription:
      "Regional healthcare digital transformation across the Mid Atlantic — from patient records to telehealth infrastructure. Empowering healthcare providers with modern, compliant technology.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Patient Records System", href: "#" },
      { title: "Telehealth Platform", href: "#" },
    ],
    servicesHeading: "Our Services for Healthcare",
    servicesSubheading: "Explore Healthcare services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
    
  },
     {
    slug: "county-government",
    category: "Public Sector",
    categorySlug: "public-sector",
    heroTitle: "County Government",
    heroDescription:
      "Modernize county-level governance with secure digital platforms and citizen engagement tools. SPS partners with counties to deliver efficient, transparent public services.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Citizen Portal", href: "#" },
      { title: "County Management System", href: "#" },
    ],

    // ✅ Products only
    productsSection: {
      heading: "Our Products for County Government",
      subheading:
        "Explore County Government products we provide across our core practices",
      tabs: [
        {
          id: "cybersecurity",
          label: "CYBERSECURITY",
          products: [
            {
              title: "IAM",
              description:
                "SPS has teamed up with Fischer Identity, a top-tier provider of Identity Governance and Administration (IGA) software and solutions to revolutionize how county governments seamlessly automate identity lifecycle management, enforce robust password governance, simplify single sign-on/authentication, and ensure continuous compliance. Fischer Identity empowers agencies of all sizes to securely manage diverse identities.",
              icon: "lucide:zap",
              href: "#",
            },
          ],
        },
      ],
    },

    // ✅ Alternating Section
    alternatingSection: {
      eyebrow: "County Government Solutions",
      heading: "Empowering Public Service Through Technology",
      subheading: "A modern approach to serving your community better.",
      items: [
        {
          id: 1,
          tag: "Digital Transformation",
          title: "Transform How Your County Serves Its People",
          description:
            "Unlock the full potential of your county government with a guided, executive-led approach to digital transformation. From cybersecurity awareness to cloud migration and AI readiness, we help you modernize the systems that power your public services.",
          image: "/verticals/country1.jpg",
          imageAlt: "Team collaborating on county digital strategy",
          primaryCta: { label: "Learn More", href: "#" },
          secondaryCta: { label: "Schedule a Demo", href: "#" },
        },
        {
          id: 2,
          reverse: true,
          tag: "Modernization Blueprint",
          title:
            "Accelerate IT Modernization with AI, Cloud, and Cybersecurity",
          description:
            "We begin with a county-wide Cyber Range event, led by the County Executive and joined by department heads from Finance, HR, Public Safety, Fire, Utilities, and more. This immersive simulation builds executive awareness around the impact of cyber incidents and sets the stage for a broader transformation effort. Next, we conduct Tabletop Exercises with each department to evaluate risks across information systems, infrastructure, and service delivery. These sessions uncover opportunities to modernize hardware and software, refactor legacy applications, migrate to the cloud, and unlock the potential of data for AI and advanced analytics. The outcome is a comprehensive, top-down digital transformation blueprint — a multi-year roadmap that aligns technology modernization with your county's mission to serve, protect, and innovate.",
          image: "/verticals/country2.png",
          imageAlt: "Cybersecurity operations center in county government",
          primaryCta: { label: "Explore Roadmap", href: "#" },
          secondaryCta: { label: "Talk to an Expert", href: "#" },
        },
      ],
    },

    clients: [
      { name: "ACT SPS", image: "/customers/usarmy.png" },
      { name: "Anne Arundel Public Schools", image: "/customers/usair.png" },
    ],
  },


  {
    slug: "manufacturing",
    category: "Industrials",
    categorySlug: "industrials",
    heroTitle: "Manufacturing",
    heroDescription:
      "Smart factory solutions with IoT, predictive maintenance, and quality automation. Transform your manufacturing operations with cutting-edge Industry 4.0 technologies.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Smart Factory Platform", href: "#" },
      { title: "Predictive Maintenance", href: "#" },
    ],
    servicesHeading: "Our Services for Manufacturing",
    servicesSubheading: "Explore Manufacturing services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "textile",
    category: "Industrials",
    categorySlug: "industrials",
    heroTitle: "Textile",
    heroDescription:
      "End-to-end textile manufacturing digitization — from production to supply chain. Optimize your textile operations with intelligent automation and data-driven insights.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Production Management", href: "#" },
      { title: "Supply Chain Optimization", href: "#" },
    ],
    servicesHeading: "Our Services for Textile",
    servicesSubheading: "Explore Textile services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "utilities",
    category: "Industrials",
    categorySlug: "industrials",
    heroTitle: "Utilities",
    heroDescription:
      "Smart grid, meter data management, and operational efficiency for utility companies. Modernize your utility operations with reliable, scalable technology solutions.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Smart Grid Solutions", href: "#" },
      { title: "Meter Data Management", href: "#" },
    ],
    servicesHeading: "Our Services for Utilities",
    servicesSubheading: "Explore Utilities services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },

  // ==================== HEALTHCARE ====================
  {
    slug: "healthcare-compliance",
    category: "Healthcare",
    categorySlug: "healthcare",
    heroTitle: "Compliance",
    heroDescription:
      "HIPAA, HITECH, and regulatory compliance solutions for healthcare providers. Ensure your organization meets all healthcare regulatory requirements with confidence.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "HIPAA Compliance Suite", href: "#" },
      { title: "Audit Management", href: "#" },
    ],
    servicesHeading: "Our Services for Healthcare Compliance",
    servicesSubheading: "Explore Compliance services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "interoperability",
    category: "Healthcare",
    categorySlug: "healthcare",
    heroTitle: "Interoperability",
    heroDescription:
      "HL7, FHIR, and health system integration for seamless data exchange across providers. Break down data silos and enable connected healthcare experiences.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "FHIR Integration Platform", href: "#" },
      { title: "HL7 Gateway", href: "#" },
    ],
    servicesHeading: "Our Services for Interoperability",
    servicesSubheading: "Explore Interoperability services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "multi-clinic",
    category: "Healthcare",
    categorySlug: "healthcare",
    heroTitle: "Multi-Clinic",
    heroDescription:
      "Consolidation and management platforms for multi-location clinical operations. Streamline operations across your entire clinical network with unified management tools.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Multi-Site Management", href: "#" },
      { title: "Centralized Analytics", href: "#" },
    ],
    servicesHeading: "Our Services for Multi-Clinic",
    servicesSubheading: "Explore Multi-Clinic services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "patient-experience",
    category: "Healthcare",
    categorySlug: "healthcare",
    heroTitle: "Patient Experience",
    heroDescription:
      "Digital patient engagement, portals, and experience optimization tools. Deliver exceptional patient experiences that drive satisfaction and improve outcomes.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Patient Portal", href: "#" },
      { title: "Engagement Analytics", href: "#" },
    ],
    servicesHeading: "Our Services for Patient Experience",
    servicesSubheading: "Explore Patient Experience services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "telehealth",
    category: "Healthcare",
    categorySlug: "healthcare",
    heroTitle: "Telehealth",
    heroDescription:
      "Remote monitoring, virtual visits, and telehealth infrastructure for modern care delivery. Enable healthcare anywhere with our comprehensive telehealth solutions.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Virtual Visit Platform", href: "#" },
      { title: "Remote Monitoring", href: "#" },
    ],
    servicesHeading: "Our Services for Telehealth",
    servicesSubheading: "Explore Telehealth services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },

  // ==================== RETAIL ====================
  {
    slug: "convenience-store",
    category: "Retail",
    categorySlug: "retail",
    heroTitle: "Convenience Store",
    heroDescription:
      "POS, inventory, and operational systems tailored for convenience retail chains. Power your convenience stores with modern, integrated retail technology.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "POS System", href: "#" },
      { title: "Inventory Management", href: "#" },
    ],
    servicesHeading: "Our Services for Convenience Store",
    servicesSubheading: "Explore Convenience Store services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "retail-marketing",
    category: "Retail",
    categorySlug: "retail",
    heroTitle: "Marketing",
    heroDescription:
      "Merchandising, campaign management, and customer analytics for modern retailers. Drive engagement and revenue with data-driven retail marketing solutions.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Campaign Management", href: "#" },
      { title: "Customer Analytics", href: "#" },
    ],
    servicesHeading: "Our Services for Retail Marketing",
    servicesSubheading: "Explore Marketing services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "omni-channel",
    category: "Retail",
    categorySlug: "retail",
    heroTitle: "Omni-channel",
    heroDescription:
      "Unified inventory, orders, and customer experience across all retail channels. Deliver seamless shopping experiences from online to in-store.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Unified Commerce", href: "#" },
      { title: "Order Management", href: "#" },
    ],
    servicesHeading: "Our Services for Omni-channel",
    servicesSubheading: "Explore Omni-channel services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "personalization",
    category: "Retail",
    categorySlug: "retail",
    heroTitle: "Personalization",
    heroDescription:
      "AI-driven personalization and localization for hyper-relevant customer experiences. Turn every customer interaction into an opportunity for engagement.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "AI Recommendation Engine", href: "#" },
      { title: "Localization Platform", href: "#" },
    ],
    servicesHeading: "Our Services for Personalization",
    servicesSubheading: "Explore Personalization services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "supply-chain",
    category: "Retail",
    categorySlug: "retail",
    heroTitle: "Supply Chain",
    heroDescription:
      "End-to-end supply chain visibility, forecasting, and optimization solutions. Build resilient, efficient supply chains that adapt to changing demands.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Supply Chain Analytics", href: "#" },
      { title: "Demand Forecasting", href: "#" },
    ],
    servicesHeading: "Our Services for Supply Chain",
    servicesSubheading: "Explore Supply Chain services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },

  // ==================== ENERGY ====================
  {
    slug: "electric",
    category: "Energy",
    categorySlug: "energy",
    heroTitle: "Electric",
    heroDescription:
      "Smart grid modernization, demand response, and utility operations platforms. Empower electric utilities with the technology to meet tomorrow's energy demands.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Smart Grid Platform", href: "#" },
      { title: "Demand Response System", href: "#" },
    ],
    servicesHeading: "Our Services for Electric",
    servicesSubheading: "Explore Electric services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "oil-gas",
    category: "Energy",
    categorySlug: "energy",
    heroTitle: "Oil & Gas",
    heroDescription:
      "Upstream, midstream, and downstream digital solutions for oil & gas enterprises. Drive operational excellence across the entire oil & gas value chain.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Field Operations Platform", href: "#" },
      { title: "Asset Performance Management", href: "#" },
    ],
    servicesHeading: "Our Services for Oil & Gas",
    servicesSubheading: "Explore Oil & Gas services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },

  // ==================== FINANCIAL ====================
  {
    slug: "banking",
    category: "Financial",
    categorySlug: "financial",
    heroTitle: "Banking",
    heroDescription:
      "Digital banking, core modernization, and fintech integration for banks and credit unions. Transform your banking operations for the digital-first economy.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Digital Banking Platform", href: "#" },
      { title: "Core Banking Modernization", href: "#" },
    ],
    servicesHeading: "Our Services for Banking",
    servicesSubheading: "Explore Banking services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
  {
    slug: "insurance",
    category: "Financial",
    categorySlug: "financial",
    heroTitle: "Insurance",
    heroDescription:
      "Policy admin, claims automation, and customer engagement for insurance carriers. Modernize insurance operations with intelligent automation and analytics.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "Policy Administration", href: "#" },
      { title: "Claims Automation", href: "#" },
    ],
    servicesHeading: "Our Services for Insurance",
    servicesSubheading: "Explore Insurance services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },

  // ==================== TELECOMMUNICATIONS ====================
  {
    slug: "telcos",
    category: "Telecommunications",
    categorySlug: "telecommunications",
    heroTitle: "Telcos",
    heroDescription:
      "5G, network modernization, OSS/BSS transformation, and cloud-native telco solutions. Power the next generation of telecommunications infrastructure.",
    heroImage: "/verticals/government1.jpg",
    solutions: [
      { title: "5G Network Solutions", href: "#" },
      { title: "OSS/BSS Platform", href: "#" },
    ],
    servicesHeading: "Our Services for Telcos",
    servicesSubheading: "Explore Telecommunications services we provide across our core practices",
    serviceTabs: defaultServiceTabs,
  },
];

// ============ HELPERS ============
export function getVerticalBySlug(slug: string) {
  return verticalsData.find((v) => v.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return verticalCategories.find((c) => c.slug === slug);
}

export function getAllVerticalSlugs() {
  return verticalsData.map((v) => ({ slug: v.slug }));
}