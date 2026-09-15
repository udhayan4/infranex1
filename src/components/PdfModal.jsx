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
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={20} color="#2563EB" />
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
              Official Presentation Slides
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Infranite Globaltech (IGT) • 14 Slides
            </div>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div style={{
          display: 'flex',
          background: '#F1F5F9',
          borderRadius: '8px',
          padding: '3px',
          border: '1px solid #CBD5E1'
        }}>
          <button
            onClick={() => setViewMode('slides')}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 700,
              background: viewMode === 'slides' ? '#2563EB' : 'transparent',
              color: viewMode === 'slides' ? '#FFFFFF' : '#475569',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Layers size={14} /> Slides ({currentSlide + 1}/14)
          </button>
          <button
            onClick={() => setViewMode('embed')}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 700,
              background: viewMode === 'embed' ? '#2563EB' : 'transparent',
              color: viewMode === 'embed' ? '#FFFFFF' : '#475569',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Layout size={14} /> Full PDF Frame
          </button>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="/Rodic-Challenge.pdf"
            download="Rodic-Challenge-InfraSightAI.pdf"
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '13px' }}
          >
            <Download size={14} /> Download PDF
          </a>

          <button
            onClick={onClose}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              background: '#FFE4E6',
              border: '1px solid #FECDD3',
              color: '#BE123C',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '13px',
              fontWeight: 700
            }}
            id="close-pdf-modal-btn"
          >
            <X size={16} /> Close
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
            padding: '20px'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1100px',
              marginBottom: '10px'
            }}>
              <div>
                <span className="badge-blue" style={{ fontSize: '12px' }}>
                  SLIDE {activeSlide.page} OF 14
                </span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginLeft: '10px' }}>
                  {activeSlide.title}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={prevSlide}
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '13px' }}
                >
                  <ChevronLeft size={16} /> Prev Slide
                </button>
                <button
                  onClick={nextSlide}
                  className="btn-primary"
                  style={{ padding: '6px 14px', fontSize: '13px' }}
                >
                  Next Slide <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Slide Image Container */}
            <div style={{
              flex: 1,
              width: '100%',
              maxWidth: '1100px',
              maxHeight: 'calc(100vh - 200px)',
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
              gap: '6px',
              overflowX: 'auto',
              maxWidth: '1100px',
              width: '100%',
              paddingTop: '12px',
              justifyContent: 'center'
            }}>
              {SLIDE_METADATA.map((s, idx) => (
                <button
                  key={s.page}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    fontSize: '12px',
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
