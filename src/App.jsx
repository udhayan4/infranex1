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
import LiveDemoModal from './components/LiveDemoModal';
import PdfModal from './components/PdfModal';
import Footer from './components/Footer';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="infrasight-app">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />

      {/* Hero Section with Dynamic Network Canvas */}
      <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* The Problem: Fragmented Data vs Converged Intelligence */}
      <ProblemSection />

      {/* Why InfraSight AI & The IGT Advantage */}
      <WhyUsSection />

      {/* Signature AI Scan Interactive Laser Comparison */}
      <AiScanSection />

      {/* Core AI Infrastructure Command & Control Centre */}
      <CommandCenter onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Use Case 01: Road Condition & Pavement Intelligence */}
      <ConditionIntelligence />

      {/* Use Case 02: Bridge Health Intelligence */}
      <BridgeIntelligence />

      {/* Use Case 03: Tunnel Condition & Safety Intelligence */}
      <TunnelIntelligence />

      {/* Use Case 04: AI Asset Risk & Prioritisation */}
      <RiskEngine />

      {/* Use Case 05: Closed-Loop Maintenance Operations */}
      <MaintenanceWorkflow />

      {/* Unified Digital Twin Layer */}
      <DigitalTwin />

      {/* Infrastructure Value & Asset Monetisation */}
      <ValueMonetisation />

      {/* System Architecture & Key Enablers */}
      <Architecture />

      {/* Implementation Roadmap: Prove First, Scale Modularly */}
      <Roadmap />

      {/* What We Need From Rodic Collaboration */}
      <RodicRequirements />

      {/* Explore the Complete Solution PDF */}
      <SolutionPdf onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* User-Friendly Contact & Consultation Form */}
      <ContactSection />

      {/* Enterprise Engineering Footer */}
      <Footer
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Fullscreen Interactive Command Centre Simulation Modal */}
      <LiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Embedded High-Resolution PDF Viewer Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
