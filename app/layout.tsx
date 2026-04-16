import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fudge Professional España | Productos Profesionales de Peluquería",
  description: "Descubre la gama completa de productos profesionales Fudge para estilismo, cuidado y color del cabello. Compra en cabellototal.es.",
  keywords: "fudge professional, productos peluquería, styling cabello, champú profesional, España",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ background: '#ffffff', color: '#111111', minHeight: '100vh', margin: 0 }}>

        {/* ANNOUNCEMENT BAR */}
        <div style={{
          background: '#111111',
          color: '#fff',
          textAlign: 'center',
          padding: '10px 24px',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.04em',
        }}>
          Distribuidor oficial España: <a href="https://www.cabellototal.es" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B00', textDecoration: 'none', fontWeight: 700 }}>cabellototal.es</a> &nbsp;·&nbsp; Envío gratis +€50
        </div>

        {/* NAV */}
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
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}>
            {/* Logo — SVG wordmark matching UK site */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src="/fudge-logo.svg"
                alt="Fudge Professional"
                width="200"
                height="45"
                style={{ display: 'block', height: '45px', width: 'auto' }}
              />
            </Link>

            {/* Nav links */}
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              <Link href="/productos" style={{ color: '#333', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.01em' }}>
                Productos
              </Link>
              <Link href="/categoria/styling" style={{ color: '#333', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                Styling
              </Link>
              <Link href="/categoria/shampoo-acondicionador" style={{ color: '#333', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                Champú
              </Link>
              <Link href="/categoria/tratamiento" style={{ color: '#333', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                Tratamientos
              </Link>
              <a
                href="https://www.cabellototal.es"
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
          </div>
        </nav>

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{
          background: '#111111',
          marginTop: '80px',
          padding: '60px 24px 40px',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Footer logo */}
            <div style={{ marginBottom: '40px', paddingBottom: '36px', borderBottom: '1px solid #222' }}>
              <img
                src="/fudge-logo.svg"
                alt="Fudge Professional"
                width="180"
                height="40"
                style={{ height: '40px', width: 'auto', filter: 'invert(1)', opacity: 0.9 }}
              />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '48px',
            }}>
              <div>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  Productos profesionales de peluquería de máxima calidad. Desde 1991, la marca de referencia de los mejores estilistas.
                </p>
                <div style={{ color: '#555', fontSize: '0.75rem', marginBottom: '4px' }}>Distribuidor oficial España</div>
                <a href="https://www.cabellototal.es" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B00', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>
                  cabellototal.es →
                </a>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Categorías</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                  {[
                    { label: 'Styling', href: '/categoria/styling' },
                    { label: 'Champú & Acondicionador', href: '/categoria/shampoo-acondicionador' },
                    { label: 'Tratamientos', href: '/categoria/tratamiento' },
                    { label: 'Color', href: '/categoria/color' },
                    { label: 'Todos los productos', href: '/productos' },
                  ].map(item => (
                    <Link key={item.href} href={item.href} style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Sobre Fudge</div>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  Fundada en el Reino Unido en 1991, Fudge Professional es la marca de peluquería de culto presente en salones de vanguardia de todo el mundo.
                </p>
                <a href="https://uk.fudgeprofessional.com" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'none', fontSize: '0.82rem' }}>
                  uk.fudgeprofessional.com ↗
                </a>
              </div>
            </div>
            <div style={{
              borderTop: '1px solid #222',
              paddingTop: '28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap' as const,
              gap: '12px',
            }}>
              <p style={{ color: '#555', fontSize: '0.8rem' }}>© 2025 Fudge Professional. Todos los derechos reservados.</p>
              <p style={{ color: '#555', fontSize: '0.8rem' }}>Distribuidor oficial España: <a href="https://www.cabellototal.es" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B00', textDecoration: 'none' }}>cabellototal.es</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
