import React, { useState } from 'react';
import { Wind, ShieldCheck, AlertTriangle, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { TUNNEL_TELEMETRY } from '../data/mockData';

export default function TunnelIntelligence() {
  const [activeAlert, setActiveAlert] = useState(TUNNEL_TELEMETRY.alerts[2]); // Light bulb

  return (
    <section id="tunnel-safety" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#EDE9FE', color: '#7C3AED', borderColor: '#DDD6FE' }}>
            <Wind size={15} />
            <span>Tunnel Safety</span>
          </div>
          <h2 className="section-title">
            Tunnel Safety, Fresh Air & Bright Lighting
          </h2>
          <p className="section-subtitle">
            Long mountain tunnels need fresh air ventilation, bright lighting, and dry walls. We monitor all three continuously.
          </p>
        </div>

        {/* 4 Status Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div className="metric-hud">
            <span className="metric-hud-label">TUNNEL STRUCTURE</span>
            <div className="metric-hud-value" style={{ color: '#16A34A', fontSize: '1.8rem' }}>SAFE & DRY</div>
            <div className="metric-hud-sub">Walls in top condition (90%)</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">FRESH AIR FANS</span>
            <div className="metric-hud-value" style={{ color: '#2563EB', fontSize: '1.8rem' }}>ALL WORKING</div>
            <div className="metric-hud-sub">8 of 8 Fans Running Smoothly</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">TRAFFIC SPEED</span>
            <div className="metric-hud-value" style={{ color: '#0F172A', fontSize: '1.8rem' }}>35 MPH</div>
            <div className="metric-hud-sub">Smooth & Clear Driving</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">MAINTENANCE ITEM</span>
            <div className="metric-hud-value" style={{ color: '#D97706', fontSize: '1.8rem' }}>1 Light Bulb</div>
            <div className="metric-hud-sub">Scheduled for night replacement</div>
          </div>
        </div>

        {/* Tunnel Cross-Section & Operations Box */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '28px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          marginBottom: '36px'
        }}>
          {/* Header */}
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
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                {TUNNEL_TELEMETRY.name}
              </h3>
              <div style={{ fontSize: '13px', color: '#64748B' }}>
                Length: {TUNNEL_TELEMETRY.length} • Clean & Safe
              </div>
            </div>

            {/* Environmental Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="badge-green">Air Quality: Clean</span>
              <span className="badge-blue">Temperature: 24°C</span>
              <span className="badge-purple">Visibility: 98% Clear</span>
            </div>
          </div>

          {/* Clean Tunnel Schematic */}
          <div style={{
            position: 'relative',
            height: '260px',
            background: 'linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%)',
            borderRadius: '12px',
            border: '1.5px solid #CBD5E1',
            overflow: 'hidden',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 800 260" preserveAspectRatio="xMidYMid meet">
              {/* Mountain Profile */}
              <rect width="800" height="260" fill="#94A3B8" />

              {/* Tunnel Arch */}
              <path d="M 120 250 L 120 150 Q 120 40 400 40 Q 680 40 680 150 L 680 250 Z" fill="#334155" />
              <path d="M 140 250 L 140 155 Q 140 60 400 60 Q 660 60 660 155 L 660 250 Z" fill="#1E293B" />

              {/* Road Pavement */}
              <rect x="140" y="210" width="520" height="40" fill="#0F172A" />
              <line x1="140" y1="230" x2="660" y2="230" stroke="#FBBF24" strokeWidth="2" strokeDasharray="18 12" />

              {/* Ventilation Fan */}
              <rect x="360" y="66" width="80" height="22" rx="4" fill="#2563EB" />
              <text x="400" y="81" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">FAN #08 (ON)</text>

              {/* Lights */}
              <circle cx="210" cy="100" r="5" fill="#FBBF24" />
              <circle cx="270" cy="75" r="5" fill="#FBBF24" />
              <circle cx="530" cy="75" r="5" fill="#FBBF24" />
              <circle cx="590" cy="100" r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.5" />

              {/* Vehicle */}
              <rect x="360" y="210" width="55" height="18" rx="4" fill="#38BDF8" />
              <circle cx="372" cy="228" r="4" fill="#0F172A" />
              <circle cx="403" cy="228" r="4" fill="#0F172A" />

              {/* Hotspot Markers */}
              <g style={{ cursor: 'pointer' }} onClick={() => setActiveAlert(TUNNEL_TELEMETRY.alerts[2])}>
                <circle cx="590" cy="100" r="14" fill="rgba(225, 29, 72, 0.3)" stroke="#E11D48" strokeWidth="2" />
                <text x="590" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Light Bulb</text>
              </g>

              <g style={{ cursor: 'pointer' }} onClick={() => setActiveAlert(TUNNEL_TELEMETRY.alerts[1])}>
                <circle cx="340" cy="65" r="12" fill="rgba(217, 119, 6, 0.3)" stroke="#D97706" strokeWidth="2" />
                <text x="340" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Water Check</text>
              </g>
            </svg>
          </div>

          {/* 4 Simple Alerts List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}>
            {TUNNEL_TELEMETRY.alerts.map((alert, idx) => {
              const isSelected = activeAlert.chainage === alert.chainage;
              const isLight = alert.severity === 'Easy Fix';

              return (
                <div
                  key={idx}
                  onClick={() => setActiveAlert(alert)}
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: isSelected ? '#EFF6FF' : '#FFFFFF',
                    border: isSelected ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                    boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.1)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>
                      {alert.chainage}
                    </span>
                    <span className={isLight ? 'badge-yellow' : 'badge-blue'} style={{ fontSize: '10.5px' }}>
                      {alert.severity}
                    </span>
                  </div>

                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                    {alert.defect}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>{alert.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
