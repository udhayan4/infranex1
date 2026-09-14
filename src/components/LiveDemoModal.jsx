import React, { useState, useEffect } from 'react';
import { 
  X, Activity, AlertTriangle, ShieldCheck, MapPin, Search, 
  Layers, Radio, RefreshCw, CheckCircle2, ChevronRight, Terminal 
} from 'lucide-react';
import { COMMAND_CENTER_STATS, MOCK_ASSETS, RISK_MATRIX_DATA } from '../data/mockData';

export default function LiveDemoModal({ isOpen, onClose }) {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_ASSETS[0]);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [simulatedAlerts, setSimulatedAlerts] = useState([
    { id: 'ALT-901', time: '12:44:02', asset: 'NH-48 KM 124.3', desc: 'Pothole depth expanded to 55mm (+10%)', severity: 'High' },
    { id: 'ALT-902', time: '12:41:18', asset: 'Viaduct BR-07', desc: 'Bearing longitudinal thermal displacement 14mm', severity: 'Watch' },
    { id: 'ALT-903', time: '12:38:55', asset: 'Tunnel T-04', desc: 'Water ingress detected at Arch Crown 2.6 km', severity: 'Med' }
  ]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(4, 8, 16, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      color: '#E2E8F0',
      overflow: 'hidden'
    }}>
      {/* Top SCADA Navigation Header */}
      <div style={{
        height: '60px',
        background: '#060B13',
        borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="status-dot"></span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: 800,
              color: '#FFFFFF'
            }}>
              InfraSight <span style={{ color: '#00F0FF' }}>iCCC</span>
            </span>
          </div>

          <div style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            padding: '3px 10px',
            borderRadius: '4px',
            background: 'rgba(255, 176, 32, 0.15)',
            color: '#FFB020',
            border: '1px solid rgba(255, 176, 32, 0.3)'
          }}>
            Interactive Demonstration — Simulated Data
          </div>
        </div>

        {/* Center Telemetry Clock */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: '#00F0FF',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span>SYS_TIME: {currentTime} IST</span>
          <span>•</span>
          <span>LATENCY: 12ms</span>
          <span>•</span>
          <span style={{ color: '#00E5A3' }}>NODES: 18,420 ONLINE</span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '6px',
            background: 'rgba(255, 59, 87, 0.15)',
            border: '1px solid rgba(255, 59, 87, 0.4)',
            color: '#FF3B57',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
          id="close-live-demo-btn"
        >
          <X size={16} /> Exit Simulation
        </button>
      </div>

      {/* Main Fullscreen Dashboard Workspace */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '280px 1fr 360px',
        overflow: 'hidden'
      }} className="demo-modal-grid">
        {/* Left Column: Asset Registry & Filtering */}
        <div style={{
          background: 'rgba(6, 12, 22, 0.95)',
          borderRight: '1px solid rgba(0, 240, 255, 0.15)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          overflowY: 'auto'
        }}>
          <div style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--cyan-primary)',
            fontWeight: 700,
            letterSpacing: '0.08em'
          }}>
            NETWORK ASSETS ({MOCK_ASSETS.length})
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {MOCK_ASSETS.map((asset) => {
              const isSelected = selectedAsset.id === asset.id;
              return (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(10, 20, 36, 0.6)',
                    border: isSelected ? '1.5px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#00F0FF' }}>{asset.type}</span>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#FF3B57', fontWeight: 700 }}>
                      RISK {asset.riskScore}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>{asset.name}</div>
                  <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>{asset.chainage} • {asset.state}</div>
                </div>
              );
            })}
          </div>

          {/* Quick Metrics */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--text-muted)' }}>NETWORK COVERAGE:</span>
              <span style={{ color: '#00E5A3' }}>100% TARGET</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--text-muted)' }}>AI DEFECT ACCURACY:</span>
              <span style={{ color: '#00F0FF' }}>&gt; 85%</span>
            </div>
          </div>
        </div>

        {/* Center Column: Live GIS Map / Visual Telemetry View */}
        <div style={{
          position: 'relative',
          background: '#040810',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden'
        }}>
          {/* Active Corridor Inspection Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            borderRadius: '6px',
            background: 'rgba(6, 11, 19, 0.85)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            zIndex: 10
          }}>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                ACTIVE TELEMETRY FEED // {selectedAsset.id}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                {selectedAsset.name}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>CONDITION: </span>
                <span style={{ color: selectedAsset.conditionScore < 70 ? '#FFB020' : '#00E5A3', fontWeight: 700 }}>
                  {selectedAsset.conditionScore}/100
                </span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>TRAFFIC: </span>
                <span style={{ color: '#FFFFFF' }}>{selectedAsset.trafficExposure}</span>
              </div>
            </div>
          </div>

          {/* Central Animated Map / Vector Wireframe */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 800 500">
              <defs>
                <pattern id="modal-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modal-grid)" />

              {/* Highway ribbon */}
              <path d="M 100 420 Q 300 200 450 250 T 750 80" fill="none" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="4" />
              <path d="M 100 420 Q 300 200 450 250 T 750 80" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="10 8" />

              {/* Selected Asset Marker Highlight */}
              <circle cx="450" cy="250" r="28" fill="rgba(0, 240, 255, 0.1)" stroke="#00F0FF" strokeWidth="2" />
              <circle cx="450" cy="250" r="8" fill="#00F0FF" />
              <text x="450" y="295" textAnchor="middle" fill="#00F0FF" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono)">
                {selectedAsset.chainage} [SELECTED]
              </text>
            </svg>
          </div>

          {/* Bottom Live Alert Ticker */}
          <div style={{
            padding: '12px 18px',
            borderRadius: '6px',
            background: 'rgba(6, 11, 19, 0.9)',
            border: '1px solid rgba(255, 59, 87, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 10,
            fontSize: '12px',
            fontFamily: 'var(--font-mono)'
          }}>
            <AlertTriangle size={16} color="#FF3B57" />
            <span style={{ color: '#FF3B57', fontWeight: 700 }}>INCIDENT:</span>
            <span style={{ color: '#CBD5E1' }}>
              Structural base micro-shear warning triggered under monsoon saturation model. Automatic work order staged.
            </span>
          </div>
        </div>

        {/* Right Column: AI Insights & Dispatch Actions */}
        <div style={{
          background: 'rgba(6, 12, 22, 0.95)',
          borderLeft: '1px solid rgba(0, 240, 255, 0.15)',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          overflowY: 'auto'
        }}>
          <div style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--cyan-primary)',
            fontWeight: 700,
            letterSpacing: '0.08em'
          }}>
            AI DECISION SUPPORT ENGINE
          </div>

          {/* Action Card */}
          <div style={{
            padding: '14px',
            borderRadius: '6px',
            background: 'rgba(0, 229, 163, 0.1)',
            border: '1px solid rgba(0, 229, 163, 0.3)'
          }}>
            <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: '#00E5A3', fontWeight: 700 }}>
              RECOMMENDED DISPATCH
            </div>
            <div style={{ fontSize: '12.5px', color: '#E2E8F0', marginTop: '4px', lineHeight: 1.4 }}>
              {selectedAsset.recommendedAction}
            </div>
          </div>

          {/* Detected Defects */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
              DETECTED ISSUES ({selectedAsset.detectedIssues.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {selectedAsset.detectedIssues.map((issue, i) => (
                <div key={i} style={{
                  padding: '8px 10px',
                  borderRadius: '4px',
                  background: 'rgba(10, 20, 36, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '11.5px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: '#FFFFFF' }}>{issue.type}</span>
                  <span style={{ color: issue.severity === 'High' ? '#FF3B57' : '#FFB020', fontFamily: 'var(--font-mono)' }}>
                    {issue.confidence}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Incident Stream */}
          <div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
              RECENT LOGS & ALERTS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {simulatedAlerts.map((alt) => (
                <div key={alt.id} style={{
                  padding: '8px 10px',
                  borderRadius: '4px',
                  background: 'rgba(6, 11, 19, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '11px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)' }}>
                    <span>{alt.id}</span>
                    <span>{alt.time}</span>
                  </div>
                  <div style={{ color: '#CBD5E1', marginTop: '2px' }}>{alt.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Dispatch Action */}
          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={() => alert(`Work Order dispatched for ${selectedAsset.name}`)}
              className="btn-primary"
              style={{ width: '100%', padding: '10px', fontSize: '12.5px' }}
            >
              Approve Automated Work Order
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .demo-modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
