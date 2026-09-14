import React, { useState } from 'react';
import { ClipboardList, CheckCircle2, UserCheck, ShieldCheck, ArrowRight, RotateCcw, AlertTriangle, Eye } from 'lucide-react';
import { WORK_ORDER_SAMPLE } from '../data/mockData';

export default function MaintenanceWorkflow() {
  const [woStatus, setWoStatus] = useState('Assigned'); // 'Assigned' -> 'Verifying' -> 'Closed'
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSimulateVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setWoStatus('Closed');
    }, 1800);
  };

  const handleReset = () => {
    setWoStatus('Assigned');
  };

  const steps = [
    { num: "01", title: "AI Detects Issue", sub: "Auto-Identify & Size", icon: "🤖" },
    { num: "02", title: "Risk Assessment", sub: "Evaluate Consequence", icon: "📊" },
    { num: "03", title: "Prioritisation", sub: "Network Rank & Budget", icon: "⚖️" },
    { num: "04", title: "Work Order", sub: "Auto-Generate BOQ", icon: "📝" },
    { num: "05", title: "Field Execution", sub: "Contractor Mobile App", icon: "👷" },
    { num: "06", title: "AI Verification", sub: "Before/After Match", icon: "🔍" },
    { num: "07", title: "Closed-Loop Learn", sub: "Model Self-Improvement", icon: "🔄" }
  ];

  return (
    <section id="workflow" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <ClipboardList size={12} color="#00E5A3" />
            <span>Use Case 05</span>
          </div>
          <h2 className="section-title">
            AI Maintenance Operations & Closed-Loop Workflow
          </h2>
          <p className="section-subtitle">
            From detection to verified closure. A unified, audit-ready workflow that ensures field repairs are completed to engineering standards.
          </p>
        </div>

        {/* 7-Step Animated Closed Loop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
          gap: '12px',
          marginBottom: '56px'
        }}>
          {steps.map((s, idx) => (
            <div key={idx} className="glass-panel bracket-corner" style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#00F0FF' }}>{s.num}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>{s.title}</div>
              <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Interactive Work Order Simulator Ticket */}
        <div className="glass-panel bracket-corner" style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(8, 16, 28, 0.92)'
        }}>
          {/* Ticket Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            paddingBottom: '16px'
          }}>
            <div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                SMART MAINTENANCE WORK ORDER
              </div>
              <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginTop: '2px' }}>
                {WORK_ORDER_SAMPLE.id}
              </h3>
            </div>

            {/* Live Status Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                background: woStatus === 'Closed' ? 'rgba(0, 229, 163, 0.2)' : 'rgba(255, 176, 32, 0.2)',
                color: woStatus === 'Closed' ? '#00E5A3' : '#FFB020',
                border: woStatus === 'Closed' ? '1px solid #00E5A3' : '1px solid #FFB020'
              }}>
                STATUS: {woStatus.toUpperCase()}
              </span>

              {woStatus === 'Closed' && (
                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '11px', gap: '4px' }}
                >
                  <RotateCcw size={12} /> Reset Demo
                </button>
              )}
            </div>
          </div>

          {/* Ticket Details Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}>
            <div style={{ padding: '12px', background: 'rgba(6, 11, 19, 0.7)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TARGET ASSET</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.asset}</div>
            </div>

            <div style={{ padding: '12px', background: 'rgba(6, 11, 19, 0.7)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DEFECT TYPE</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FF3B57', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.defect}</div>
            </div>

            <div style={{ padding: '12px', background: 'rgba(6, 11, 19, 0.7)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>ASSIGNED CONTRACTOR</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#00F0FF', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.contractor}</div>
            </div>

            <div style={{ padding: '12px', background: 'rgba(6, 11, 19, 0.7)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SLA TARGET TIMELINE</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#00E5A3', marginTop: '2px' }}>{WORK_ORDER_SAMPLE.turnaroundTime}</div>
            </div>
          </div>

          {/* Before & After Image Comparison Simulation */}
          <div style={{
            background: 'rgba(4, 8, 16, 0.95)',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <div style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: '#00F0FF',
              fontWeight: 600,
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span>AI REPAIR AUDIT & VERIFICATION ENGINE</span>
              <span>{woStatus === 'Closed' ? 'VERIFICATION PASSED' : 'PENDING FIELD PHOTO AUDIT'}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              {/* Before Card */}
              <div style={{
                position: 'relative',
                height: '160px',
                background: '#141E2D',
                borderRadius: '6px',
                border: '1px solid #FF3B57',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <svg width="100%" height="100%">
                  <rect width="100%" height="100%" fill="#141E2D" />
                  <ellipse cx="50%" cy="50%" rx="44" ry="28" fill="#0A0F18" stroke="#FF3B57" strokeWidth="2" />
                  <text x="50%" y="54%" textAnchor="middle" fill="#FF3B57" fontSize="11" fontFamily="var(--font-mono)">
                    POTHOLE 0.8m × 0.6m
                  </text>
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  background: 'rgba(255, 59, 87, 0.85)',
                  color: '#FFFFFF',
                  fontSize: '9.5px',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  fontWeight: 700
                }}>
                  BEFORE (AI DETECTED)
                </div>
              </div>

              {/* After Card */}
              <div style={{
                position: 'relative',
                height: '160px',
                background: woStatus === 'Closed' ? '#142820' : '#101724',
                borderRadius: '6px',
                border: woStatus === 'Closed' ? '1.5px solid #00E5A3' : '1px dashed rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {woStatus === 'Closed' ? (
                  <svg width="100%" height="100%">
                    <rect width="100%" height="100%" fill="#132B20" />
                    <ellipse cx="50%" cy="50%" rx="48" ry="32" fill="#1B3A2C" stroke="#00E5A3" strokeWidth="2" />
                    <text x="50%" y="54%" textAnchor="middle" fill="#00E5A3" fontSize="11" fontFamily="var(--font-mono)">
                      REPAIR VERIFIED (95% MATCH)
                    </text>
                  </svg>
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <Eye size={24} style={{ margin: '0 auto 6px' }} />
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>Awaiting Repair Photo Upload</div>
                  </div>
                )}

                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  background: woStatus === 'Closed' ? 'rgba(0, 229, 163, 0.9)' : 'rgba(100, 116, 139, 0.8)',
                  color: '#060B13',
                  fontSize: '9.5px',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 6px',
                  borderRadius: '2px',
                  fontWeight: 700
                }}>
                  AFTER (POST-REPAIR)
                </div>
              </div>
            </div>

            {woStatus === 'Closed' && (
              <div style={{
                marginTop: '16px',
                padding: '12px',
                borderRadius: '6px',
                background: 'rgba(0, 229, 163, 0.1)',
                border: '1px solid rgba(0, 229, 163, 0.3)',
                fontSize: '12px',
                color: '#CBD5E1',
                lineHeight: 1.5
              }}>
                <strong style={{ color: '#00E5A3' }}>Audit Verified:</strong> {WORK_ORDER_SAMPLE.aiVerificationText}
              </div>
            )}
          </div>

          {/* Interactive Trigger Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            {woStatus !== 'Closed' && (
              <button
                onClick={handleSimulateVerification}
                disabled={isVerifying}
                className="btn-primary"
                style={{ flex: 1, padding: '12px', fontSize: '13px' }}
                id="verify-repair-btn"
              >
                {isVerifying ? (
                  <span>Running AI Vision Verification Scan...</span>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>Simulate Field Repair Verification by AI</span>
                  </>
                )}
              </button>
            )}

            <button
              className="btn-secondary"
              style={{ padding: '12px 20px', fontSize: '13px' }}
            >
              Export Inspection BOQ
            </button>

            <button
              className="btn-secondary"
              style={{ padding: '12px 20px', fontSize: '13px' }}
            >
              Dispatch to Mobile App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
