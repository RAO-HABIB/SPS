import type { Metadata } from "next";

import BMSClientSection from "@/components/Bms/Bms-Client";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "Business Management System | SPS",
  description:
    "Get real-time insights into every aspect of your company's performance. SPS BMS optimizes processes and streamlines business operations across Sales, HR, Accounting, and more.",
  keywords: [
    "Business Management System",
    "SPS BMS",
    "ERP solution",
    "enterprise software",
    "business automation",
    "Software Productivity Strategists",
  ],
  openGraph: {
    title: "Business Management System | SPS",
    description:
      "Streamline your business with SPS BMS — a fully-integrated system covering Sales, HR, Accounting, and more from one platform.",
    url: "https://www.spsnet.com/product-detail/cloud/devops/business-management-system",
    siteName: "SPS - Software Productivity Strategists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Management System | SPS",
    description:
      "Streamline your business with SPS BMS — a fully-integrated enterprise management solution.",
  },
  alternates: {
    canonical:
      "https://www.spsnet.com/product-detail/cloud/devops/business-management-system",
  },
};

export default function BMSPage() {
  return (
    <>
      <Navbar />
      <BMSClientSection />
      <Footer />
    </>
  );
}