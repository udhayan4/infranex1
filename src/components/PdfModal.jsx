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
      background: 'rgba(4, 8, 16, 0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Modal Header */}
      <div style={{
        height: '64px',
        background: '#060B13',
        borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '6px',
            background: 'rgba(0, 240, 255, 0.15)',
            border: '1px solid #00F0FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={18} color="#00F0FF" />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
              Rodic Challenge.pdf — Solution Architecture & Pitch
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Infranite Globaltech (IGT) • 14 Slides • Authentic Submission Document
            </div>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div style={{
          display: 'flex',
          background: 'rgba(10, 20, 36, 0.8)',
          borderRadius: '6px',
          padding: '3px',
          border: '1px solid rgba(0, 240, 255, 0.2)'
        }}>
          <button
            onClick={() => setViewMode('slides')}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              background: viewMode === 'slides' ? 'rgba(0, 240, 255, 0.2)' : 'transparent',
              color: viewMode === 'slides' ? '#00F0FF' : 'var(--text-secondary)',
              border: viewMode === 'slides' ? '1px solid #00F0FF' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Layers size={13} /> High-Res Slides ({currentSlide + 1}/14)
          </button>
          <button
            onClick={() => setViewMode('embed')}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              background: viewMode === 'embed' ? 'rgba(0, 240, 255, 0.2)' : 'transparent',
              color: viewMode === 'embed' ? '#00F0FF' : 'var(--text-secondary)',
              border: viewMode === 'embed' ? '1px solid #00F0FF' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Layout size={13} /> Native PDF Frame
          </button>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="/Rodic-Challenge.pdf"
            download="Rodic-Challenge-InfraSightAI.pdf"
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '12px' }}
          >
            <Download size={14} /> Download PDF
          </a>

          <a
            href="/Rodic-Challenge.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: '12px' }}
          >
            <ExternalLink size={14} /> New Tab
          </a>

          <button
            onClick={onClose}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'rgba(255, 59, 87, 0.15)',
              border: '1px solid rgba(255, 59, 87, 0.4)',
              color: '#FF3B57',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600
            }}
            id="close-pdf-modal-btn"
          >
            <X size={16} /> Close
          </button>
        </div>
      </div>

      {/* Main Viewer Body */}
      <div style={{ flex: 1, position: 'relative', background: '#040810', overflow: 'hidden' }}>
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
            {/* Slide Navigation Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1200px',
              marginBottom: '10px'
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: '#00F0FF',
                  fontWeight: 700
                }}>
                  SLIDE {activeSlide.page} OF 14:
                </span>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginLeft: '8px' }}>
                  {activeSlide.title}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={prevSlide}
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '12px' }}
                >
                  <ChevronLeft size={16} /> Previous Slide
                </button>
                <button
                  onClick={nextSlide}
                  className="btn-primary"
                  style={{ padding: '6px 14px', fontSize: '12px' }}
                >
                  Next Slide <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Slide High-Res Image Container */}
            <div style={{
              flex: 1,
              width: '100%',
              maxWidth: '1200px',
              maxHeight: 'calc(100vh - 190px)',
              background: '#060B13',
              borderRadius: '8px',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
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

            {/* Slide Thumbnails Rail */}
            <div style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              maxWidth: '1200px',
              width: '100%',
              paddingTop: '12px',
              justifyContent: 'center'
            }}>
              {SLIDE_METADATA.map((s, idx) => (
                <button
                  key={s.page}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    background: currentSlide === idx ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                    color: currentSlide === idx ? '#060B13' : 'var(--text-secondary)',
                    border: currentSlide === idx ? '1px solid #00F0FF' : '1px solid transparent',
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
            title="Rodic Challenge PDF Document"
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
