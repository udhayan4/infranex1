import React, { useState } from 'react';
import { Activity, Shield, AlertTriangle, CheckCircle2, ChevronRight, Gauge, Radio } from 'lucide-react';
import { BRIDGE_COMPONENTS } from '../data/mockData';

export default function BridgeIntelligence() {
  const [selectedComp, setSelectedComp] = useState(BRIDGE_COMPONENTS[1]); // Pier P3 by default

  return (
    <section id="bridge-health" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0A1424 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Activity size={12} color="#00E5A3" />
            <span>Use Case 02</span>
          </div>
          <h2 className="section-title">
            AI Bridge Health Intelligence
          </h2>
          <p className="section-subtitle">
            Assure Structural Safety. Enable Predictive Maintenance.
            Detect micro-defects across piers, bearings, girders, and expansion joints before catastrophic failure.
          </p>
        </div>

        {/* Live Bridge BR-07 Top Telemetry HUD */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">ASSET UNDER AUDIT</span>
            <div className="metric-hud-value" style={{ fontSize: '1.7rem' }}>BR-07</div>
            <div className="metric-hud-sub">Major Viaduct Bridge (620m)</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">BRIDGE HEALTH SCORE</span>
            <div className="metric-hud-value" style={{ color: '#00E5A3' }}>78 / 100</div>
            <div className="metric-hud-sub">Condition: Good (Watch list)</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">OVERALL FAILURE RISK</span>
            <div className="metric-hud-value" style={{ color: '#FFB020' }}>LOW-MEDIUM</div>
            <div className="metric-hud-sub">Seismic Vulnerability: Med</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">NEXT MANDATORY NDT</span>
            <div className="metric-hud-value" style={{ color: '#00F0FF' }}>14 DAYS</div>
            <div className="metric-hud-sub">Automated Inspection Queue</div>
          </div>
        </div>

        {/* Interactive Digital Bridge Visualization & Inspector */}
        <div className="glass-panel bracket-corner" style={{
          padding: '28px',
          background: 'rgba(8, 16, 28, 0.9)',
          marginBottom: '48px'
        }}>
          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="status-dot"></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#FFFFFF', fontWeight: 600 }}>
                DIGITAL BRIDGE STRUCTURAL TWIN [VIADUCT BR-07]
              </span>
            </div>

            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Click on glowing structural nodes to inspect component telemetry
            </div>
          </div>

          {/* Interactive SVG Bridge Model */}
          <div style={{
            position: 'relative',
            height: '320px',
            background: 'radial-gradient(circle at 50% 60%, rgba(0, 240, 255, 0.08), #040810 70%)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            overflow: 'hidden',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="bridge-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#040812" />
                  <stop offset="100%" stopColor="#0A1628" />
                </linearGradient>
                <linearGradient id="deck-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
                <linearGradient id="pier-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>
              </defs>

              <rect width="100%" height="100%" fill="url(#bridge-sky)" />

              {/* Waterline / Riverbed */}
              <rect x="0" y="240" width="900" height="60" fill="#06121E" />
              <path d="M 0 240 Q 225 245 450 240 T 900 240" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="2" fill="none" />

              {/* Foundation Well Piles */}
              <rect x="180" y="240" width="50" height="50" fill="#141E28" stroke="rgba(0, 240, 255, 0.2)" />
              <rect x="425" y="240" width="50" height="50" fill="#141E28" stroke="rgba(0, 240, 255, 0.2)" />
              <rect x="670" y="240" width="50" height="50" fill="#141E28" stroke="rgba(0, 240, 255, 0.2)" />

              {/* Piers */}
              <rect x="185" y="110" width="40" height="130" fill="url(#pier-grad)" stroke="#334155" />
              <rect x="430" y="110" width="40" height="130" fill="url(#pier-grad)" stroke="#334155" />
              <rect x="675" y="110" width="40" height="130" fill="url(#pier-grad)" stroke="#334155" />

              {/* Pier Caps */}
              <polygon points="175,110 235,110 225,120 185,120" fill="#475569" />
              <polygon points="420,110 480,110 470,120 430,120" fill="#475569" />
              <polygon points="665,110 725,110 715,120 675,120" fill="#475569" />

              {/* Bearings on top of pier caps */}
              <rect x="195" y="104" width="20" height="6" fill="#00F0FF" />
              <rect x="440" y="104" width="20" height="6" fill="#FFB020" />
              <rect x="685" y="104" width="20" height="6" fill="#00F0FF" />

              {/* Girders */}
              <rect x="50" y="96" width="800" height="10" fill="#1E293B" stroke="rgba(0, 240, 255, 0.3)" />

              {/* Deck & Riding Surface */}
              <rect x="30" y="86" width="840" height="10" fill="url(#deck-grad)" stroke="#475569" />
              <line x1="30" y1="86" x2="870" y2="86" stroke="#00F0FF" strokeWidth="2" />

              {/* Parapet Barrier */}
              <line x1="30" y1="80" x2="870" y2="80" stroke="#64748B" strokeWidth="3" strokeDasharray="30 10" />

              {/* Expansion Joints */}
              <line x1="290" y1="84" x2="290" y2="98" stroke="#FF3B57" strokeWidth="3" />
              <line x1="590" y1="84" x2="590" y2="98" stroke="#FFB020" strokeWidth="3" />

              {/* Stay Cables / Viaduct Accent Lines */}
              <line x1="450" y1="40" x2="300" y2="86" stroke="rgba(0, 240, 255, 0.35)" strokeWidth="1.5" />
              <line x1="450" y1="40" x2="600" y2="86" stroke="rgba(0, 240, 255, 0.35)" strokeWidth="1.5" />
              <line x1="450" y1="40" x2="200" y2="86" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
              <line x1="450" y1="40" x2="700" y2="86" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />

              {/* Pylon Tower */}
              <polygon points="445,30 455,30 458,86 442,86" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />

              {/* Interactive Node Hotspots */}
              {/* 1. Deck Node */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[0])} style={{ cursor: 'pointer' }}>
                <circle cx="220" cy="86" r="10" fill="rgba(0, 229, 163, 0.2)" stroke="#00E5A3" strokeWidth="2" />
                <circle cx="220" cy="86" r="4" fill="#00E5A3" />
                <text x="220" y="70" textAnchor="middle" fill="#00E5A3" fontSize="10" fontFamily="var(--font-mono)">DECK</text>
              </g>

              {/* 2. Pier P3 Node (Crack Detected) */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[1])} style={{ cursor: 'pointer' }}>
                <circle cx="450" cy="160" r="14" fill="rgba(255, 176, 32, 0.2)" stroke="#FFB020" strokeWidth="2" />
                <circle cx="450" cy="160" r="5" fill="#FFB020" />
                <text x="450" y="190" textAnchor="middle" fill="#FFB020" fontSize="11" fontWeight="bold" fontFamily="var(--font-mono)">PIER P3 [0.8mm CRACK]</text>
              </g>

              {/* 3. Bearing Node */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[2])} style={{ cursor: 'pointer' }}>
                <circle cx="450" cy="107" r="9" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="2" />
                <circle cx="450" cy="107" r="3.5" fill="#00F0FF" />
                <text x="490" y="105" textAnchor="start" fill="#00F0FF" fontSize="10" fontFamily="var(--font-mono)">BEARING</text>
              </g>

              {/* 4. Girder Node */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[3])} style={{ cursor: 'pointer' }}>
                <circle cx="340" cy="101" r="8" fill="rgba(0, 229, 163, 0.2)" stroke="#00E5A3" strokeWidth="1.5" />
                <circle cx="340" cy="101" r="3" fill="#00E5A3" />
                <text x="340" y="120" textAnchor="middle" fill="#00E5A3" fontSize="10" fontFamily="var(--font-mono)">GIRDER</text>
              </g>

              {/* 5. Expansion Joint Node */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[4])} style={{ cursor: 'pointer' }}>
                <circle cx="590" cy="86" r="10" fill="rgba(255, 176, 32, 0.2)" stroke="#FFB020" strokeWidth="2" />
                <circle cx="590" cy="86" r="4" fill="#FFB020" />
                <text x="590" y="70" textAnchor="middle" fill="#FFB020" fontSize="10" fontFamily="var(--font-mono)">JOINT J-04</text>
              </g>

              {/* 6. Foundation Node */}
              <g onClick={() => setSelectedComp(BRIDGE_COMPONENTS[5])} style={{ cursor: 'pointer' }}>
                <circle cx="695" cy="265" r="9" fill="rgba(0, 229, 163, 0.2)" stroke="#00E5A3" strokeWidth="1.5" />
                <circle cx="695" cy="265" r="3.5" fill="#00E5A3" />
                <text x="695" y="290" textAnchor="middle" fill="#00E5A3" fontSize="10" fontFamily="var(--font-mono)">FOUNDATION</text>
              </g>
            </svg>
          </div>

          {/* Component Inspector Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px',
            marginBottom: '24px'
          }}>
            {BRIDGE_COMPONENTS.map((comp) => {
              const isSelected = selectedComp.id === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(6, 11, 19, 0.7)',
                    border: isSelected ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: comp.statusColor }}>
                    {comp.status}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>
                    {comp.name.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Component Telemetry Drawer */}
          <div style={{
            background: 'rgba(6, 11, 19, 0.95)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '8px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '12px'
            }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                  COMPONENT HEALTH AUDIT
                </span>
                <h3 style={{ fontSize: '18px', color: '#FFFFFF' }}>{selectedComp.name}</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SCORE</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: selectedComp.statusColor }}>{selectedComp.condition}</div>
                </div>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: '4px',
                  background: `${selectedComp.statusColor}20`,
                  color: selectedComp.statusColor,
                  border: `1px solid ${selectedComp.statusColor}40`,
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700
                }}>
                  RISK: {selectedComp.risk}
                </div>
              </div>
            </div>

            {/* Findings & Action */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '20px'
            }} className="bridge-detail-split">
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', marginBottom: '4px' }}>
                  DETECTED DEFECTS & INSPECTION NOTES
                </div>
                <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '14px' }}>
                  {selectedComp.defects}
                </p>

                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#00E5A3', marginBottom: '4px' }}>
                  AI RECOMMENDED ACTION
                </div>
                <p style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.5 }}>
                  {selectedComp.action}
                </p>
              </div>

              {/* Live Telemetry Sensors */}
              <div style={{
                background: 'rgba(10, 20, 36, 0.6)',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                borderRadius: '6px',
                padding: '16px'
              }}>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#FFFFFF', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Radio size={12} color="#00F0FF" /> SENSOR TELEMETRY FEEDS
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                  {Object.entries(selectedComp.telemetry).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '4px' }}>
                      <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: '#00F0FF', fontWeight: 600 }}>{val}</span>
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
