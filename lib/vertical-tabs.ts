export type VerticalSubSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  stats?: { label: string; value: string }[];
};

export type VerticalTab = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  badge?: string;
  headline: string;
  description: string;
  slides: VerticalSubSlide[];
  ctaLabel: string;
  ctaHref: string;
};

export const VERTICAL_TABS: VerticalTab[] = [
  // ============ PUBLIC SECTOR ============
  {
    id: "public-sector",
    icon: "lucide:landmark",
    title: "Public Sector",
    subtitle: "Citizen-centric digital services",
    badge: "GOVERNMENT",
    headline: "Empowering Public Services",
    description:
      "Secure, citizen-centric digital solutions for government agencies — modernizing services, enhancing public safety, and enabling education.",
    slides: [
      {
        id: "government",
        icon: "lucide:landmark",
        title: "Government",
        description:
          "Federal and state government solutions with FedRAMP compliance and enterprise security.",
        href: "/Verticals/government",
        stats: [
          { label: "agencies served", value: "80+" },
          { label: "uptime SLA", value: "99.99%" },
        ],
      },
      {
        id: "public-safety",
        icon: "lucide:shield-check",
        title: "Public Safety",
        description:
          "Mission-critical systems for law enforcement, emergency response, and public safety agencies.",
        href: "/Verticals/public-safety",
        stats: [
          { label: "response time reduction", value: "40%" },
          { label: "agencies enabled", value: "35+" },
        ],
      },
      {
        id: "education",
        icon: "lucide:graduation-cap",
        title: "Education",
        description:
          "Digital learning platforms, campus management, and student engagement tools for education.",
        href: "/Verticals/education",
        stats: [
          { label: "institutions", value: "200+" },
          { label: "students impacted", value: "1M+" },
        ],
      },
      {
        id: "healthcare-mid-atl",
        icon: "lucide:heart-pulse",
        title: "Healthcare - Mid Atl",
        description:
          "Public healthcare digital transformation — from patient records to telehealth infrastructure.",
        href: "/Verticals/healthcare-mid-atl",
        stats: [
          { label: "hospitals digitized", value: "120+" },
          { label: "compliance rate", value: "100%" },
        ],
      },
      {
        id: "county-government",
        icon: "lucide:building-2",
        title: "County Government",
        description:
          "Modernize county-level governance with secure digital platforms and citizen engagement tools.",
        href: "/Verticals/county-government",
        stats: [
          { label: "counties served", value: "50+" },
          { label: "citizen satisfaction", value: "94%" },
        ],
      },
    ],
    ctaLabel: "Explore Public Sector",
    ctaHref: "/Verticals/government", // ✅ first sub-item
  },

  // ============ INDUSTRIALS ============
  {
    id: "industrials",
    icon: "lucide:factory",
    title: "Industrials",
    subtitle: "Analytics & automation",
    headline: "Industrial Intelligence",
    description:
      "Data-driven analytics and automation for manufacturing, textile, and utility enterprises — driving efficiency and operational excellence.",
    slides: [
      {
        id: "manufacturing",
        icon: "lucide:factory",
        title: "Manufacturing",
        description:
          "Smart factory solutions with IoT, predictive maintenance, and quality automation.",
        href: "/Verticals/manufacturing",
        stats: [
          { label: "efficiency gain", value: "45%" },
          { label: "plants automated", value: "60+" },
        ],
      },
      {
        id: "textile",
        icon: "lucide:shirt",
        title: "Textile",
        description:
          "End-to-end textile manufacturing digitization — from production to supply chain.",
        href: "/Verticals/textile",
        stats: [
          { label: "waste reduction", value: "30%" },
          { label: "mills optimized", value: "25+" },
        ],
      },
      {
        id: "utilities",
        icon: "lucide:plug",
        title: "Utilities",
        description:
          "Smart grid, meter data management, and operational efficiency for utility companies.",
        href: "/Verticals/utilities",
        stats: [
          { label: "grid uptime", value: "99.9%" },
          { label: "utilities served", value: "40+" },
        ],
      },
    ],
    ctaLabel: "Explore Industrials",
    ctaHref: "/Verticals/manufacturing", // ✅ first sub-item
  },

  // ============ HEALTHCARE ============
  {
    id: "healthcare",
    icon: "lucide:briefcase-medical",
    title: "Healthcare",
    subtitle: "Secure digital care",
    headline: "Healthcare Transformation",
    description:
      "Transforming patient experience with secure, interoperable digital healthcare systems that meet compliance and drive outcomes.",
    slides: [
      {
        id: "healthcare-compliance",
        icon: "lucide:shield-check",
        title: "Compliance",
        description:
          "HIPAA, HITECH, and regulatory compliance solutions for healthcare providers.",
        href: "/Verticals/healthcare-compliance",
        stats: [
          { label: "compliance rate", value: "100%" },
          { label: "audits passed", value: "500+" },
        ],
      },
      {
        id: "interoperability",
        icon: "lucide:network",
        title: "Interoperability",
        description:
          "HL7, FHIR, and health system integration for seamless data exchange across providers.",
        href: "/Verticals/interoperability",
        stats: [
          { label: "systems integrated", value: "150+" },
          { label: "data accuracy", value: "99.8%" },
        ],
      },
      {
        id: "multi-clinic",
        icon: "lucide:building",
        title: "Multi-Clinic",
        description:
          "Consolidation and management platforms for multi-location clinical operations.",
        href: "/Verticals/multi-clinic",
        stats: [
          { label: "clinics managed", value: "300+" },
          { label: "operational cost reduction", value: "35%" },
        ],
      },
      {
        id: "patient-experience",
        icon: "lucide:user-heart",
        title: "Patient Experience",
        description:
          "Digital patient engagement, portals, and experience optimization tools.",
        href: "/Verticals/patient-experience",
        stats: [
          { label: "patient satisfaction", value: "92%" },
          { label: "engagement lift", value: "60%" },
        ],
      },
      {
        id: "telehealth",
        icon: "lucide:video",
        title: "Telehealth",
        description:
          "Remote monitoring, virtual visits, and telehealth infrastructure for modern care delivery.",
        href: "/Verticals/telehealth",
        stats: [
          { label: "virtual visits", value: "2M+" },
          { label: "providers enabled", value: "5K+" },
        ],
      },
    ],
    ctaLabel: "Explore Healthcare",
    ctaHref: "/Verticals/healthcare-compliance", // ✅
  },

  // ============ RETAIL ============
  {
    id: "retail",
    icon: "lucide:shopping-bag",
    title: "Retail",
    subtitle: "Omnichannel excellence",
    headline: "Retail Reimagined",
    description:
      "Simplify omnichannel transformation — from supply chain and personalization to convenience stores and unified marketing.",
    slides: [
      {
        id: "convenience-store",
        icon: "lucide:store",
        title: "Convenience Store",
        description:
          "POS, inventory, and operational systems tailored for convenience retail chains.",
        href: "/Verticals/convenience-store",
        stats: [
          { label: "stores enabled", value: "500+" },
          { label: "checkout speed", value: "2x" },
        ],
      },
      {
        id: "retail-marketing",
        icon: "lucide:megaphone",
        title: "Marketing",
        description:
          "Merchandising, campaign management, and customer analytics for modern retailers.",
        href: "/Verticals/retail-marketing",
        stats: [
          { label: "campaign ROI", value: "3.5x" },
          { label: "brands served", value: "80+" },
        ],
      },
      {
        id: "omni-channel",
        icon: "lucide:layers",
        title: "Omni-channel",
        description:
          "Unified inventory, orders, and customer experience across all retail channels.",
        href: "/Verticals/omni-channel",
        stats: [
          { label: "channels unified", value: "8+" },
          { label: "conversion lift", value: "40%" },
        ],
      },
      {
        id: "personalization",
        icon: "lucide:user-cog",
        title: "Personalization",
        description:
          "AI-driven personalization and localization for hyper-relevant customer experiences.",
        href: "/Verticals/personalization",
        stats: [
          { label: "engagement lift", value: "55%" },
          { label: "AI models deployed", value: "40+" },
        ],
      },
      {
        id: "supply-chain",
        icon: "lucide:truck",
        title: "Supply Chain",
        description:
          "End-to-end supply chain visibility, forecasting, and optimization solutions.",
        href: "/Verticals/supply-chain",
        stats: [
          { label: "inventory reduction", value: "25%" },
          { label: "forecast accuracy", value: "94%" },
        ],
      },
    ],
    ctaLabel: "Explore Retail",
    ctaHref: "/Verticals/convenience-store", // ✅
  },

  // ============ ENERGY ============
  {
    id: "energy",
    icon: "lucide:bolt",
    title: "Energy",
    subtitle: "Agile, data-driven",
    headline: "Energy for Tomorrow",
    description:
      "Agile, data-driven operations for the evolving energy landscape — from electric utilities to oil & gas enterprises.",
    slides: [
      {
        id: "electric",
        icon: "lucide:zap",
        title: "Electric",
        description:
          "Smart grid modernization, demand response, and utility operations platforms.",
        href: "/Verticals/electric",
        stats: [
          { label: "grid efficiency", value: "35%" },
          { label: "utilities served", value: "30+" },
        ],
      },
      {
        id: "oil-gas",
        icon: "lucide:fuel",
        title: "Oil & Gas",
        description:
          "Upstream, midstream, and downstream digital solutions for oil & gas enterprises.",
        href: "/Verticals/oil-gas",
        stats: [
          { label: "operational uptime", value: "99.5%" },
          { label: "companies served", value: "45+" },
        ],
      },
    ],
    ctaLabel: "Explore Energy",
    ctaHref: "/Verticals/electric", // ✅
  },

  // ============ FINANCIAL ============
  {
    id: "financial",
    icon: "lucide:banknote",
    title: "Financial",
    subtitle: "Real-time modernization",
    headline: "Financial Innovation",
    description:
      "Real-time modernization for banking and insurance — secure, compliant, and competitive financial technology solutions.",
    slides: [
      {
        id: "banking",
        icon: "lucide:landmark",
        title: "Banking",
        description:
          "Digital banking, core modernization, and fintech integration for banks and credit unions.",
        href: "/Verticals/banking",
        stats: [
          { label: "banks served", value: "60+" },
          { label: "transaction uptime", value: "99.99%" },
        ],
      },
      {
        id: "insurance",
        icon: "lucide:shield",
        title: "Insurance",
        description:
          "Policy admin, claims automation, and customer engagement for insurance carriers.",
        href: "/Verticals/insurance",
        stats: [
          { label: "claims processed", value: "5M+" },
          { label: "processing speed", value: "3x" },
        ],
      },
    ],
    ctaLabel: "Explore Financial",
    ctaHref: "/Verticals/banking", // ✅
  },

  // ============ TELECOMMUNICATIONS ============
  {
    id: "telecom",
    icon: "lucide:radio-tower",
    title: "Telecommunications",
    subtitle: "Next-gen networks",
    headline: "Powering Telecom Transformation",
    description:
      "Powering next-gen network transformation for telecoms navigating the shift to 5G, edge computing, and cloud-native services.",
    slides: [
      {
        id: "telcos",
        icon: "lucide:radio-tower",
        title: "Telcos",
        description:
          "5G, network modernization, OSS/BSS transformation, and cloud-native telco solutions.",
        href: "/Verticals/telcos",
        stats: [
          { label: "networks modernized", value: "20+" },
          { label: "5G deployments", value: "12+" },
        ],
      },
    ],
    ctaLabel: "Explore Telecom",
    ctaHref: "/Verticals/telcos", // ✅
  },
];