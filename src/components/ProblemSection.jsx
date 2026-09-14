import React, { useState } from 'react';
import { Database, AlertTriangle, GitFork, Cpu, ShieldAlert, Clock, EyeOff, Layers, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  const [isConverged, setIsConverged] = useState(true);

  const dataSources = [
    { name: "CCTV Surveillance", type: "Video Feeds", icon: "📹" },
    { name: "IoT Sensors", type: "Strain, Tilt, Vib", icon: "📡" },
    { name: "Drone Inspections", type: "Aerial Imagery", icon: "🛸" },
    { name: "Satellite Imagery", type: "GIS Earth Obs", icon: "🛰️" },
    { name: "Inspection Reports", type: "PDF / Manual", icon: "📋" },
    { name: "Maintenance Records", type: "Legacy ERP / SAP", icon: "🗄️" },
    { name: "Traffic Data", type: "FASTag / Sensors", icon: "🚗" },
    { name: "Weather & Climate", type: "Rainfall / Temp", icon: "⛈️" },
    { name: "GIS Spatial Maps", type: "Chainage & Vector", icon: "🗺️" }
  ];

  const painPoints = [
    {
      icon: <Layers size={20} color="#FF3B57" />,
      title: "Fragmented Data Silos",
      desc: "Data lives isolated across different contractors, vendor tools, paper inspection diaries, and disparate software formats."
    },
    {
      icon: <Clock size={20} color="#FFB020" />,
      title: "Reactive Maintenance",
      desc: "Repairs happen only after structural distress, severe potholes, or safety incidents emerge — increasing repair costs exponentially."
    },
    {
      icon: <EyeOff size={20} color="#00F0FF" />,
      title: "Slow Manual Inspection",
      desc: "Walking highways or inspecting bridge soffits manually is dangerous, subjective, slow (weeks per corridor), and lacks baseline repeatability."
    },
    {
      icon: <AlertTriangle size={20} color="#FF3B57" />,
      title: "Delayed Risk Identification",
      desc: "Subsurface cracks, bearing wear, and drainage clogs go unnoticed until major structural rehabilitation or emergency closure is required."
    },
    {
      icon: <GitFork size={20} color="#FFB020" />,
      title: "Disconnected Asset Intelligence",
      desc: "No unified digital twin connects roads, bridges, and tunnels into a single real-time spatial network view."
    },
    {
      icon: <Cpu size={20} color="#00E5A3" />,
      title: "Difficulty Prioritising Budgets",
      desc: "Without AI risk scoring, maintenance funds are allocated by intuition or complaint volume rather than failure consequence."
    }
  ];

  return (
    <section id="problem" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0A1322 50%, #060B13 100%)',
      borderTop: '1px solid rgba(0, 240, 255, 0.08)',
      borderBottom: '1px solid rgba(0, 240, 255, 0.08)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <AlertTriangle size={12} color="#FFB020" />
            <span>The Infrastructure Challenge</span>
          </div>
          <h2 className="section-title">
            Infrastructure Data Exists Everywhere. <br />
            <span style={{ color: '#FF3B57' }}>Infrastructure Intelligence Does Not.</span>
          </h2>
          <p className="section-subtitle">
            Highway authorities and consultants generate millions of gigabytes of visual, sensor, and spatial records.
            Yet without automated AI convergence, infrastructure decisions remain dangerously reactive.
          </p>
        </div>

        {/* Interactive Data Convergence Sandbox */}
        <div className="glass-panel bracket-corner" style={{
          padding: '36px',
          marginBottom: '56px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Controls */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '20px'
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#FFFFFF'
              }}>
                Interactive Architecture Simulation
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Toggle between legacy fragmented silos and the unified InfraSight AI neural layer.
              </div>
            </div>

            {/* Toggle Mode */}
            <div style={{
              display: 'inline-flex',
              background: 'rgba(6, 11, 19, 0.9)',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}>
              <button
                onClick={() => setIsConverged(false)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: !isConverged ? '#FF3B57' : '#94A3B8',
                  background: !isConverged ? 'rgba(255, 59, 87, 0.15)' : 'transparent',
                  border: !isConverged ? '1px solid rgba(255, 59, 87, 0.3)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                Fragmented Silos (Legacy)
              </button>
              <button
                onClick={() => setIsConverged(true)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: isConverged ? '#00F0FF' : '#94A3B8',
                  background: isConverged ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                  border: isConverged ? '1px solid rgba(0, 240, 255, 0.4)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                InfraSight AI (Converged)
              </button>
            </div>
          </div>

          {/* Interactive Flow Visual */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isConverged ? '1fr auto 1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            minHeight: '300px'
          }}>
            {/* Left Sources */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '12px'
            }}>
              {dataSources.map((ds, idx) => (
                <div
                  key={idx}
                  style={{
                    background: isConverged ? 'rgba(10, 22, 38, 0.8)' : 'rgba(40, 16, 24, 0.6)',
                    border: isConverged ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(255, 59, 87, 0.3)',
                    borderRadius: '8px',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    transition: 'all 0.4s ease',
                    transform: isConverged ? 'none' : `translate(${(idx % 3 - 1) * 6}px, ${(idx % 2 - 1) * 6}px)`
                  }}
                >
                  <div style={{ fontSize: '20px' }}>{ds.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>{ds.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{ds.type}</div>
                </div>
              ))}
            </div>

            {/* Middle Pipeline Hub (Visible in Converged Mode) */}
            {isConverged && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(30, 136, 229, 0.1) 100%)',
                border: '1px solid #00F0FF',
                borderRadius: '16px',
                boxShadow: '0 0 35px rgba(0, 240, 255, 0.25)',
                minWidth: '220px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(0, 240, 255, 0.2)',
                  border: '1px solid #00F0FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  boxShadow: '0 0 15px #00F0FF'
                }}>
                  <Cpu size={28} color="#00F0FF" />
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#FFFFFF'
                }}>
                  InfraSight <span style={{ color: '#00F0FF' }}>AI</span>
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#00E5A3',
                  fontFamily: 'var(--font-mono)',
                  marginTop: '4px'
                }}>
                  Multi-Modal Neural Fusion
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  marginTop: '8px',
                  lineHeight: 1.4
                }}>
                  Ingests, normalises & correlates 9 disparate data pipelines in real time.
                </div>
              </div>
            )}

            {/* Right Output Intelligence (Visible in Converged Mode) */}
            {isConverged && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  background: 'rgba(0, 229, 163, 0.1)',
                  border: '1px solid rgba(0, 229, 163, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00E5A3', fontWeight: 600, fontSize: '14px' }}>
                    <CheckCircle2 size={16} /> Automated Defect Classification
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                    Cracks, potholes, spalling, water leaks pinpointed with sub-meter GIS coordinates.
                  </div>
                </div>

                <div style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00F0FF', fontWeight: 600, fontSize: '14px' }}>
                    <CheckCircle2 size={16} /> Unified Digital Twin Health Index
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                    Single-pane-of-glass overview across every road, bridge pier, and tunnel lining.
                  </div>
                </div>

                <div style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  background: 'rgba(255, 176, 32, 0.1)',
                  border: '1px solid rgba(255, 176, 32, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFB020', fontWeight: 600, fontSize: '14px' }}>
                    <CheckCircle2 size={16} /> Predictive Maintenance Prioritisation
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                    Ranks interventions by failure risk & consequence to maximize maintenance ROI.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 6 Core Pain Points Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {painPoints.map((item, index) => (
            <div key={index} className="glass-panel" style={{ padding: '24px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(6, 11, 19, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
