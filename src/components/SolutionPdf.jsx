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
    <section id="solutions" className="section-wrapper" style={{
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <FileText size={15} />
            <span>Presentation Slides</span>
          </div>
          <h2 className="section-title">
            Explore the Complete Solution Slides
          </h2>
          <p className="section-subtitle">
            Browse through all 14 official presentation slides prepared by Infranite Globaltech (IGT).
          </p>
        </div>

        {/* Action Button Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '36px'
        }}>
          <button
            onClick={onOpenPdfModal}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '15px' }}
            id="open-pdf-modal-btn"
          >
            <Maximize2 size={18} />
            <span>View Fullscreen Slides</span>
          </button>

          <a
            href="/Rodic-Challenge.pdf"
            download="Rodic-Challenge-InfraSightAI.pdf"
            className="btn-secondary"
            style={{ padding: '14px 26px', fontSize: '15px' }}
          >
            <Download size={18} />
            <span>Download PDF (34 MB)</span>
          </a>

          <a
            href="/Rodic-Challenge.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#2563EB',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px 16px'
            }}
          >
            <span>Open in New Tab</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Interactive Slide Showcase Box */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          border: '1.5px solid #E2E8F0',
          padding: '28px',
          maxWidth: '960px',
          margin: '0 auto',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="badge-blue">
                SLIDE {current.page} OF {SLIDE_METADATA.length}
              </span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                {current.title}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={prevSlide}
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '13px' }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button
                onClick={nextSlide}
                className="btn-primary"
                style={{ padding: '6px 14px', fontSize: '13px' }}
                aria-label="Next Slide"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Slide High-Res Image Display */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1.5px solid #CBD5E1',
            background: '#FFFFFF',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}>
            <img
              src={current.img}
              alt={`Slide ${current.page}: ${current.title}`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '520px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Slide Description Strip */}
          <div style={{
            marginTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '13.5px',
            color: '#475569'
          }}>
            <div>{current.desc}</div>
            <div style={{ fontSize: '12px', color: '#94A3B8' }}>
              Official Submission (Infranite Globaltech)
            </div>
          </div>

          {/* Quick Slide Navigation Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #E2E8F0'
          }}>
            {SLIDE_METADATA.map((s, idx) => (
              <button
                key={s.page}
                onClick={() => setCurrentSlideIndex(idx)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  background: currentSlideIndex === idx ? '#2563EB' : '#FFFFFF',
                  color: currentSlideIndex === idx ? '#FFFFFF' : '#475569',
                  border: currentSlideIndex === idx ? '1px solid #2563EB' : '1px solid #CBD5E1',
                  cursor: 'pointer'
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
