import React, { useState } from 'react';
import { Sliders, Filter, AlertCircle, TrendingDown, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import { RISK_MATRIX_DATA } from '../data/mockData';

export default function RiskEngine() {
  const [selectedAssetType, setSelectedAssetType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredAsset, setHoveredAsset] = useState(null);

  const filteredList = RISK_MATRIX_DATA.filter((item) => {
    if (selectedAssetType !== 'All' && item.type !== selectedAssetType) return false;
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="risk-engine" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0A1220 50%, #060B13 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sliders size={12} color="#FF3B57" />
            <span>Use Case 04</span>
          </div>
          <h2 className="section-title">
            AI Asset Risk & Maintenance Prioritisation
          </h2>
          <p className="section-subtitle">
            From raw inspection data to actionable, ranked maintenance plans.
            The AI risk engine calculates Probability of Failure &times; Consequence of Failure to allocate capital where it protects the most lives.
          </p>
        </div>

        {/* 2D Interactive Risk Matrix Sandbox */}
        <div className="glass-panel bracket-corner" style={{
          padding: '32px',
          background: 'rgba(8, 15, 27, 0.9)',
          marginBottom: '48px'
        }}>
          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '16px'
          }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF' }}>
                Dynamic 2D Failure Risk Matrix
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                X-Axis: Probability of Failure | Y-Axis: Impact & Network Consequence
              </div>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>ASSET:</span>
              {['All', 'Road', 'Bridge', 'Tunnel'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedAssetType(type)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    background: selectedAssetType === type ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedAssetType === type ? '#00F0FF' : 'var(--text-secondary)',
                    border: selectedAssetType === type ? '1px solid #00F0FF' : '1px solid transparent',
                    transition: 'all 0.15s'
                  }}
                >
                  {type}
                </button>
              ))}

              <div style={{ width: '1px', height: '18px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 4px' }} />

              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>RISK:</span>
              {['All', 'Critical', 'High', 'Medium', 'Low'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    background: selectedCategory === cat ? 'rgba(255, 59, 87, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedCategory === cat ? '#FF3B57' : 'var(--text-secondary)',
                    border: selectedCategory === cat ? '1px solid #FF3B57' : '1px solid transparent',
                    transition: 'all 0.15s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Graphic & Queue Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '28px',
            alignItems: 'start'
          }} className="risk-matrix-layout">
            {/* 2D Matrix Grid Canvas */}
            <div style={{
              position: 'relative',
              height: '380px',
              background: '#040810',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}>
              {/* Quadrant gradient backdrops */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '50%',
                background: 'radial-gradient(ellipse at top right, rgba(255, 59, 87, 0.15), transparent 70%)',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50%',
                height: '50%',
                background: 'radial-gradient(ellipse at bottom left, rgba(0, 229, 163, 0.08), transparent 70%)',
                pointerEvents: 'none'
              }} />

              {/* Grid Lines */}
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Quadrant Watermark Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 176, 32, 0.4)' }}>HIGH IMPACT / LOW PROB</span>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 59, 87, 0.6)', fontWeight: 700 }}>CRITICAL RISK ZONE</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', zIndex: 1 }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(0, 229, 163, 0.4)' }}>LOW RISK ZONE</span>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 176, 32, 0.4)' }}>HIGH PROB / LOW IMPACT</span>
              </div>

              {/* Dynamic Asset Bubbles */}
              {filteredList.map((asset) => {
                const isHovered = hoveredAsset?.id === asset.id;
                let bubbleColor = '#00E5A3';
                if (asset.category === 'Medium') bubbleColor = '#FFB020';
                if (asset.category === 'High') bubbleColor = '#F97316';
                if (asset.category === 'Critical') bubbleColor = '#FF3B57';

                return (
                  <div
                    key={asset.id}
                    onMouseEnter={() => setHoveredAsset(asset)}
                    onMouseLeave={() => setHoveredAsset(null)}
                    style={{
                      position: 'absolute',
                      left: `calc(${asset.probability}% - 14px)`,
                      bottom: `calc(${asset.impact}% - 14px)`,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isHovered ? bubbleColor : `${bubbleColor}33`,
                      border: `2px solid ${bubbleColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isHovered ? `0 0 16px ${bubbleColor}` : 'none',
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: isHovered ? 20 : 10
                    }}
                  >
                    <span style={{
                      fontSize: '9px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: isHovered ? '#060B13' : '#FFFFFF'
                    }}>
                      {asset.id}
                    </span>
                  </div>
                );
              })}

              {/* Tooltip Overlay */}
              {hoveredAsset && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: 'rgba(6, 11, 19, 0.95)',
                  border: '1px solid #00F0FF',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
                  zIndex: 30,
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <div style={{ color: '#00F0FF', fontWeight: 700 }}>{hoveredAsset.name}</div>
                  <div style={{ color: '#FFFFFF' }}>
                    Failure Prob: {hoveredAsset.probability}% | Impact: {hoveredAsset.impact}%
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>Estimated Cost: {hoveredAsset.cost}</div>
                </div>
              )}
            </div>

            {/* Right: AI Prioritised Intervention Queue */}
            <div style={{
              background: 'rgba(6, 11, 19, 0.9)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: '#00F0FF',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>AI MAINTENANCE PRIORITY QUEUE</span>
                <span>{filteredList.length} ASSETS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '310px', overflowY: 'auto' }}>
                {filteredList.map((item, rank) => {
                  const isCritical = item.category === 'Critical';
                  const isHigh = item.category === 'High';

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredAsset(item)}
                      onMouseLeave={() => setHoveredAsset(null)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '6px',
                        background: hoveredAsset?.id === item.id ? 'rgba(0, 240, 255, 0.1)' : 'rgba(10, 20, 36, 0.7)',
                        border: hoveredAsset?.id === item.id ? '1px solid #00F0FF' : '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        transition: 'all 0.15s',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: '#00F0FF',
                          fontWeight: 700,
                          minWidth: '18px'
                        }}>
                          #{rank + 1}
                        </span>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>{item.name}</div>
                          <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                            {item.type} • Est. Cost: {item.cost}
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          fontSize: '9.5px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          background: isCritical ? 'rgba(255, 59, 87, 0.2)' : isHigh ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255, 176, 32, 0.2)',
                          color: isCritical ? '#FF3B57' : isHigh ? '#F97316' : '#FFB020',
                          fontWeight: 700
                        }}>
                          SCORE: {item.score}
                        </span>
                        <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>{item.status}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Callout */}
              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '11.5px',
                color: 'var(--text-secondary)'
              }}>
                "The AI engine converts condition telemetry into actionable maintenance priorities, ensuring optimal allocation of annual capital budgets."
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .risk-matrix-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
