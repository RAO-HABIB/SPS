'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Image from 'next/image';
import DataTable from 'react-data-table-component';

// 1. Interfaces and Types
interface PricingRow {
  sr: number;
  category: string;
  position: string;
  desc: string;
  rate: string;
}

type TabType = "LABOR RATE" | "ADDITIONAL LABOR" | "SOFTWARE TITLES" | "SUPPLIERS OPTION" | "MANAGED SERVICES";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("LABOR RATE");
  const [filterText, setFilterText] = useState<string>("");

  const tabDatasets: Record<TabType, PricingRow[]> = {
    "LABOR RATE": [
      { sr: 1, category: "Rao Habib", position: "Business Analyst", desc: "Analyst 1", rate: "98.22" },
      { sr: 2, category: "Rao Habib", position: "Business Analyst", desc: "Analyst 2", rate: "112.78" },
      { sr: 3, category: "Rao Habib", position: "Business Analyst", desc: "Analyst 3", rate: "119.77" },
      { sr: 4, category: "Rao Habib", position: "Business Analyst", desc: "Analyst 4", rate: "123.79" },
      { sr: 5, category: "Rao Habib", position: "Business Analyst", desc: "Analyst 5", rate: "134.74" },
      { sr: 6, category: "Rao Habib", position: "ERP Analyst", desc: "ERP Analyst 1", rate: "123.73" },
      { sr: 7, category: "Rao Habib", position: "ERP Analyst", desc: "ERP Analyst 2", rate: "128.75" },
      { sr: 8, category: "Rao Habib", position: "ERP Analyst", desc: "ERP Analyst 3", rate: "145.20" },
      { sr: 9, category: "Database Admin", position: "ERP Database Administrator", desc: "ERP Database Administrator II", rate: "175.75" },
      { sr: 10, category: "Customer Technical Support", position: "Help Desk", desc: "Help Desk II", rate: "95.00" },
    ],
    "ADDITIONAL LABOR": [
      { sr: 1, category: "Project Management", position: "Project Manager", desc: "Project Manager I", rate: "145.00" },
      { sr: 2, category: "Project Management", position: "Project Manager", desc: "Project Manager II", rate: "165.00" },
      { sr: 3, category: "Consulting", position: "Senior Consultant", desc: "Consulting Lead", rate: "185.50" },
    ],
    "SOFTWARE TITLES": [
      { sr: 1, category: "Database Software", position: "Oracle DB License", desc: "Enterprise Edition", rate: "950.00" },
      { sr: 2, category: "Security Software", position: "Antivirus Suite", desc: "Endpoint Protection", rate: "45.00" },
    ],
    "SUPPLIERS OPTION": [
      { sr: 1, category: "Cloud Hosting", position: "AWS Infrastructure", desc: "S3 & EC2 Managed Hosting", rate: "210.00" },
      { sr: 2, category: "Support Plan", position: "24/7 Premium Support", desc: "Enterprise SLA Support", rate: "125.00" },
    ],
    "MANAGED SERVICES": [
      { sr: 1, category: "IT Support", position: "Help Desk Support", desc: "Level 1 support services", rate: "85.00" },
      { sr: 2, category: "Network Security", position: "Firewall Monitoring", desc: "24/7 intrusion detection", rate: "155.00" },
    ]
  };

  const tabs: TabType[] = [
    "LABOR RATE",
    "ADDITIONAL LABOR",
    "SOFTWARE TITLES",
    "SUPPLIERS OPTION",
    "MANAGED SERVICES"
  ];

  // Title formatting utility helper
  const formatHeaderTitle = (title: string): string => {
    return title
      .split(' ')
      .map((word: string) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setFilterText(""); 
  }, []);

  const currentDataset = tabDatasets[activeTab] || [];


  const filteredItems = currentDataset.filter(
    (item) =>
      (item.category && item.category.toLowerCase().includes(filterText.toLowerCase())) ||
      item.position.toLowerCase().includes(filterText.toLowerCase()) ||
      item.desc.toLowerCase().includes(filterText.toLowerCase()) ||
      item.rate.includes(filterText)
  );

 
  const columns: any = [
    {
      name: 'Sr.',
      selector: (row: PricingRow) => row.sr,
      sortable: true,
      width: '70px',
      center: true,
    },
    {
      name: 'Job Category',
      selector: (row: PricingRow) => row.category || <span className="text-gray-400 italic">N/A</span>,
      sortable: true,
    },
    {
      name: 'Position',
      selector: (row: PricingRow) => row.position,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row: PricingRow) => row.desc,
      sortable: true,
    },
    {
      name: 'Bill Rate ($)',
      selector: (row: PricingRow) => parseFloat(row.rate),
      sortable: true,
      format: (row: PricingRow) => `$${row.rate}`,
      right: true,
    }
  ];

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center w-full pb-4 mb-2 border-b border-gray-100">
        <h2 className="text-[21px] font-normal text-gray-800 mb-4 sm:mb-0">
          {formatHeaderTitle(activeTab)} Rates
        </h2>
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <label htmlFor="search-input" className="font-semibold text-gray-600">Search:</label>
          <input
            id="search-input"
            type="text"
            placeholder="Type to filter rows..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-[#083ea9] focus:ring-1 focus:ring-[#083ea9] w-full sm:w-64 transition-all"
          />
        </div>
      </div>
    );
  }, [filterText, activeTab]);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SPS VITA IT Services and Software Pricing",
    "description": "Pricing tables and contracts info for IBM Reseller Software, Labor Rate, Managed Services, and IT consultation solutions.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "offerCount": currentDataset.length,
      "lowPrice": currentDataset.length > 0 ? Math.min(...currentDataset.map(r => parseFloat(r.rate) || 0)) : "0",
      "highPrice": currentDataset.length > 0 ? Math.max(...currentDataset.map(r => parseFloat(r.rate) || 0)) : "0"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Navbar />

      <main className="min-h-screen bg-[#f4f4f6] pb-16 font-sans">
        {/* Banner Section */}
        <section className="relative overflow-hidden text-white py-16 px-6 bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Hero/vita-banner-bg.png"
              alt="Deep blue abstract grid background for VITA pricing contract details"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold tracking-wide mb-3">VITA Contract Pricing</h1>
            <p className="text-sm text-gray-200 max-w-xl mb-4">
              Explore standardized rate frameworks and system options for SPS infrastructure agreements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4 items-start sm:items-center">
              <span className="inline-block bg-[#083ea9] text-white text-[11px] px-3 py-1 rounded-full border border-[#dfe3e7] shadow-sm">
                <strong>VITA Contract Number:</strong> VA-220218-SPS
              </span>
              <span className="inline-block bg-[#083ea9] text-white text-[11px] px-3 py-1 rounded-full border border-[#dfe3e7] shadow-sm">
                <strong>Contract Title:</strong> IBM Reseller Software/Services
              </span>
            </div>
          </div>
        </section>

        {/* Tab Navigation Area (Designed like continuous ribbon tabs) */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div
            role="tablist"
            aria-label="VITA Contract Categories"
            className="flex flex-wrap rounded-t-lg overflow-hidden shadow-sm"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  id={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 min-w-37.5 px-4 py-3.5 text-[11px] sm:text-xs font-bold tracking-wider transition-colors border-r border-white/20 last:border-r-0 outline-none ${
                    isActive
                      ? 'bg-[#2a2d34] text-white'
                      : 'bg-[#083ea9] text-gray-100 hover:bg-[#1058b0]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
{/* Pricing DataTable Wrapper */}
          <div className="custom-data-table bg-white p-6 rounded-b-lg shadow-sm border border-t-0 border-gray-200">
            
            {subHeaderComponentMemo}

            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 25, 50, 100]}
              striped /* Yeh prop by default even/odd rows ko grey background deta hai */
              highlightOnHover
              persistTableHead
              noDataComponent={
                <div className="p-12 text-gray-400 font-medium">
                  No matches matching your search criteria were found.
                </div>
              }
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}