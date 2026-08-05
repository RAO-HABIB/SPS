export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  subSections?: {
    subHeading?: string;
    text?: string;
    bulletPoints?: string[];
  }[];
  image?: string;
}

export interface PricingTableRow {
  tier: string;
  description: string;
  oneDataCenter: string;
  twoToTenDataCenters: string;
  moreThanTenDataCenters: string;
}

export interface FeatureMatrixItem {
  feature: string;
  standard: "yes" | "no" | "partial";
  advance: "yes" | "no" | "partial";
  premium: "yes" | "no" | "partial";
}

export interface FeatureMatrixCategory {
  category: string;
  items: FeatureMatrixItem[];
}

export interface FeatureMatrix {
  plans: {
    name: string;
    subtitle: string;
  }[];
  categories: FeatureMatrixCategory[];
}

export interface CardDetail {
  cardSlug: string;
  serviceSlug: string;
  category: string;
  cardTitle: string;
  cardDescription: string;
  mainTitle?: string;
  featureMatrix?: FeatureMatrix; // Cleaned from 'any' to explicitly typed
  sections?: ContentSection[];    // Cleaned from inline declaration
  pricingTable?: PricingTableRow[]; // Cleaned from 'any[]' to explicitly typed
  supportedPlatforms?: string[];
}


export const cardDetailsData: CardDetail[] = [
  // 1️⃣ Card 1: Network Visibility Operations
  {
    serviceSlug: "network-security",
    cardSlug: "network-visibility-operations",
    cardTitle: "Network Visibility Operations Services",
    cardDescription:
      "The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments: 1) Basic Health Check; 2) Configuration Review & Testing; 3) Comprehensive Documentation and Training",
    category: "Cybersecurity",
    mainTitle: "SPS NETWORK VISIBILITY OPERATIONS SERVICES:",
    sections: [
      {
        heading: "BASIC HEALTH CHECK:",
        paragraphs: [
          "SPS will review your network visibility solutions support documentation (run book) and diagrams. This will enable a validation of your network packet broker and/or bypass switches solution with respect to your network environment and security infrastructure.",
          "This service includes assistance with license file and software/firmware updates. In addition, we will review the configuration of NTP, Syslog, SNMP, and authentication services.",
        ],
        image: "/card/health.png",
      },
      {
        heading: "CONFIGURATION REVIEW & TESTING:",
        paragraphs: [
          "With this second-tier service, SPS will help you optimize your existing configuration. We will:",
        ],
        bulletPoints: [
          "Validate physical cabling against diagrams and documentation.",
          "Update aggregation, filtering, and load balancing configurations, adding any new networks and/or protocols requiring security inspection, and removing such criteria that no longer exist in your environment.",
          "Review your configuration with respect to your TLS/SSL decryption services.",
        ],
        subSections: [
          {
            subHeading: "SPS will help you design and generate test traffic to validate the following:",
            bulletPoints: [
              "your security inspection and monitoring capability.",
              "network connectivity.",
              "application performance.",
            ],
          },
          
        ],
        image: "/card/cyber.png",
      },
      {
        heading: "COMPREHENSIVE DOCUMENTATION AND TRAINING:",
        paragraphs: [
          "As a top-level service, SPS will re-document and re-diagram your network visibility infrastructure, consolidating and summarizing where possible to eliminate redundancies. This documentation includes failure scenarios and remedies, demonstrates the value of bypass switches and inline high availability (HA) configurations, as well as an overview of any network packet broker (NPB) advanced features. Advanced end-user training sessions are offered for an additional charge.",
        ],
      },
    ],
    pricingTable: [
      {
        tier: "Level 1: Basic Health Check",
        description: "Documentation review, software and license updates, syslog and SNMP validation, authentication set-up",
        oneDataCenter: "$2k",
        twoToTenDataCenters: "$4k",
        moreThanTenDataCenters: "$6k",
      },
      {
        tier: "Level 2: Configuration Review & Testing",
        description: "Network packet broker (NPB) configuration validation and testing, post-testing recommendations, and best-practices summary",
        oneDataCenter: "$30k",
        twoToTenDataCenters: "$60k",
        moreThanTenDataCenters: "$90k",
      },
      {
        tier: "Level 3: Comprehensive Documentation & Training",
        description: "Re-document and re-diagram network visibility infrastructure, outline failure scenarios and remedies, and demonstrate benefits of bypass switches, HA, and advanced features; advanced end-user training for an additional charge",
        oneDataCenter: "$10k",
        twoToTenDataCenters: "$15k",
        moreThanTenDataCenters: "$20k",
      },
    ],
    supportedPlatforms: ["Keysight", "Gigamon"],
  },

  // 2️⃣ Card 2: Network Visibility Design
  {
    serviceSlug: "network-security",
    cardSlug: "network-visibility-design",
    cardTitle: "Network Visibility Design & Implementation Services",
    cardDescription:
      "SPS will design and implement your network visibility infrastructure to ensure complete visibility of your network traffic, enabling effective monitoring and security operations.",
    category: "Cybersecurity",
    mainTitle: "SPS NETWORK VISIBILITY DESIGN & IMPLEMENTATION SERVICES:",
    sections: [
      {
        heading: "DESIGN PHASE:",
        paragraphs: [
          "SPS will work closely with your team to understand your network topology, security requirements, and monitoring goals. Based on this, we will design a network visibility architecture that includes packet brokers, bypass switches, and TAP solutions optimized for your environment.",
        ],
        image: "/card/security.png",
      },
      {
        heading: "IMPLEMENTATION:",
        paragraphs: [
          "Our expert engineers will deploy the designed solution with minimum disruption to your operations. We will:",
        ],
        bulletPoints: [
          "Install and configure network packet brokers and bypass switches.",
          "Set up filtering, aggregation, and load balancing rules.",
          "Integrate with existing security and monitoring tools.",
          "Conduct thorough testing to ensure optimal performance.",
        ],
      },
      {
        heading: "POST-IMPLEMENTATION SUPPORT:",
        paragraphs: [
          "After deployment, SPS provides documentation, training, and ongoing support to ensure your team can effectively manage the new visibility infrastructure.",
        ],
      },
    ],
    supportedPlatforms: ["Keysight", "Gigamon", "Ixia"],
  },

  // 3️⃣ Card 3: Keysight Training
  {
    serviceSlug: "network-security",
    cardSlug: "keysight-ixnetwork-training",
    cardTitle: "Keysight IxNetwork Training",
    cardDescription:
      "Talk to SPS about Keysight Training on Keysight's IxNetwork Testing System. Our expert-led training programs will empower your team with the skills to effectively use IxNetwork for network testing and validation.",
    category: "Cybersecurity",
    mainTitle: "KEYSIGHT IXNETWORK TRAINING PROGRAMS:",
    sections: [
      {
        heading: "BEGINNER LEVEL:",
        paragraphs: [
          "Introduction to Keysight IxNetwork platform, basic configuration, and running your first network test. Ideal for teams new to network testing.",
        ],
        bulletPoints: [
          "Overview of IxNetwork architecture and components.",
          "Setting up test environments.",
          "Running basic traffic tests.",
        ],
      },
      {
        heading: "ADVANCED LEVEL:",
        paragraphs: [
          "Deep dive into advanced features, protocol emulation, and performance analysis. Designed for experienced network engineers.",
        ],
        bulletPoints: [
          "Advanced protocol emulation (BGP, OSPF, MPLS, etc.).",
          "Performance and scalability testing.",
          "Troubleshooting complex scenarios.",
          "Custom test automation with Tcl/Python scripting.",
        ],
      },
      {
        heading: "CERTIFICATION:",
        paragraphs: [
          "Participants receive an official SPS Training Completion Certificate upon successful completion of the course.",
        ],
      },
    ],
    supportedPlatforms: ["Keysight IxNetwork", "Keysight IxLoad"],
  },

  // 4️⃣ Card 4: SOC as a Service
  {
    serviceSlug: "threat-management",
    cardSlug: "soc-as-a-service",
    cardTitle: "SOC as a Service",
    cardDescription:
      "Security Operations Center as a Service (SOCaaS) provides continuous threat monitoring, detection, and expert response without the need to build your own SOC. Our scalable solution gives you access to cybersecurity professionals, real-time insights, and actionable protection.",
    category: "Cybersecurity",
    mainTitle: "SECURITY OPERATIONS CENTER AS A SERVICE (SOCaaS)",
    featureMatrix: {
      plans: [
        { name: "Standard", subtitle: "SOCaaS Managed Service Pricing" },
        { name: "Advance", subtitle: "XDR + EDR Testing and Response Service" },
        { name: "Premium", subtitle: "XDR + EDR Testing & Response Service with Threat Hunting, Brand Threat Intel" },
      ],
      categories: [
        {
          category: "Monitoring & Investigation",
          items: [
            { feature: "24x7 L1 & L2 Operations", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Alert Triage", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Detailed Investigations", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Ticketing", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Inter-Team Consultations", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "SOC & Tier Escalation", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "SOC Mitigation & SCN Tuning", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Custom Rule Playbooks", standard: "partial", advance: "yes", premium: "yes" },
            { feature: "Automated Triage", standard: "no", advance: "yes", premium: "yes" },
            { feature: "Security Automation & Orchestration", standard: "no", advance: "yes", premium: "yes" },
          ],
        },
        {
          category: "Coverage",
          items: [
            { feature: "Network Coverage", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Endpoint Coverage", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Logs Ingest & Validate Infrastructure", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Custom Log Parsing / Ingestion", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "On-prem Cloud Infrastructure", standard: "yes", advance: "yes", premium: "yes" },
          ],
        },
        {
          category: "Detection",
          items: [
            { feature: "Baseline Behavior Analysis", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Advanced Detection & Rule Creation", standard: "no", advance: "yes", premium: "yes" },
            { feature: "Customer-Specific Rule Creation", standard: "no", advance: "no", premium: "yes" },
            { feature: "Automated Rules Deployment via CICD/Tf", standard: "no", advance: "no", premium: "yes" },
          ],
        },
        {
          category: "Response",
          items: [
            { feature: "Analyst Response", standard: "no", advance: "no", premium: "yes" },
            { feature: "P1 Team Response", standard: "no", advance: "no", premium: "yes" },
            { feature: "Automated Response", standard: "no", advance: "no", premium: "yes" },
          ],
        },
        {
          category: "Incident Response",
          items: [
            { feature: "Incident Response (24 Hours/Quarterly)", standard: "no", advance: "no", premium: "yes" },
            { feature: "Adversary Simulation", standard: "no", advance: "no", premium: "yes" },
            { feature: "Incident Readiness Review", standard: "no", advance: "no", premium: "yes" },
          ],
        },
        {
          category: "Threat Intelligence",
          items: [
            { feature: "Automated Industry Specific Threat Intel", standard: "no", advance: "no", premium: "yes" },
            { feature: "Automated IOC & C2 Management", standard: "no", advance: "no", premium: "yes" },
            { feature: "VIP/CTI", standard: "no", advance: "no", premium: "yes" },
            { feature: "Investigation-Based Threat Intelligence Generation", standard: "no", advance: "no", premium: "yes" },
          ],
        },
        {
          category: "Reporting",
          items: [
            { feature: "Executive Reports (Monthly)", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Summary Threat Reports (Daily)", standard: "yes", advance: "yes", premium: "yes" },
            { feature: "Automated Reporting", standard: "yes", advance: "yes", premium: "yes" },
          ],
        },
        {
          category: "Threat Hunting",
          items: [
            { feature: "Hypothesis Threat Hunting", standard: "no", advance: "no", premium: "yes" },
            { feature: "External Attack Surface Mapping", standard: "no", advance: "no", premium: "yes" },
            { feature: "Darknet & DarkWeb Monitoring", standard: "no", advance: "no", premium: "yes" },
            { feature: "Advanced Threat Hunting Triggers", standard: "no", advance: "no", premium: "yes" },
            { feature: "Unscheduled Threat Identification", standard: "no", advance: "no", premium: "yes" },
          ],
        },
      ],
    },
    sections: [
      {
        heading: "Why organizations fail when the Threat is so close?",
        paragraphs: [
          "Organizations struggle to operate security operations center 24x7 full time directly and even traditional cybersecurity tools monitoring and threat operations in an effective manner 24/7 because they do not have internal dedicated teams for product, troubleshooting, and expertise required. Handling security operations in-house leads to high costs and operational constraints like high turnover, lack of expert tools and skills needed to respond effectively to cyber threats in real time.",
          "Shortages of cybersecurity talent and high entry costs make maintaining an in-house SOC impractical. SPS SOCaaS eliminates these barriers by providing continuous threat monitoring, rapid response, and deep domain expertise without capital expenditure.",
        ],
        image: "/Hero/frame-hero.png",
      },
      {
        heading: "We've Got You Covered!",
        paragraphs: [
          "Delivery at SPS: For over 20 years, we have provided organizations around the world with the expertise, solutions, and operational continuity needed for complete peace of mind. We have served as your Security Operations Center as a Service to protect hundreds of small, medium, and large enterprises from high-risk breaches and keep SOC operations running smoothly.",
        ],
        image: "/Hero/frame-hero.png",
      },
      {
        heading: "SOCaaS Salient Features:",
        bulletPoints: [
          "24/7 Monitoring & Real-time Threat Alert Triage",
          "Joint Investigation, Management Escalations, and Incident Mitigation",
          "SIEM/SOAR Optimization, Rule Management, and Visibility Alignment",
          "Triage, Investigation, Reporting, and Response",
          "Root Cause Analysis and Post-Incident Threat Containment",
          "Detailed Threat Hunting capabilities",
          "Infrastructure Management against Non-Existent and Existing Threats",
          "Playbook Creation and Security Automation",
          "Monthly & Executive Summary Reports",
          "Direct Executive and Incident Response Support",
        ],
        image: "/Hero/frame-hero.png",
      },
      {
        heading: "SOCaaS Distinctive Features:",
        paragraphs: [
          "Security Operations Center as a Service combines domain expertise, threat hunting, and automated Playbooks on our platform. We integrate directly with customer environments to mitigate threats in real time.",
        ],
        bulletPoints: [
          "We help you optimize your existing SIEM / SOAR infrastructure for maximum threat visibility.",
          "Expert level incident response and threat intelligence tailored to your organization.",
          "Continuous validation and automated playbooks for immediate containment.",
        ],
        image: "/Hero/frame-hero.png",
      },
      {
        heading: "WHY US?",
        paragraphs: [
          "Are you waiting for an alert or incident before taking action? Or are you trying to find potential risks in your infrastructure to mitigate them before the attacker exploits them? Cybersecurity threats require expert threat monitoring, detection, and response capability. SPS provides end-to-end SOC capabilities so you can focus on growing your business.",
        ],
        image: "/Hero/frame-hero.png",
      },
    ],
  },

  // 5️⃣ Card 5 — Vulnerability Assessment and Penetration Testing (VAPT)
  {
    serviceSlug: "threat-management",
    cardSlug: "vapt",
    cardTitle: "Vulnerability Assessment and Penetration Testing",
    cardDescription:
      "In this service, SPS cybersecurity assessment consultants conduct and document a formal Security Assessment, Vulnerability Assessment, Penetration Testing and Configuration Reviews for Information Security Assets (IT and OT) with a view of identifying, estimating and prioritizing risks to which your organization's operations are exposed due to information security vulnerabilities.",
    category: "Cybersecurity",
    mainTitle: "Vulnerability Assessment and Penetration Testing",
    sections: [
      {
        heading: "External / Internal Network Penetration Testing:",
        paragraphs: [
          "Our network penetration testing services replicate real-world attack scenarios to evaluate the security of your internal and external networks. By identifying vulnerabilities, misconfigurations, and unauthorized access points, we help safeguard your infrastructure from both insider threats and external cyberattacks."
        ],
        image: "/services/Vapt1.jpg" 
      },
      {
        heading: "Web and Mobile Application Penetration Testing:",
        paragraphs: [
          "We conduct web application penetration testing and mobile app penetration testing to detect vulnerabilities such as SQL injection, cross-site scripting (XSS), insecure authentication, and data exposure. Our goal is to ensure your applications remain secure, resilient, and compliant with industry standards."
        ],
        image: "/services/vapt2.webp"
      },
      {
        heading: "Desktop Application Penetration Testing:",
        paragraphs: [
          "Our desktop application security testing identifies flaws in standalone and enterprise software that could allow unauthorized access or data theft. We assess memory corruption risks, insecure coding practices, and privilege escalations to keep your business-critical applications protected."
        ],
        image: "/services/vapt3.jpg"
      },
      {
        heading: "Active Directory Penetration Testing:",
        paragraphs: [
          "We perform Active Directory penetration testing to identify misconfigurations, weak credentials, and privilege escalation opportunities within your AD environment. This helps reduce attack surfaces and strengthen the backbone of your enterprise IT infrastructure."
        ],
        image: "/services/vapt4.webp"
      },
      {
        heading: "Cloud Security Assessment Questionnaire:",
        paragraphs: [
          "Our cloud security assessments evaluate your cloud platforms and services against compliance benchmarks and security practices. By identifying misconfigurations and gaps in security controls, we help you mitigate risks specific to cloud environments like AWS, Azure, and Google Cloud."
        ],
        image: "/services/vapt6.png"
      },
      {
        heading: "Social Engineering Testing:",
        paragraphs: [
          "Human behavior remains a top cybersecurity risk. Through social engineering assessments including phishing simulations, pretexting, and impersonation attacks, we measure employee awareness and build resilience against manipulation tactics used by cybercriminals..."
        ],
        image: "/services/vapt5.png"
      }
    ]
  }
];

export function getCardDetail(serviceSlug: string, cardSlug: string) {
  return cardDetailsData.find(
    (c) => c.serviceSlug === serviceSlug && c.cardSlug === cardSlug
  );
}

export function getAllCardParams() {
  return cardDetailsData.map((c) => ({
    slug: c.serviceSlug,
    cardSlug: c.cardSlug,
  }));
}