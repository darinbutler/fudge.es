import Link from 'next/link';
import { bestsellers, categories, products } from '@/data/products';

const categoryImages: Record<string, string> = {
  'styling': 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'shampoo-acondicionador': 'https://images.pexels.com/photos/23349900/pexels-photo-23349900.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'tratamiento': 'https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  'color': 'https://images.pexels.com/photos/3065170/pexels-photo-3065170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
};

const bestsellersCss = `
  .bs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 960px) {
    .bs-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  }
  @media (max-width: 520px) {
    .bs-grid { grid-template-columns: 1fr; gap: 16px; }
  }
`;

export default function Home() {
  return (
    <>
      {/* HERO — clean white/light theme */}
      <section style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fff8f3 100%)',
        padding: '80px 24px 72px',
        textAlign: 'center',
        borderBottom: '1px solid #f0f0f0',
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: '#fff3eb',
            border: '1px solid #ffd4b0',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: '#FF6B00',
            marginBottom: '28px',
          }}>
            Distribuidor Oficial España
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: '#111111',
            marginBottom: '24px',
          }}>
            Fudge Professional<br />
            <span style={{ color: '#FF6B00' }}>España</span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto 40px',
          }}>
            Productos de peluquería profesional de culto — utilizados por los mejores estilistas del mundo. Ahora disponibles en España a través de nuestro distribuidor oficial.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link
              href="/productos"
              style={{
                background: '#FF6B00',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Ver Todos los Productos
            </Link>
            <a
              href="https://cabellototal.es/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: '#111',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 700,
                border: '1px solid #ccc',
              }}
            >
              Comprar en cabellototal.es
            </a>
          </div>
          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap' as const }}>
            {[
              { icon: '✓', text: 'Productos 100% auténticos' },
              { icon: '✓', text: 'Envío a toda España' },
              { icon: '✓', text: 'Marca profesional desde 1991' },
            ].map((b) => (
              <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', fontSize: '0.82rem', fontWeight: 600 }}>
                <span style={{ color: '#FF6B00', fontWeight: 900 }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS — matches UK site layout */}
      <section style={{ padding: '72px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#111111',
            marginBottom: '12px',
          }}>
            Más Vendidos y Novedades
          </h2>
          <p style={{ color: '#777', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
            Los favoritos de los peluqueros profesionales y los imprescindibles de la temporada
          </p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: bestsellersCss }} />
        <div className="bs-grid">
          {bestsellers.slice(0, 6).map(product => (
            <a
              key={product.id}
              href="https://cabellototal.es/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="product-card">
                {/* Product image area — light grey bg like UK site */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#f7f7f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.nameEs}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
                  />
                  {product.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: '#FF6B00',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '3px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase' as const,
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Product info */}
                <div style={{ padding: '16px' }}>
                  <div style={{ color: '#FF6B00', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                    {product.categoryLabel}
                  </div>
                  <div style={{ color: '#111111', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px', lineHeight: 1.3 }}>
                    {product.nameEs}
                  </div>
                  {/* Star ratings */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.9rem', letterSpacing: '1px' }}>★★★★★</span>
                    <span style={{ color: '#888', fontSize: '0.72rem' }}>(4.9)</span>
                  </div>
                  <div style={{ color: '#777', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '14px' }}>
                    {product.description}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ color: '#111111', fontWeight: 800, fontSize: '1.1rem' }}>€{product.price.toFixed(2)}</span>
                      <span style={{ color: '#999', fontSize: '0.75rem', marginLeft: '6px' }}>{product.size}</span>
                    </div>
                    <span style={{
                      background: '#FF6B00',
                      color: '#fff',
                      padding: '7px 14px',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                    }}>
                      Comprar
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/productos"
            style={{
              border: '1.5px solid #111111',
              color: '#111111',
              padding: '12px 32px',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'inline-block',
            }}
          >
            Ver todos los productos →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '0 24px 72px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '72px' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#111111',
            marginBottom: '8px',
          }}>
            Explora por Categoría
          </h2>
          <p style={{ color: '#777', marginBottom: '36px', fontSize: '0.95rem' }}>
            Encuentra el producto perfecto para cada necesidad
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {categories.map(cat => {
              const count = products.filter(p => p.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <div style={{ height: '200px', overflow: 'hidden', background: '#f0f0f0' }}>
                    <img
                      src={categoryImages[cat.slug]}
                      alt={cat.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '20px 20px 22px' }}>
                    <div style={{ color: '#111111', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>{cat.label}</div>
                    <div style={{ color: '#777', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '12px' }}>{cat.description}</div>
                    <div style={{ color: '#FF6B00', fontSize: '0.8rem', fontWeight: 600 }}>{count} productos →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B00 0%, #e55a00 100%)',
        padding: '72px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Consigue tu mejor look
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Compra todos los productos Fudge Professional en nuestro distribuidor oficial en España — envío rápido a todo el país.
          </p>
          <a
            href="https://cabellototal.es/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff',
              color: '#FF6B00',
              padding: '15px 40px',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.02em',
              display: 'inline-block',
            }}
          >
            Comprar en cabellototal.es →
          </a>
        </div>
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          background: '#fff3eb',
          border: '1px solid #ffd4b0',
          borderRadius: '20px',
          padding: '5px 14px',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          color: '#FF6B00',
          marginBottom: '20px',
        }}>
          Desde 1991
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#111111',
          marginBottom: '20px',
        }}>
          La marca de culto de los<br />estilistas profesionales
        </h2>
        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
          Fudge Professional nació en el Reino Unido en 1991 con una filosofía revolucionaria: crear productos de alta performance con actitudes tanto como resultados. Durante más de tres décadas, ha sido la marca de referencia en peluquerías de vanguardia de todo el mundo.
        </p>
        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8 }}>
          Hoy, Fudge Professional llega a España con toda la potencia de su innovación, formulaciones de última generación y esa actitud inconfundible que lo distingue del resto.
        </p>
      </section>
    </>
  );
}
