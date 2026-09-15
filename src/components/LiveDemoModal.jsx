import React, { useState } from 'react';
import { 
  X, Activity, AlertTriangle, ShieldCheck, MapPin, Search, 
  Layers, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import { COMMAND_CENTER_STATS, MOCK_ASSETS, RISK_MATRIX_DATA } from '../data/mockData';

export default function LiveDemoModal({ isOpen, onClose }) {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_ASSETS[0]);
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      color: '#0F172A',
      overflow: 'hidden'
    }}>
      {/* Top Header */}
      <div style={{
        height: '64px',
        background: '#FFFFFF',
        borderBottom: '1.5px solid #E2E8F0',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#16A34A' }}></div>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
              InfraSight <span style={{ color: '#2563EB' }}>Interactive Demo</span>
            </span>
          </div>

          <span className="badge-blue" style={{ fontSize: '12px' }}>
            Simulation Sandbox
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '8px',
            background: '#FFE4E6',
            border: '1px solid #FECDD3',
            color: '#BE123C',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer'
          }}
          id="close-live-demo-btn"
        >
          <X size={16} /> Exit Demo
        </button>
      </div>

      {/* Main Workspace */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '300px 1fr 360px',
        background: '#F8FAFC',
        overflow: 'hidden'
      }} className="demo-modal-grid">
        {/* Left Column: Asset List */}
        <div style={{
          background: '#FFFFFF',
          borderRight: '1.5px solid #E2E8F0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          overflowY: 'auto'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase' }}>
            Select Road or Bridge:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {MOCK_ASSETS.map((asset) => {
              const isSelected = selectedAsset.id === asset.id;
              return (
                <div
                  key={asset.id}
                  onClick={() => {
                    setSelectedAsset(asset);
                    setOrderSent(false);
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: isSelected ? '#EFF6FF' : '#F8FAFC',
                    border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB' }}>{asset.type}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: asset.riskLevel === 'Needs Repair' ? '#E11D48' : '#16A34A' }}>
                      {asset.riskLevel}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{asset.name}</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>{asset.chainage} • {asset.state}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: Visual Map / Road View */}
        <div style={{
          position: 'relative',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          margin: '16px',
          borderRadius: '16px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            borderRadius: '10px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            zIndex: 10
          }}>
            <div>
              <span className="badge-blue" style={{ fontSize: '11px' }}>{selectedAsset.type} View</span>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>
                {selectedAsset.name}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
              <div>
                <span style={{ color: '#64748B' }}>Health: </span>
                <strong style={{ color: selectedAsset.conditionScore < 70 ? '#D97706' : '#16A34A' }}>
                  {selectedAsset.conditionScore}/100
                </strong>
              </div>
              <div>
                <span style={{ color: '#64748B' }}>Traffic: </span>
                <strong style={{ color: '#0F172A' }}>{selectedAsset.trafficExposure}</strong>
              </div>
            </div>
          </div>

          {/* Central Map Visual */}
          <div style={{
            position: 'relative',
            height: '280px',
            background: 'linear-gradient(180deg, #F0FDF4 0%, #EFF6FF 100%)',
            borderRadius: '12px',
            border: '1.5px solid #BFDBFE',
            margin: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 600 280">
              {/* Highway Curve */}
              <path d="M 50 240 Q 250 80 550 140" fill="none" stroke="#334155" strokeWidth="20" strokeLinecap="round" />
              <path d="M 50 240 Q 250 80 550 140" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="12 10" />

              {/* Marker */}
              <circle cx="280" cy="110" r="20" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB" strokeWidth="3" />
              <circle cx="280" cy="110" r="8" fill="#2563EB" />
              <text x="280" y="145" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">
                {selectedAsset.chainage} [Selected]
              </text>
            </svg>
          </div>

          {/* Alert Notice */}
          <div style={{
            padding: '12px 16px',
            borderRadius: '10px',
            background: '#FEF3C7',
            border: '1.5px solid #FDE68A',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13px'
          }}>
            <AlertTriangle size={18} color="#D97706" />
            <span style={{ color: '#92400E', fontWeight: 600 }}>
              {selectedAsset.predictedFailureRisk}
            </span>
          </div>
        </div>

        {/* Right Column: Recommendations & Actions */}
        <div style={{
          background: '#FFFFFF',
          borderLeft: '1.5px solid #E2E8F0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          overflowY: 'auto'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase' }}>
            Recommended Fix:
          </div>

          <div style={{
            padding: '16px',
            borderRadius: '10px',
            background: '#F0FDF4',
            border: '1.5px solid #BBF7D0'
          }}>
            <div style={{ fontSize: '14px', color: '#15803D', fontWeight: 600, lineHeight: 1.5 }}>
              {selectedAsset.recommendedAction}
            </div>
          </div>

          {/* Detected Issues */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              Detected Problems ({selectedAsset.detectedIssues.length}):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {selectedAsset.detectedIssues.map((issue, i) => (
                <div key={i} style={{
                  padding: '10px',
                  borderRadius: '8px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontSize: '13px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>{issue.type}</span>
                  <span style={{ color: '#2563EB', fontWeight: 700 }}>
                    {issue.confidence}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div style={{ marginTop: 'auto' }}>
            {orderSent ? (
              <div style={{
                padding: '12px',
                borderRadius: '8px',
                background: '#DCFCE7',
                border: '1px solid #BBF7D0',
                textAlign: 'center',
                color: '#15803D',
                fontWeight: 700,
                fontSize: '14px'
              }}>
                ✓ Work Order Sent to Repair Team!
              </div>
            ) : (
              <button
                onClick={() => setOrderSent(true)}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '14px' }}
              >
                Send Work Order to Van
              </button>
            )}
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
