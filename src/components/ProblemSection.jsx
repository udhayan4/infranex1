import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, Eye, Layers, ShieldCheck, Car, HelpCircle, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const [viewMode, setViewMode] = useState('new'); // 'old' vs 'new'

  const painPoints = [
    {
      title: "People Walking on Busy Roads",
      color: "#E11D48",
      bg: "#FFE4E6",
      desc: "Having workers walk along highways in the hot sun to spot cracks manually is dangerous, very slow, and easy to miss things."
    },
    {
      title: "Fixing Too Late",
      color: "#D97706",
      bg: "#FEF3C7",
      desc: "Repairs often happen only after large potholes break car tires or cause traffic jams, which costs 10x more to fix."
    },
    {
      title: "Paper Files & Delay",
      color: "#7C3AED",
      bg: "#EDE9FE",
      desc: "Inspection notes and paper files take weeks to travel from the road to the head office before a repair van is sent."
    },
    {
      title: "Hard to Know What to Fix First",
      color: "#2563EB",
      bg: "#EFF6FF",
      desc: "With thousands of miles of road, leaders struggle to know which damaged spots are most dangerous and need immediate budget."
    },
    {
      title: "Hidden Bridge Wear",
      color: "#0284C7",
      bg: "#E0F2FE",
      desc: "Water leaks under bridges or tiny cracks in pillars often go unnoticed until emergency bridge closure is needed."
    },
    {
      title: "No Proof After Repairs",
      color: "#16A34A",
      bg: "#DCFCE7",
      desc: "Hard to verify if the contractor actually filled the hole properly without sending another inspector back to the spot."
    }
  ];

  return (
    <section id="problem" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#FEF3C7', color: '#D97706', borderColor: '#FDE68A' }}>
            <HelpCircle size={15} />
            <span>The Challenge & The Solution</span>
          </div>
          <h2 className="section-title">
            Why Road Repairs Are Slow Today — <br />
            <span style={{ color: '#2563EB' }}>And How We Make It Simple.</span>
          </h2>
          <p className="section-subtitle">
            Traditionally, inspecting highways takes weeks of manual walking.
            Our smart system spots problems automatically from car dashcams and drones in minutes.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px',
          marginBottom: '48px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          {/* Switch Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '20px', color: '#0F172A', fontWeight: 800 }}>
                Compare the Difference
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                Click below to see the Old Way vs the New Infranite Way.
              </p>
            </div>

            <div style={{
              display: 'inline-flex',
              background: '#FFFFFF',
              padding: '4px',
              borderRadius: '10px',
              border: '1.5px solid #CBD5E1'
            }}>
              <button
                onClick={() => setViewMode('old')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  background: viewMode === 'old' ? '#FFE4E6' : 'transparent',
                  color: viewMode === 'old' ? '#E11D48' : '#64748B',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                The Old Way (Slow)
              </button>
              <button
                onClick={() => setViewMode('new')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  background: viewMode === 'new' ? '#2563EB' : 'transparent',
                  color: viewMode === 'new' ? '#FFFFFF' : '#64748B',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                The New Infranite Way (Fast & Simple)
              </button>
            </div>
          </div>

          {/* Side-by-Side Content */}
          {viewMode === 'old' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #FECDD3' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚶‍♂️</div>
                <h4 style={{ fontSize: '16px', color: '#E11D48', fontWeight: 700, marginBottom: '6px' }}>1. Slow Manual Walking</h4>
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Workers have to walk in traffic along highway shoulders with measuring tapes.</p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #FECDD3' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📝</div>
                <h4 style={{ fontSize: '16px', color: '#E11D48', fontWeight: 700, marginBottom: '6px' }}>2. Paper Reports & Delays</h4>
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Notes are written in notebooks. It takes 2 to 3 weeks for repair approvals.</p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #FECDD3' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚠️</div>
                <h4 style={{ fontSize: '16px', color: '#E11D48', fontWeight: 700, marginBottom: '6px' }}>3. Potholes Grow Deeper</h4>
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>By the time the van arrives, rain has made the pothole 3 times bigger.</p>
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #BBF7D0' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚗</div>
                <h4 style={{ fontSize: '16px', color: '#16A34A', fontWeight: 700, marginBottom: '6px' }}>1. Car Drives & Spots Automatically</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Regular patrol cars with cameras drive at normal speed and spot all potholes automatically.</p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #BBF7D0' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
                <h4 style={{ fontSize: '16px', color: '#16A34A', fontWeight: 700, marginBottom: '6px' }}>2. Instant Phone Alert to Repair Van</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>The repair team gets the exact GPS map point and hole size on their mobile phone in seconds.</p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', border: '1.5px solid #BBF7D0' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
                <h4 style={{ fontSize: '16px', color: '#16A34A', fontWeight: 700, marginBottom: '6px' }}>3. Fixed Fast & Checked by Photo</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Potholes are fixed within 24 hours. A photo taken after repair confirms the road is flat and safe.</p>
              </div>
            </div>
          )}
        </div>

        {/* 6 Core Problems & Simple Solutions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {painPoints.map((item, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: item.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                color: item.color,
                fontWeight: 800,
                fontSize: '18px'
              }}>
                {index + 1}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
