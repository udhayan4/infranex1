import React, { useState } from 'react';
import { Menu, X, ChevronDown, FileText, Truck, Activity, Wind, ClipboardList, Sliders, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenPdf }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // The 8 Solutions extracted from the PDF
  const pdfSolutions = [
    { title: 'Complete 14-Page Pitch & Solution PDF', sub: 'Full presentation document & architecture', target: '#solutions', isPdf: true },
    { title: 'Road Health & Pothole Spotting', sub: 'Automatic camera detection & sizing', target: '#road-ai' },
    { title: 'Bridge Safety & Pillar Intelligence', sub: 'Structural health & joint monitoring', target: '#bridge-health' },
    { title: 'Tunnel Safety & Clean Air Systems', sub: 'Ventilation, lighting & water checks', target: '#tunnel-safety' },
    { title: 'Asset Risk & Capital Prioritization', sub: 'Probability vs consequence matrix', target: '#risk-engine' },
    { title: 'Closed-Loop Maintenance Work Orders', sub: 'Before & after photo verification', target: '#workflow' },
    { title: 'Virtual Infrastructure Models', sub: 'Real-time telemetry & digital twin', target: '#digital-twin' },
    { title: 'Smart Highway Value & Monetisation', sub: 'EV hubs, solar light poles & public Wi-Fi', target: '#monetisation' }
  ];

  // Exactly the 8 requested navigation headings
  const navHeadings = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'Marketplace', target: '#monetisation' },
    { label: 'Industries', target: '#road-ai' },
    { label: 'AI Platform', target: '#ai-scan' },
    { label: 'Resources', target: '#solutions' },
    { label: 'About', target: '#why-us' },
    { label: 'Experience Center', target: '#command-center' },
    { label: 'Contact', target: '#contact' },
  ];

  const handleNavClick = (target) => {
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (target) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  const handleSolutionSelect = (item) => {
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (item.isPdf && onOpenPdf) {
      onOpenPdf();
    }
    handleNavClick(item.target);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-height)',
      zIndex: 100,
      background: '#FFFFFF',
      borderBottom: '1.5px solid #E2E8F0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        {/* Brand Logo & Name (Responsive) */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', minWidth: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563EB 0%, #16A34A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '16px',
            flexShrink: 0
          }}>
            IGT
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(14px, 3.8vw, 17.5px)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: '#0F172A',
                whiteSpace: 'nowrap'
              }}>
                INFRANITE <span style={{ color: '#2563EB' }}>GLOBALTECH</span>
              </span>
              <span style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '6px',
                background: '#EFF6FF',
                color: '#2563EB',
                fontWeight: 700,
                display: 'inline-block',
                flexShrink: 0
              }}>
                AI Tech
              </span>
            </div>
            <div className="brand-subline" style={{
              fontSize: '11px',
              color: '#64748B',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              AI Infrastructure Intelligence & Innovation
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links: Exactly the 8 requested items */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '6px',
          position: 'relative'
        }} className="desktop-nav">
          {navHeadings.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                    style={{
                      background: solutionsDropdownOpen ? '#EFF6FF' : 'none',
                      border: 'none',
                      padding: '8px 12px',
                      fontSize: '14px',
                      color: solutionsDropdownOpen ? '#2563EB' : '#334155',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={15} style={{ transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>

                  {/* Solutions Dropdown Menu (PDF Content Inside) */}
                  {solutionsDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: 0,
                      width: '360px',
                      background: '#FFFFFF',
                      border: '1.5px solid #E2E8F0',
                      borderRadius: '14px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      zIndex: 200
                    }}>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#2563EB',
                        padding: '6px 10px',
                        borderBottom: '1px solid #F1F5F9',
                        textTransform: 'uppercase'
                      }}>
                        Solutions from Official PDF Proposal
                      </div>

                      {pdfSolutions.map((sol, i) => (
                        <div
                          key={i}
                          onClick={() => handleSolutionSelect(sol)}
                          style={{
                            padding: '10px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            background: sol.isPdf ? '#EFF6FF' : 'transparent',
                            border: sol.isPdf ? '1px solid #BFDBFE' : '1px solid transparent'
                          }}
                          onMouseEnter={(e) => {
                            if (!sol.isPdf) e.currentTarget.style.background = '#F8FAFC';
                          }}
                          onMouseLeave={(e) => {
                            if (!sol.isPdf) e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: sol.isPdf ? '#2563EB' : '#0F172A' }}>
                            {sol.title}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '2px' }}>
                            {sol.sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#334155',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#2563EB';
                  e.currentTarget.style.background = '#EFF6FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            padding: '8px',
            background: '#F1F5F9',
            border: '1px solid #CBD5E1',
            borderRadius: '8px',
            color: '#0F172A',
            cursor: 'pointer',
            flexShrink: 0
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '2px solid #2563EB',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          maxHeight: 'calc(100vh - var(--nav-height))',
          overflowY: 'auto'
        }}>
          {/* Solutions Accordion Section in Mobile Menu */}
          <div style={{
            background: '#F8FAFC',
            borderRadius: '10px',
            padding: '12px 14px',
            border: '1px solid #E2E8F0',
            marginBottom: '4px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 800,
              color: '#2563EB',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              Solutions (14-Page PDF Deck)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {pdfSolutions.map((sol, i) => (
                <button
                  key={i}
                  onClick={() => handleSolutionSelect(sol)}
                  style={{
                    background: sol.isPdf ? '#EFF6FF' : '#FFFFFF',
                    border: sol.isPdf ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: sol.isPdf ? '#2563EB' : '#1E293B'
                  }}
                >
                  {sol.title}
                </button>
              ))}
            </div>
          </div>

          {/* Other 7 Navigation Headings */}
          {navHeadings.filter(h => !h.hasDropdown).map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.target)}
              style={{
                background: 'transparent',
                color: '#1E293B',
                textAlign: 'left',
                fontSize: '15px',
                fontWeight: 700,
                padding: '10px 14px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 959px) {
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 580px) {
          .brand-subline { display: none !important; }
        }
      `}</style>
    </header>
  );
}
