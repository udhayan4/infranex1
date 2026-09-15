import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, ChevronLeft, ChevronRight, Layers, Layout } from 'lucide-react';
import { SLIDE_METADATA } from '../data/mockData';

export default function PdfModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('slides'); // 'slides' or 'embed'
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDE_METADATA.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDE_METADATA.length) % SLIDE_METADATA.length);

  const activeSlide = SLIDE_METADATA[currentSlide];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Modal Header */}
      <div className="pdf-modal-header" style={{
        minHeight: '56px',
        background: '#FFFFFF',
        borderBottom: '1.5px solid #E2E8F0',
        padding: '8px 16px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FileText size={18} color="#2563EB" />
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
              Official Presentation Slides
            </div>
            <div style={{ fontSize: '11px', color: '#64748B' }}>
              Infranite Globaltech (IGT) • 14 Slides
            </div>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div style={{
          display: 'flex',
          background: '#F1F5F9',
          borderRadius: '8px',
          padding: '2px',
          border: '1px solid #CBD5E1'
        }}>
          <button
            onClick={() => setViewMode('slides')}
            style={{
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 700,
              background: viewMode === 'slides' ? '#2563EB' : 'transparent',
              color: viewMode === 'slides' ? '#FFFFFF' : '#475569',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Layers size={13} /> Slides ({currentSlide + 1}/14)
          </button>
          <button
            onClick={() => setViewMode('embed')}
            style={{
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 700,
              background: viewMode === 'embed' ? '#2563EB' : 'transparent',
              color: viewMode === 'embed' ? '#FFFFFF' : '#475569',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Layout size={13} /> Full PDF
          </button>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="/Rodic-Challenge.pdf"
            download="Rodic-Challenge-InfraSightAI.pdf"
            className="btn-secondary"
            style={{ padding: '5px 10px', fontSize: '12px' }}
          >
            <Download size={13} /> PDF
          </a>

          <button
            onClick={onClose}
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              background: '#FFE4E6',
              border: '1px solid #FECDD3',
              color: '#BE123C',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: 700
            }}
            id="close-pdf-modal-btn"
          >
            <X size={15} /> Close
          </button>
        </div>
      </div>

      {/* Main Viewer Body */}
      <div style={{ flex: 1, position: 'relative', background: '#F8FAFC', overflow: 'hidden' }}>
        {viewMode === 'slides' ? (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1100px',
              marginBottom: '8px',
              gap: '8px'
            }}>
              <div>
                <span className="badge-blue" style={{ fontSize: '11px', padding: '2px 8px' }}>
                  SLIDE {activeSlide.page} OF 14
                </span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginLeft: '8px' }}>
                  {activeSlide.title}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={prevSlide}
                  className="btn-secondary"
                  style={{ padding: '5px 10px', fontSize: '12px' }}
                >
                  <ChevronLeft size={15} /> Prev
                </button>
                <button
                  onClick={nextSlide}
                  className="btn-primary"
                  style={{ padding: '5px 10px', fontSize: '12px' }}
                >
                  Next <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Slide Image Container */}
            <div style={{
              flex: 1,
              width: '100%',
              maxWidth: '1100px',
              maxHeight: 'calc(100vh - 160px)',
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #CBD5E1',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={activeSlide.img}
                alt={`Slide ${activeSlide.page}: ${activeSlide.title}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Thumbnails */}
            <div style={{
              display: 'flex',
              gap: '4px',
              overflowX: 'auto',
              maxWidth: '100%',
              width: '100%',
              paddingTop: '8px',
              justifyContent: 'flex-start',
              WebkitOverflowScrolling: 'touch'
            }}>
              {SLIDE_METADATA.map((s, idx) => (
                <button
                  key={s.page}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: currentSlide === idx ? '#2563EB' : '#FFFFFF',
                    color: currentSlide === idx ? '#FFFFFF' : '#475569',
                    border: currentSlide === idx ? '1px solid #2563EB' : '1px solid #CBD5E1',
                    cursor: 'pointer'
                  }}
                >
                  {s.page}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <iframe
            src="/Rodic-Challenge.pdf#toolbar=1&navpanes=0&scrollbar=1"
            title="Presentation PDF"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        )}
      </div>
    </div>
  );
}
