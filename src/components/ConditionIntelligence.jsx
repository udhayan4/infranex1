import React, { useState } from 'react';
import { Truck, Eye, Shield, Activity, TrendingUp, AlertCircle, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';
import { ROAD_DEFECTS_CATALOG, ROAD_KPIS } from '../data/mockData';

export default function ConditionIntelligence() {
  const [activeDefect, setActiveDefect] = useState(ROAD_DEFECTS_CATALOG[0]);

  const pipelineStages = [
    {
      num: "01",
      title: "Asset & Data Capture",
      sub: "Multi-Source, Network-Wide",
      desc: "Vehicle-mounted high-speed cameras (80-100 km/day), aerial drone surveys along high-risk corridors, and mobile LiDAR."
    },
    {
      num: "02",
      title: "AI Analysis & Detection",
      sub: "Computer Vision at Scale",
      desc: "Deep neural networks automatically segment and measure potholes, longitudinal cracks, rutting, and shoulder drop-offs."
    },
    {
      num: "03",
      title: "Condition & Risk Assessment",
      sub: "From Data to Intelligence",
      desc: "Calculates unified Road Condition Index (0-100) weighted by traffic density, axle loads, and monsoon deterioration forecasts."
    },
    {
      num: "04",
      title: "Maintenance Planning",
      sub: "Prioritise, Schedule, Execute",
      desc: "Auto-generates geo-tagged digital work orders with estimated Bill of Quantities (BOQ) and contractor SLA deadlines."
    },
    {
      num: "05",
      title: "Continuous Monitoring",
      sub: "Learn, Verify & Improve",
      desc: "AI audits post-repair imagery with computer vision to verify repair quality and continuously re-trains models."
    }
  ];

  return (
    <section id="road-ai" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Truck size={12} color="#00F0FF" />
            <span>Use Case 01</span>
          </div>
          <h2 className="section-title">
            AI Road Condition & Maintenance Intelligence
          </h2>
          <p className="section-subtitle">
            From periodic manual inspection to proactive, continuous, data-driven highway intelligence.
            Detect distress early, size defects accurately, and extend pavement lifecycles.
          </p>
        </div>

        {/* 5-Stage Visual Pipeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '56px'
        }}>
          {pipelineStages.map((stage, idx) => (
            <div key={idx} className="glass-panel bracket-corner" style={{ padding: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#00F0FF'
                }}>
                  {stage.num}
                </span>
                <span className="status-dot"></span>
              </div>
              <h3 style={{ fontSize: '15px', color: '#FFFFFF', marginBottom: '4px' }}>{stage.title}</h3>
              <div style={{ fontSize: '11px', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                {stage.sub}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{stage.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Defect Analysis Sandbox */}
        <div className="glass-panel bracket-corner" style={{
          padding: '32px',
          marginBottom: '56px',
          background: 'rgba(8, 15, 27, 0.85)'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '16px'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#FFFFFF'
              }}>
                Interactive Defect Catalog & Neural Detection
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Select a pavement distress category to inspect automated measurement algorithms and telemetry.
              </div>
            </div>

            {/* Case Study Callout Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'rgba(255, 59, 87, 0.12)',
              border: '1px solid rgba(255, 59, 87, 0.3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#FF3B57'
            }}>
              <span>LIVE STUDY: NH-66 KM 124.2 – 125.0</span>
              <span style={{ fontWeight: 700 }}>CONDITION: 62/100</span>
            </div>
          </div>

          {/* Defect Tabs & Details Split */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '24px',
            alignItems: 'start'
          }} className="defect-split-layout">
            {/* Left: Defect Selector Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ROAD_DEFECTS_CATALOG.map((item, index) => {
                const isActive = activeDefect.title === item.title;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveDefect(item)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: isActive ? 'rgba(0, 240, 255, 0.12)' : 'rgba(6, 11, 19, 0.7)',
                      border: isActive ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: isActive ? '#00F0FF' : '#FFFFFF' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {item.detectionTech}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        background: `${item.color}20`,
                        color: item.color,
                        fontWeight: 700
                      }}>
                        {item.severity}
                      </span>
                      <div style={{ fontSize: '11px', color: 'var(--emerald-success)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                        {item.accuracy}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Active Defect Inspector Card */}
            <div style={{
              background: 'rgba(6, 11, 19, 0.9)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '10px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)',
                  letterSpacing: '0.08em'
                }}>
                  NEURAL DETECTION TELEMETRY
                </span>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(0, 229, 163, 0.15)',
                  color: '#00E5A3',
                  border: '1px solid rgba(0, 229, 163, 0.3)'
                }}>
                  VALIDATED IN POC
                </span>
              </div>

              <h3 style={{ fontSize: '20px', color: '#FFFFFF' }}>{activeDefect.title}</h3>

              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {activeDefect.desc}
              </p>

              {/* Technical Parameters */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ padding: '10px', background: 'rgba(10, 20, 36, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SENSOR / INPUT</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>{activeDefect.detectionTech}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(10, 20, 36, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DETECTION ACCURACY</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#00E5A3', marginTop: '2px' }}>{activeDefect.accuracy}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(10, 20, 36, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SEVERITY LEVEL</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: activeDefect.color, marginTop: '2px' }}>{activeDefect.severity}</div>
                </div>

                <div style={{ padding: '10px', background: 'rgba(10, 20, 36, 0.6)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>GIS PRECISION</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#00F0FF', marginTop: '2px' }}>Sub-meter (&plusmn;0.8m)</div>
                </div>
              </div>

              {/* AI Value Addition Loop */}
              <div style={{
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#00F0FF', marginBottom: '4px' }}>
                  AI VALUE ADDITION LOOP (SLIDE 04)
                </div>
                <div style={{ fontSize: '12px', color: '#CBD5E1' }}>
                  <strong>See</strong> (detect) &rarr; <strong>Measure</strong> (dimensions) &rarr; <strong>Understand</strong> (condition) &rarr; <strong>Predict</strong> (failure) &rarr; <strong>Prioritise</strong> (budget) &rarr; <strong>Learn</strong> (continuous).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic KPIs Grid (Slide 4) */}
        <div>
          <div style={{
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--cyan-primary)',
            letterSpacing: '0.08em',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            BENCHMARK MAINTENANCE PARAMETERS / KPIS (RODIC CHALLENGE SLIDE 04)
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '14px'
          }}>
            {ROAD_KPIS.map((kpi, idx) => (
              <div key={idx} className="metric-hud bracket-corner" style={{ padding: '16px' }}>
                <div className="metric-hud-value" style={{ fontSize: '1.8rem', color: '#00F0FF' }}>
                  {kpi.value}
                </div>
                <div className="metric-hud-label" style={{ fontSize: '11px' }}>{kpi.label}</div>
                <div className="metric-hud-sub" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .defect-split-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
