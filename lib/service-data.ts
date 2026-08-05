// lib/service-data.ts

export interface ServiceCard {
  cardSlug?: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TechProvider {
  name: string;
  image: string;
  value: string;
}

export interface Course {
  id: string;
  name: string;
  provider: string;
  duration: string;
  price?: string;
  schedule?: string;
}

export interface TrainingPartner {
  name: string;
  image: string;
}

export interface CourseFilterSection {
  providers: TechProvider[];
  courses: Course[];
}

export interface InstructorSection {
  heroTitle: string;
  heroDescription: string;
  heroBgImage: string;
  ctaText: string;
  introHeading: string;
  introParagraphs: string[];
  partners: TrainingPartner[];
}


export interface TechPartner {
  name: string;
  image: string;
}

export interface RoadmapStep {
  title: string;
  position: "top" | "bottom"; // for zig-zag layout
}

export interface VideoSection {
  title: string;
  subtitle?: string;
  videoUrl: string;         // YouTube embed URL
  thumbnail?: string;       // optional custom thumbnail
}


export interface FeaturedProduct {
  title: string;
  description: string;
  image: string;
  href: string;
  bgColor?: string;
}

export interface Executive {
  name: string;
  image: string;
  description: string;
  meetingLink: string;
  sectionHeading: string;
}

export interface Client {
  name: string;
  image: string;
}

export interface ServiceDetail {
  slug: string;
  category: string;
  heroTitle: string;
  sectionTitle: string;
  cards: ServiceCard[];
  featuredProducts?: FeaturedProduct[];
  executive?: Executive;
  clients?: Client[];
  techPartners?: { heading: string; partners: TechPartner[]; };
  portfolioBanner?: { title: string; };
  roadmap?: { title: string; steps: RoadmapStep[]; };
  videoSection?: VideoSection;

  // 🆕 NEW — TRAINING SPECIFIC
  hasSubNav?: boolean;                     // enable sub-nav tabs
  customHero?: {                           // purple hero override
    title: string;
    subtitle: string;
    bgImage: string;
    variant: "purple" | "default";
  };
  courseFilter?: CourseFilterSection;      // filter + courses list
  instructorSection?: InstructorSection;   // become instructor content
}

export const servicesData: ServiceDetail[] = [
  // ============ CYBERSECURITY ============
  {
    slug: "network-security",
    category: "Cybersecurity",
    heroTitle: "Network Security",
    sectionTitle: "Our Network Security Services",
    cards: [
      {
        cardSlug: "network-visibility-operations",
        title: "Network Visibility Operations Services",
        description: "The SPS Network Visibility Operations Service suite offers three levels of service...",
        image: "/services/icon5.png",
        href: "#",
      },
      {
        cardSlug: "network-visibility-design",
        title: "Network Visibility Design & Implementation Services",
        description: "SPS will design and implement your network visibility infrastructure...",
        image: "/services/icon6.png",
        href: "#",
      },
      {
        cardSlug: "keysight-ixnetwork-training",
        title: "Keysight IxNetwork Training",
        description: "Talk to SPS about Keysight Training on Keysight's IxNetwork Testing System...",
        image: "/services/icon7.png",
        href: "#",
      },
    ],
    clients: [
      { name: "Allied Bank", image: "/customers/allied.webp" },
      { name: "Hamford", image: "/customers/CBC.webp" },
      { name: "Hickok Bank", image: "/customers/Keysight.webp" },
      { name: "MySide", image: "/customers/Trans.jpg" },
      { name: "NDC Tech", image: "/customers/unlv.webp" },
    ],
  },
  {
    slug: "smaas",
    category: "Cybersecurity",
    heroTitle: "SMaaS",
    sectionTitle: "Our SMaaS Services",
    cards: [
      {
        cardSlug: "security-monitoring",
        title: "24/7 Security Monitoring",
        description: "Continuous monitoring of your infrastructure round the clock...",
        image: "/services/icon8.png",
        href: "#",
      },
      {
        cardSlug: "incident-response",
        title: "Incident Response",
        description: "Rapid response to security incidents to minimize damage...",
        image: "/services/icon3.png",
        href: "#",
      },
    ],
    clients: [
      { name: "Allied Bank", image: "/customers/allied.webp" },
      { name: "Hamford", image: "/customers/CBC.webp" },
      { name: "Hickok Bank", image: "/customers/Keysight.webp" },
      { name: "MySide", image: "/customers/Trans.jpg" },
      { name: "NDC Tech", image: "/customers/unlv.webp" },
    ],
  },
  {
    slug: "grc",
    category: "Cybersecurity",
    heroTitle: "GRC",
    sectionTitle: "Our GRC Services",
    cards: [
      {
        cardSlug: "iso-27001",
        title: "ISO 27001",
        description: "Implementation and conducting an ISO 27001 internal audit enables you to assess your company's security equipment, systems, protocols, policies and procedures to ensure that they are in compliance with industry standards.",
        image: "/services/icon4.png",
        href: "#",
      },
      {
        cardSlug: "soc-2",
        title: "SOC 2",
        description: "SOC 2 is a voluntary compliance standard for service organizations developed by the American Institute of CPAs (AICPA), which specifies how organizations should manage customer data. The standard is based on the following Trust Services Criteria: security, availability, processing integrity, confidentiality, privacy.",
        image: "/services/icon2.png",
        href: "#",
      },
    ],
    clients: [
      { name: "MyChart", image: "/customers/allied.webp" },
      { name: "Hamford", image: "/customers/country.webp" },
      { name: "Hickok Bank", image: "/customers/totalvision.jpg" },
      { name: "NDC Tech", image: "/customers/unlv.webp" },
      { name: "ArQ IPS", image: "/customers/trans.jpg" },
    ],
  },
  {
    slug: "iam",
    category: "Cybersecurity",
    heroTitle: "Identity & Access",
    sectionTitle: "Our IAM Services",
    cards: [
      {
        cardSlug: "privileged-access-management",
        title: "Privileged Access Management",
        description: "SPS can help modernize your privilege account management architecture by leveraging SPS's architecture review and technology update services. This service includes health check, current architecture review, technology updates, and value assessment for your privilege account management systems. SPS specializes in IBM Security Verify Privilege and Tivoli Secret Server.",
        image: "/services/icon1.png",
        href: "#",
      },
      {
        cardSlug: "identity-access-management",
        title: "Identity & Access Management",
        description: "Modernize your access management architecture by leveraging SPS's architecture review and technology update services. This service includes health check, current architecture review, technology updates, and value assessment for your access management systems. SPS specializes in IBM Security Verify Access, IBM Security Access Manager, IBM Security Federated Identity Manager, and Okta Access.",
        image: "/services/icon11.png",
        href: "#",
      },
    ],
    clients: [
      { name: "Allied Bank", image: "/customers/askari.webp" },
      { name: "Hamford", image: "/customers/mychart.webp" },
      { name: "Sakartu", image: "/customers/country.webp" },
      { name: "UNLV", image: "/customers/unlv.webp" },
      { name: "Total Vision", image: "/customers/totalvision.jpg" },
    ],
  },
  {
    slug: "threat-management",
    category: "Cybersecurity",
    heroTitle: "Threat Management",
    sectionTitle: "Our Threat Management Services",
    cards: [
      {
        cardSlug: "vapt",
        title: "Vulnerability Assessment and Penetration Testing",
        description: "In this service, SPS cybersecurity assessment consultants conduct and document a formal Security Assessment, Vulnerability Assessment, Penetration Testing and Configuration Reviews for Information Security Assets. IT and OT with a view of identifying, estimating and prioritizing risks to which your organization's operations are exposed due to information security vulnerabilities.",
        image: "/services/icon1.png",
        href: "#",
      },
      {
        cardSlug: "soc-as-a-service",
        title: "SOC as a Service",
        description: "Security Operations Center as a Service (SOCaaS) provides continuous threat monitoring, detection, and expert response without the need to build your own SOC. Our scalable solution gives you access to cybersecurity professionals, real-time insights, and actionable guidance to protect your business from evolving threats.",
        image: "/services/icon11.png",
        href: "#",
      },
    ],
    clients: [
      { name: "Sakartu", image: "/customers/mychart.webp" },
      { name: "Total Vision", image: "/customers/totalvision.jpg" },
    ],
  },
  {
    slug: "data-security",
    category: "Cybersecurity",
    heroTitle: "Data Security",
    sectionTitle: "Our Data Security Services",
    cards: [
      {
        cardSlug: "architecture-review",
        title: "Architecture Review",
        description: "SPS provides architecture review and technology update on existing Guardium Data Protection, Guardium Data Encryption and Guardium Data Activity Monitoring deployment. This service helps customers realize more value by optimizing the architecture and leveraging new features of the product, potential upgrade to IBM Cloud Pak for Security/Data.",
        image: "/services/icon5.png",
        href: "#",
      },
      {
        cardSlug: "design-deployment",
        title: "Design & Deployment",
        description: "SPS can help customers implement Guardium Data Protection, Data Encryption and Data Activity Monitoring and achieve business outcomes using our proven skills and implementation methodology.",
        image: "/services/icon4.png",
        href: "#",
      },
      {
        cardSlug: "remote-monitoring-management",
        title: "Remote Monitoring, Management & Support",
        description: "SPS team can provide remote monitoring, management and production support for your Data Security systems and environments. As part of the service, we take the ownership of caring, feeding and growth of your data security systems including IBM Security Guardium for Data Protection, Data Encryption and Data/File Activity Monitoring.",
        image: "/services/icon3.png",
        href: "#",
      },
    ],
    clients: [
      { name: "Allied Bank", image: "/customers/askari.webp" },
      { name: "Sakartu", image: "/customers/CBC.webp" },
      { name: "Total Vision", image: "/customers/totalvision.jpg" },
      { name: "NDC Tech", image: "/customers/allied.webp" },
      { name: "ArQ IPS", image: "/customers/trans.jpg" },
    ],
  },

  // CLOUD 
  {
    slug: "devops",
    category: "Cloud",
    heroTitle: "DevOps",
    sectionTitle: "Our DevOps Services",
    cards: [
      {
        cardSlug: "cloud-application-development",
        title: "Cloud Application Development",
        description: "Cloud development services help clients develop and deploy applications based on the cloud leveraging mobility and platform technologies. We professionally design, redesign and continuously support customer...",
        image: "/services/devops-cloud-app.jpg",
        href: "#",
      },
      {
        cardSlug: "it-ops-and-support",
        title: "IT Ops and Support",
        description: "Effective management continues to be the key priority for most organizations as cloud adoption continues to rise. To address this challenge, organizations choose different ways to manage their cloud...",
        image: "/services/devops-it-ops.jpg",
        href: "#",
      },
    ],
    featuredProducts: [
      {
        title: "CSM",
        description: "We empower organizations to fortify their security management through our comprehensive CSM. Our approach is rooted in standardization, specifically around the NIST framework. CSM serves as a powerful tool to elevate your security posture, focusing on the critical domains of Identify, Protect, Detect, Respond, and Recover. Key Features of Our CSM Services: Maturity Augmentation: CSM enables organizations to enhance the maturity levels of People, Processes, and Technology, ensuring a holistic approach to cybersecurity that aligns with industry best practices.",
        image: "/services/service.jpg",
        href: "#",
      },
      {
        title: "HerDomain",
        description: "Herdomain is a non-profit working in South Asia and the Middle East to increase women's entry and advancement in the digital economy. We are committed to supporting women to earn a fair income, shape their communities and excel in their careers.",
        image: "/services/domain.png",
        href: "#",
        bgColor: "bg-cyan-100",
      },
    ],
    executive: {
      name: "Adnan",
      image: "/services/CEO.png",
      description: "Adnan is leading the Cloud Business Unit at SPS. He is responsible for business growth and taking advantage of the unprecedented opportunities available in cloud space. He also laid the foundation of four practices within the cloud group: Public Cloud, Hybrid Cloud, DevOps, and Cloud Classic. He is also providing leadership to internal Business Process Automation and IT Operations for SPS.",
      meetingLink: "#",
      sectionHeading: "Schedule a meeting with our DevOps Executive",
    },
    clients: [
      { name: "Sakartu", image: "/customers/Keysight.webp" },
      { name: "Total Vision", image: "/customers/totalvision.jpg" },
    ],
  },
  {
    slug: "migration",
    category: "Cloud",
    heroTitle: "Migration Services",
    sectionTitle: "Our Migration Services",
    cards: [
      {
        cardSlug: "migrate-vmware-to-cloud",
        title: "Migrate VMware Workload to Cloud",
        description: "SPS offers a seamless service for migrating VMware workloads to IBM Cloud, enabling scalability, flexibility, and cost-efficiency. Our tailored approach includes comprehensive assessment, offering...",
        image: "/services/migration-vmware.jpg",
        href: "#",
      },
      {
        cardSlug: "migrate-exchange-to-office365",
        title: "Migrate MS Exchange to office 365",
        description: "Move to Office 365 effortlessly with SPS. Our migration service ensures secure, minimal downtime transitions, so you can quickly unlock the collaboration and productivity benefits of Office 365. Let S...",
        image: "/services/migration-exchange.jpg",
        href: "#",
      },
      {
        cardSlug: "migrate-ibm-power-to-cloud",
        title: "Migrate IBM Power to Cloud",
        description: "SPS team can help our customers to Migrate IBM Power on-prem workload including applications, data, users, and network to Cloud...",
        image: "/services/migration-ibm-power.jpg",
        href: "#",
      },
    ],
    featuredProducts: [
      {
        title: "Microsoft 365",
        description: "Move to Office 365 effortlessly with SPS. Our migration service ensures secure, minimal downtime transitions, so you can quickly unlock the collaboration and productivity benefits of Office 365.",
        image: "/partners/microsoft.png",
        href: "#",
      },
      {
        title: "Microsoft Azure",
        description: "Migrate and manage your workloads on Microsoft Azure with our expert guidance. We provide comprehensive Azure migration and management services.",
        image: "/partners/aws.png",
        href: "#",
        bgColor: "bg-cyan-100",
      },
    ],
    executive: {
      name: "Adnan",
      image: "/services/CEO.png",
      description: "Adnan is leading the Cloud Business Unit at SPS. He is responsible for business growth and taking advantage of the unprecedented opportunities available in cloud space. He also laid the foundation of four practices within the cloud group: Public Cloud, Hybrid Cloud, DevOps, and Cloud Classic.",
      meetingLink: "#",
      sectionHeading: "Schedule a meeting with our Migration Executive",
    },
    clients: [
      { name: "Allied Bank", image: "/customers/allied.webp" },
      { name: "Hamford", image: "/customers/Trans.jpg" },
      { name: "Hickok Bank", image: "/customers/CBC.webp" },
      { name: "MySide", image: "/customers/totalvision.jpg" },
      { name: "NDC Tech", image: "/customers/Keysight.webp" },
    ],
  },

  // ============ AI & AUTOMATION ============
{
  slug: "automation",
  category: "AI & Automation",
  heroTitle: "Automation",
  sectionTitle: "Our Automation Services",
  cards: [
    {
      cardSlug: "aris-business-process-modeling",
      title: "Business Process Modeling Using ARIS",
      description: "ARIS, developed by Software AG, plays a pivotal role in business process modeling by offering a comprehensive suite of tools. It enables organizations to visually represent complex workflows, fostering a better understanding of processes among stakeholders...",
      image: "/services/icon1.png",
      href: "#",
    },
    {
      cardSlug: "webmethods-bpa",
      title: "Business Process Automation Using webMethods",
      description: "Business Process Automation (BPA) with webMethods is a transformative approach that leverages the webMethods integration platform to streamline and optimize organizational workflows...",
      image: "/services/icon2.png",
      href: "#",
    },
    {
      cardSlug: "appian-low-code",
      title: "Low-Code Application Development Using Appian",
      description: "Appian and automation team up to revolutionize how organizations create, deploy, and oversee applications. This synergy blends automation's efficiency in simplifying tasks with Appian's strong low-code platform...",
      image: "/services/icon3.png",
      href: "#",
    },
  ],
  techPartners: {
    heading: "Our Technology Partners",
    partners: [
      { name: "aws", image: "/partners/aws.png" },
      { name: "SAP", image: "/partners/sap.png" },
      { name: "google", image: "/partners/google.png" },
      { name: "Microsoft", image: "/partners/microsoft.png" },
      { name: "lenovo", image: "/partners/lenovo.png" },
      { name: "nutanix", image: "/partners/nutanix.png" },
    ],
  },
  portfolioBanner: {
    title: "OUR PORTFOLIO OF AUTOMATION SERVICES",
  },
  roadmap: {
    title: "Our AI software development roadmap:",
    steps: [
      { title: "Business context research", position: "top" },
      { title: "Q&A Sessions, workshops, user interviews", position: "bottom" },
      { title: "Customer data collection", position: "top" },
      { title: "Data exploration, enrichment, and analysis", position: "bottom" },
      { title: "Data preparation", position: "top" },
      { title: "Solution prototype", position: "bottom" },
      { title: "Model training", position: "top" },
      { title: "Model performance optimization", position: "bottom" },
      { title: "Model robustness increasing", position: "top" },
      { title: "Solution deployment", position: "bottom" },
    ],
  },
  videoSection: {
    title: "Future Proof Your Talent with the Power of AI",
    subtitle: "Software Productivity Strategists, Inc.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    thumbnail: "/services/ai-talent-thumbnail.jpg",
  },
   clients: [
    { name: "CBC", image: "/customers/CBC.webp" },
    { name: "allied", image: "/customers/allied.webp" },
    { name: "trans", image: "/customers/Trans.jpg" },
  ],
},
// DATA SCIENCE SERVICE - EXPANDED
{
  slug: "data-science",
  category: "AI & Automation",
  heroTitle: "Data Science",
  sectionTitle: "Our Data Science Services",
  cards: [
    {
      cardSlug: "generative-ai",
      title: "Generative AI",
      description: "Generative AI services help organizations leverage cutting-edge AI technologies to create, generate, and innovate. Our expert team builds intelligent systems that generate content, insights, and solutions using advanced machine learning models to drive business transformation and competitive advantage.",
      image: "/services/icon1.png",
      href: "#",
    },
    {
      cardSlug: "internet-of-things",
      title: "Internet of Things",
      description: "IoT solutions connect devices, systems, and data to create intelligent, responsive ecosystems. We design and implement IoT architectures that enable real-time monitoring, predictive analytics, and automation to optimize operations and unlock new business opportunities.",
      image: "/services/icon2.png",
      href: "#",
    },
    {
      cardSlug: "data-analytics",
      title: "Data Analytics",
      description: "Transform your data into actionable intelligence with our comprehensive data analytics services. We employ advanced statistical methods and visualization techniques to uncover patterns, trends, and insights that drive informed decision-making and business growth.",
      image: "/services/icon3.png",
      href: "#",
    },
    {
      cardSlug: "conversation-ai",
      title: "Conversation AI",
      description: "Conversation AI enables natural, intelligent interactions through chatbots, virtual assistants, and NLP-powered solutions. Our conversational AI systems understand context, learn from interactions, and provide personalized engagement to enhance customer experience.",
      image: "/services/icon4.png",
      href: "#",
    },
    {
      cardSlug: "image-recognition",
      title: "Image Recognition",
      description: "Leverage computer vision and image recognition technology to automate visual analysis and decision-making. Our solutions enable real-time image processing, object detection, and classification for applications across security, quality control, and intelligent systems.",
      image: "/services/icon5.png",
      href: "#",
    },
    {
      cardSlug: "data-management",
      title: "Data Management",
      description: "Establish robust data management frameworks that ensure data quality, governance, and accessibility. Our services cover data architecture, integration, warehousing, and lifecycle management to maximize the value of your data assets.",
      image: "/services/icon6.png",
      href: "#",
    },
  ],
   techPartners: {
    heading: "Our Technology Partners",
    partners: [
      { name: "aws", image: "/partners/aws.png" },
      { name: "SAP", image: "/partners/sap.png" },
      { name: "google", image: "/partners/google.png" },
      { name: "Microsoft", image: "/partners/microsoft.png" },
      { name: "lenovo", image: "/partners/lenovo.png" },
      { name: "nutanix", image: "/partners/nutanix.png" },
    ],
  },
  portfolioBanner: {
    title: "OUR PORTFOLIO OF AUTOMATION SERVICES",
  },
  roadmap: {
    title: "Our AI software development roadmap:",
    steps: [
      { title: "Business context research", position: "top" },
      { title: "Q&A Sessions, workshops, user interviews", position: "bottom" },
      { title: "Customer data collection", position: "top" },
      { title: "Data exploration, enrichment, and analysis", position: "bottom" },
      { title: "Data preparation", position: "top" },
      { title: "Solution prototype", position: "bottom" },
      { title: "Model training", position: "top" },
      { title: "Model performance optimization", position: "bottom" },
      { title: "Model robustness increasing", position: "top" },
      { title: "Solution deployment", position: "bottom" },
    ],
  },
  videoSection: {
    title: "Future Proof Your Talent with the Power of AI",
    subtitle: "Software Productivity Strategists, Inc.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    thumbnail: "/services/ai-talent-thumbnail.jpg",
  },
  clients: [
    { name: "CBC", image: "/customers/CBC.webp" },
    { name: "allied", image: "/customers/allied.webp" },
    { name: "trans", image: "/customers/Trans.jpg" },
  ],
},

// ============ COLLABORATION - UPDATED DATA ============

{
  slug: "training",
  category: "Collaboration",
  heroTitle: "Training",
  sectionTitle: "Our Training Programs",
  cards: [], 
  hasSubNav: true,
  customHero: {
    title: "TRAINING AND CERTIFICATIONS",
    subtitle: "Grow Your IT & Business Skills & Get Certified",
    bgImage: "/Hero/Hero3.jpg",
    variant: "purple",
  },
  courseFilter: {
    providers: [
      { name: "AWS", image: "/partners/aws.png", value: "aws" },
      { name: "Cloudera", image: "/partners/cisco.png", value: "cisco" },
      { name: "Fortinet", image: "/partners/imperva.png", value: "fortinet" },
      { name: "Google", image: "/partners/google.png", value: "google" },
      { name: "IBM", image: "/partners/ibm.png", value: "ibm" },
      { name: "Linux Foundation", image: "/partners/juniper.png", value: "juniper" },
      { name: "Microsoft", image: "/partners/microsoft.png", value: "microsoft" },
      { name: "Nutanix", image: "/partners/nutanix.png", value: "nutanix" },
      { name: "Red Hat", image: "/partners/redhat.png", value: "redhat" },
      { name: "Salesforce", image: "/partners/snowflake.png", value: "snowflake" },
      { name: "SAP", image: "/partners/sap.png", value: "sap" },
    ],
    courses: [

    ],
  },

  instructorSection: {
    heroTitle: "Become a Instructor",
    heroDescription:
      "SPS Instructor Network is comprised of professionals across hundreds of technology disciplines from around the world.",
    heroBgImage: "/Hero/Hero3.jpg",
    ctaText: "Sign up Now",
    introHeading:
      "SPS is looking to continue meeting experienced and talented individuals with proven experience with both technology and instructional acumen.",
    introParagraphs: [
      "We offer numerous Train-the-Trainer (T3) certification paths to expand your training capabilities in various technology areas.",
      "If you are interested in becoming a member of our Instructor Network, please complete our sign-up form, and we will reach out to you to schedule an initial call.",
      "We're also certified training partners with some of the world's leading technology brands, such as:",
    ],
    partners: [
      { name: "AWS Partner Network", image: "/partners/aws.png" },
      { name: "Google Cloud Partner", image: "/partners/google.png" },
      { name: "IBM Business Partner", image: "/partners/ibm.png" },
      { name: "Microsoft Gold Partner", image: "/partners/microsoft.png" },
      { name: "Red Hat Training Partner", image: "/partners/redhat.png" },
      { name: "Apple Training Provider", image: "/partners/google.png" },
    ],
  },
},

// EVENTS SERVICE - UPDATED
{
  slug: "events",
  category: "Collaboration",
  heroTitle: "Events",
  sectionTitle: "Our Events Services",
  cards: [
    {
      cardSlug: "events-services",
      title: "Events Services",
      description: "When you need to hold secure classes, virtual meetings, or meet with your peers in a collaborative environment with minimal stumbling at a minimal cost, our Events Services team helps you to execute a sleek and professional virtual event.",
      image: "/services/icon-events.png",
      href: "#",
    },
    {
      cardSlug: "virtual-platform-training",
      title: "Virtual Platform Training",
      description: "When you need to train your training on the features and functions of your Virtual Platform, we will understand your requirements and assist to ensure all bases are covered and set you up for a successful virtual learning experience.",
      image: "/services/icon-virtual-platform.png",
      href: "#",
    },
    {
      cardSlug: "recording-and-editing",
      title: "Recording & Editing",
      description: "In today's fast-paced work environment, teams, customers, and partners may not have the budget or time to physically attend scheduled corporate, training, or professional development events. We can work with your team to ensure that critical events and materials are recorded and conveniently accessible.",
      image: "/services/icon-recording.png",
      href: "#",
    },
  ],
    videoSection: {
    title: "Future Proof Your Talent with the Power of AI",
    subtitle: "Software Productivity Strategists, Inc.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    thumbnail: "/services/ai-talent-thumbnail.jpg",
  },  
  clients: [
    { name: "Allied Bank", image: "/customers/allied.webp" },
    { name: "MyChart", image: "/customers/mychart.webp" },
    { name: "Sakartu", image: "/customers/unlv.webp" },
  ],
},

  // ============ TRAINING PROGRAMS ============
  {
    slug: "sps-oil-gas",
    category: "Training",
    heroTitle: "SPS Oil & Gas",
    sectionTitle: "Our Oil & Gas Training Programs",
    cards: [
      {
        cardSlug: "industry-specific-certification",
        title: "Industry-Specific Certification",
        description: "Specialized training programs for the oil & gas sector...",
        image: "/services/oil-gas-training.jpg",
        href: "#",
      },
    ],
    clients: [
      { name: "Hickok Bank", image: "/customers/hickok-bank.jpg" },
      { name: "MySide", image: "/customers/mysh.jpg" },
      { name: "Sakartu", image: "/customers/sakartu.jpg" },
    ],
  },
  {
    slug: "ibm",
    category: "Training",
    heroTitle: "IBM",
    sectionTitle: "Our IBM Training Programs",
    cards: [
      {
        cardSlug: "ibm-certification-courses",
        title: "IBM Certification Courses",
        description: "Get certified in IBM technologies with expert-led training...",
        image: "/services/ibm-training.jpg",
        href: "#",
      },
    ],
    clients: [
      { name: "Allied Bank", image: "/customers/allied.jpg" },
      { name: "NDC Tech", image: "/customers/ndctech.jpg" },
      { name: "ArQ IPS", image: "/customers/arqips.jpg" },
    ],
  },
  {
    slug: "google",
    category: "Training",
    heroTitle: "Google",
    sectionTitle: "Our Google Training Programs",
    cards: [
      {
        cardSlug: "google-cloud-certification",
        title: "Google Cloud Certification",
        description: "Master Google Cloud tools and get certified...",
        image: "/services/google-training.jpg",
        href: "#",
      },
    ],
    clients: [
      { name: "Hamford", image: "/customers/hamford.jpg" },
      { name: "UNLV", image: "/customers/unlv.jpg" },
      { name: "Total Vision", image: "/customers/totalvision.jpg" },
    ],
  },
  {
    slug: "aws",
    category: "Training",
    heroTitle: "AWS",
    sectionTitle: "Our AWS Training Programs",
    cards: [
      {
        cardSlug: "aws-certification-path",
        title: "AWS Certification Path",
        description: "Comprehensive AWS training from beginner to advanced level...",
        image: "/services/aws-training.jpg",
        href: "#",
      },
    ],
    clients: [
      { name: "MyChart", image: "/customers/mychart.jpg" },
      { name: "Sakartu", image: "/customers/sakartu.jpg" },
      { name: "UNLV", image: "/customers/unlv.jpg" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}