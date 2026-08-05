// lib/activities-data.ts

export interface Person {
  name: string;
  title: string;
  organization: string;
  image: string;
  linkedIn?: string;
}

export interface FutureTopic {
  title: string;
}

export interface BulletItem {
  bold?: string;      // e.g. "Frequency:"
  text: string;       // e.g. "3rd Thursday of every month"
}

export interface AgendaItem {
  text: string;
}

export interface Roundtable {
  slug: string;                        // e.g. "viso-virginia"
  category: string;                    // "Roundtables"
  categorySlug: string;                // "roundtables"

  // Hero
  title: string;                       // "VISO Roundtable Series"
  subtitle: string;                    // "for Virginia Information Security Officers"
  host: Person;
  coHost?: Person;
  topic: string;
  date: string;                        // "Thursday, July 16th, 2026"
  eventDate: string;                   // ISO format for countdown: "2026-07-16T13:00:00-04:00"
  time: string;                        // "1:00 PM - 2:00 PM Eastern"
  heroBackground: string;              // background image
  futureTopics: FutureTopic[];

  // Content
  aboutTitle: string;                  // "About Roundtable"
  aboutDescription: string;            // Long text
  quickInfo: BulletItem[];             // Frequency, Start Date, Format
  whyAttendTitle: string;              // "Why Attend"
  whyAttendIntro: string;              // "It is a peer collaboration..."
  whyAttendPoints: string[];
  goalsTitle: string;                  // "Goals and Objectives"
  goals: BulletItem[];
  agendaTitle: string;                 // "Agenda"
  agenda: AgendaItem[];
  whoShouldJoinTitle: string;
  whoShouldJoin: BulletItem[];
  idealParticipantsTitle: string;
  idealParticipantsText: string;
}

// ============ DATA ============
export const roundtables: Roundtable[] = [
  {
    slug: "viso-virginia",
    category: "Roundtables",
    categorySlug: "roundtables",

    // Hero
    title: "VISO Roundtable Series",
    subtitle: "for Virginia Information Security Officers",
    host: {
      name: "Dave Shure",
      title: "Information Security Officer",
      organization: "Virginia Department of Small Business and Supplier Diversity",
      image: "/host/host1.jpg",
      linkedIn: "https://linkedin.com/in/daveshure",
    },
    coHost: {
      name: "Nouman Abbasi",
      title: "Sr VP, Professional Services",
      organization: "Software Productivity Strategists, Inc.",
      image: "/host/host2.jpg",
      linkedIn: "https://linkedin.com/in/noumanabbasi",
    },
    topic: "Configuration Management",
    date: "Thursday, July 16th, 2026",
    eventDate: "2026-07-16T13:00:00-04:00",
    time: "1:00 PM - 2:00 PM Eastern",
    heroBackground: "/activities/roundtable-hero.jpg",
    futureTopics: [
      { title: "Onboarding" },
      { title: "Audit Readiness and Compliance Artifacts" },
      { title: "Security Controls Implementation & Monitoring" },
      { title: "Incident Response" },
      { title: "Disaster Recovery" },
      { title: "Business Continuity" },
    ],

    // Content
    aboutTitle: "About Roundtable",
    aboutDescription:
      "SPS is hosting a monthly Information Security Officer Roundtable for the Commonwealth of Virginia, bringing together cybersecurity leaders across state and local government to collaborate, share, and strengthen collective security posture. This invite-only forum will be led by Dave Shure, Information Security Officer for the Virginia Department of Small Business and Supplier Diversity (SBSD), who has led SBSD's journey toward compliance with SEC530 and NIST 800-53 Control Framework.",
    quickInfo: [
      { bold: "Frequency:", text: "3rd Thursday of every month" },
      { bold: "Start Date:", text: "July 16th, 2026" },
      { bold: "Format:", text: "Virtual (Microsoft Teams)" },
    ],
    whyAttendTitle: "Why Attend",
    whyAttendIntro: "It is a peer collaboration forum. Participants will:",
    whyAttendPoints: [
      "Benchmark their security maturity against peers",
      "Gain actionable templates and artifacts",
      "Learn directly from practitioners—not consultants",
      "Contribute to improving cybersecurity across Virginia",
    ],
    goalsTitle: "Goals and Objectives",
    goals: [
      {
        bold: "Strengthen Cybersecurity Posture",
        text: "- Improve resilience across Virginia state and local agencies",
      },
      {
        bold: "Accelerate SEC530 & NIST Cybersecurity Framework (CSF) Alignment",
        text: "- Share practical, audit-ready approaches",
      },
      {
        bold: "Promote Reusable Artifacts",
        text: "- Leverage shared policies, templates, and best practices",
      },
      {
        bold: "Enable Peer Collaboration",
        text: "- Foster open dialogue, benchmarking, and problem-solving",
      },
      {
        bold: "Enhance Audit Readiness",
        text: "- Move toward proactive, compliance-driven operations",
      },
      {
        bold: "Address Emerging Threats",
        text: "- Collaborate on evolving risks and response strategies",
      },
    ],
    agendaTitle: "Agenda",
    agenda: [
      { text: "Real-world implementation challenges" },
      { text: "Lessons learned from achieving compliance" },
      { text: "Practical strategies for audit readiness" },
      { text: "Framework alignment approaches (SEC530, NIST)" },
      { text: "Peer-driven discussion on emerging threats and solutions" },
    ],
    whoShouldJoinTitle: "Who should join",
    whoShouldJoin: [
      {
        bold: "Chief Information Security Officers (CISOs) and Information Security Officers (ISOs)",
        text: "across Virginia state agencies",
      },
      {
        bold: "County and Municipal IT & Security Leaders",
        text: "responsible for cybersecurity and compliance",
      },
      {
        bold: "Risk, Compliance, and Governance Professionals",
        text: "aligned with SEC530 and NIST Cybersecurity Framework (CSF)",
      },
      {
        bold: "IT Directors and Technology Leaders",
        text: "overseeing security operations and infrastructure",
      },
      {
        bold: "Security Architects and Program Managers",
        text: "involved in implementing cybersecurity frameworks",
      },
    ],
    idealParticipantsTitle: "Ideal Participants",
    idealParticipantsText:
      "This roundtable is designed for decision-makers and practitioners who are directly responsible for improving cybersecurity posture, managing compliance, and leading security initiatives within the Virginia state and local government.",
  },
];

// ============ HELPERS ============
export function getRoundtableBySlug(slug: string) {
  return roundtables.find((r) => r.slug === slug);
}

export function getAllRoundtableSlugs() {
  return roundtables.map((r) => ({ slug: r.slug }));
}