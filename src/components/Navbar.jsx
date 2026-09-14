import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'hero', 'problem', 'why-us', 'ai-scan', 'command-center',
        'road-ai', 'bridge-health', 'tunnel-safety', 'risk-engine',
        'workflow', 'digital-twin', 'architecture', 'roadmap',
        'monetisation', 'solution-pdf', 'contact'
      ];
      
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly the 8 headings requested by user (no install, no request demo)
  const navHeadings = [
    { label: 'Solutions', target: '#command-center' },
    { label: 'Marketplace', target: '#monetisation' },
    { label: 'Industries', target: '#road-ai' },
    { label: 'AI Platform', target: '#ai-scan' },
    { label: 'Resources', target: '#solution-pdf' },
    { label: 'About', target: '#why-us' },
    { label: 'Experience Center', action: onOpenDemo, target: '#command-center' },
    { label: 'Contact', target: '#contact' },
  ];

  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.target) {
      const el = document.querySelector(item.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
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
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(6, 11, 19, 0.94)' : 'rgba(6, 11, 19, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        {/* Brand & Platform Identity */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(30, 136, 229, 0.2) 100%)',
            border: '1px solid #00F0FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(0, 240, 255, 0.4)'
          }}>
            <Cpu size={22} color="#00F0FF" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16.5px',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                whiteSpace: 'nowrap'
              }}>
                INFRANITE <span style={{ color: '#00F0FF' }}>GLOBALTECH</span>
              </span>
              <span style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(0, 229, 163, 0.15)',
                color: '#00E5A3',
                border: '1px solid rgba(0, 229, 163, 0.3)'
              }}>
                IGT
              </span>
            </div>
            <div style={{
              fontSize: '10px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em'
            }}>
              Infrastructure Intelligence Platform
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links (Only the 8 specified headings alone) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '20px'
        }} className="desktop-nav">
          {navHeadings.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              style={{
                background: 'none',
                border: 'none',
                padding: '6px 4px',
                fontSize: '13.5px',
                color: '#CBD5E1',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00F0FF';
                e.currentTarget.style.textShadow = '0 0 10px rgba(0, 240, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            padding: '8px',
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: 'rgba(6, 11, 19, 0.98)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxHeight: 'calc(100vh - var(--nav-height))',
          overflowY: 'auto'
        }}>
          {navHeadings.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '15px',
                color: '#CBD5E1',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
