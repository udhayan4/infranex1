import React, { useState } from 'react';
import { Layers, Box, CheckCircle2, ChevronRight } from 'lucide-react';

export default function DigitalTwin() {
  const [activeTwin, setActiveTwin] = useState('viaduct');

  const twinAssets = [
    {
      id: 'viaduct',
      name: 'River Bridge Model (BR-07)',
      type: 'Highway Bridge',
      length: '620 Meters',
      sensorsOnline: '18 Sensor Gauges Online',
      status: 'Fully Connected',
      health: '88% Healthy',
      desc: 'A complete virtual model of the bridge showing pillar stability, water riverbed levels, and daily truck weight counts.'
    },
    {
      id: 'expressway',
      name: 'Highway Corridor Model (NH-48)',
      type: 'National Highway',
      length: '110 Miles',
      sensorsOnline: 'Dashcam & Drone Video',
      status: 'Updated Daily',
      health: '82% Good Condition',
      desc: 'A virtual map of the entire 110-mile highway corridor showing all pavement cracks, roadside drains, and repair history.'
    },
    {
      id: 'tunnel',
      name: 'Mountain Tunnel Model (T-04)',
      type: 'Mountain Tunnel',
      length: '2.4 Miles',
      sensorsOnline: 'Fans & Air Sensors',
      status: 'Fully Connected',
      health: '90% Safe & Dry',
      desc: 'A virtual model of the tunnel showing fresh air ventilation, lighting status, and ceiling moisture checks.'
    }
  ];

  const current = twinAssets.find((t) => t.id === activeTwin);

  return (
    <section id="digital-twin" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Box size={15} />
            <span>Virtual Asset Models</span>
          </div>
          <h2 className="section-title">
            Digital Records for Every Road, Bridge & Tunnel
          </h2>
          <p className="section-subtitle">
            Every highway stretch and bridge gets a simple digital profile holding its inspection photos, repair records, and live safety score.
          </p>
        </div>

        {/* Digital Twin Sandbox */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          {/* Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '28px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '16px'
          }}>
            {twinAssets.map((item) => {
              const isActive = activeTwin === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTwin(item.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '10px',
                    background: isActive ? '#2563EB' : '#F1F5F9',
                    border: isActive ? '1px solid #2563EB' : '1px solid #CBD5E1',
                    color: isActive ? '#FFFFFF' : '#475569',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Details Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '24px',
            alignItems: 'center'
          }} className="twin-split-layout">
            {/* Visual Preview Box */}
            <div style={{
              position: 'relative',
              height: '320px',
              background: 'linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 100%)',
              borderRadius: '16px',
              border: '1.5px solid #BFDBFE',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 500 300">
                {activeTwin === 'viaduct' && (
                  <g transform="translate(250, 160)">
                    {/* Bridge Pillars */}
                    <rect x="-120" y="-10" width="24" height="80" fill="#94A3B8" rx="4" />
                    <rect x="-10" y="-10" width="24" height="80" fill="#94A3B8" rx="4" />
                    <rect x="100" y="-10" width="24" height="80" fill="#94A3B8" rx="4" />

                    {/* Road Deck */}
                    <rect x="-160" y="-20" width="320" height="16" fill="#334155" rx="4" />
                    <line x1="-160" y1="-12" x2="160" y2="-12" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 8" />

                    {/* Cables */}
                    <polygon points="-2,-100 6,-100 10,-20 -6,-20" fill="#2563EB" />
                    <line x1="2" y1="-90" x2="-100" y2="-20" stroke="#2563EB" strokeWidth="2" />
                    <line x1="2" y1="-90" x2="100" y2="-20" stroke="#2563EB" strokeWidth="2" />

                    {/* Green check mark badge */}
                    <circle cx="2" cy="15" r="16" fill="#16A34A" />
                    <text x="2" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">✓</text>
                  </g>
                )}

                {activeTwin === 'expressway' && (
                  <g transform="translate(250, 150)">
                    {/* Curving highway */}
                    <path d="M -160 50 Q 0 -60 160 30" fill="none" stroke="#334155" strokeWidth="24" strokeLinecap="round" />
                    <path d="M -160 50 Q 0 -60 160 30" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="12 10" />

                    {/* Pin points */}
                    <circle cx="-60" cy="5" r="8" fill="#E11D48" />
                    <circle cx="40" cy="-25" r="8" fill="#16A34A" />
                    <circle cx="110" cy="5" r="8" fill="#2563EB" />
                  </g>
                )}

                {activeTwin === 'tunnel' && (
                  <g transform="translate(250, 150)">
                    {/* Tunnel Cylinders */}
                    <ellipse cx="-70" cy="0" rx="35" ry="65" fill="#E2E8F0" stroke="#7C3AED" strokeWidth="3" />
                    <ellipse cx="0" cy="0" rx="35" ry="65" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="3.5" />
                    <ellipse cx="70" cy="0" rx="35" ry="65" fill="#E2E8F0" stroke="#7C3AED" strokeWidth="3" />
                    <line x1="-70" y1="-65" x2="70" y2="-65" stroke="#7C3AED" strokeWidth="3" />
                    <line x1="-70" y1="65" x2="70" y2="65" stroke="#7C3AED" strokeWidth="3" />
                  </g>
                )}
              </svg>

              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: '#FFFFFF',
                border: '1px solid #BFDBFE',
                fontSize: '12px',
                fontWeight: 700,
                color: '#2563EB'
              }}>
                Status: {current.status}
              </div>
            </div>

            {/* Profile Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <span className="badge-green" style={{ fontSize: '11.5px' }}>
                  {current.health}
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
                  {current.name}
                </h3>
              </div>

              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {current.desc}
              </p>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                paddingTop: '12px',
                borderTop: '1px solid #E2E8F0'
              }}>
                <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>LENGTH</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>{current.length}</div>
                </div>

                <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>SENSORS / CAMERAS</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginTop: '2px' }}>{current.sensorsOnline}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .twin-split-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
