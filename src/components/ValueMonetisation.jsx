import React from 'react';
import { DollarSign, Wifi, BatteryCharging, Tv, ShoppingBag, Eye, TrendingUp, Sparkles, Sun } from 'lucide-react';
import { MONETISATION_OPPORTUNITIES } from '../data/mockData';

export default function ValueMonetisation() {
  const pillars = [
    {
      num: "1",
      title: "Spot Road Issues Early",
      color: "#2563EB",
      bg: "#EFF6FF",
      desc: "Catching small surface cracks before they turn into deep potholes saves cities millions of rupees."
    },
    {
      num: "2",
      title: "Lower Long-Term Repair Costs",
      color: "#16A34A",
      bg: "#F0FDF4",
      desc: "Preventive care extends highway life by over 5 years and keeps road traffic moving smoothly."
    },
    {
      num: "3",
      title: "Add Smart Public Amenities",
      color: "#D97706",
      bg: "#FEF3C7",
      desc: "Adding EV chargers, solar light poles, and public mobile connectivity to highway corridors."
    }
  ];

  return (
    <section id="monetisation" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#BBF7D0' }}>
            <Sun size={15} />
            <span>Smart Highway Amenities</span>
          </div>
          <h2 className="section-title">
            Smart Ways Roads Can Create Value for Travelers
          </h2>
          <p className="section-subtitle">
            Beyond fixing potholes, highways can host EV charging stations, solar lighting, and public mobile connectivity.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} style={{
              background: p.bg,
              border: `1.5px solid ${p.color}40`,
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: p.color,
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '14px',
                marginBottom: '12px'
              }}>
                {p.num}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Opportunities Box */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '24px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '16px'
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>
                Connected Highway Opportunities
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                Useful services that make travel easier and generate revenue for public infrastructure:
              </p>
            </div>

            <span className="badge-green">
              Self-Sustaining Infrastructure
            </span>
          </div>

          {/* 4 Opportunity Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            {MONETISATION_OPPORTUNITIES.map((opp, idx) => {
              const icons = ["📡", "🚏", "⚡", "🌤️"];
              return (
                <div key={idx} style={{
                  padding: '20px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icons[idx]}</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {opp.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#16A34A',
                    marginBottom: '8px'
                  }}>
                    {opp.yield}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5 }}>
                    {opp.potential}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
