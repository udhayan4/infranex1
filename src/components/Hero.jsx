import React from 'react';
import { ArrowRight, Play, Shield, CheckCircle2, Sparkles, MapPin, Eye, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO, COMMAND_CENTER_STATS } from '../data/mockData';

export default function Hero({ onOpenDemo }) {
  return (
    <section id="hero" style={{
      background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
      paddingTop: 'calc(var(--nav-height) + 48px)',
      paddingBottom: '64px',
      position: 'relative'
    }}>
      <div className="container">
        {/* Friendly Top Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px'
        }}>
          <div className="badge-blue" style={{ fontSize: '13px', padding: '6px 14px' }}>
            <Sparkles size={15} />
            <span>Smart Road & Bridge Safety</span>
          </div>

          <div className="badge-green" style={{ fontSize: '13px', padding: '6px 14px' }}>
            <Shield size={15} />
            <span>Government Recognised (DPIIT & IGT)</span>
          </div>

          <div className="badge-purple" style={{ fontSize: '13px', padding: '6px 14px' }}>
            <HeartHandshake size={15} />
            <span>Made for Highway & City Teams</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div style={{ maxWidth: '920px' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '20px',
            color: '#0F172A'
          }}>
            Making Roads, Bridges & Tunnels <br />
            <span style={{ color: '#2563EB' }}>
              Safer & Smoother for Everyone.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#475569',
            maxWidth: '800px',
            lineHeight: 1.6,
            marginBottom: '36px',
            fontWeight: 400
          }}>
            {COMPANY_INFO.heroSub}
          </p>

          {/* Large, Easy-to-Click Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '56px'
          }}>
            <button
              onClick={onOpenDemo}
              className="btn-primary"
              style={{ fontSize: '16px', padding: '16px 32px' }}
              id="hero-demo-btn"
            >
              <Play size={18} fill="#FFFFFF" />
              <span>Try Interactive Demo (Free)</span>
            </button>

            <a
              href="#command-center"
              className="btn-secondary"
              style={{ fontSize: '16px', padding: '16px 30px' }}
              id="hero-explore-btn"
            >
              <span>See How It Works</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#solution-pdf"
              style={{
                fontSize: '14.5px',
                color: '#2563EB',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 16px'
              }}
            >
              <span>View 14 Presentation Slides</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* 4 Colorful & Clear Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px'
        }}>
          {/* Card 1 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #BFDBFE',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>ROADS & BRIDGES COVERED</span>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563EB' }}></div>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
              18,420+
            </div>
            <div style={{ fontSize: '13.5px', color: '#64748B', marginTop: '4px' }}>
              Road stretches, bridges and tunnels monitored
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #BBF7D0',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#16A34A' }}>ACCURACY IN SPOTTING HOLES</span>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#16A34A' }}></div>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#16A34A', lineHeight: 1.1 }}>
              95%
            </div>
            <div style={{ fontSize: '13.5px', color: '#64748B', marginTop: '4px' }}>
              Accurately spots potholes, cracks & broken edges
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #FEF08A',
            boxShadow: '0 4px 12px rgba(217, 119, 6, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#D97706' }}>FASTER REPAIR DISPATCH</span>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D97706' }}></div>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#D97706', lineHeight: 1.1 }}>
              &lt; 24 Hours
            </div>
            <div style={{ fontSize: '13.5px', color: '#64748B', marginTop: '4px' }}>
              Sends automatic work orders directly to repair teams
            </div>
          </div>

          {/* Card 4 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #DDD6FE',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#7C3AED' }}>FINISHED REPAIR CHECK</span>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7C3AED' }}></div>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#7C3AED', lineHeight: 1.1 }}>
              100% Checked
            </div>
            <div style={{ fontSize: '13.5px', color: '#64748B', marginTop: '4px' }}>
              Before-and-after photo check guarantees quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
