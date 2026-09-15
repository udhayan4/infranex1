import React, { useState } from 'react';
import { Activity, Shield, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { BRIDGE_COMPONENTS } from '../data/mockData';

export default function BridgeIntelligence() {
  const [selectedComp, setSelectedComp] = useState(BRIDGE_COMPONENTS[1]); // Pillar #3

  return (
    <section id="bridge-health" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#BBF7D0' }}>
            <Activity size={15} />
            <span>Bridge Safety</span>
          </div>
          <h2 className="section-title">
            Making Sure Bridges Stay Strong & Safe
          </h2>
          <p className="section-subtitle">
            Bridges carry thousands of cars and heavy trucks daily. We check pillars, joints, and decks continuously so minor cracks are sealed early.
          </p>
        </div>

        {/* 4 Top Status Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div className="metric-hud">
            <span className="metric-hud-label">SAMPLE BRIDGE</span>
            <div className="metric-hud-value" style={{ fontSize: '1.8rem', color: '#0F172A' }}>Bridge BR-07</div>
            <div className="metric-hud-sub">Highway 66 (River Crossing)</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">OVERALL HEALTH</span>
            <div className="metric-hud-value" style={{ color: '#16A34A' }}>88% Healthy</div>
            <div className="metric-hud-sub">Safe for all traffic</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">SAFETY STATUS</span>
            <div className="metric-hud-value" style={{ color: '#16A34A' }}>Safe & Strong</div>
            <div className="metric-hud-sub">No structural danger</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">NEXT ROUTINE CHECK</span>
            <div className="metric-hud-value" style={{ color: '#2563EB' }}>In 2 Weeks</div>
            <div className="metric-hud-sub">Regular monthly visit</div>
          </div>
        </div>

        {/* Interactive Bridge Diagram & Inspector */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '28px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          marginBottom: '36px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '20px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '14px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
              Bridge Structural Diagram: Click any part to inspect
            </h3>
            <span style={{ fontSize: '13px', color: '#64748B' }}>
              Click on the colored circles on the bridge below
            </span>
          </div>

          {/* SVG Bridge Visual */}
          <div style={{
            position: 'relative',
            height: '300px',
            background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 60%, #38BDF8 100%)',
            borderRadius: '12px',
            border: '1.5px solid #CBD5E1',
            overflow: 'hidden',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet">
              {/* River water */}
              <rect x="0" y="230" width="900" height="70" fill="#0284C7" />
              <path d="M 0 230 Q 225 235 450 230 T 900 230" stroke="#E0F2FE" strokeWidth="2" fill="none" />

              {/* Concrete Foundations */}
              <rect x="180" y="230" width="50" height="60" fill="#475569" />
              <rect x="425" y="230" width="50" height="60" fill="#475569" />
              <rect x="670" y="230" width="50" height="60" fill="#475569" />

              {/* Pillars */}
              <rect x="185" y="110" width="40" height="120" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
              <rect x="430" y="110" width="40" height="120" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
              <rect x="675" y="110" width="40" height="120" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />

              {/* Bridge Deck */}
              <rect x="30" y="86" width="840" height="18" fill="#334155" />
              <line x1="30" y1="86" x2="870" y2="86" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="20 15" />

              {/* Safety Railing */}
              <line x1="30" y1="76" x2="870" y2="76" stroke="#CBD5E1" strokeWidth="3" />

              {/* Stay Cables */}
              <line x1="450" y1="30" x2="300" y2="86" stroke="#2563EB" strokeWidth="2" />
              <line x1="450" y1="30" x2="600" y2="86" stroke="#2563EB" strokeWidth="2" />
              <line x1="450" y1="30" x2="200" y2="86" stroke="#2563EB" strokeWidth="2" />
              <line x1="450" y1="30" x2="700" y2="86" stroke="#2563EB" strokeWidth="2" />
              <polygon points="445,20 455,20 458,86 442,86" fill="#1E293B" />

              {/* Clickable Hotspots */}
              {/* 1. Deck */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[0])} style={{ cursor: 'pointer' }}>
                <circle cx="220" cy="86" r="14" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
                <text x="220" y="68" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Road Deck</text>
              </g>

              {/* 2. Pillar #3 */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[1])} style={{ cursor: 'pointer' }}>
                <circle cx="450" cy="160" r="16" fill="#D97706" stroke="#FFFFFF" strokeWidth="3" />
                <text x="450" y="195" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Pillar #3 (Check)</text>
              </g>

              {/* 3. Rubber Cushions */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[2])} style={{ cursor: 'pointer' }}>
                <circle cx="450" cy="104" r="12" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                <text x="510" y="108" textAnchor="start" fill="#0F172A" fontSize="11" fontWeight="bold">Cushions</text>
              </g>

              {/* 4. Steel Girders */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[3])} style={{ cursor: 'pointer' }}>
                <circle cx="340" cy="95" r="12" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
                <text x="340" y="125" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Beams</text>
              </g>

              {/* 5. Expansion Joint */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[4])} style={{ cursor: 'pointer' }}>
                <circle cx="590" cy="86" r="14" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
                <text x="590" y="68" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Joint J-04</text>
              </g>

              {/* 6. Riverbed Foundation */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[5])} style={{ cursor: 'pointer' }}>
                <circle cx="695" cy="260" r="12" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
                <text x="695" y="285" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Foundation</text>
              </g>
            </svg>
          </div>

          {/* Selector Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px',
            marginBottom: '20px'
          }}>
            {BRIDGE_COMPONENTS.map((comp) => {
              const isSelected = selectedComp.id === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: isSelected ? '#EFF6FF' : '#F8FAFC',
                    border: isSelected ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 700, color: comp.statusColor }}>
                    {comp.status}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                    {comp.name.split('(')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Box */}
          <div style={{
            background: '#F8FAFC',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px' }}>
              <div>
                <span className="badge-blue" style={{ fontSize: '11px' }}>Part Details</span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                  {selectedComp.name}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: '#64748B' }}>Score:</span>
                <div style={{ fontSize: '18px', fontWeight: 800, color: selectedComp.statusColor }}>{selectedComp.condition}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }} className="bridge-detail-split">
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', marginBottom: '4px' }}>WHAT WE FOUND:</div>
                <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.5, marginBottom: '14px' }}>
                  {selectedComp.defects}
                </p>

                <div style={{ fontSize: '12px', fontWeight: 700, color: '#16A34A', marginBottom: '4px' }}>RECOMMENDED ACTION:</div>
                <p style={{ fontSize: '14px', color: '#1E293B', lineHeight: 1.5, margin: 0 }}>
                  {selectedComp.action}
                </p>
              </div>

              {/* Sensor Readings */}
              <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Live Sensor Checks:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  {Object.entries(selectedComp.telemetry).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
                      <span style={{ color: '#64748B', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span style={{ fontWeight: 700, color: '#2563EB' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .bridge-detail-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
