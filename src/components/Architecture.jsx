import React from 'react';
import { Cpu, Server, Database, Layers, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/mockData';

export default function Architecture() {
  const enablers = [
    { title: "Works on Regular Patrol Cars", desc: "Attach simple dashcams to existing vehicles. No expensive specialized trucks needed." },
    { title: "No New Hardware Upfront", desc: "Start immediately using existing highway inspection videos, photos, and drone flights." },
    { title: "Works Offline in Remote Areas", desc: "Cameras record and detect problems even in rural hills with zero mobile signal." },
    { title: "Engineers Always in Control", desc: "Road engineers review and approve all repair suggestions before work orders are sent." },
    { title: "Connects with Existing Systems", desc: "Easily shares reports with government portals, ERPs, and municipal software." },
    { title: "High Privacy & Security", desc: "Follows strict government data security standards and keeps road records safe." }
  ];

  return (
    <section id="architecture" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Layers size={15} />
            <span>How It Works</span>
          </div>
          <h2 className="section-title">
            How Our System Works Together in 4 Steps
          </h2>
          <p className="section-subtitle">
            A simple, practical process that turns ordinary camera video into verified road repairs without disrupting traffic.
          </p>
        </div>

        {/* 4 Clean Step Layers */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '900px',
          margin: '0 auto 48px'
        }}>
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const colors = ['#2563EB', '#16A34A', '#D97706', '#7C3AED'];
            const color = colors[idx % colors.length];

            return (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                  borderBottom: '1px solid #F1F5F9',
                  paddingBottom: '12px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: color,
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {layer.layer}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {layer.name}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '10px'
                }}>
                  {layer.items.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#475569'
                    }}>
                      <span style={{ color: color, fontWeight: 700 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Practical Enablers */}
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
            Why It Works So Well in Real Life
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {enablers.map((item, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '20px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#16A34A" />
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>{item.title}</h4>
                </div>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
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
