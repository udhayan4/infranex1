import React, { useState } from 'react';
import { ShieldCheck, Wind, AlertTriangle, Eye, Video, Thermometer, Radio, CheckCircle2, ChevronRight } from 'lucide-react';
import { TUNNEL_TELEMETRY } from '../data/mockData';

export default function TunnelIntelligence() {
  const [activeAlert, setActiveAlert] = useState(TUNNEL_TELEMETRY.alerts[1]); // Water leakage at 2.6 km

  return (
    <section id="tunnel-safety" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Wind size={12} color="#8B5CF6" />
            <span>Use Case 03</span>
          </div>
          <h2 className="section-title">
            AI Tunnel Condition & Safety Intelligence
          </h2>
          <p className="section-subtitle">
            Continuous Monitoring. Predictive Maintenance. Safer Operations.
            See beyond the surface to prevent lining collapses, water seepage, ventilation failure, and electrical blackouts.
          </p>
        </div>

        {/* Top Status Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">STRUCTURAL STATUS</span>
            <div className="metric-hud-value" style={{ color: '#00E5A3', fontSize: '1.6rem' }}>SAFE</div>
            <div className="metric-hud-sub">{TUNNEL_TELEMETRY.structuralStatus}</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">VENTILATION SYSTEM</span>
            <div className="metric-hud-value" style={{ color: '#00F0FF', fontSize: '1.6rem' }}>OPTIMAL</div>
            <div className="metric-hud-sub">8 Jet Fans Operational • CO: 2 ppm</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">TRAFFIC DISPATCH</span>
            <div className="metric-hud-value" style={{ color: '#E2E8F0', fontSize: '1.6rem' }}>NORMAL</div>
            <div className="metric-hud-sub">Clearance: OK • Speed: 45 km/h avg</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">ANOMALY DETECTED</span>
            <div className="metric-hud-value" style={{ color: '#FFB020', fontSize: '1.6rem' }}>4 ACTIVE</div>
            <div className="metric-hud-sub">1 High • 1 Med • 2 Low Watch</div>
          </div>
        </div>

        {/* Tunnel Cross-Section & Operations Control Console */}
        <div className="glass-panel bracket-corner" style={{
          padding: '28px',
          background: 'rgba(8, 15, 27, 0.9)',
          marginBottom: '40px'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '14px'
          }}>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                TUNNEL OPERATIONS SCADA CONSOLE
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                {TUNNEL_TELEMETRY.name} (Length: {TUNNEL_TELEMETRY.length})
              </div>
            </div>

            {/* Live Environmental Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(0, 229, 163, 0.12)',
                color: '#00E5A3',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                border: '1px solid rgba(0, 229, 163, 0.25)'
              }}>
                CO: {TUNNEL_TELEMETRY.airQuality.co}
              </span>
              <span style={{
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(0, 240, 255, 0.12)',
                color: '#00F0FF',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                border: '1px solid rgba(0, 240, 255, 0.25)'
              }}>
                TEMP: {TUNNEL_TELEMETRY.airQuality.temperature}
              </span>
              <span style={{
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(192, 132, 252, 0.12)',
                color: '#C084FC',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                border: '1px solid rgba(192, 132, 252, 0.25)'
              }}>
                OPTICAL VISIBILITY: {TUNNEL_TELEMETRY.airQuality.visibility}
              </span>
            </div>
          </div>

          {/* Interactive Tunnel Cross-Section Schematic */}
          <div style={{
            position: 'relative',
            height: '300px',
            background: 'radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.1), #040810 70%)',
            borderRadius: '8px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            overflow: 'hidden',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
              {/* Mountain Bedrock Hatch */}
              <rect width="800" height="300" fill="#060C16" />

              {/* Tunnel Tube Profile (Arch Horseshoe) */}
              <path d="M 120 280 L 120 170 Q 120 50 400 50 Q 680 50 680 170 L 680 280 Z" fill="#0A1424" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="4" />
              <path d="M 140 280 L 140 175 Q 140 70 400 70 Q 660 70 660 175 L 660 280 Z" fill="#040810" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="2" />

              {/* Road Pavement Invert */}
              <rect x="140" y="240" width="520" height="40" fill="#141E2D" stroke="#334155" />
              <line x1="140" y1="260" x2="660" y2="260" stroke="#FFB020" strokeWidth="2" strokeDasharray="20 15" />

              {/* Jet Fan at Arch Crown */}
              <rect x="360" y="76" width="80" height="24" rx="6" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
              <text x="400" y="92" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="var(--font-mono)">JET FAN J-08</text>

              {/* Lighting fixtures */}
              <circle cx="210" cy="110" r="4" fill="#00F0FF" />
              <circle cx="270" cy="85" r="4" fill="#00F0FF" />
              <circle cx="530" cy="85" r="4" fill="#00F0FF" />
              <circle cx="590" cy="110" r="4" fill="#FF3B57" /> {/* Trip indicator */}

              {/* CCTV Camera with Cone */}
              <g transform="translate(190, 130)">
                <polygon points="0,0 20,-6 20,6" fill="#00E5A3" />
                <path d="M 20 -6 L 140 60 L 60 100 Z" fill="rgba(0, 229, 163, 0.05)" />
              </g>

              {/* Interactive Anomaly Indicators */}
              {/* Alert 1: Lining Crack KM 1.2 */}
              <g style={{ cursor: 'pointer' }} onClick={() => setActiveAlert(TUNNEL_TELEMETRY.alerts[0])}>
                <circle cx="260" cy="150" r="10" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="260" cy="150" r="3" fill="#00F0FF" />
                <text x="260" y="172" textAnchor="middle" fill="#00F0FF" fontSize="9" fontFamily="var(--font-mono)">KM 1.2 (0.6mm)</text>
              </g>

              {/* Alert 2: Seepage KM 2.6 */}
              <g style={{ cursor: 'pointer' }} onClick={() => setActiveAlert(TUNNEL_TELEMETRY.alerts[1])}>
                <circle cx="340" cy="72" r="12" fill="rgba(255, 176, 32, 0.25)" stroke="#FFB020" strokeWidth="2" />
                <circle cx="340" cy="72" r="4" fill="#FFB020" />
                <text x="340" y="58" textAnchor="middle" fill="#FFB020" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">KM 2.6 SEEPAGE</text>
              </g>

              {/* Alert 3: Lighting Trip KM 3.4 */}
              <g style={{ cursor: 'pointer' }} onClick={() => setActiveAlert(TUNNEL_TELEMETRY.alerts[2])}>
                <circle cx="590" cy="110" r="12" fill="rgba(255, 59, 87, 0.25)" stroke="#FF3B57" strokeWidth="2" />
                <circle cx="590" cy="110" r="4" fill="#FF3B57" />
                <text x="590" y="134" textAnchor="middle" fill="#FF3B57" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">KM 3.4 LIGHT TRIP</text>
              </g>

              {/* Vehicle inside tunnel */}
              <rect x="360" y="235" width="50" height="22" rx="4" fill="#38BDF8" />
              <polygon points="365,235 375,225 395,225 405,235" fill="#0284C7" />
              <circle cx="372" cy="257" r="5" fill="#0F172A" />
              <circle cx="398" cy="257" r="5" fill="#0F172A" />
            </svg>
          </div>

          {/* Anomaly Cards List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}>
            {TUNNEL_TELEMETRY.alerts.map((alert, idx) => {
              const isSelected = activeAlert.chainage === alert.chainage;
              const isHigh = alert.severity === 'High';
              const isMed = alert.severity === 'Medium';

              return (
                <div
                  key={idx}
                  onClick={() => setActiveAlert(alert)}
                  style={{
                    padding: '14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(139, 92, 246, 0.18)' : 'rgba(6, 11, 19, 0.8)',
                    border: isSelected ? '1.5px solid #A855F7' : '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#00F0FF', fontWeight: 600 }}>
                      {alert.chainage}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 6px',
                      borderRadius: '3px',
                      background: isHigh ? 'rgba(255, 59, 87, 0.2)' : isMed ? 'rgba(255, 176, 32, 0.2)' : 'rgba(0, 240, 255, 0.2)',
                      color: isHigh ? '#FF3B57' : isMed ? '#FFB020' : '#00F0FF',
                      fontWeight: 700
                    }}>
                      {alert.severity}
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>
                    {alert.defect}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{alert.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
