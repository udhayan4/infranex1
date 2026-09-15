import React from 'react';
import { ArrowUp, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const whatWeDo = [
    'Road Health & Potholes',
    'Bridge Safety & Pillars',
    'Tunnel Clean Air & Lights',
    'Before & After Photo Check',
    'Smart Priority Repair List'
  ];

  const quickSolutions = [
    '14-Day Quick Test',
    'Highway Corridor Pilot',
    'Statewide Network Rollout',
    'EV Chargers & Solar Amenities'
  ];

  const company = [
    'About Infranite (IGT)',
    '1,680+ Villages Connected',
    'DPIIT & ISO Certified',
    'Contact Our Team'
  ];

  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1.5px solid #E2E8F0',
      paddingTop: '56px',
      paddingBottom: '32px',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        {/* Top Brand Banner */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          paddingBottom: '36px',
          borderBottom: '1px solid #E2E8F0',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '16px'
              }}>
                IGT
              </div>
              <h2 style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
                fontWeight: 800,
                color: '#0F172A',
                margin: 0
              }}>
                INFRANITE GLOBALTECH <span style={{ color: '#2563EB' }}>PVT. LTD.</span>
              </h2>
            </div>
            <p style={{
              fontSize: '14.5px',
              color: '#64748B',
              margin: 0
            }}>
              Making roads, bridges and tunnels safer across India with simple, smart technology.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span className="badge-green">
              DPIIT Recognised Startup
            </span>

            <a
              href="https://infraniteglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <span>infraniteglobal.com</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* 3 Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Column 1 */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#2563EB',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              WHAT WE DO
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {whatWeDo.map((item) => (
                <li key={item}>
                  <a
                    href="#road-ai"
                    style={{ fontSize: '14px', color: '#475569', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.color = '#2563EB')}
                    onMouseLeave={(e) => (e.target.style.color = '#475569')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#16A34A',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              SOLUTIONS & PILOTS
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {quickSolutions.map((item) => (
                <li key={item}>
                  <a
                    href="#roadmap"
                    style={{ fontSize: '14px', color: '#475569', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.color = '#16A34A')}
                    onMouseLeave={(e) => (e.target.style.color = '#475569')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#7C3AED',
              letterSpacing: '0.04em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              ABOUT US
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#why-us"
                    style={{ fontSize: '14px', color: '#475569', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.color = '#7C3AED')}
                    onMouseLeave={(e) => (e.target.style.color = '#475569')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '13px',
          color: '#64748B'
        }}>
          <div>
            &copy; 2026 Infranite Globaltech Pvt. Ltd. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '12px', gap: '6px' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
