import React, { useState } from 'react';
import { Truck, Eye, Shield, Activity, TrendingUp, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { ROAD_DEFECTS_CATALOG, ROAD_KPIS } from '../data/mockData';

export default function ConditionIntelligence() {
  const [activeDefect, setActiveDefect] = useState(ROAD_DEFECTS_CATALOG[0]);

  const pipelineStages = [
    {
      num: "1",
      title: "Take Road Video",
      sub: "Normal Driving",
      color: "#2563EB",
      bg: "#EFF6FF",
      desc: "A dashcam mounted on a regular patrol car or a camera drone captures high-quality video as it drives along the highway."
    },
    {
      num: "2",
      title: "Spot All Damage",
      sub: "Instant Detection",
      color: "#16A34A",
      bg: "#F0FDF4",
      desc: "The system automatically circles potholes, cracks, and broken shoulders without any manual effort."
    },
    {
      num: "3",
      title: "Measure Size & Depth",
      sub: "Exact Dimensions",
      color: "#D97706",
      bg: "#FEF3C7",
      desc: "Calculates exact width, length, and depth so road engineers know exactly how much asphalt is needed to fill it."
    },
    {
      num: "4",
      title: "Send Work Order",
      sub: "To Repair Van's Phone",
      color: "#7C3AED",
      bg: "#FAF5FF",
      desc: "Sends a clear digital job card with exact GPS pin to the nearest highway repair contractor."
    },
    {
      num: "5",
      title: "Photo Verification",
      sub: "Quality Check",
      color: "#E11D48",
      bg: "#FFE4E6",
      desc: "The worker takes a photo after repairing the hole. The system verifies that the asphalt is smooth and flat."
    }
  ];

  return (
    <section id="road-ai" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Truck size={15} />
            <span>Road Safety & Potholes</span>
          </div>
          <h2 className="section-title">
            Finding Road Problems Before They Get Worse
          </h2>
          <p className="section-subtitle">
            From periodic manual walking to quick, automatic detection. Spot potholes, cracks, and drainage blocks in seconds.
          </p>
        </div>

        {/* 5-Stage Visual Pipeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {pipelineStages.map((stage, idx) => (
            <div key={idx} style={{
              background: stage.bg,
              border: `1.5px solid ${stage.color}40`,
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: stage.color,
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '14px',
                marginBottom: '12px'
              }}>
                {stage.num}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                {stage.title}
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, color: stage.color, marginBottom: '8px' }}>
                {stage.sub}
              </div>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Defect Catalog */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px',
          marginBottom: '48px'
        }}>
          <div style={{ marginBottom: '24px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>
              Common Road Problems We Spot Automatically
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              Click any problem below to see how it is detected and measured:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '24px',
            alignItems: 'start'
          }} className="defect-split-layout">
            {/* Left Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ROAD_DEFECTS_CATALOG.map((item, index) => {
                const isActive = activeDefect.title === item.title;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveDefect(item)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      background: isActive ? '#FFFFFF' : '#F1F5F9',
                      border: isActive ? `2px solid ${item.color}` : '1.5px solid #E2E8F0',
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: isActive ? item.color : '#0F172A' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                        {item.detectionTech}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span className={item.badge}>
                        {item.severity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Card */}
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className={activeDefect.badge}>
                  {activeDefect.severity}
                </span>
                <span style={{ fontSize: '13px', color: '#16A34A', fontWeight: 700 }}>
                  {activeDefect.accuracy}
                </span>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>
                {activeDefect.title}
              </h3>

              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                {activeDefect.desc}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                paddingTop: '12px',
                borderTop: '1px solid #E2E8F0'
              }}>
                <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>CAMERA INPUT</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>{activeDefect.detectionTech}</div>
                </div>

                <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>ACCURACY RATE</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>{activeDefect.accuracy}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World KPIs */}
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#2563EB',
            textAlign: 'center',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            Key Benefits for Highway Agencies & Travelers
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '14px'
          }}>
            {ROAD_KPIS.map((kpi, idx) => (
              <div key={idx} className="metric-hud" style={{ padding: '18px' }}>
                <div className="metric-hud-value" style={{ fontSize: '1.9rem', color: '#2563EB' }}>
                  {kpi.value}
                </div>
                <div className="metric-hud-label" style={{ fontSize: '12px' }}>{kpi.label}</div>
                <div className="metric-hud-sub" style={{ fontSize: '12px' }}>{kpi.sub}</div>
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
