import { categories, getProductsByCategory, products } from '@/data/products';
import type { Category } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} | Fudge Professional España`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(slug as Category);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '36px', fontSize: '0.82rem', color: '#555' }}>
        <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>Inicio</Link>
        <span>›</span>
        <Link href="/productos" style={{ color: '#555', textDecoration: 'none' }}>Productos</Link>
        <span>›</span>
        <span style={{ color: '#aaa' }}>{cat.label}</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{cat.icon}</div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', marginBottom: '12px' }}>
          {cat.label}
        </h1>
        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '6px' }}>{cat.description}</p>
        <p style={{ color: '#555', fontSize: '0.85rem' }}>{catProducts.length} productos</p>
      </div>

      {/* Category filter pills */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <Link href="/productos" style={{
          background: '#1a1a1a', color: '#aaa',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
          fontSize: '0.82rem', fontWeight: 600,
        }}>
          Todos
        </Link>
        {categories.map(c => (
          <Link key={c.slug} href={`/categoria/${c.slug}`} style={{
            background: c.slug === slug ? '#FF6B00' : '#1a1a1a',
            color: c.slug === slug ? '#fff' : '#aaa',
            border: c.slug === slug ? 'none' : '1px solid rgba(255,255,255,0.1)',
            padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
            fontSize: '0.82rem', fontWeight: 600,
          }}>
            {c.label}
          </Link>
        ))}
      </div>

      {/* Products grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '20px',
      }}>
        {catProducts.map(product => (
          <Link
            key={product.id}
            href={`/productos/${product.slug}`}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div style={{
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#1a1a1a', flexShrink: 0 }}>
                <img
                  src={product.image}
                  alt={product.nameEs}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)',
                }} />
                {product.badge && (
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: '#FF6B00', color: '#fff',
                    padding: '4px 10px', borderRadius: '3px',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>
                    {product.badge}
                  </div>
                )}
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px', lineHeight: 1.3, flex: 1 }}>
                  {product.nameEs}
                </div>
                <div style={{ color: '#777', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '14px' }}>
                  {product.description}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem' }}>€{product.price.toFixed(2)}</span>
                    <span style={{ color: '#555', fontSize: '0.75rem', marginLeft: '6px' }}>{product.size}</span>
                  </div>
                  <a
                    href="https://www.cabellototal.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#FF6B00', color: '#fff',
                      padding: '7px 14px', borderRadius: '3px',
                      fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none',
                    }}
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
