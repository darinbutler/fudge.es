import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fudge Professional España | Productos Profesionales de Peluquería",
  description: "Descubre la gama completa de productos profesionales Fudge para estilismo, cuidado y color del cabello. Compra en cabellototal.es.",
  keywords: "fudge professional, productos peluquería, styling cabello, champú profesional, España",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', margin: 0 }}>
        {/* NAV */}
        <nav style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>
                fudge<span style={{ color: '#FF6B00' }}>.</span>
              </span>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginTop: '2px' }}>PROFESSIONAL</span>
            </Link>
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              <Link href="/productos" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Todos</Link>
              <Link href="/categoria/styling" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Styling</Link>
              <Link href="/categoria/shampoo-acondicionador" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Champú</Link>
              <Link href="/categoria/tratamiento" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Tratamientos</Link>
              <a
                href="https://www.cabellototal.es"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#FF6B00', color: '#fff', padding: '8px 18px', borderRadius: '3px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.02em' }}
              >
                Comprar Ahora
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '80px', padding: '48px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '12px' }}>
                  fudge<span style={{ color: '#FF6B00' }}>.</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B00', marginLeft: '6px' }}>PROFESSIONAL</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  Productos profesionales de peluquería de máxima calidad para profesionales y entusiastas del cabello.
                </p>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Categorías</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Styling', href: '/categoria/styling' },
                    { label: 'Champú & Acondicionador', href: '/categoria/shampoo-acondicionador' },
                    { label: 'Tratamientos', href: '/categoria/tratamiento' },
                    { label: 'Todos los productos', href: '/productos' },
                  ].map(item => (
                    <Link key={item.href} href={item.href} style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>{item.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Dónde Comprar</div>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '12px' }}>
                  Todos los productos Fudge Professional disponibles en:
                </p>
                <a
                  href="https://www.cabellototal.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FF6B00', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}
                >
                  cabellototal.es →
                </a>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2025 Fudge Professional. Todos los derechos reservados.</p>
              <p style={{ color: '#444', fontSize: '0.8rem' }}>Distribuidor oficial España: <a href="https://www.cabellototal.es" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B00', textDecoration: 'none' }}>cabellototal.es</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
