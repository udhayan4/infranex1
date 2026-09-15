import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Rocket, ShieldCheck } from 'lucide-react';
import { IMPLEMENTATION_ROADMAP } from '../data/mockData';

export default function Roadmap() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <section id="roadmap" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#BBF7D0' }}>
            <Calendar size={15} />
            <span>4-Step Rollout Plan</span>
          </div>
          <h2 className="section-title">
            Test First. Expand Step-by-Step.
          </h2>
          <p className="section-subtitle">
            A low-risk, step-by-step rollout plan designed to prove value on 10 road stretches before scaling across state highways.
          </p>
        </div>

        {/* 4 Step Selector Cards */}
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
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  background: isSelected ? '#EFF6FF' : '#F8FAFC',
                  border: isSelected ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                  boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.12)' : '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: isSelected ? '#2563EB' : '#64748B'
                  }}>
                    {item.phase}
                  </span>
                  <span className={isSelected ? 'badge-blue' : 'badge-green'} style={{ fontSize: '11.5px' }}>
                    {item.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {item.name}
                </h3>

                <div style={{ fontSize: '13px', color: '#64748B' }}>
                  {item.scope}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Breakdown */}
        {IMPLEMENTATION_ROADMAP[activePhaseIndex] && (
          <div style={{
            padding: '32px',
            background: '#F8FAFC',
            borderRadius: '20px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '16px'
            }}>
              <div>
                <span className="badge-blue" style={{ fontSize: '11px' }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].phase} GOAL
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].objective}
                </h3>
              </div>

              <div style={{ fontSize: '13px', color: '#64748B' }}>
                Timeline: <strong style={{ color: '#2563EB' }}>{IMPLEMENTATION_ROADMAP[activePhaseIndex].duration}</strong> • Scope: <strong style={{ color: '#16A34A' }}>{IMPLEMENTATION_ROADMAP[activePhaseIndex].scope}</strong>
              </div>
            </div>

            {/* Deliverables */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                What We Deliver in This Step:
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '12px'
              }}>
                {IMPLEMENTATION_ROADMAP[activePhaseIndex].deliverables.map((deliv, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '14px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0'
                  }}>
                    <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <span style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5 }}>
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Outcome */}
            <div style={{
              padding: '18px 24px',
              borderRadius: '12px',
              background: '#F0FDF4',
              border: '1.5px solid #BBF7D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase' }}>
                  EXPECTED RESULT
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#15803D', marginTop: '2px' }}>
                  {IMPLEMENTATION_ROADMAP[activePhaseIndex].outcome}
                </div>
              </div>

              <span className="badge-green">
                Zero Disruption to Field Operations
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
