'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Productos', href: '/productos' },
    { label: 'Styling', href: '/categoria/styling' },
    { label: 'Champú', href: '/categoria/shampoo-acondicionador' },
    { label: 'Tratamientos', href: '/categoria/tratamiento' },
  ];

  return (
    <>
      <style>{`
        .nav-links { display: flex; gap: 28px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; }
        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid #e5e5e5;
          padding: 16px 24px 24px;
          gap: 0;
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-mobile-link {
          color: #333;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
          display: block;
        }
        .nav-mobile-cta {
          margin-top: 18px;
          background: #FF6B00;
          color: #fff;
          padding: 13px 24px;
          border-radius: 3px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          text-align: center;
          display: block;
        }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; align-items: center; justify-content: center; }
        }
      `}</style>

      <nav style={{
        background: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setOpen(false)}>
            <img
              src="/fudge-logo.svg"
              alt="Fudge Professional"
              width="180"
              height="40"
              style={{ display: 'block', height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ color: '#333', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.01em' }}>
                {l.label}
              </Link>
            ))}
            <a
              href="https://cabellototal.es/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FF6B00',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
              }}
            >
              Comprar
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://cabellototal.es/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Comprar en cabellototal.es →
          </a>
        </div>
      </nav>
    </>
  );
}
