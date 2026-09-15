import React, { useState } from 'react';
import { ClipboardList, CheckCircle2, ShieldCheck, ArrowRight, RotateCcw, Eye, Camera, ThumbsUp } from 'lucide-react';
import { WORK_ORDER_SAMPLE } from '../data/mockData';

export default function MaintenanceWorkflow() {
  const [woStatus, setWoStatus] = useState('Assigned'); // 'Assigned' -> 'Closed'

  const handleSimulateVerification = () => {
    setWoStatus('Closed');
  };

  const handleReset = () => {
    setWoStatus('Assigned');
  };

  const steps = [
    { num: "1", title: "Spot Problem", sub: "Cameras spot hole", icon: "📸", color: "#2563EB", bg: "#EFF6FF" },
    { num: "2", title: "Check Urgency", sub: "Calculates danger", icon: "⚠️", color: "#D97706", bg: "#FEF3C7" },
    { num: "3", title: "Job Card Created", sub: "Exact GPS spot", icon: "📝", color: "#7C3AED", bg: "#FAF5FF" },
    { num: "4", title: "Van Arrives", sub: "Fills with asphalt", icon: "🚜", color: "#0284C7", bg: "#E0F2FE" },
    { num: "5", title: "Photo Quality Check", sub: "Snaps after photo", icon: "🔍", color: "#16A34A", bg: "#F0FDF4" },
    { num: "6", title: "Repair Verified", sub: "Safe for driving", icon: "✅", color: "#16A34A", bg: "#DCFCE7" }
  ];

  return (
    <section id="workflow" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DCFCE7', color: '#16A34A', borderColor: '#BBF7D0' }}>
            <ClipboardList size={15} />
            <span>How Repairs Work</span>
          </div>
          <h2 className="section-title">
            Simple 6-Step Repair & Verification Process
          </h2>
          <p className="section-subtitle">
            From the moment a camera spots a pothole to the final photo check, every repair is tracked so nothing is forgotten.
          </p>
        </div>

        {/* 6 Simple Step Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '14px',
          marginBottom: '48px'
        }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{
              background: s.bg,
              border: `1.5px solid ${s.color}30`,
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: s.color }}>Step {s.num}</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>{s.title}</div>
              <div style={{ fontSize: '12.5px', color: '#64748B', marginTop: '2px' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Interactive Work Order Ticket */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '32px',
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          {/* Header */}
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
              <span className="badge-blue" style={{ fontSize: '11px' }}>SAMPLE DIGITAL WORK ORDER</span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                {WORK_ORDER_SAMPLE.id}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className={woStatus === 'Closed' ? 'badge-green' : 'badge-yellow'} style={{ fontSize: '13px', padding: '6px 14px' }}>
                STATUS: {woStatus === 'Closed' ? 'COMPLETED & VERIFIED' : 'REPAIR IN PROGRESS'}
              </span>

              {woStatus === 'Closed' && (
                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px', gap: '4px' }}
                >
                  <RotateCcw size={14} /> Reset
                </button>
              )}
            </div>
          </div>

          {/* Ticket Details */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            marginBottom: '28px'
          }}>
            <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>ROAD LOCATION</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.asset}</div>
            </div>

            <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>ISSUE TYPE</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#E11D48', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.defect}</div>
            </div>

            <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>ASSIGNED TEAM</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.contractor}</div>
            </div>

            <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 700 }}>TARGET FIX TIME</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.turnaroundTime}</div>
            </div>
          </div>

          {/* Before & After Photo Check Box */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#0F172A',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>Before & After Photo Quality Check:</span>
              <span className={woStatus === 'Closed' ? 'badge-green' : 'badge-yellow'}>
                {woStatus === 'Closed' ? '✓ Repair Verified 100%' : 'Awaiting Finished Photo'}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              {/* Before */}
              <div style={{
                position: 'relative',
                height: '160px',
                background: '#F1F5F9',
                borderRadius: '10px',
                border: '2px solid #E11D48',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '70px',
                    height: '40px',
                    background: '#E2E8F0',
                    border: '2px solid #E11D48',
                    borderRadius: '50%',
                    margin: '0 auto 8px'
                  }}></div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#E11D48' }}>Before: Pothole Found</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>2.5 ft wide • 2 in deep</div>
                </div>
              </div>

              {/* After */}
              <div style={{
                position: 'relative',
                height: '160px',
                background: woStatus === 'Closed' ? '#F0FDF4' : '#F8FAFC',
                borderRadius: '10px',
                border: woStatus === 'Closed' ? '2.5px solid #16A34A' : '1.5px dashed #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {woStatus === 'Closed' ? (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '70px',
                      height: '40px',
                      background: '#BBF7D0',
                      border: '2px solid #16A34A',
                      borderRadius: '8px',
                      margin: '0 auto 8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#15803D',
                      fontWeight: 800
                    }}>
                      ✓ FLAT
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#16A34A' }}>After: Filled Smoothly</div>
                    <div style={{ fontSize: '11.5px', color: '#64748B' }}>100% Level Asphalt</div>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: '#64748B' }}>
                    <Camera size={28} style={{ margin: '0 auto 6px', color: '#94A3B8' }} />
                    <div style={{ fontSize: '12.5px', fontWeight: 600 }}>Click button below to simulate fix</div>
                  </div>
                )}
              </div>
            </div>

            {woStatus === 'Closed' && (
              <div style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                fontSize: '13.5px',
                color: '#15803D',
                fontWeight: 500
              }}>
                <strong>Quality Check Passed:</strong> {WORK_ORDER_SAMPLE.aiVerificationText}
              </div>
            )}
          </div>

          {/* Trigger Button */}
          <div>
            {woStatus !== 'Closed' ? (
              <button
                onClick={handleSimulateVerification}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                id="verify-repair-btn"
              >
                <ThumbsUp size={18} />
                <span>Simulate Worker Uploading Finished Photo (Verify Quality)</span>
              </button>
            ) : (
              <div style={{ textAlign: 'center', color: '#16A34A', fontWeight: 700, fontSize: '14px' }}>
                ✓ Work Order Closed & Saved to Audit Record
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
