import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    solution: 'Road Condition & Pavement Intelligence',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const solutionOptions = [
    'Road Condition & Pavement Intelligence',
    'Bridge Health & Structural Monitoring',
    'Tunnel Safety & Airflow Telemetry',
    'AI Risk Matrix & Asset Prioritisation',
    'Digital Twin & Asset Monetisation',
    '14-Day Pilot Corridor PoC'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill in all required fields (Name, Email, and Message).' });
      return;
    }

    setStatus({ state: 'loading', message: 'Submitting your inquiry...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! Your inquiry regarding ${formData.solution} has been received. Our infrastructure engineering team will contact you within 24 hours.`
      });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      solution: 'Road Condition & Pavement Intelligence',
      message: ''
    });
    setStatus({ state: 'idle', message: '' });
  };

  return (
    <section id="contact" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #060B13 0%, #0B1626 50%, #060B13 100%)',
      position: 'relative',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '80px',
      paddingBottom: '90px'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <div className="section-pill" style={{ marginBottom: '14px' }}>
            <Mail size={12} color="#00F0FF" />
            <span>Connect With Us</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '14px' }}>
            Get in Touch With Our AI Team
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px' }}>
            Explore how InfraSight AI can be tailored for your road networks, bridges, or tunnel corridors. Schedule a live briefing or initiate a 14-day demonstration pilot.
          </p>
        </div>

        {/* Two-Column User-Friendly Grid: Contact Channels + Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start',
          maxWidth: '1120px',
          margin: '0 auto'
        }}>
          {/* Left Column: Direct Communication Channels & Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{
              padding: '32px',
              background: 'rgba(11, 20, 36, 0.85)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '16px'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#FFFFFF',
                fontWeight: 700,
                marginBottom: '10px'
              }}>
                Direct Communication Channels
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}>
                Speak directly with Infranite Globaltech's technology leads and infrastructure architects.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={18} color="#00F0FF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Official Inquiries
                    </div>
                    <a href="mailto:contact@infrasight.ai" style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                      contact@infrasight.ai
                    </a>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      partnerships@infranite.com
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(0, 229, 163, 0.1)',
                    border: '1px solid rgba(0, 229, 163, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={18} color="#00E5A3" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Direct Line
                    </div>
                    <div style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: 600 }}>
                      +91 (080) 4123 8890 / +91 94480 55120
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Mon - Sat, 9:00 AM - 7:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={18} color="#38BDF8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Engineering Headquarters
                    </div>
                    <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 600 }}>
                      Infranite Globaltech Pvt Ltd (IGT)
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      Bengaluru & New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee */}
            <div className="glass-panel" style={{
              padding: '24px',
              background: 'rgba(11, 20, 36, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Clock size={16} color="#00E5A3" />
                <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 600 }}>
                  24-Hour Engineering Response Guarantee
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Every inquiry is reviewed by senior infrastructure data engineers. Technical briefing calls include custom corridor feasibility estimates.
              </p>

              <div style={{
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={14} color="#00F0FF" />
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#CBD5E1' }}>
                    DPIIT Recognised Startup
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#00E5A3" />
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#CBD5E1' }}>
                    ISO 9001:2015 QMS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: User-Friendly Contact Form */}
          <div className="glass-panel" style={{
            padding: '36px',
            background: 'rgba(11, 20, 36, 0.95)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '16px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)'
          }}>
            {status.state === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '36px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 229, 163, 0.15)',
                  border: '2px solid #00E5A3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={36} color="#00E5A3" />
                </div>
                <h3 style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 700 }}>
                  Inquiry Sent Successfully!
                </h3>
                <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '440px' }}>
                  {status.message}
                </p>
                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ marginTop: '12px', padding: '10px 24px', fontSize: '13px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 700, marginBottom: '6px' }}>
                    Request Consultation or Demo
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Fill in your details below and our solution architects will prepare a live demo sandbox for your team.
                  </p>
                </div>

                {/* Name and Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: '#CBD5E1',
                      marginBottom: '6px'
                    }}>
                      Full Name <span style={{ color: '#00F0FF' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(6, 11, 19, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: '#CBD5E1',
                      marginBottom: '6px'
                    }}>
                      Work Email <span style={{ color: '#00F0FF' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@agency.gov.in"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(6, 11, 19, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                {/* Phone Number and Organization Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: '#CBD5E1',
                      marginBottom: '6px'
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(6, 11, 19, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: '#CBD5E1',
                      marginBottom: '6px'
                    }}>
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. NHAI / State PWD / Concessionaire"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(6, 11, 19, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                {/* Solution Area Dropdown */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: '#CBD5E1',
                    marginBottom: '6px'
                  }}>
                    Area of Interest
                  </label>
                  <select
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#0B1424',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {solutionOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: '#0B1424', color: '#FFFFFF' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: '#CBD5E1',
                    marginBottom: '6px'
                  }}>
                    Message / Project Details <span style={{ color: '#00F0FF' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your infrastructure assets, corridor length, key challenges, or demonstration goals..."
                    required
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(6, 11, 19, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: 1.5,
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                {/* Error Banner */}
                {status.state === 'error' && (
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '6px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#FCA5A5',
                    fontSize: '13px'
                  }}>
                    {status.message}
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="btn-primary"
                  style={{
                    padding: '14px 24px',
                    fontSize: '14px',
                    fontWeight: 700,
                    width: '100%',
                    justifyContent: 'center',
                    cursor: status.state === 'loading' ? 'wait' : 'pointer'
                  }}
                >
                  <Send size={16} />
                  <span>{status.state === 'loading' ? 'Sending Inquiry...' : 'Submit Inquiry & Request Consultation'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
