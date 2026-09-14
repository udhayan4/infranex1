import React from 'react';
import { ArrowUpRight, ArrowUp, Shield, Cpu, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const capabilities = [
    'Telecom Infrastructure',
    'Digital Infrastructure',
    'AI & Digital Transformation',
    'Data Center & NOC',
    'Smart Cities',
    'Energy & Renewable',
    'Managed Engineering'
  ];

  const solutions = [
    'InfraNex',
    'Enterprise AI',
    'Digital PMO',
    'Infrastructure Intelligence'
  ];

  const company = [
    'About IGT',
    'Industries',
    'Case Studies',
    'Insights',
    'Careers',
    'Contact'
  ];

  const adminCrm = [
    'Admin & Operations Portal',
    'Field Dispatch CRM',
    'Asset Lifecycle Management',
    'SLA & Contract Governance',
    'Real-Time Ticket Resolution',
    'Multi-Tenant Role Access'
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #060B13 0%, #03060B 100%)',
      borderTop: '1px solid rgba(0, 240, 255, 0.15)',
      paddingTop: '64px',
      paddingBottom: '32px',
      position: 'relative',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        {/* Top Brand Banner */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 240, 255, 0.12)',
                border: '1px solid #00F0FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.3)'
              }}>
                <Cpu size={20} color="#00F0FF" />
              </div>
              <h2 style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: 0
              }}>
                INFRANITE GLOBALTECH <span style={{ color: '#00F0FF' }}>PVT. LTD.</span> <span style={{ color: '#94A3B8', fontWeight: 600 }}>— IGT</span>
              </h2>
            </div>
            <p style={{
              fontSize: '14.5px',
              color: '#94A3B8',
              margin: 0,
              maxWidth: '680px',
              lineHeight: 1.5
            }}>
              Deep infrastructure expertise. Digital intelligence. Enterprise scale.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              color: '#00F0FF',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em'
            }}>
              INFRASTRUCTURE · DIGITAL · INTELLIGENT
            </div>

            <a
              href="https://infraniteglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00F0FF';
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.12)';
                e.currentTarget.style.color = '#00F0FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <span>infraniteglobal.com</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px',
          marginBottom: '56px'
        }}>
          {/* Column 1: CAPABILITIES */}
          <div>
            <div style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: '#00F0FF',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '18px',
              textTransform: 'uppercase'
            }}>
              CAPABILITIES
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {capabilities.map((item) => (
                <li key={item}>
                  <a
                    href="#road-ai"
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#00F0FF')}
                    onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div>
            <div style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: '#00F0FF',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '18px',
              textTransform: 'uppercase'
            }}>
              SOLUTIONS
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#command-center"
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#00F0FF')}
                    onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <div style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: '#00F0FF',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '18px',
              textTransform: 'uppercase'
            }}>
              COMPANY
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {company.map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Contact' ? '#contact' : '#why-us'}
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#00F0FF')}
                    onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ADMIN & CRM CONCEPT */}
          <div>
            <div style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: '#00E5A3',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '18px',
              textTransform: 'uppercase'
            }}>
              ADMIN & CRM CONCEPT
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {adminCrm.map((item) => (
                <li key={item}>
                  <a
                    href="#command-center"
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#00E5A3')}
                    onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: '#64748B'
        }}>
          <div>
            &copy; 2026 Infranite Globaltech Pvt. Ltd. All rights reserved.
            <span style={{ margin: '0 8px', color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <span style={{ color: '#00F0FF' }}>INFRASTRUCTURE · DIGITAL · INTELLIGENT</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#CBD5E1',
              cursor: 'pointer',
              padding: '6px 14px',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11.5px',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00F0FF';
              e.currentTarget.style.color = '#00F0FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#CBD5E1';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
