export type SubSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  stats?: { label: string; value: string }[];
};

export type ServiceTab = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  badge?: string;
  headline: string;
  description: string;
  slides: SubSlide[];
  ctaLabel: string;
  ctaHref: string;
};

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "cybersecurity",
    icon: "lucide:shield",
    title: "Cybersecurity",
    subtitle: "Enterprise-grade protection",
    badge: "MOST POPULAR",
    headline: "Cybersecurity Excellence",
    description:
      "Multi-layered defense against evolving digital threats — proactive monitoring, threat detection and rapid response for modern enterprises.",
    slides: [
      {
        id: "threat",
        icon: "lucide:shield-alert",
        title: "Threat Management",
        description:
          "End-to-end threat detection, intelligence and response across your enterprise estate.",
        href: "/services/cybersecurity/threat-management",
        stats: [
          { label: "monitoring", value: "24/7" },
          { label: "uptime SLA", value: "99.9%" },
          { label: "specialists", value: "180+" },
        ],
      },
      {
        id: "network",
        icon: "lucide:network",
        title: "Network Security",
        description:
          "Network Visibility Operations, design & implementation and Keysight IxNetwork testing.",
        href: "/services/cybersecurity/network-security",
        stats: [
          { label: "networks secured", value: "500+" },
          { label: "threat reduction", value: "85%" },
        ],
      },
      {
        id: "smaas",
        icon: "lucide:server",
        title: "SMaaS",
        description:
          "Service Management as a Service including cloud monitoring and operations solutions.",
        href: "/services/cybersecurity/smaas",
        stats: [
          { label: "monitoring", value: "24/7" },
          { label: "clients managed", value: "120+" },
        ],
      },
      {
        id: "grc",
        icon: "lucide:shield-check",
        title: "GRC",
        description:
          "Governance, Risk & Compliance solutions for enterprise-wide policies and controls.",
        href: "/services/cybersecurity/grc",
        stats: [
          { label: "audits passed", value: "100%" },
          { label: "frameworks", value: "12+" },
        ],
      },
      {
        id: "iam",
        icon: "lucide:user-check",
        title: "Identity & Access",
        description:
          "Identity & Access Management solutions for secure authentication and authorization.",
        href: "/services/cybersecurity/iam",
        stats: [
          { label: "identities managed", value: "45K+" },
          { label: "uptime SLA", value: "99.9%" },
        ],
      },
    ],
    ctaLabel: "Explore Cybersecurity",
    ctaHref: "/services/cybersecurity",
  },
  {
    id: "cloud",
    icon: "lucide:cloud",
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure",
    headline: "Cloud-Native Scalability",
    description:
      "Migrate, modernize and operate workloads across hybrid and multi-cloud — built for performance and cost efficiency.",
    slides: [
      {
        id: "devops",
        icon: "lucide:git-branch",
        title: "DevOps",
        description:
          "CI/CD pipelines, infrastructure-as-code and automated release management for faster delivery.",
        href: "/services/cloud/devops",
        stats: [
          { label: "faster releases", value: "3x" },
          { label: "automated pipelines", value: "200+" },
        ],
      },
      {
        id: "migration",
        icon: "lucide:move",
        title: "Migration Services",
        description:
          "Seamless workload migration to AWS, Azure, GCP and IBM Cloud with minimal downtime.",
        href: "/services/cloud/migration",
        stats: [
          { label: "workloads migrated", value: "300+" },
          { label: "average downtime", value: "<1hr" },
        ],
      },
    ],
    ctaLabel: "Explore Cloud",
    ctaHref: "/services/cloud",
  },
  {
    id: "ai",
    icon: "lucide:zap",
    title: "AI & Automation",
    subtitle: "Intelligent workflows",
    headline: "AI-Powered Automation",
    description:
      "Leverage AI, Data Science and intelligent automation to streamline operations and accelerate decisions.",
    slides: [
      {
        id: "automation",
        icon: "lucide:zap",
        title: "Automation",
        description:
          "RPA and AI-agent driven automation for repetitive business workflows at scale.",
        href: "/services/ai-automation/automation",
        stats: [
          { label: "tasks automated", value: "10K+" },
          { label: "efficiency gain", value: "60%" },
        ],
      },
      {
        id: "data-science",
        icon: "lucide:bar-chart-3",
        title: "Data Science",
        description:
          "Predictive analytics, ML models and data engineering for enterprise insights.",
        href: "/services/ai-automation/data-science",
        stats: [
          { label: "models deployed", value: "50+" },
          { label: "forecast accuracy", value: "92%" },
        ],
      },
    ],
    ctaLabel: "Discover AI",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "collaboration",
    icon: "lucide:users",
    title: "Collaboration",
    subtitle: "Unified team tools",
    headline: "Seamless Team Collaboration",
    description:
      "Empower distributed teams with unified communication, training and event platforms — for productivity and engagement.",
    slides: [
      {
        id: "events",
        icon: "lucide:calendar",
        title: "Events",
        description:
          "Virtual, hybrid and in-person events for product launches and customer engagement.",
        href: "/services/collaboration/events",
        stats: [
          { label: "events hosted", value: "150+" },
          { label: "attendee reach", value: "20K+" },
        ],
      },
      {
        id: "training",
        icon: "lucide:graduation-cap",
        title: "Training",
        description:
          "Enterprise learning & training programs covering IBM, AWS, Google Cloud and security tracks.",
        href: "/services/collaboration/training",
        stats: [
          { label: "certifications", value: "40+" },
          { label: "learners trained", value: "5K+" },
        ],
      },
    ],
    ctaLabel: "Learn More",
    ctaHref: "/services/collaboration",
  },
];