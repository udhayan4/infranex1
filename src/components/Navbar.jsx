import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Friendly, straightforward navigation headings
  const navHeadings = [
    { label: 'What We Do', target: '#command-center' },
    { label: 'How It Works', target: '#ai-scan' },
    { label: 'Roads & Bridges', target: '#road-ai' },
    { label: 'Repair Process', target: '#workflow' },
    { label: 'Presentation Slides', target: '#solution-pdf' },
    { label: 'About Us', target: '#why-us' },
    { label: 'Interactive Demo', action: onOpenDemo, target: '#command-center', isHighlight: true },
    { label: 'Contact Us', target: '#contact' },
  ];

  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.target) {
      const el = document.querySelector(item.target);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
    setMobileMenuOpen(false);
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
        {/* Friendly Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563EB 0%, #16A34A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '18px'
          }}>
            IGT
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: '#0F172A',
                whiteSpace: 'nowrap'
              }}>
                INFRANITE <span style={{ color: '#2563EB' }}>GLOBALTECH</span>
              </span>
              <span style={{
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '6px',
                background: '#DCFCE7',
                color: '#15803D',
                fontWeight: 700
              }}>
                InfraSight
              </span>
            </div>
            <div style={{
              fontSize: '12px',
              color: '#64748B',
              fontWeight: 500
            }}>
              Simple & Smart Infrastructure Safety
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '12px'
        }} className="desktop-nav">
          {navHeadings.map((item) => {
            if (item.isHighlight) {
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  style={{
                    background: '#2563EB',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <Sparkles size={14} />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 10px',
                  fontSize: '14px',
                  color: '#334155',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                  borderRadius: '6px'
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
            cursor: 'pointer'
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
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: 'calc(100vh - var(--nav-height))',
          overflowY: 'auto'
        }}>
          {navHeadings.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              style={{
                background: item.isHighlight ? '#2563EB' : 'transparent',
                color: item.isHighlight ? '#FFFFFF' : '#1E293B',
                textAlign: 'left',
                fontSize: '15px',
                fontWeight: 600,
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
      `}</style>
    </header>
  );
}
