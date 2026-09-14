import React from 'react';
import { Award, CheckCircle2, TrendingUp, Cpu, Users, Layers, ShieldCheck, Quote } from 'lucide-react';
import { COMPANY_INFO, PROVEN_TRACK_RECORD } from '../data/mockData';

export default function WhyUsSection() {
  const advantagePillars = [
    {
      title: "Real-World Field Execution",
      sub: "Built & Operated at Scale",
      icon: <Layers size={22} color="#00F0FF" />,
      desc: "Proven track record managing ₹800+ Cr public infrastructure programs across rugged, remote Indian terrains. We know how physical infrastructure behaves in the real world."
    },
    {
      title: "AI & Digital Engineering",
      sub: "Deep-Tech Computer Vision & Multimodal AI",
      icon: <Cpu size={22} color="#00E5A3" />,
      desc: "High-performance edge models, automated defect segmentation, point cloud LiDAR processing, and GenAI copilot intelligence calibrated for civil engineering standards."
    },
    {
      title: "Governance & Complex Ecosystems",
      sub: "Government, PSU & OEM Collaboration",
      icon: <Users size={22} color="#C084FC" />,
      desc: "Deep experience coordinating multi-vendor, multi-state deployments with strict regulatory compliance, quality audits, and ISO 9001 certified workflows."
    }
  ];

  return (
    <section id="why-us" className="section-wrapper" style={{
      background: 'rgba(10, 18, 32, 0.4)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Award size={12} color="#00F0FF" />
            <span>The IGT Advantage</span>
          </div>
          <h2 className="section-title">
            Why IGT. Why InfraSight AI. <br />
            <span style={{ color: '#00F0FF' }}>Why Now.</span>
          </h2>
          <p className="section-subtitle">
            A rare combination of on-ground civil execution experience and advanced AI engineering capability.
            We don't just write algorithms; we understand field realities.
          </p>
        </div>

        {/* Proven Track Record Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {PROVEN_TRACK_RECORD.map((item, index) => (
            <div key={index} className="glass-panel bracket-corner" style={{ padding: '20px' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                fontWeight: 800,
                color: '#00F0FF',
                lineHeight: 1.1,
                marginBottom: '6px'
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '4px'
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                lineHeight: 1.4
              }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Quote Callout */}
        <div className="glass-panel" style={{
          background: 'linear-gradient(135deg, rgba(14, 28, 48, 0.9) 0%, rgba(8, 16, 28, 0.9) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.1)',
          padding: '36px',
          marginBottom: '56px',
          position: 'relative'
        }}>
          <Quote size={48} color="rgba(0, 240, 255, 0.18)" style={{
            position: 'absolute',
            top: '24px',
            right: '28px'
          }} />

          <blockquote style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1.6,
            maxWidth: '920px',
            marginBottom: '20px'
          }}>
            "{COMPANY_INFO.directorQuote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00F0FF, #0088FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#060B13',
              fontSize: '18px'
            }}>
              VK
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '15px' }}>
                {COMPANY_INFO.director}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)' }}>
                {COMPANY_INFO.directorTitle} • {COMPANY_INFO.qmsCertification}
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Pillars of The IGT Advantage */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {advantagePillars.map((pillar, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(6, 11, 19, 0.8)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 0 16px rgba(0, 240, 255, 0.15)'
              }}>
                {pillar.icon}
              </div>
              <div style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cyan-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '4px'
              }}>
                {pillar.sub}
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{pillar.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Tagline Banner */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '8px',
          background: 'rgba(0, 240, 255, 0.04)',
          border: '1px dashed rgba(0, 240, 255, 0.2)'
        }}>
          <p style={{ fontSize: '14.5px', color: '#E2E8F0', fontStyle: 'italic' }}>
            "We didn't start with AI and look for an infrastructure problem.
            We started with the infrastructure problem and built AI to solve it."
          </p>
        </div>
      </div>
    </section>
  );
}
