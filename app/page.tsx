import Link from 'next/link';
import { bestsellers, categories, products } from '@/data/products';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,107,0,0.12)',
            border: '1px solid rgba(255,107,0,0.3)',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF6B00',
            marginBottom: '24px',
          }}>
            Productos Profesionales — España
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '24px',
          }}>
            El Cabello Que<br />
            <span style={{ color: '#FF6B00' }}>Siempre Quisiste.</span>
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#888',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}>
            Fudge Professional — productos de peluquería de culto utilizados por los mejores estilistas del mundo. Ahora disponibles en España.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              href="https://www.cabellototal.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              Comprar en cabellototal.es
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '64px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '8px', color: '#fff' }}>
          Explora por Categoría
        </h2>
        <p style={{ color: '#666', marginBottom: '36px', fontSize: '0.95rem' }}>
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
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  padding: '28px 24px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{cat.icon}</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>{cat.label}</div>
                <div style={{ color: '#666', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '12px' }}>{cat.description}</div>
                <div style={{ color: '#FF6B00', fontSize: '0.8rem', fontWeight: 600 }}>{count} productos →</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section style={{ padding: '0 24px 64px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>
            Más Vendidos
          </h2>
          <Link href="/productos" style={{ color: '#FF6B00', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
            Ver todos →
          </Link>
        </div>
        <p style={{ color: '#666', marginBottom: '36px', fontSize: '0.95rem' }}>Los favoritos de los peluqueros profesionales</p>

        <div className="bestsellers-grid">
          {bestsellers.map(product => (
            <a
              key={product.id}
              href="https://www.cabellototal.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                {/* Product image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#1a1a1a' }}>
                  <img
                    src={product.image}
                    alt={product.nameEs}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
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
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Product info */}
                <div style={{ padding: '16px' }}>
                  <div style={{ color: '#FF6B00', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {product.categoryLabel}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px', lineHeight: 1.3 }}>
                    {product.nameEs}
                  </div>
                  <div style={{ color: '#888', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '12px' }}>
                    {product.description}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>€{product.price.toFixed(2)}</span>
                      <span style={{ color: '#555', fontSize: '0.75rem', marginLeft: '6px' }}>{product.size}</span>
                    </div>
                    <span style={{
                      background: '#FF6B00',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}>
                      Comprar
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B00 0%, #cc4400 100%)',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Listo para conseguir tu mejor look
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Compra todos los productos Fudge Professional en nuestro distribuidor oficial en España.
        </p>
        <a
          href="https://www.cabellototal.es"
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
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,107,0,0.1)',
          border: '1px solid rgba(255,107,0,0.25)',
          borderRadius: '20px',
          padding: '5px 14px',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#FF6B00',
          marginBottom: '20px',
        }}>
          Desde 1991
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: '20px' }}>
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
