import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Maximize2, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { SLIDE_METADATA } from '../data/mockData';

export default function SolutionPdf({ onOpenPdfModal }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDE_METADATA.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDE_METADATA.length) % SLIDE_METADATA.length);
  };

  const current = SLIDE_METADATA[currentSlideIndex];

  return (
    <section id="solution-pdf" className="section-wrapper" style={{
      background: '#060B13',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FileText size={12} color="#00F0FF" />
            <span>Official Proposal Document</span>
          </div>
          <h2 className="section-title">
            Explore the Complete Solution
          </h2>
          <p className="section-subtitle">
            Detailed solution architecture, AI modules, implementation approach and collaboration framework.
            Authored by Infranite Globaltech (IGT) for Enterprise Infrastructure Intelligence.
          </p>
        </div>

        {/* Action Button Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <button
            onClick={onOpenPdfModal}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '14px' }}
            id="open-pdf-modal-btn"
          >
            <Maximize2 size={16} />
            <span>Open Embedded PDF Viewer</span>
          </button>

          <a
            href="/Rodic-Challenge.pdf"
            download="Rodic-Challenge-InfraSightAI.pdf"
            className="btn-secondary"
            style={{ padding: '14px 26px', fontSize: '14px' }}
          >
            <Download size={16} />
            <span>Download Official PDF (34 MB)</span>
          </a>

          <a
            href="/Rodic-Challenge.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#00F0FF',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              padding: '12px 16px'
            }}
          >
            <span>Open in New Tab</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Interactive 14-Page Slide Showcase */}
        <div className="glass-panel bracket-corner" style={{
          padding: '28px',
          maxWidth: '1040px',
          margin: '0 auto',
          background: 'rgba(8, 16, 28, 0.92)'
        }}>
          {/* Slide Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
            borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
            paddingBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'rgba(0, 240, 255, 0.2)',
                color: '#00F0FF',
                fontWeight: 700
              }}>
                SLIDE {current.page} OF {SLIDE_METADATA.length}
              </span>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF' }}>
                {current.title}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={prevSlide}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '12px' }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button
                onClick={nextSlide}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '12px' }}
                aria-label="Next Slide"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Slide High-Res Image Display */}
          <div style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            background: '#040810',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={current.img}
              alt={`Slide ${current.page}: ${current.title}`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '560px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                // Graceful fallback if static slide preview is loading
                e.target.style.display = 'none';
              }}
            />

            {/* Quick action floating button */}
            <button
              onClick={onOpenPdfModal}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                padding: '8px 16px',
                borderRadius: '6px',
                background: 'rgba(6, 11, 19, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #00F0FF',
                color: '#00F0FF',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <Eye size={14} /> Inspect in PDF Modal
            </button>
          </div>

          {/* Slide Description Strip */}
          <div style={{
            marginTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12.5px',
            color: 'var(--text-secondary)'
          }}>
            <div>{current.desc}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
              Source: Rodic Challenge.pdf (Infranite Globaltech)
            </div>
          </div>

          {/* Quick Slide Navigation Dots */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            {SLIDE_METADATA.map((s, idx) => (
              <button
                key={s.page}
                onClick={() => setCurrentSlideIndex(idx)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  background: currentSlideIndex === idx ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                  color: currentSlideIndex === idx ? '#060B13' : 'var(--text-secondary)',
                  border: currentSlideIndex === idx ? '1px solid #00F0FF' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {s.page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
