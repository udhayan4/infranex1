import React from 'react';
import { Award, CheckCircle2, TrendingUp, Users, Layers, ShieldCheck, Quote, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO, PROVEN_TRACK_RECORD } from '../data/mockData';

export default function WhyUsSection() {
  const advantagePillars = [
    {
      title: "Real On-Ground Experience",
      sub: "Built & Tested in the Real World",
      color: "#2563EB",
      bg: "#EFF6FF",
      desc: "We have delivered ₹800+ Cr worth of large-scale infrastructure projects across hills, rivers, and remote Indian villages. We know the real problems maintenance teams face every day."
    },
    {
      title: "Simple & Smart Technology",
      sub: "Easy to Use by Anyone",
      color: "#16A34A",
      bg: "#F0FDF4",
      desc: "No complicated software or confusing screens. Our tools work with normal smartphone cameras, car dashcams, and drones, giving instant clear results in plain words."
    },
    {
      title: "Trusted by Government & Partners",
      sub: "Recognised & Certified",
      color: "#7C3AED",
      bg: "#FAF5FF",
      desc: "DPIIT recognised startup and ISO certified quality system. We follow strict safety, data privacy, and government engineering standards."
    }
  ];

  return (
    <section id="why-us" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Award size={15} />
            <span>Why Choose Infranite</span>
          </div>
          <h2 className="section-title">
            Real Experience. Practical Solutions. <br />
            <span style={{ color: '#2563EB' }}>Built for Indian Roads & Bridges.</span>
          </h2>
          <p className="section-subtitle">
            We don't just build software. We have laid thousands of kilometers of real infrastructure across 10+ states in India.
          </p>
        </div>

        {/* 6 Proven Track Record Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {PROVEN_TRACK_RECORD.map((item, index) => {
            const colors = ['#2563EB', '#16A34A', '#D97706', '#7C3AED', '#0284C7', '#E11D48'];
            const color = colors[index % colors.length];

            return (
              <div key={index} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  color: color,
                  lineHeight: 1.1,
                  marginBottom: '6px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '4px'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#64748B',
                  lineHeight: 1.4
                }}>
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Director Quote Box */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid #BFDBFE',
          borderRadius: '20px',
          padding: '36px',
          marginBottom: '48px',
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.06)',
          position: 'relative'
        }}>
          <Quote size={40} color="#DBEAFE" style={{
            position: 'absolute',
            top: '24px',
            right: '28px'
          }} />

          <blockquote style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
            color: '#1E293B',
            lineHeight: 1.6,
            maxWidth: '900px',
            marginBottom: '20px',
            fontStyle: 'normal',
            fontWeight: 500
          }}>
            "{COMPANY_INFO.directorQuote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#FFFFFF',
              fontSize: '18px'
            }}>
              VK
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '16px' }}>
                {COMPANY_INFO.director}
              </div>
              <div style={{ fontSize: '13px', color: '#2563EB', fontWeight: 600 }}>
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
            <div key={idx} style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '28px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: pillar.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                color: pillar.color,
                fontWeight: 800,
                fontSize: '18px'
              }}>
                0{idx + 1}
              </div>
              <div style={{
                fontSize: '12px',
                color: pillar.color,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '4px'
              }}>
                {pillar.sub}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
