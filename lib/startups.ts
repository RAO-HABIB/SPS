export type Startup = {
  id: string;
  name: string;
  description: string;
  icon: string;           // iconify icon name
  href: string;
};

export const STARTUPS_INTRO = {
  eyebrow: "Our Startups",
  title: "Digital solutions we have built for ourselves and our customers",
  description:
    "We develop AI-based solutions for corporate & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT.",
};

export const STARTUPS: Startup[] = [
  {
    id: "gatekeyper",
    name: "GateKeyper",
    description:
      "Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build an app to ensure safety of professional operators.",
    icon: "lucide:shield-check",
    href: "/startups/gatekeyper",
  },
  {
    id: "creyield",
    name: "CREyield",
    description:
      "CREyield streamlines real estate investment analytics and reporting for better decision-making.",
    icon: "lucide:building-2",
    href: "/startups/creyield",
  },
  {
    id: "csm",
    name: "CSM",
    description:
      "CSM enables efficient customer service management with AI-driven insights and automation.",
    icon: "lucide:headset",
    href: "/startups/csm",
  },
  {
    id: "myhealthchart",
    name: "MyHealthChart",
    description:
      "MyHealthChart provides patients with an integrated view of their health records and insights.",
    icon: "lucide:heart-pulse",
    href: "/startups/myhealthchart",
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description:
      "Analytics Dashboard provides actionable insights and visualizations for business decision-making.",
    icon: "lucide:bar-chart-3",
    href: "/startups/analytics-dashboard",
  },
  {
    id: "aimy",
    name: "AIMY",
    description:
      "AIMY is an AI-driven personal assistant that helps businesses automate routine tasks efficiently.",
    icon: "lucide:bot",
    href: "/startups/aimy",
  },
  {
    id: "herdomain",
    name: "HerDomain",
    description:
      "HerDomain is a platform empowering women entrepreneurs with digital tools and resources.",
    icon: "lucide:users",
    href: "/startups/herdomain",
  },
  {
    id: "watchover",
    name: "Watch Over",
    description:
      "Watch Over monitors critical systems and processes, providing real-time alerts and insights.",
    icon: "lucide:eye",
    href: "/startups/watchover",
  },
];