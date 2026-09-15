import React, { useState } from 'react';
import { Camera, CheckCircle2, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function AiScanSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const steps = [
    { num: "Step 1", title: "Take Photo / Video", sub: "Car drives at normal speed", color: "#2563EB", bg: "#EFF6FF" },
    { num: "Step 2", title: "Spot Problem", sub: "Instantly finds potholes", color: "#16A34A", bg: "#F0FDF4" },
    { num: "Step 3", title: "Measure Size", sub: "Calculates depth & width", color: "#D97706", bg: "#FEF3C7" },
    { num: "Step 4", title: "Rank Urgency", sub: "Marks high priority", color: "#E11D48", bg: "#FFE4E6" },
    { num: "Step 5", title: "Send Repair Team", sub: "Repair order dispatched", color: "#7C3AED", bg: "#FAF5FF" }
  ];

  return (
    <section id="ai-scan" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#BBF7D0' }}>
            <Camera size={15} />
            <span>Interactive Demo</span>
          </div>
          <h2 className="section-title">
            See How We Spot Potholes & Cracks Automatically
          </h2>
          <p className="section-subtitle">
            Move the slider below from left to right. See how normal road video turns into clear, labeled alerts with exact hole measurements.
          </p>
        </div>

        {/* Scanner Container */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '28px',
          maxWidth: '960px',
          margin: '0 auto 48px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          {/* Header Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '20px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-blue">Highway NH-48 Camera View</span>
              <span style={{ fontSize: '13px', color: '#64748B' }}>Mile 124.3 (Pune Road)</span>
            </div>

            <div style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB' }}>
              Slide to Compare &larr; &rarr;
            </div>
          </div>

          {/* Interactive Visual Comparison Stage */}
          <div style={{
            position: 'relative',
            height: '380px',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '2px solid #CBD5E1',
            background: '#334155',
            userSelect: 'none'
          }}>
            {/* Background Simulated Asphalt Road */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <rect width="100%" height="100%" fill="#475569" />
              {/* White dashed center line */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="35 25" />
              {/* Yellow side line */}
              <line x1="0" y1="88%" x2="100%" y2="88%" stroke="#FBBF24" strokeWidth="4" />

              {/* Defect 1: Pothole */}
              <ellipse cx="36%" cy="60%" rx="48" ry="30" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
              {/* Defect 2: Road Crack */}
              <path d="M 68% 25% Q 72% 45% 70% 65% T 74% 85%" stroke="#1E293B" strokeWidth="4" fill="none" />
            </svg>

            {/* AI Highlight Layer (Revealed on Left Side of Slider) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPos}%`,
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRight: '3px solid #2563EB'
            }}>
              {/* Pothole Highlight Box */}
              <div style={{
                position: 'absolute',
                left: 'calc(36% - 58px)',
                top: 'calc(60% - 42px)',
                width: '116px',
                height: '84px',
                border: '3px solid #E11D48',
                borderRadius: '8px',
                background: 'rgba(225, 29, 72, 0.25)',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-26px',
                  left: 0,
                  background: '#E11D48',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap'
                }}>
                  POTHOLE (Fix Today)
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-22px',
                  left: 0,
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0F172A',
                  background: '#FFFFFF',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}>
                  2.5 ft wide • 2 in deep
                </div>
              </div>

              {/* Road Crack Highlight Box */}
              <div style={{
                position: 'absolute',
                left: 'calc(70% - 30px)',
                top: '22%',
                width: '60px',
                height: '240px',
                border: '2.5px dashed #D97706',
                borderRadius: '8px',
                background: 'rgba(217, 119, 6, 0.2)',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-24px',
                  left: 0,
                  background: '#D97706',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap'
                }}>
                  SURFACE CRACK (7 ft)
                </div>
              </div>

              {/* Watermark Tag */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: '#2563EB',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 700,
                padding: '6px 12px',
                borderRadius: '6px'
              }}>
                Smart Detection: 2 Problems Found
              </div>
            </div>

            {/* Slider Handle */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                transform: 'translateX(-50%)',
                width: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'ew-resize',
                zIndex: 10
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#2563EB',
                border: '2px solid #FFFFFF',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 800
              }}>
                ⇄
              </div>
            </div>

            {/* Right Side Original Photo Label */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              background: '#0F172A',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '6px'
            }}>
              Original Camera Photo
            </div>
          </div>

          {/* Slider Input Bar */}
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#16A34A' }}>Original Photo</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              style={{
                flex: 1,
                accentColor: '#2563EB',
                cursor: 'pointer',
                height: '8px'
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>Smart Detection</span>
          </div>

          {/* 5 Simple Step Pills */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid #E2E8F0'
          }}>
            {steps.map((s, idx) => (
              <div key={idx} style={{
                background: s.bg,
                border: `1.5px solid ${s.color}30`,
                borderRadius: '12px',
                padding: '14px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: s.color, textTransform: 'uppercase' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
