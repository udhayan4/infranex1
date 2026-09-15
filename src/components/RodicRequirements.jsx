import React from 'react';
import { Handshake, Database, BookOpen, KeyRound, UserCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { RODIC_COLLABORATION_NEEDS } from '../data/mockData';

export default function RodicRequirements() {
  const icons = [
    <Database size={22} color="#2563EB" />,
    <BookOpen size={22} color="#16A34A" />,
    <KeyRound size={22} color="#D97706" />,
    <UserCheck size={22} color="#7C3AED" />,
    <Compass size={22} color="#0284C7" />,
    <Sparkles size={22} color="#E11D48" />
  ];

  return (
    <section id="rodic-needs" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Handshake size={15} />
            <span>Partnership & Collaboration</span>
          </div>
          <h2 className="section-title">
            Working Together for Safer Indian Roads
          </h2>
          <p className="section-subtitle">
            We bring the smart technology and field execution team. Your domain experience and guidance ensure real-world success.
          </p>
        </div>

        {/* 6 Collaborative Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {RODIC_COLLABORATION_NEEDS.map((item, idx) => (
            <div key={idx} style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {icons[idx]}
                </div>

                <span className="badge-blue" style={{ fontSize: '11px' }}>
                  {item.tag}
                </span>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Vision Banner */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid #BFDBFE',
          borderRadius: '20px',
          padding: '36px',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.06)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px'
          }}>
            Ready for an Immediate 14-Day Pilot Demonstration
          </h3>
          <p style={{
            fontSize: '15px',
            color: '#475569',
            maxWidth: '780px',
            margin: '0 auto 20px',
            lineHeight: 1.6
          }}>
            Let's work together to make highways smoother, reduce travel delays, and set a new standard for road safety across India.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '999px',
            background: '#F0FDF4',
            border: '1.5px solid #BBF7D0',
            fontSize: '13.5px',
            fontWeight: 700,
            color: '#15803D'
          }}>
            <CheckCircle2 size={18} color="#16A34A" />
            <span>Fast Setup • Zero Hardware Risk • Clear Results in 14 Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
