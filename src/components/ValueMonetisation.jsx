import React from 'react';
import { DollarSign, Wifi, BatteryCharging, Tv, ShoppingBag, Eye, TrendingUp, Sparkles } from 'lucide-react';
import { MONETISATION_OPPORTUNITIES } from '../data/mockData';

export default function ValueMonetisation() {
  const pillars = [
    {
      step: "SEE",
      title: "Real-Time Visibility",
      desc: "Continuous optical and structural monitoring across every kilometer of the corridor."
    },
    {
      step: "OPTIMISE",
      title: "Lower Lifecycle Costs",
      desc: "Preventive micro-repairs that halt subbase water degradation and extend bridge deck life."
    },
    {
      step: "MONETISE",
      title: "New Public Revenue",
      desc: "Transforming passive highway right-of-way assets into self-funding digital smart poles & hubs."
    }
  ];

  return (
    <section id="monetisation" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <DollarSign size={12} color="#00E5A3" />
            <span>Infrastructure Value (Slide 10)</span>
          </div>
          <h2 className="section-title">
            From Infrastructure Management <br />
            <span style={{ color: '#00E5A3' }}>to Infrastructure Value.</span>
          </h2>
          <p className="section-subtitle">
            "Same Infrastructure. Greater Possibilities."
            Beyond preventing failures, InfraSight AI enables highway agencies and Rodic to turn public infrastructure into a safer, smarter, and self-sustaining commercial ecosystem.
          </p>
        </div>

        {/* 3 Pillars: See, Optimise, Monetise */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-panel bracket-corner" style={{ padding: '24px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: idx === 2 ? '#00E5A3' : '#00F0FF',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: '6px'
              }}>
                PILLAR 0{idx + 1} // {p.step}
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Illustrative Commercial Dashboard Callout */}
        <div className="glass-panel bracket-corner" style={{
          padding: '32px',
          background: 'rgba(8, 16, 28, 0.9)',
          border: '1px solid rgba(0, 229, 163, 0.25)',
          marginBottom: '48px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '16px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF' }}>
                Right-of-Way (RoW) Commercialisation Potential
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                Monetisable assets across highway corridors, bus shelters, and viaduct pillars
              </div>
            </div>

            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              padding: '4px 10px',
              borderRadius: '4px',
              background: 'rgba(0, 229, 163, 0.15)',
              color: '#00E5A3',
              border: '1px solid rgba(0, 229, 163, 0.3)'
            }}>
              Illustrative Financial Model (Slide 10)
            </span>
          </div>

          {/* Revenue HUD Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{ padding: '16px', background: 'rgba(6, 11, 19, 0.8)', borderRadius: '8px' }}>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>POTENTIAL ANNUAL VALUE</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00E5A3', marginTop: '4px' }}>₹42 Cr</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Modelled across multi-corridors</div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(6, 11, 19, 0.8)', borderRadius: '8px' }}>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>MONETISABLE ASSETS</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>1,284</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Poles, shelters & gantries</div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(6, 11, 19, 0.8)', borderRadius: '8px' }}>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ACTIVE CONTRACTS</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00F0FF', marginTop: '4px' }}>312</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Telecom, DOOH & EV leases</div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(6, 11, 19, 0.8)', borderRadius: '8px' }}>
              <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ASSET UTILISATION</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#E2E8F0', marginTop: '4px' }}>87%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>High yield operational density</div>
            </div>
          </div>

          {/* Opportunities Catalog */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {MONETISATION_OPPORTUNITIES.map((opp, idx) => (
              <div key={idx} style={{
                padding: '16px',
                borderRadius: '8px',
                background: 'rgba(6, 11, 19, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>{opp.title}</span>
                </div>
                <div style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#00E5A3',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  {opp.yield}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {opp.potential}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
