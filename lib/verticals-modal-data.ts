// lib/vertical-modals-data.ts

export interface ModalSolutionDetail {
  title: string;
  overview: string;
  benefits: string[];
  diagramImage: string; // Dynamic diagram image path
}

export interface VerticalModalData {
  category: string;
  solutions: ModalSolutionDetail[];
}

export const verticalModalsData: Record<string, VerticalModalData> = {
  government: {
    category: "Government",
    solutions: [
      {
        title: "Access Control",
        overview: "Keys are a symbol of safety and security, but they can easily end up in the wrong hands or be copied. This solution creates a safe and secure environment that allows authorized people in and keeps uninvited people out. This system features two-way audio communication.",
        benefits: [
          "Efficient and scalable way to manage access to your premises.",
          "Non-proprietary and easy connection to your existing IP network.",
          "Easy installation and PoE powered devices.",
          "Remotely monitor and manage access to site.",
        ],
        diagramImage: "/verticals/modal1.jpg",// <--- Change with your local image
      },
      {
        title: "Body Worn Camera Solution",
        overview: "Our robust body-worn camera solution provides high-definition recording, secure metadata storage, and audit trails to keep law enforcement officers and citizens safe, ensuring transparency and trust during operations.",
        benefits: [
          "12+ hours continuous high-definition recording.",
          "Automatic triggers linked to dispatch or weapon draw.",
          "Tamper-proof, secure cloud-based video management.",
        ],
        diagramImage: "/verticals/modal1.jpg", // <--- Change with your local image
      },
    ],
  },
  education: {
    category: "Education",
    solutions: [
      {
        title: "Viewboard for Education",
        overview: "The ViewSonic ViewBoard, an interactive flat panel display, now comes integrated with Intel Unite solution. This solution allows users to collaborate not only in the classroom or meeting room but also allows users to connect and interact with whiteboard content in real time, a very useful tool for online students. Users can walk into a classroom and wirelessly share their mobile device's screen content.",
        benefits: [
          "Bring convenience and flexibility to learning.",
          "Promote collaboration by allowing users to connect and interact with whiteboard content in real-time, from any location.",
          "Encourage creativity among multiple users simultaneously with an interactive experience.",
        ],
        diagramImage: "/verticals/modal1.jpg", // <--- Change with your local image
      },
      {
        title: "Safer Schools",
        overview: "Ensure maximum safety on campus utilizing advanced sensor technologies, immediate dynamic locks, automatic alerts linked directly to emergency dispatch systems.",
        benefits: [
          "Instant active lockdown activation via mobile or desktop dashboards.",
          "Real-time visual monitoring feed integrated into local emergency dispatch systems.",
          "Non-proprietary integration with legacy physical locks and alarms.",
        ],
        diagramImage: "/verticals/modal1.jpg", // <--- Change with your local image
      },
      {
        title: "Student Tracking and Wi-Fi for School Buses",
        overview: "Keep students secure from departure to arrival. Track transit locations, optimize bus routes, and provide filtered secure high-speed Wi-Fi to keep learning active during daily travel.",
        benefits: [
          "Live GPS coordinates and status updates for parents.",
          "Integrated secure web filtering compliant with children-safety mandates.",
          "Dynamic routing analytics to save fuel and operational time.",
        ],
        diagramImage: "/verticals/modal1.jpg", // <--- Change with your local image
      },
      {
        title: "Vaping Detection",
        overview: "Identify silent health hazards on campus. Environmental multi-sensor modules detect vaping, smoke, and loud, aggressive behavior in restricted spaces, like bathrooms and locker rooms.",
        benefits: [
          "Immediate and silent SMS/Email notifications to campus staff.",
          "High accuracy sensor prevents false alarms from steam.",
          "Additional sound level monitoring to alert staff in case of physical disputes.",
        ],
        diagramImage: "/verticals/modal1.jpg",// <--- Change with your local image
      },
    ],
  },
  "public-safety": {
    category: "Public Safety",
    solutions: [
      {
        title: "Emergency Response Systems",
        overview: "High-performance systems built for instant emergency routing, zero-latency communication networks, and reliable citizen SOS triggers to save lives during critical responses.",
        benefits: [
          "Under 1-second system dispatch response rate.",
          "Advanced geofencing and precise dispatch coordination.",
          "Multi-redundant offline communication architecture.",
        ],
 diagramImage: "/verticals/modal1.jpg",
      },
    ],
  },
};

// Reusable fallback helper if a slug does not have custom modal data
export function getModalDataBySlug(slug: string, defaultTitle: string): VerticalModalData {
  const data = verticalModalsData[slug];
  if (data) return data;

  // Fallback template
  return {
    category: defaultTitle,
    solutions: [
      {
        title: "Standard Operational Solution",
        overview: `SPS specialized workflow modules optimize ${defaultTitle} infrastructures. We align legacy practices with high-performance digital cloud tools to secure daily critical metrics.`,
        benefits: [
          "Increases productivity across active systems.",
          "Simplifies compliance and secure audits.",
          "Scalable and cost-efficient configuration templates.",
        ],
        diagramImage: "/verticals/modal1.jpg",
      },
    ],
  };
}