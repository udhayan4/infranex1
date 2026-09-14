import React, { useState } from 'react';
import { 
  Activity, AlertTriangle, ShieldCheck, MapPin, Search, Filter, 
  ExternalLink, ChevronRight, X, Clock, CheckCircle2, Sliders, Layers 
} from 'lucide-react';
import { COMMAND_CENTER_STATS, MOCK_ASSETS } from '../data/mockData';

export default function CommandCenter({ onOpenDemo }) {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_ASSETS[0]);
  const [filterType, setFilterType] = useState('All');
  const [filterRisk, setFilterRisk] = useState('All');
  const [drawerOpen, setDrawerOpen] = useState(true);

  const filteredAssets = MOCK_ASSETS.filter((item) => {
    if (filterType !== 'All' && item.type !== filterType) return false;
    if (filterRisk !== 'All' && item.riskLevel !== filterRisk) return false;
    return true;
  });

  return (
    <section id="command-center" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0A1220 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Activity size={12} color="#00F0FF" />
            <span>Core Solution Architecture</span>
          </div>
          <h2 className="section-title">
            AI Infrastructure Command & Control Centre (iCCC)
          </h2>
          <p className="section-subtitle">
            Unified multi-asset operational visibility across Roads, Bridges, and Tunnels.
            Detect distress early, prioritize interventions by failure risk, and keep India moving safely.
          </p>
        </div>

        {/* Live Network Metric HUD */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">TOTAL MONITORED ASSETS</span>
            <div className="metric-hud-value">{COMMAND_CENTER_STATS.totalAssets}</div>
            <div className="metric-hud-sub">+12% network expansion</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">ACTIVE RISK ALERTS</span>
            <div className="metric-hud-value" style={{ color: '#FFB020' }}>
              {COMMAND_CENTER_STATS.activeAlerts}
            </div>
            <div className="metric-hud-sub">42 critical • 118 watch</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">OPEN WORK ORDERS</span>
            <div className="metric-hud-value" style={{ color: '#00F0FF' }}>
              {COMMAND_CENTER_STATS.openWorkOrders}
            </div>
            <div className="metric-hud-sub">312 assigned to field teams</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">AVG. TURNAROUND TIME</span>
            <div className="metric-hud-value" style={{ color: '#00E5A3' }}>
              {COMMAND_CENTER_STATS.avgResponseTime}
            </div>
            <div className="metric-hud-sub">Reduced from 12 days (62% faster)</div>
          </div>

          <div className="metric-hud bracket-corner">
            <span className="metric-hud-label">ASSET HEALTH INDEX</span>
            <div className="metric-hud-value" style={{ color: '#E2E8F0' }}>
              {COMMAND_CENTER_STATS.networkHealthIndex}
            </div>
            <div className="metric-hud-sub">63% Good • 27% Fair • 10% Risk</div>
          </div>
        </div>

        {/* Main Command Dashboard Box */}
        <div className="glass-panel bracket-corner" style={{
          padding: '0',
          overflow: 'hidden',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          background: 'rgba(8, 15, 27, 0.9)'
        }}>
          {/* Dashboard Control Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '16px 24px',
            background: 'rgba(6, 11, 19, 0.9)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="status-dot"></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>
                SPATIAL INFRASTRUCTURE TELEMETRY — LIVE
              </span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'rgba(255, 176, 32, 0.15)',
                color: '#FFB020',
                border: '1px solid rgba(255, 176, 32, 0.3)'
              }}>
                Simulated Demo Data
              </span>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TYPE:</span>
              {['All', 'Road', 'Bridge', 'Tunnel'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    background: filterType === type ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: filterType === type ? '#00F0FF' : 'var(--text-secondary)',
                    border: filterType === type ? '1px solid #00F0FF' : '1px solid transparent',
                    transition: 'all 0.15s'
                  }}
                >
                  {type}
                </button>
              ))}

              <div style={{ width: '1px', height: '18px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 4px' }} />

              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>RISK:</span>
              {['All', 'High', 'Medium'].map((risk) => (
                <button
                  key={risk}
                  onClick={() => setFilterRisk(risk)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    background: filterRisk === risk ? 'rgba(255, 59, 87, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: filterRisk === risk ? '#FF3B57' : 'var(--text-secondary)',
                    border: filterRisk === risk ? '1px solid #FF3B57' : '1px solid transparent',
                    transition: 'all 0.15s'
                  }}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>

          {/* Map & Asset Inspector Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: drawerOpen ? '1fr 420px' : '1fr',
            minHeight: '520px',
            position: 'relative'
          }} className="command-grid-layout">
            {/* Interactive Vector / Digital Map Stage */}
            <div style={{
              position: 'relative',
              background: '#040810',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
              overflow: 'hidden'
            }}>
              {/* Technical map background lines */}
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.5, pointerEvents: 'none' }}>
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.04)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />

                {/* Highway arterial curves across India */}
                <path d="M 120 80 Q 240 180 340 220 T 560 380" fill="none" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="3" strokeDasharray="6 4" />
                <path d="M 340 220 Q 420 140 680 180" fill="none" stroke="rgba(0, 229, 163, 0.3)" strokeWidth="2.5" />
                <path d="M 220 340 Q 340 220 500 120" fill="none" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="2" />
              </svg>

              {/* Map Title overlay */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} color="#00F0FF" />
                  <span>National Highway & Corridor Network</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Click an asset marker below to inspect real-time AI condition telemetry
                </div>
              </div>

              {/* Interactive Asset Markers on the Map */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
                margin: 'auto 0'
              }}>
                {filteredAssets.map((asset) => {
                  const isSelected = selectedAsset?.id === asset.id;
                  const isRiskHigh = asset.riskLevel === 'High';

                  return (
                    <div
                      key={asset.id}
                      onClick={() => {
                        setSelectedAsset(asset);
                        setDrawerOpen(true);
                      }}
                      style={{
                        padding: '14px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: isSelected 
                          ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.18) 0%, rgba(10, 24, 44, 0.9) 100%)' 
                          : 'rgba(10, 20, 36, 0.75)',
                        border: isSelected ? '1.5px solid #00F0FF' : '1px solid rgba(0, 240, 255, 0.15)',
                        boxShadow: isSelected ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          background: asset.type === 'Bridge' ? 'rgba(0, 229, 163, 0.15)' : asset.type === 'Tunnel' ? 'rgba(192, 132, 252, 0.15)' : 'rgba(0, 240, 255, 0.15)',
                          color: asset.type === 'Bridge' ? '#00E5A3' : asset.type === 'Tunnel' ? '#C084FC' : '#00F0FF',
                          fontWeight: 600
                        }}>
                          {asset.type.toUpperCase()}
                        </span>

                        <span style={{
                          fontSize: '10.5px',
                          fontFamily: 'var(--font-mono)',
                          color: isRiskHigh ? '#FF3B57' : '#FFB020',
                          fontWeight: 700
                        }}>
                          RISK {asset.riskScore}/100
                        </span>
                      </div>

                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>
                        {asset.name}
                      </div>

                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {asset.route} • {asset.chainage} • {asset.state}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                        paddingTop: '8px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        fontSize: '11px'
                      }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Condition: <strong>{asset.conditionScore}/100</strong></span>
                        <span style={{ color: '#00F0FF', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 500 }}>
                          Inspect <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Footer Bar */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                <div>Showing {filteredAssets.length} of {MOCK_ASSETS.length} Corridors in Demo Scope</div>
                <button
                  onClick={onOpenDemo}
                  style={{
                    color: '#00F0FF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: 600
                  }}
                >
                  Expand to Fullscreen Simulation <ExternalLink size={12} />
                </button>
              </div>
            </div>

            {/* Asset Inspector Detail Panel (Animated Drawer) */}
            {drawerOpen && selectedAsset && (
              <div style={{
                background: 'rgba(10, 18, 32, 0.96)',
                borderLeft: '1px solid rgba(0, 240, 255, 0.25)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                maxHeight: '680px',
                overflowY: 'auto'
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 240, 255, 0.15)', paddingBottom: '12px' }}>
                  <div>
                    <div style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--cyan-primary)',
                      letterSpacing: '0.08em'
                    }}>
                      ASSET INSPECTOR [ID: {selectedAsset.id}]
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                      {selectedAsset.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      Location: {selectedAsset.state} ({selectedAsset.chainage})
                    </div>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    style={{ color: 'var(--text-muted)', padding: '4px' }}
                    aria-label="Close Inspector"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Score HUD Dual Gauge */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'rgba(6, 11, 19, 0.8)',
                    border: '1px solid rgba(0, 240, 255, 0.2)'
                  }}>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CONDITION SCORE</div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: selectedAsset.conditionScore < 70 ? '#FFB020' : '#00E5A3' }}>
                      {selectedAsset.conditionScore} <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/100</span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Trend: {selectedAsset.trend}</div>
                  </div>

                  <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'rgba(6, 11, 19, 0.8)',
                    border: '1px solid rgba(255, 59, 87, 0.3)'
                  }}>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>FAILURE RISK SCORE</div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#FF3B57' }}>
                      {selectedAsset.riskScore} <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/100</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#FF3B57', fontWeight: 600 }}>Priority: {selectedAsset.maintenancePriority}</div>
                  </div>
                </div>

                {/* Detected Issues List */}
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#00F0FF',
                    fontWeight: 600,
                    marginBottom: '8px',
                    letterSpacing: '0.06em'
                  }}>
                    AI DETECTED ISSUES & TELEMETRY
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedAsset.detectedIssues.map((defect, i) => (
                      <div key={i} style={{
                        padding: '10px 12px',
                        borderRadius: '6px',
                        background: 'rgba(6, 11, 19, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '12px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 600, color: '#FFFFFF' }}>{defect.type}</span>
                          <span style={{
                            fontSize: '10px',
                            fontFamily: 'var(--font-mono)',
                            color: defect.severity === 'High' ? '#FF3B57' : '#FFB020',
                            fontWeight: 700
                          }}>
                            {defect.severity}
                          </span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '11px', marginTop: '2px' }}>
                          {defect.dimension || defect.location} • Confidence: <span style={{ color: '#00F0FF' }}>{defect.confidence}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Predictive Risk Assessment */}
                <div style={{
                  padding: '12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 59, 87, 0.08)',
                  border: '1px solid rgba(255, 59, 87, 0.25)'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: '#FF3B57',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    marginBottom: '4px'
                  }}>
                    PREDICTED FAILURE RISK
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0', lineHeight: 1.4 }}>
                    {selectedAsset.predictedFailureRisk}
                  </div>
                </div>

                {/* AI Recommended Action */}
                <div style={{
                  padding: '12px',
                  borderRadius: '6px',
                  background: 'rgba(0, 229, 163, 0.08)',
                  border: '1px solid rgba(0, 229, 163, 0.25)'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: '#00E5A3',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    marginBottom: '4px'
                  }}>
                    RECOMMENDED INTERVENTION
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0', lineHeight: 1.4 }}>
                    {selectedAsset.recommendedAction}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
                  <a
                    href="#workflow"
                    className="btn-primary"
                    style={{ flex: 1, padding: '10px', fontSize: '12px', textAlign: 'center' }}
                  >
                    Create Work Order
                  </a>
                  <button
                    onClick={onOpenDemo}
                    className="btn-secondary"
                    style={{ padding: '10px', fontSize: '12px' }}
                  >
                    View in iCCC
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .command-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
