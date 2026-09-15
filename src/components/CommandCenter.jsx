import React, { useState } from 'react';
import { 
  Activity, AlertTriangle, ShieldCheck, MapPin, Search, Filter, 
  ChevronRight, X, Clock, CheckCircle2, Sliders, Layers 
} from 'lucide-react';
import { COMMAND_CENTER_STATS, MOCK_ASSETS } from '../data/mockData';

export default function CommandCenter() {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_ASSETS[0]);
  const [filterType, setFilterType] = useState('All');
  const [drawerOpen, setDrawerOpen] = useState(true);

  const filteredAssets = MOCK_ASSETS.filter((item) => {
    if (filterType !== 'All' && item.type !== filterType) return false;
    return true;
  });

  return (
    <section id="command-center" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Activity size={15} />
            <span>Experience Center</span>
          </div>
          <h2 className="section-title">
            All Roads, Bridges & Tunnels in One Place
          </h2>
          <p className="section-subtitle">
            Click on any road or bridge below to see its safety score, any detected potholes, and what the repair team recommends.
          </p>
        </div>

        {/* 5 Simple Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div className="metric-hud">
            <span className="metric-hud-label">TOTAL ASSETS MONITORED</span>
            <div className="metric-hud-value" style={{ color: '#0F172A' }}>{COMMAND_CENTER_STATS.totalAssets}</div>
            <div className="metric-hud-sub">Roads, Bridges & Tunnels</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">NEEDS ATTENTION</span>
            <div className="metric-hud-value" style={{ color: '#D97706' }}>
              {COMMAND_CENTER_STATS.activeAlerts}
            </div>
            <div className="metric-hud-sub">Potholes & minor cracks</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">ACTIVE REPAIRS</span>
            <div className="metric-hud-value" style={{ color: '#2563EB' }}>
              {COMMAND_CENTER_STATS.openWorkOrders}
            </div>
            <div className="metric-hud-sub">Repair teams currently on site</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">AVERAGE TIME TO FIX</span>
            <div className="metric-hud-value" style={{ color: '#16A34A' }}>
              {COMMAND_CENTER_STATS.avgResponseTime}
            </div>
            <div className="metric-hud-sub">Reduced from 12 days (3x faster)</div>
          </div>

          <div className="metric-hud">
            <span className="metric-hud-label">OVERALL ROAD HEALTH</span>
            <div className="metric-hud-value" style={{ color: '#16A34A' }}>
              {COMMAND_CENTER_STATS.networkHealthIndex}
            </div>
            <div className="metric-hud-sub">High safety standard</div>
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden'
        }}>
          {/* Dashboard Control Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '16px 24px',
            background: '#F1F5F9',
            borderBottom: '1px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="status-dot"></span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                Select an Asset to Inspect:
              </span>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              {['All', 'Road', 'Bridge', 'Tunnel'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    background: filterType === type ? '#2563EB' : '#FFFFFF',
                    color: filterType === type ? '#FFFFFF' : '#475569',
                    border: filterType === type ? '1px solid #2563EB' : '1px solid #CBD5E1',
                    cursor: 'pointer'
                  }}
                >
                  {type === 'All' ? 'All Types' : `${type}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Map & Asset Inspector Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: drawerOpen ? '1fr 400px' : '1fr',
            minHeight: '480px'
          }} className="command-grid-layout">
            {/* Left: Map & Card List */}
            <div style={{
              background: '#F8FAFC',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={18} color="#2563EB" />
                  <span>Highway Network ({filteredAssets.length} Stretches Monitored)</span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748B' }}>
                  Click a card to see details &rarr;
                </div>
              </div>

              {/* Cards Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px'
              }}>
                {filteredAssets.map((asset) => {
                  const isSelected = selectedAsset?.id === asset.id;
                  const isFix = asset.riskLevel === 'Needs Repair';
                  const isWatch = asset.riskLevel === 'Needs Attention';

                  return (
                    <div
                      key={asset.id}
                      onClick={() => {
                        setSelectedAsset(asset);
                        setDrawerOpen(true);
                      }}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        background: isSelected ? '#EFF6FF' : '#FFFFFF',
                        border: isSelected ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                        boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.12)' : '0 1px 3px rgba(0,0,0,0.04)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: asset.type === 'Bridge' ? '#DCFCE7' : asset.type === 'Tunnel' ? '#EDE9FE' : '#DBEAFE',
                          color: asset.type === 'Bridge' ? '#15803D' : asset.type === 'Tunnel' ? '#6D28D9' : '#1D4ED8'
                        }}>
                          {asset.type}
                        </span>

                        <span style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: isFix ? '#E11D48' : isWatch ? '#D97706' : '#16A34A'
                        }}>
                          {asset.riskLevel}
                        </span>
                      </div>

                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                        {asset.name}
                      </div>

                      <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                        {asset.state} • {asset.chainage}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '12px',
                        paddingTop: '10px',
                        borderTop: '1px solid #F1F5F9',
                        fontSize: '12px'
                      }}>
                        <span style={{ color: '#475569' }}>Health: <strong>{asset.conditionScore}/100</strong></span>
                        <span style={{ color: '#2563EB', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                          View <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid #E2E8F0',
                fontSize: '13px'
              }}>
                <span style={{ color: '#64748B' }}>All data is continuously updated from on-ground cameras and drone logs.</span>
                <a
                  href="#contact"
                  style={{
                    color: '#2563EB',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Request Pilot on Your Corridor &rarr;
                </a>
              </div>
            </div>

            {/* Right: Asset Detail Inspector */}
            {drawerOpen && selectedAsset && (
              <div style={{
                background: '#FFFFFF',
                borderLeft: '1.5px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                overflowY: 'auto'
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px' }}>
                  <div>
                    <span className="badge-blue" style={{ fontSize: '11px', padding: '2px 8px' }}>
                      {selectedAsset.type} Details
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                      {selectedAsset.name}
                    </h3>
                    <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                      {selectedAsset.state} ({selectedAsset.chainage})
                    </div>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    style={{ color: '#94A3B8', padding: '4px', cursor: 'pointer' }}
                    aria-label="Close Inspector"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Condition & Urgency Boxes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ padding: '12px', borderRadius: '10px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#16A34A' }}>HEALTH SCORE</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#15803D' }}>
                      {selectedAsset.conditionScore}/100
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#64748B' }}>{selectedAsset.trend}</div>
                  </div>

                  <div style={{ padding: '12px', borderRadius: '10px', background: selectedAsset.riskLevel === 'Needs Repair' ? '#FFE4E6' : '#FEF3C7', border: selectedAsset.riskLevel === 'Needs Repair' ? '1px solid #FECDD3' : '1px solid #FDE68A' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: selectedAsset.riskLevel === 'Needs Repair' ? '#E11D48' : '#D97706' }}>URGENCY</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: selectedAsset.riskLevel === 'Needs Repair' ? '#BE123C' : '#B45309', marginTop: '4px' }}>
                      {selectedAsset.maintenancePriority}
                    </div>
                  </div>
                </div>

                {/* Detected Issues */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    Problems Spotted by Cameras:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedAsset.detectedIssues.map((defect, i) => (
                      <div key={i} style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        fontSize: '13px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                          <span>{defect.type}</span>
                          <span style={{ color: '#2563EB', fontSize: '12px' }}>{defect.confidence}</span>
                        </div>
                        <div style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>
                          {defect.dimension || defect.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Action */}
                <div style={{
                  padding: '14px',
                  borderRadius: '10px',
                  background: '#EFF6FF',
                  border: '1.5px solid #BFDBFE'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', marginBottom: '4px' }}>
                    HOW TO FIX IT:
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#1E293B', lineHeight: 1.5 }}>
                    {selectedAsset.recommendedAction}
                  </div>
                </div>

                {/* Action Button */}
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <a
                    href="#workflow"
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '14px', textAlign: 'center' }}
                  >
                    View Repair Order
                  </a>
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
