import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Rocket, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { IMPLEMENTATION_ROADMAP } from '../data/mockData';

export default function Roadmap() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <section id="roadmap" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Calendar size={12} color="#00E5A3" />
            <span>Implementation Roadmap (Slide 12)</span>
          </div>
          <h2 className="section-title">
            Prove First. Scale Modularly.
          </h2>
          <p className="section-subtitle">
            A practical, phased deployment model designed for low upfront risk, fast validation, and seamless national scaling.
          </p>
        </div>

        {/* Horizontal Phased Timeline Navigator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          {IMPLEMENTATION_ROADMAP.map((item, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActivePhaseIndex(idx)}
                className="glass-panel bracket-corner"
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(8, 16, 28, 0.75)',
                  border: isSelected ? '1.5px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 20px rgba(0, 240, 255, 0.25)' : 'none',
                  transition: 'all 0.25s'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: isSelected ? '#00F0FF' : 'var(--text-muted)',
                    fontWeight: 700
                  }}>
                    {item.phase}
                  </span>
                  <span style={{
                    fontSize: '10.5px',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: isSelected ? 'rgba(0, 229, 163, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    color: isSelected ? '#00E5A3' : 'var(--text-secondary)'
                  }}>
                    {item.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '4px' }}>
                  {item.name}
                </h3>

                <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                  {item.scope}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Breakdown */}
        {IMPLEMENTATION_ROADMAP[activePhaseIndex] && (
          <div className="glass-panel bracket-corner" style={{
            padding: '36px',
            background: 'rgba(8, 16, 28, 0.95)',
            border: '1px solid rgba(0, 240, 255, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '18px'
            }}>
              <div>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)',
                  letterSpacing: '0.08em'
                }}>
                  PHASE OBJECTIVE // {IMPLEMENTATION_ROADMAP[activePhaseIndex].phase}
                </span>
                <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginTop: '4px' }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].objective}
                </h3>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px'
              }}>
                <span style={{ color: 'var(--text-muted)' }}>TIMELINE:</span>
                <span style={{ color: '#00F0FF', fontWeight: 700 }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].duration}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>| SCOPE:</span>
                <span style={{ color: '#00E5A3', fontWeight: 700 }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].scope}
                </span>
              </div>
            </div>

            {/* Deliverables List */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: '#00F0FF',
                marginBottom: '14px',
                letterSpacing: '0.06em'
              }}>
                KEY PHASE DELIVERABLES & ACTIVITIES
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '14px'
              }}>
                {IMPLEMENTATION_ROADMAP[activePhaseIndex].deliverables.map((deliv, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '14px',
                    borderRadius: '6px',
                    background: 'rgba(6, 11, 19, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <CheckCircle2 size={16} color="#00E5A3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.5 }}>
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Outcome Box */}
            <div style={{
              padding: '18px 24px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 229, 163, 0.1) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                  MEASURABLE PHASE OUTCOME
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].outcome}
                </div>
              </div>

              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: '#00E5A3',
                fontWeight: 700
              }}>
                AUDIT-READY VERIFICATION
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
