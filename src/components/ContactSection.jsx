import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    solution: 'Roads & Pothole Spotting',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const solutionOptions = [
    'Roads & Pothole Spotting',
    'Bridge Safety & Pillar Health',
    'Tunnel Safety & Ventilation',
    'Priority Repair List',
    '14-Day Pilot Demonstration',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please enter your name, email, and a short message.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending your message...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! We have received your inquiry regarding ${formData.solution}. Our team will contact you within 24 hours.`
      });
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      solution: 'Roads & Pothole Spotting',
      message: ''
    });
    setStatus({ state: 'idle', message: '' });
  };

  return (
    <section id="contact" className="section-wrapper" style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      paddingTop: '64px',
      paddingBottom: '80px'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-pill" style={{ background: '#DBEAFE', color: '#2563EB', borderColor: '#BFDBFE' }}>
            <Mail size={15} />
            <span>Contact Us</span>
          </div>
          <h2 className="section-title">
            Let's Talk About Your Roads & Bridges
          </h2>
          <p className="section-subtitle">
            Want to see how it works on your highways or schedule a 14-day test? Send a message below or call us directly.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          {/* Left Column: Direct Contact & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '32px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#0F172A',
                fontWeight: 800,
                marginBottom: '10px'
              }}>
                Contact Information
              </h3>
              <p style={{
                fontSize: '14.5px',
                color: '#64748B',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}>
                Speak directly with Infranite Globaltech's engineering team and project coordinators.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                      EMAIL INQUIRIES
                    </div>
                    <a href="mailto:contact@infraniteglobal.com" style={{ fontSize: '15px', color: '#0F172A', fontWeight: 700, textDecoration: 'none' }}>
                      contact@infraniteglobal.com
                    </a>
                    <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                      partnerships@infranite.com
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                      PHONE NUMBER
                    </div>
                    <div style={{ fontSize: '15px', color: '#0F172A', fontWeight: 700 }}>
                      +91 (080) 4123 8890 / +91 94480 55120
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                      Monday - Saturday, 9:00 AM - 7:00 PM
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FAF5FF',
                    border: '1px solid #DDD6FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} color="#7C3AED" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                      HEAD OFFICE
                    </div>
                    <div style={{ fontSize: '15px', color: '#0F172A', fontWeight: 700 }}>
                      Infranite Globaltech Pvt Ltd (IGT)
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>
                      Bengaluru & New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Badge Box */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '20px',
              border: '1.5px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} color="#16A34A" />
                <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A' }}>
                  24-Hour Response Guarantee
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span className="badge-green">DPIIT Recognised</span>
                <span className="badge-blue">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '32px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}>
            {status.state === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '32px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: '#DCFCE7',
                  border: '2px solid #16A34A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={32} color="#16A34A" />
                </div>
                <h3 style={{ fontSize: '22px', color: '#0F172A', fontWeight: 800 }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, maxWidth: '420px' }}>
                  {status.message}
                </p>
                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ marginTop: '10px', padding: '10px 24px', fontSize: '14px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0F172A', fontWeight: 800, marginBottom: '4px' }}>
                    Send Us a Message
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0 }}>
                    Fill out the short form below and we will get back to you promptly.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@agency.gov.in"
                    required
                  />
                </div>

                {/* Phone & Org */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Organization / City
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Highway Authority"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Topic of Interest
                  </label>
                  <select
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                  >
                    {solutionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your road stretch, questions, or goals..."
                    required
                  />
                </div>

                {/* Error Banner */}
                {status.state === 'error' && (
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: '#FFE4E6',
                    border: '1px solid #FECDD3',
                    color: '#BE123C',
                    fontSize: '13px',
                    fontWeight: 600
                  }}>
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                >
                  <Send size={16} />
                  <span>{status.state === 'loading' ? 'Sending Message...' : 'Send Message Now'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
