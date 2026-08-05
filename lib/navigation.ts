export type SubItem = { label: string; href: string };
export type SubGroup = { label: string; href?: string; items: SubItem[] };
export type NavPromo = {
  title?: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};
export type NavItem = {
  label: string;
  href: string;
  groups?: SubGroup[];
  items?: SubItem[];
  promo?: NavPromo; // sirf mega menu wale items pe
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },

  // ===== MEGA MENU =====
  {
    label: "Products",
    href: "/products",
    promo: {
      description:
        "SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions designed to scale and secure digital transformation.",
      image: "/products/products.jpg",
      ctaLabel: "View All Products",
      ctaHref: "/products",
    },
    groups: [
      {
        label: "SPS",
        items: [
          { label: "MYID Self Verify", href: "https://www.myidselfverify.com/" },
          { label: "Azalio", href: "https://www.azal.io/" },
          { label: "Fabrico", href: "https://fabrico.spsnet.com/" },
          { label: "BMS", href: "/BMS" },
          { label: "CSM", href: "/CMS" },
        ],
      },
      {
        label: "IBM",
        items: [
          { label: "Automation", href: "/products/ibm/automation" },
          { label: "Data & AI", href: "/products/ibm/data-ai" },
          { label: "Security", href: "/products/ibm/security" },
          { label: "Sustainability", href: "/products/ibm/sustainability" },
        ],
      },
      {
        label: "Others",
        items: [
          { label: "Cloud Management", href: "/products/others/cloud-management" },
          { label: "Analytics Tools", href: "/products/others/analytics" },
          { label: "IoT Solutions", href: "/products/others/iot" },
          { label: "Blockchain", href: "/products/others/blockchain" },
        ],
      },
    ],
  },

  // ===== MEGA MENU =====
  {
    label: "Services",
    href: "/Services",
    promo: {
      description:
        "From Cybersecurity to Cloud, AI & Training  we deliver scalable services that drive measurable business outcomes.",
      image: "/products/services.jpg",
      ctaLabel: "Explore Services",
      ctaHref: "/Services",
    },
    groups: [
      {
        label: "Cybersecurity",
        items: [
          { label: "Network Security", href: "/Services/network-security" },
          { label: "SMaaS", href: "/Services/smaas" },
          { label: "GRC", href: "/Services/grc" },
          { label: "Identity & Access", href: "/Services/iam" },
          { label: "Threat Management", href: "/Services/threat-management" },
          { label: "Data Security", href: "/Services/data-security" },
        ],
      },
      {
        label: "Cloud",
        items: [
          { label: "DevOps", href: "/Services/devops" },
          { label: "Migration Services", href: "/Services/migration" },
        ],
      },
      {
        label: "AI & Automation",
        items: [
          { label: "Data Science", href: "/Services/data-science" },
          { label: "Automation", href: "/Services/automation" },
        ],
      },
      {
        label: "Collaboration",
        items: [
          { label: "Training", href: "/Services/training" },
          { label: "Events", href: "/Services/events" },
        ],
      },
      {
        label: "Training",
        items: [
          { label: "SPS Oil & Gas", href: "/Services/sps-oil-gas" },
          { label: "IBM", href: "/Services/ibm" },
          { label: "Google", href: "/Services/google" },
          { label: "AWS", href: "/Services/aws" },
          { label: "See More", href: "/Services" },
        ],
      },
    ],
  },

 // ===== MEGA MENU =====
{
  label: "Verticals",
  href: "/Verticals",
  promo: {
    description:
      "Tailored solutions for Public Sector, Healthcare, Energy, Retail, Finance & more — built for your industry's unique needs.",
    image: "/products/head.jpg",
    ctaLabel: "All Verticals",
    ctaHref: "/Verticals",
  },
  groups: [
    {
      label: "Public Sector",
      items: [
        { label: "Government", href: "/Verticals/government" },
        { label: "Public Safety", href: "/Verticals/public-safety" },
        { label: "Education", href: "/Verticals/education" },
        { label: "Healthcare - Mid Atl", href: "/Verticals/healthcare-mid-atl" },
        { label: "County Government", href: "/Verticals/county-government" },
      ],
    },
    {
      label: "Industrials",
      items: [
        { label: "Manufacturing", href: "/Verticals/manufacturing" },
        { label: "Textile", href: "/Verticals/textile" },
        { label: "Utilities", href: "/Verticals/utilities" },
      ],
    },
    {
      label: "Healthcare",
      items: [
        { label: "Compliance", href: "/Verticals/healthcare-compliance" },
        { label: "Interoperability", href: "/Verticals/interoperability" },
        { label: "Multi-Clinic", href: "/Verticals/multi-clinic" },
        { label: "Patient Experience", href: "/Verticals/patient-experience" },
        { label: "Telehealth", href: "/Verticals/telehealth" },
      ],
    },
    {
      label: "Retail",
      items: [
        { label: "Convenience Store", href: "/Verticals/convenience-store" },
        { label: "Marketing", href: "/Verticals/retail-marketing" },
        { label: "Omni-channel", href: "/Verticals/omni-channel" },
        { label: "Personalization", href: "/Verticals/personalization" },
        { label: "Supply Chain", href: "/Verticals/supply-chain" },
      ],
    },
    {
      label: "Energy",
      items: [
        { label: "Electric", href: "/Verticals/electric" },
        { label: "Oil & Gas", href: "/Verticals/oil-gas" },
      ],
    },
    {
      label: "Financial",
      items: [
        { label: "Banking", href: "/Verticals/banking" },
        { label: "Insurance", href: "/Verticals/insurance" },
      ],
    },
    {
      label: "Telecommunications",
      items: [
        { label: "Telcos", href: "/Verticals/telcos" },
      ],
    },
  ],
},

  {
    label: "SpinnLabs",
    href: "/spinnlabs",
    items: [
      { label: "Overview", href: "/Spinnlabs/overview" },
      { label: "Academia", href: "/Spinnlabs/academia" },
      { label: "Industry", href: "/Spinnlabs/industry" },
      { label: "Centers of Expertise", href: "/Spinnlabs/centers-of-expertise" },
      { label: "Startups", href: "/Spinnlabs/startups" },
    ],
  },
  {
  label: "Activities",
  href: "/Activities",
  groups: [
    {
      label: "Roundtables",
      href: "/Activities/Rountable",
      items: [
        {
          label: "VISO Roundtable Series",
          href: "/Activities/Rountable/viso-virginia",
        },
      ],
    },
    {
      label: "Webinars",
      href: "/Activities/Webinars",
      items: [
        { label: "Upcoming Webinars", href: "/Activities/Webinars/upcoming" },
        { label: "Past Webinars", href: "/Activities/Webinars/past" },
      ],
    },
    {
      label: "Workshops",
      href: "/Activities/Workshops",
      items: [
        { label: "Upcoming Workshops", href: "/Activities/workshops/upcoming" },
        { label: "Past Workshops", href: "/Activities/workshops/past" },
      ],
    },
    {
      label: "Special Interest Groups",
      href: "/activities/special-interest-groups",
      items: [
        { label: "AI SIG", href: "/activities/special-interest-groups/ai" },
        { label: "Cybersecurity SIG", href: "/activities/special-interest-groups/cybersecurity" },
      ],
    },
    {
      label: "Training",
      href: "/activities/training",
      items: [],
    },
    {
      label: "Internship Program 2026",
      href: "/Activities/Internship",
      items: [],
    },
  ],
},
  {
    label: "About Us",
    href: "/About",
    items: [
      { label: "Our Story", href: "/About/Story" },
      { label: "Careers", href: "/About/Careers" },
    ],
  },
{
    label: "Contracts",
    href: "/contracts",
    groups: [
      {
        label: "VITA",
        href: "#", // Click karne par kahin navigate na ho
        items: [
          {
            label: "Pricing",
            href: "/Contracts/VITA/pricing",
          },
        ],
      },
    ],
  },
   {
    label: "Contact Us",
    href: "/Contact",
  },
];