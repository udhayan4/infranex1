import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyUsSection from './components/WhyUsSection';
import AiScanSection from './components/AiScanSection';
import CommandCenter from './components/CommandCenter';
import ConditionIntelligence from './components/ConditionIntelligence';
import BridgeIntelligence from './components/BridgeIntelligence';
import TunnelIntelligence from './components/TunnelIntelligence';
import RiskEngine from './components/RiskEngine';
import MaintenanceWorkflow from './components/MaintenanceWorkflow';
import DigitalTwin from './components/DigitalTwin';
import ValueMonetisation from './components/ValueMonetisation';
import Architecture from './components/Architecture';
import Roadmap from './components/Roadmap';
import RodicRequirements from './components/RodicRequirements';
import SolutionPdf from './components/SolutionPdf';
import ContactSection from './components/ContactSection';
import PdfModal from './components/PdfModal';
import Footer from './components/Footer';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="infranite-app">
      {/* Navigation Bar with 8 exact headings and Solutions PDF Dropdown */}
      <Navbar
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />

      {/* The Problem & Solution Overview */}
      <ProblemSection />

      {/* Why Infranite Globaltech & The IGT Advantage */}
      <WhyUsSection />

      {/* AI Computer Vision & Camera Detection */}
      <AiScanSection />

      {/* Experience Center / City & Highway Operations */}
      <CommandCenter />

      {/* Road Health & Pothole Intelligence */}
      <ConditionIntelligence />

      {/* Bridge Health Intelligence */}
      <BridgeIntelligence />

      {/* Tunnel Condition & Safety Intelligence */}
      <TunnelIntelligence />

      {/* Asset Risk & Priority Engine */}
      <RiskEngine />

      {/* Closed-Loop Maintenance Workflow */}
      <MaintenanceWorkflow />

      {/* Virtual Infrastructure Models */}
      <DigitalTwin />

      {/* Marketplace & Smart Amenities Monetisation */}
      <ValueMonetisation />

      {/* System Architecture */}
      <Architecture />

      {/* Implementation Roadmap */}
      <Roadmap />

      {/* Collaboration Framework */}
      <RodicRequirements />

      {/* Solutions & Official 14-Page PDF Pitch */}
      <SolutionPdf onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Contact & Consultation Form */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />

      {/* Embedded 14-Page PDF Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
