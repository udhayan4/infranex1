import React, { useState } from 'react';
import { Sliders, CheckCircle2, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { RISK_MATRIX_DATA } from '../data/mockData';

export default function RiskEngine() {
  const [selectedAssetType, setSelectedAssetType] = useState('All');
  const [hoveredAsset, setHoveredAsset] = useState(null);

  const filteredList = RISK_MATRIX_DATA.filter((item) => {
    if (selectedAssetType !== 'All' && item.type !== selectedAssetType) return false;
    return true;
  });

  return (
    <section id="risk-engine" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#FFE4E6', color: '#E11D48', borderColor: '#FECDD3' }}>
            <Sliders size={15} />
            <span>Priority Repair List</span>
          </div>
          <h2 className="section-title">
            Knowing Exactly What to Fix First
          </h2>
          <p className="section-subtitle">
            Not all cracks are equally dangerous. Our system sorts repairs by urgency so government budgets are spent where they prevent accidents first.
          </p>
        </div>

        {/* Priority Matrix & Ranked Queue */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '32px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          marginBottom: '36px'
        }}>
          {/* Controls Bar */}
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
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                Urgency Matrix & Ranked Repair Queue
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0 }}>
                High Urgency (Red) &rarr; Fix Today | Low Urgency (Green) &rarr; Routine Check
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              {['All', 'Road', 'Bridge', 'Tunnel'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedAssetType(type)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    background: selectedAssetType === type ? '#2563EB' : '#F1F5F9',
                    color: selectedAssetType === type ? '#FFFFFF' : '#475569',
                    border: selectedAssetType === type ? '1px solid #2563EB' : '1px solid #CBD5E1',
                    cursor: 'pointer'
                  }}
                >
                  {type === 'All' ? 'All Assets' : `${type}s`}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '24px',
            alignItems: 'start'
          }} className="risk-matrix-layout">
            {/* Visual Priority Chart */}
            <div style={{
              background: '#F8FAFC',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span className="badge-yellow">Needs Attention (Medium)</span>
                <span className="badge-red">Urgent Danger (Fix Today)</span>
              </div>

              {/* Bubbles Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                margin: 'auto 0'
              }}>
                {filteredList.map((asset) => {
                  const isHovered = hoveredAsset?.id === asset.id;
                  const isRed = asset.category === 'Fix Today';
                  const isOrange = asset.category === 'Fix This Week';
                  const isYellow = asset.category === 'Fix This Month';

                  const badgeBg = isRed ? '#FFE4E6' : isOrange ? '#FFF7ED' : isYellow ? '#FEF3C7' : '#DCFCE7';
                  const badgeColor = isRed ? '#E11D48' : isOrange ? '#EA580C' : isYellow ? '#D97706' : '#16A34A';

                  return (
                    <div
                      key={asset.id}
                      onClick={() => setHoveredAsset(asset)}
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: isHovered ? '#FFFFFF' : badgeBg,
                        border: isHovered ? `2px solid ${badgeColor}` : `1.5px solid ${badgeColor}40`,
                        boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: 800, color: badgeColor }}>
                        {asset.category}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>
                        {asset.name.split('(')[0]}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        Est. Cost: {asset.cost}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                <span className="badge-green">Safe & Sound (Routine)</span>
                <span className="badge-blue">Minor Repair (Planned)</span>
              </div>
            </div>

            {/* Right: Ranked List */}
            <div style={{
              background: '#F8FAFC',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#2563EB',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>RANKED BY URGENCY</span>
                <span>{filteredList.length} ITEMS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {filteredList.map((item, rank) => {
                  const isRed = item.category === 'Fix Today';
                  const isOrange = item.category === 'Fix This Week';

                  return (
                    <div
                      key={item.id}
                      onClick={() => setHoveredAsset(item)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: hoveredAsset?.id === item.id ? '#EFF6FF' : '#FFFFFF',
                        border: hoveredAsset?.id === item.id ? '1.5px solid #2563EB' : '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          fontSize: '13px',
                          fontWeight: 800,
                          color: '#2563EB',
                          minWidth: '20px'
                        }}>
                          #{rank + 1}
                        </span>
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A' }}>{item.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748B' }}>
                            {item.type} • Est. Cost: {item.cost}
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: isRed ? '#FFE4E6' : isOrange ? '#FFF7ED' : '#FEF3C7',
                          color: isRed ? '#E11D48' : isOrange ? '#EA580C' : '#D97706'
                        }}>
                          {item.category}
                        </span>
                        <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '2px' }}>{item.status}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #E2E8F0',
                fontSize: '12.5px',
                color: '#64748B'
              }}>
                "Fixing high-priority potholes immediately saves road authorities up to 60% compared to full road rebuilding."
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
