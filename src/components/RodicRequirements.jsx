import React from 'react';
import { Handshake, Database, BookOpen, KeyRound, UserCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { RODIC_COLLABORATION_NEEDS } from '../data/mockData';

export default function RodicRequirements() {
  const icons = [
    <Database size={24} color="#00F0FF" />,
    <BookOpen size={24} color="#00E5A3" />,
    <KeyRound size={24} color="#FFB020" />,
    <UserCheck size={24} color="#C084FC" />,
    <Compass size={24} color="#38BDF8" />,
    <Sparkles size={24} color="#F43F5E" />
  ];

  return (
    <section id="rodic-needs" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0B1626 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Handshake size={12} color="#00F0FF" />
            <span>Collaboration (Slide 14)</span>
          </div>
          <h2 className="section-title">
            What We Need From Rodic
          </h2>
          <p className="section-subtitle">
            "We bring the AI expertise and implementation capability.
            Your domain knowledge, data and guidance will ensure real-world impact across India."
          </p>
        </div>

        {/* 6 Collaborative Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {RODIC_COLLABORATION_NEEDS.map((item, idx) => (
            <div key={idx} className="glass-panel bracket-corner" style={{ padding: '28px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(6, 11, 19, 0.85)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {icons[idx]}
                </div>

                <span style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.2)'
                }}>
                  {item.tag}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '10px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Vision Banner */}
        <div className="glass-panel" style={{
          background: 'linear-gradient(135deg, rgba(14, 28, 48, 0.9) 0%, rgba(6, 12, 22, 0.95) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          padding: '36px',
          textAlign: 'center',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            color: '#FFFFFF',
            marginBottom: '12px'
          }}>
            A Collaborative Partnership for National Impact
          </h3>
          <p style={{
            fontSize: '14.5px',
            color: '#CBD5E1',
            maxWidth: '820px',
            margin: '0 auto 24px',
            lineHeight: 1.6
          }}>
            Your support will help us demonstrate meaningful outcomes in the <strong>Infrastructure Innovation Initiative</strong> and lay the foundation for a scalable, self-sustaining infrastructure intelligence system across Rodic's nationwide portfolio.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 24px',
            borderRadius: '999px',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: '#00F0FF'
          }}>
            <CheckCircle2 size={16} color="#00E5A3" />
            <span>Ready for Immediate 14-Day PoC Deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
