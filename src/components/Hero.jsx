import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Shield, Activity, Cpu, Sparkles, Database, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, COMMAND_CENTER_STATS } from '../data/mockData';

export default function Hero({ onOpenDemo }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Dynamic infrastructure nodes & data streams
    const nodes = [];
    const numNodes = Math.min(36, Math.floor(canvas.width / 35));

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        type: i % 4 === 0 ? 'bridge' : i % 4 === 1 ? 'tunnel' : i % 4 === 2 ? 'road' : 'sensor',
        pulse: Math.random() * Math.PI
      });
    }

    // Moving data packets
    const packets = [];
    for (let p = 0; p < 16; p++) {
      packets.push({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.006
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw highway curves / arterial grid lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.03;

        if (n1.x < 0 || n1.x > canvas.width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > canvas.height) n1.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw moving data packets
      for (let p = 0; p < packets.length; p++) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.from = Math.floor(Math.random() * nodes.length);
          pkt.to = Math.floor(Math.random() * nodes.length);
        }

        const startNode = nodes[pkt.from];
        const endNode = nodes[pkt.to];
        if (startNode && endNode) {
          const px = startNode.x + (endNode.x - startNode.x) * pkt.progress;
          const py = startNode.y + (endNode.y - startNode.y) * pkt.progress;

          ctx.fillStyle = '#00F0FF';
          ctx.shadowColor = '#00F0FF';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw infrastructure nodes
      nodes.forEach((node) => {
        const pulseSize = Math.sin(node.pulse) * 1.5;
        let color = '#00F0FF';
        if (node.type === 'bridge') color = '#00E5A3';
        if (node.type === 'tunnel') color = '#8B5CF6';
        if (node.type === 'sensor') color = '#FFB020';

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, node.radius + pulseSize), 0, Math.PI * 2);
        ctx.fill();

        // Pulsing ring
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.3 + Math.sin(node.pulse) * 0.2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, (node.radius + 6) + pulseSize * 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: 'calc(var(--nav-height) + 40px)',
      paddingBottom: '80px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Interactive Infrastructure Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.75,
          zIndex: 0
        }}
      />

      {/* Cybernetic Radial Highlight */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.12), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Top Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '28px'
        }}>
          <div className="section-pill" style={{ marginBottom: 0 }}>
            <span className="status-dot"></span>
            <span>AI Infrastructure Intelligence Platform</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(0, 229, 163, 0.08)',
            border: '1px solid rgba(0, 229, 163, 0.25)',
            color: '#00E5A3',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            <Shield size={13} />
            <span>DPIIT-Recognised Startup (IGT)</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            color: '#C084FC',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 600
          }}>
            <Cpu size={13} />
            <span>AI for Roads, Bridges & Tunnels</span>
          </div>
        </div>

        {/* Main Hero Typography */}
        <div style={{ maxWidth: '980px' }}>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 5.8vw, 4.6rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            From Infrastructure Data <br />
            <span style={{
              background: 'linear-gradient(135deg, #00F0FF 0%, #38BDF8 50%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(0, 240, 255, 0.4)'
            }}>
              to Infrastructure Intelligence.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: '#94A3B8',
            maxWidth: '820px',
            lineHeight: 1.6,
            marginBottom: '40px',
            fontWeight: 400
          }}>
            {COMPANY_INFO.heroSub}
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '64px'
          }}>
            <a
              href="#command-center"
              className="btn-primary"
              style={{ fontSize: '15px', padding: '14px 28px' }}
              id="hero-explore-btn"
            >
              <span>Explore AI Command Centre</span>
              <ArrowRight size={18} />
            </a>

            <button
              onClick={onOpenDemo}
              className="btn-secondary"
              style={{ fontSize: '15px', padding: '14px 26px' }}
              id="hero-demo-btn"
            >
              <Play size={16} fill="#00F0FF" color="#00F0FF" />
              <span>Launch Live Interactive Demo</span>
            </button>

            <a
              href="#solution-pdf"
              style={{
                fontSize: '14px',
                color: '#94A3B8',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 18px',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>View 14-Page Pitch & Architecture</span>
              <span style={{ color: '#00F0FF' }}>→</span>
            </a>
          </div>
        </div>

        {/* Live Status Indicators HUD (Palantir Command Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          borderTop: '1px solid rgba(0, 240, 255, 0.15)',
          paddingTop: '28px'
        }}>
          <div className="metric-hud bracket-corner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="metric-hud-label">ASSETS MONITORED</span>
              <span className="status-dot"></span>
            </div>
            <div className="metric-hud-value" style={{ color: '#FFFFFF' }}>18,420+</div>
            <div className="metric-hud-sub">Roads • Bridges • Tunnels</div>
          </div>

          <div className="metric-hud bracket-corner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="metric-hud-label">AI RISK ENGINE</span>
              <span className="status-dot cyan"></span>
            </div>
            <div className="metric-hud-value" style={{ color: '#00F0FF' }}>&gt; 85%</div>
            <div className="metric-hud-sub">Defect & Failure Accuracy</div>
          </div>

          <div className="metric-hud bracket-corner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="metric-hud-label">PREDICTIVE MAINTENANCE</span>
              <span className="status-dot"></span>
            </div>
            <div className="metric-hud-value" style={{ color: '#00E5A3' }}>REAL-TIME</div>
            <div className="metric-hud-sub">&lt;24h Auto Work Order Dispatch</div>
          </div>

          <div className="metric-hud bracket-corner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="metric-hud-label">INTELLIGENCE LAYER</span>
              <span className="status-dot"></span>
            </div>
            <div className="metric-hud-value" style={{ color: '#E2E8F0' }}>ONLINE</div>
            <div className="metric-hud-sub">GenAI Copilot + Edge Ingest</div>
          </div>
        </div>
      </div>
    </section>
  );
}
