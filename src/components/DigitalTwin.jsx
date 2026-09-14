import React, { useState } from 'react';
import { Layers, Box, Cpu, Radio, Shield, ChevronRight, Activity } from 'lucide-react';

export default function DigitalTwin() {
  const [activeTwin, setActiveTwin] = useState('viaduct');

  const twinAssets = [
    {
      id: 'viaduct',
      name: 'Major Viaduct Twin (BR-07)',
      type: 'Bridge Viaduct',
      length: '620 Meters',
      meshPoints: '24,800 Polygons',
      sensorsOnline: '18 Strain & Tilt Gauges',
      cadence: 'Real-Time (50 Hz)',
      status: 'Synchronised',
      health: '78 / 100',
      desc: 'High-fidelity geometric model mapped with strain gauge channels, bathymetric sonar scour readings, and dynamic truck weigh-in-motion telemetry.'
    },
    {
      id: 'expressway',
      name: 'Arterial Corridor Twin (NH-48)',
      type: 'National Highway',
      length: '180 Kilometers',
      meshPoints: '1.2M Point Cloud Nodes',
      sensorsOnline: 'CCTV + Mobile LiDAR Feed',
      cadence: 'Updated Daily',
      status: 'Synchronised',
      health: '72 / 100',
      desc: 'Dense point-cloud strip with continuous IRI roughness profile, rut depth measurements, and automated drainage obstruction heatmaps.'
    },
    {
      id: 'tunnel',
      name: 'Subterranean Tube Twin (T-04)',
      type: 'Mountain Tunnel',
      length: '3.8 Kilometers',
      meshPoints: '45,000 Cylindrical Voxels',
      sensorsOnline: 'Jet Fans, CO Sensors, CCTV',
      cadence: 'Real-Time (10 Hz)',
      status: 'Synchronised',
      health: '82 / 100',
      desc: '3D cylindrical clearance tube with volumetric CFD airflow modeling, water ingress micro-seepage tracking, and luminaire array status.'
    }
  ];

  const current = twinAssets.find((t) => t.id === activeTwin);

  return (
    <section id="digital-twin" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0B1626 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Box size={12} color="#00F0FF" />
            <span>Digital Twin Layer</span>
          </div>
          <h2 className="section-title">
            Unified Infrastructure Digital Twin
          </h2>
          <p className="section-subtitle">
            "Every asset gets a digital identity."
            Continuously synchronising real-world IoT telemetry, drone point-clouds, and vehicle optical sweeps into an interactive virtual twin.
          </p>
        </div>

        {/* Digital Twin Sandbox */}
        <div className="glass-panel bracket-corner" style={{
          padding: '32px',
          background: 'rgba(8, 15, 27, 0.92)'
        }}>
          {/* Twin Selector Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '16px'
          }}>
            {twinAssets.map((item) => {
              const isActive = activeTwin === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTwin(item.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(0, 240, 255, 0.15)' : 'rgba(6, 11, 19, 0.6)',
                    border: isActive ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#00F0FF' : 'var(--text-secondary)',
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Isometric Twin Visual Canvas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '24px',
            alignItems: 'center'
          }} className="twin-split-layout">
            {/* Visual Canvas */}
            <div style={{
              position: 'relative',
              height: '360px',
              background: 'radial-gradient(circle at 50% 50%, #0C1E34 0%, #040810 80%)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 600 360">
                <defs>
                  <pattern id="twin-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 240, 255, 0.06)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#twin-grid)" />

                {/* Isometric Coordinate Planes */}
                <g transform="translate(300, 180)">
                  {/* Isometric base plane */}
                  <polygon points="0,-100 200,0 0,100 -200,0" fill="rgba(0, 240, 255, 0.04)" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1.5" />
                  <polygon points="0,-70 140,0 0,70 -140,0" fill="none" stroke="rgba(0, 229, 163, 0.2)" strokeWidth="1" strokeDasharray="6 4" />

                  {/* Dynamic Representation based on active twin */}
                  {activeTwin === 'viaduct' && (
                    <g>
                      {/* 3D Pier columns */}
                      <rect x="-120" y="-30" width="24" height="90" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" />
                      <rect x="-10" y="-30" width="24" height="90" fill="rgba(0, 240, 255, 0.3)" stroke="#00F0FF" />
                      <rect x="100" y="-30" width="24" height="90" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" />

                      {/* Bridge Deck Slab */}
                      <polygon points="-160,-40 160,-40 140,-20 -180,-20" fill="rgba(30, 144, 255, 0.4)" stroke="#00F0FF" strokeWidth="2" />
                      
                      {/* Pylon Tower */}
                      <polygon points="-2,-130 6,-130 10,-40 -6,-40" fill="rgba(0, 240, 255, 0.4)" stroke="#00F0FF" strokeWidth="1.5" />
                      <line x1="2" y1="-120" x2="-100" y2="-40" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="2" y1="-120" x2="100" y2="-40" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Telemetry data rings */}
                      <circle cx="2" cy="0" r="16" fill="none" stroke="#FFB020" strokeWidth="1.5" />
                      <circle cx="2" cy="0" r="4" fill="#FFB020" />
                    </g>
                  )}

                  {activeTwin === 'expressway' && (
                    <g>
                      {/* Curving highway rib ribbon */}
                      <path d="M -160 40 Q 0 -60 160 20" fill="none" stroke="#00F0FF" strokeWidth="24" strokeLinecap="round" opacity="0.3" />
                      <path d="M -160 40 Q 0 -60 160 20" fill="none" stroke="#00F0FF" strokeWidth="4" />
                      <path d="M -160 40 Q 0 -60 160 20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="12 12" />

                      {/* Point cloud nodes */}
                      <circle cx="-60" cy="-10" r="5" fill="#FF3B57" />
                      <circle cx="20" cy="-24" r="4" fill="#FFB020" />
                      <circle cx="100" cy="-5" r="4" fill="#00E5A3" />
                    </g>
                  )}

                  {activeTwin === 'tunnel' && (
                    <g>
                      {/* Cylindrical Tube Ring Segments */}
                      <ellipse cx="-80" cy="0" rx="30" ry="60" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="2" />
                      <ellipse cx="0" cy="0" rx="30" ry="60" fill="none" stroke="rgba(192, 132, 252, 0.7)" strokeWidth="2.5" />
                      <ellipse cx="80" cy="0" rx="30" ry="60" fill="none" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="2" />
                      
                      <line x1="-80" y1="-60" x2="80" y2="-60" stroke="#C084FC" strokeWidth="2" />
                      <line x1="-80" y1="60" x2="80" y2="60" stroke="#C084FC" strokeWidth="2" />

                      {/* Jet Fan Marker */}
                      <circle cx="0" cy="-45" r="5" fill="#00F0FF" />
                      <circle cx="0" cy="-45" r="12" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 2" />
                    </g>
                  )}
                </g>
              </svg>

              {/* Status Watermark */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(6, 11, 19, 0.9)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#00F0FF'
              }}>
                STATE: {current.status.toUpperCase()} • TELEMETRY: 50Hz
              </div>
            </div>

            {/* Profile Drawer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                  ASSET DIGITAL IDENTITY
                </span>
                <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginTop: '2px' }}>
                  {current.name}
                </h3>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {current.desc}
              </p>

              {/* Telemetry Matrix */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>MESH DENSITY</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>{current.meshPoints}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>INSTRUMENTATION</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#00F0FF', marginTop: '2px' }}>{current.sensorsOnline}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SYNC CADENCE</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#00E5A3', marginTop: '2px' }}>{current.cadence}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>HEALTH SCORE</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFB020', marginTop: '2px' }}>{current.health}</div>
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
