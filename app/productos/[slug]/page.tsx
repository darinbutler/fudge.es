import { products, getProductBySlug } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.nameEs} | Fudge Professional España`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div style={{ background: '#ffffff', minHeight: '60vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px', fontSize: '0.82rem', color: '#888' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <Link href="/productos" style={{ color: '#888', textDecoration: 'none' }}>Productos</Link>
          <span>›</span>
          <Link href={`/categoria/${product.category}`} style={{ color: '#888', textDecoration: 'none' }}>{product.categoryLabel}</Link>
          <span>›</span>
          <span style={{ color: '#333' }}>{product.nameEs}</span>
        </div>

        {/* Main product section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          marginBottom: '80px',
          alignItems: 'start',
        }}>
          {/* Image */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', background: '#f7f7f7' }}>
            <img
              src={product.image}
              alt={product.nameEs}
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
            />
            {product.badge && (
              <div style={{
                position: 'absolute', top: '16px', left: '16px',
                background: '#FF6B00', color: '#fff',
                padding: '6px 14px', borderRadius: '3px',
                fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                {product.badge}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ color: '#FF6B00', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {product.categoryLabel} · {product.size}
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#111111', marginBottom: '12px', lineHeight: 1.1 }}>
              {product.nameEs}
            </h1>
            {/* Star ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ color: '#f59e0b', fontSize: '1.1rem', letterSpacing: '2px' }}>★★★★★</span>
              <span style={{ color: '#888', fontSize: '0.82rem' }}>4.9 / 5 · Valoraciones verificadas</span>
            </div>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
              {product.longDescription}
            </p>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#111111' }}>€{product.price.toFixed(2)}</span>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>IVA incluido · {product.size}</span>
            </div>

            {/* CTA */}
            <a
              href="https://cabellototal.es/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#FF6B00',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.02em',
                textAlign: 'center',
                marginBottom: '12px',
              }}
            >
              Comprar Ahora en cabellototal.es
            </a>
            <p style={{ color: '#888', fontSize: '0.8rem', textAlign: 'center', marginBottom: '36px' }}>
              Disponible en nuestro distribuidor oficial en España
            </p>

            {/* Benefits */}
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '28px' }}>
              <div style={{ color: '#111', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Beneficios
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF6B00', fontWeight: 900, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How to use */}
        <div style={{
          background: '#f8f8f8',
          border: '1px solid #e5e5e5',
          borderRadius: '8px',
          padding: '36px',
          marginBottom: '60px',
        }}>
          <h2 style={{ color: '#111', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Cómo Usar
          </h2>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>{product.howToUse}</p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#111111', marginBottom: '24px' }}>
              También te puede gustar
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '16px',
            }}>
              {related.map(p => (
                <Link key={p.id} href={`/productos/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.2s',
                  }}>
                    <img src={p.image} alt={p.nameEs} style={{ width: '100%', height: '180px', objectFit: 'cover', background: '#f7f7f7' }} />
                    <div style={{ padding: '14px' }}>
                      <div style={{ color: '#111', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{p.nameEs}</div>
                      <div style={{ color: '#f59e0b', fontSize: '0.78rem', marginBottom: '8px' }}>★★★★★</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#111', fontWeight: 800 }}>€{p.price.toFixed(2)}</span>
                        <span style={{ color: '#FF6B00', fontSize: '0.8rem', fontWeight: 600 }}>Ver más →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
