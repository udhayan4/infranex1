import React from 'react';
import { Cpu, Server, Database, Layers, ArrowDown, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/mockData';

export default function Architecture() {
  const enablers = [
    { title: "Cloud + Edge Deployment", desc: "Edge inference in survey vehicles for real-time offline detection; cloud synchronization for network analytics." },
    { title: "Modular Architecture", desc: "Start with road pavement scanning; plug in bridge telemetry and tunnel SCADA modules as required." },
    { title: "Use Existing Data", desc: "No immediate heavy hardware needed. Ingests existing Rodic inspection videos, GIS layers, and drone logs." },
    { title: "Engineer-in-the-Loop", desc: "Every AI classification and priority score allows engineer validation and feedback to continuously calibrate models." },
    { title: "Standards-Based APIs", desc: "Built to interface smoothly with Rodic Eye, PMIS, ERP, and NHAI / State PWD data guidelines." },
    { title: "Enterprise Security", desc: "Role-based access control, cryptographic audit logs, and sovereign on-prem / Indian cloud compliance." }
  ];

  return (
    <section id="architecture" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0A1424 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Layers size={12} color="#00F0FF" />
            <span>System Architecture (Slide 13)</span>
          </div>
          <h2 className="section-title">
            InfraSight AI Platform Architecture
          </h2>
          <p className="section-subtitle">
            A modular, enterprise-grade, four-layer intelligence stack that leverages existing infrastructure
            and proven multimodal deep learning models.
          </p>
        </div>

        {/* 4-Layer Architecture Stack */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto 56px'
        }}>
          {ARCHITECTURE_LAYERS.map((layer, idx) => (
            <div key={idx} className="glass-panel bracket-corner" style={{
              padding: '24px 30px',
              background: 'rgba(8, 16, 28, 0.9)',
              border: '1px solid rgba(0, 240, 255, 0.2)'
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: '#00F0FF',
                    fontWeight: 800,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: 'rgba(0, 240, 255, 0.15)',
                    border: '1px solid rgba(0, 240, 255, 0.3)'
                  }}>
                    LAYER {layer.layer}
                  </span>
                  <h3 style={{ fontSize: '18px', color: '#FFFFFF' }}>{layer.name}</h3>
                </div>

                {idx === 2 && (
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#C084FC',
                    background: 'rgba(192, 132, 252, 0.15)',
                    border: '1px solid rgba(192, 132, 252, 0.3)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={12} /> Includes GenAI Copilot
                  </span>
                )}
              </div>

              {/* Layer Items Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px'
              }}>
                {layer.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#CBD5E1'
                  }}>
                    <span style={{ color: '#00F0FF', marginTop: '3px' }}>&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Technical Enablers Grid */}
        <div>
          <div style={{
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--cyan-primary)',
            letterSpacing: '0.08em',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            KEY ENABLERS FOR SUCCESSFUL IMPLEMENTATION
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '18px'
          }}>
            {enablers.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={16} color="#00E5A3" />
                  <h4 style={{ fontSize: '15px', color: '#FFFFFF' }}>{item.title}</h4>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
