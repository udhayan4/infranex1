import React, { useState, useEffect } from 'react';
import { Scan, Eye, Cpu, AlertTriangle, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';

export default function AiScanSection() {
  const [sliderPos, setSliderPos] = useState(55);
  const [isAutoScanning, setIsAutoScanning] = useState(true);

  // Auto-scan sweep animation
  useEffect(() => {
    if (!isAutoScanning) return;
    let direction = 1;
    const interval = setInterval(() => {
      setSliderPos((prev) => {
        if (prev >= 92) direction = -1;
        if (prev <= 12) direction = 1;
        return prev + direction * 0.6;
      });
    }, 24);
    return () => clearInterval(interval);
  }, [isAutoScanning]);

  return (
    <section id="ai-scan" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-pill">
            <Scan size={12} color="#00F0FF" />
            <span>Signature Interaction</span>
          </div>
          <h2 className="section-title">
            The AI Computer Vision Scan
          </h2>
          <p className="section-subtitle">
            From raw camera frames to micro-millimeter defect detection, depth assessment, and instant work-order dispatch.
            Drag the cyan beam or watch the live neural sweep.
          </p>
        </div>

        {/* Scanner Container */}
        <div className="glass-panel bracket-corner" style={{
          padding: '24px',
          maxWidth: '1040px',
          margin: '0 auto',
          background: 'rgba(8, 16, 28, 0.85)'
        }}>
          {/* Top Telemetry Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="status-dot cyan"></span>
              <span style={{ color: '#00F0FF', fontWeight: 600 }}>FEED: NH-48_KM124.3_LANE1.RAW</span>
              <span style={{ color: 'var(--text-muted)' }}>[80 KM/H MOBILE SCAN]</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>SCAN OFFSET: {Math.round(sliderPos)}%</span>
              <button
                onClick={() => setIsAutoScanning(!isAutoScanning)}
                className="btn-secondary"
                style={{ padding: '4px 12px', fontSize: '11px', gap: '6px' }}
              >
                {isAutoScanning ? <Pause size={12} /> : <Play size={12} />}
                <span>{isAutoScanning ? 'Pause Auto' : 'Resume Auto'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Comparison Stage */}
          <div style={{
            position: 'relative',
            height: '420px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            background: '#040810',
            userSelect: 'none'
          }}>
            {/* Background Simulated Asphalt Road Canvas */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <pattern id="asphalt-texture" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="#141E2D" />
                  <circle cx="20" cy="30" r="1.5" fill="#253245" />
                  <circle cx="70" cy="65" r="2" fill="#253245" />
                  <circle cx="45" cy="85" r="1.2" fill="#202D40" />
                  <circle cx="85" cy="20" r="1" fill="#202D40" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#asphalt-texture)" />

              {/* Road markings */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="6" strokeDasharray="40 30" />
              <line x1="0" y1="90%" x2="100%" y2="90%" stroke="#FFB020" strokeWidth="4" />

              {/* Defect 1: Pothole at center-left */}
              <ellipse cx="38%" cy="58%" rx="52" ry="34" fill="#0A0F18" stroke="#1E2A3A" strokeWidth="3" />
              {/* Internal cracks */}
              <path d="M 36% 56% Q 38% 60% 41% 62% T 43% 66%" stroke="#16202C" strokeWidth="2" fill="none" />

              {/* Defect 2: Longitudinal crack at right */}
              <path d="M 68% 25% Q 72% 45% 70% 65% T 74% 85%" stroke="#0F1722" strokeWidth="3.5" fill="none" />
            </svg>

            {/* AI Augmented Neural Layer (Revealed to the left of the slider) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPos}%`,
              overflow: 'hidden',
              background: 'rgba(0, 15, 30, 0.25)',
              borderRight: '2px solid #00F0FF',
              boxShadow: '0 0 25px rgba(0, 240, 255, 0.6)'
            }}>
              {/* Neural grid overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1000px',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none'
              }} />

              {/* AI Detection Overlay for Pothole */}
              <div style={{
                position: 'absolute',
                left: 'calc(38% - 64px)',
                top: 'calc(58% - 48px)',
                width: '128px',
                height: '96px',
                border: '2px solid #FF3B57',
                borderRadius: '6px',
                background: 'rgba(255, 59, 87, 0.18)',
                boxShadow: '0 0 16px rgba(255, 59, 87, 0.4)',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-24px',
                  left: 0,
                  background: '#FF3B57',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap'
                }}>
                  POTHOLE #01 | 94% CONF
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9.5px',
                  color: '#FFB020',
                  background: 'rgba(6, 11, 19, 0.9)',
                  padding: '1px 5px',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap'
                }}>
                  0.8m × 0.6m | DEPTH: 55mm
                </div>
              </div>

              {/* AI Detection Overlay for Longitudinal Crack */}
              <div style={{
                position: 'absolute',
                left: 'calc(70% - 30px)',
                top: '25%',
                width: '60px',
                height: '240px',
                border: '1.5px dashed #00F0FF',
                borderRadius: '6px',
                background: 'rgba(0, 240, 255, 0.12)',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: 0,
                  background: '#00F0FF',
                  color: '#060B13',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap'
                }}>
                  CRACK #04 | 91% CONF
                </div>
              </div>

              {/* Watermark in AI side */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#00F0FF',
                background: 'rgba(6, 11, 19, 0.85)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(0, 240, 255, 0.3)'
              }}>
                AI VISION PASS: COMPLETE
              </div>
            </div>

            {/* Cyan Laser Beam / Slider Handle */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                transform: 'translateX(-50%)',
                width: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'ew-resize',
                zIndex: 10
              }}
              onMouseDown={() => setIsAutoScanning(false)}
              onTouchStart={() => setIsAutoScanning(false)}
            >
              <div style={{
                width: '2px',
                height: '100%',
                background: 'linear-gradient(180deg, transparent, #FFFFFF, #00F0FF, #FFFFFF, transparent)',
                boxShadow: '0 0 15px #00F0FF, 0 0 30px #00F0FF'
              }} />
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#060B13',
                border: '2px solid #00F0FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px #00F0FF',
                color: '#00F0FF',
                fontSize: '12px'
              }}>
                ⇄
              </div>
            </div>

            {/* Right Side Raw Label */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#94A3B8',
              background: 'rgba(6, 11, 19, 0.85)',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              RAW OPTICAL INPUT (CCTV / DRONE)
            </div>
          </div>

          {/* Interactive Manual Range Slider */}
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>RAW</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => {
                setIsAutoScanning(false);
                setSliderPos(Number(e.target.value));
              }}
              style={{
                flex: 1,
                accentColor: '#00F0FF',
                cursor: 'pointer'
              }}
            />
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#00F0FF' }}>AI INFERENCE</span>
          </div>

          {/* Pipeline Stages Flow Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '12px',
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STAGE 01</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Raw Video / Drone</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>80-100 km/day vehicle pass</div>
            </div>

            <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', color: '#00F0FF', fontFamily: 'var(--font-mono)' }}>STAGE 02</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#00F0FF' }}>Computer Vision</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>CNN defect segmentation</div>
            </div>

            <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', color: '#FFB020', fontFamily: 'var(--font-mono)' }}>STAGE 03</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFB020' }}>Defect Measurement</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>0.8m x 0.6m, depth 55mm</div>
            </div>

            <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', color: '#FF3B57', fontFamily: 'var(--font-mono)' }}>STAGE 04</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FF3B57' }}>AI Risk Scoring</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Score: 92/100 (Immediate)</div>
            </div>

            <div style={{ padding: '10px', background: 'rgba(6, 11, 19, 0.6)', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', color: '#00E5A3', fontFamily: 'var(--font-mono)' }}>STAGE 05</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#00E5A3' }}>Auto Work Order</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>WO-45872 dispatched</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
