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

const gridCss = `
  .cat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (max-width: 1100px) {
    .cat-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 720px) {
    .cat-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 460px) {
    .cat-grid { grid-template-columns: 1fr; }
  }
  .cat-card {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .cat-card:hover {
    border-color: #FF6B00;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
`;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(slug as Category);

  return (
    <div style={{ background: '#ffffff', minHeight: '60vh' }}>
      <style dangerouslySetInnerHTML={{ __html: gridCss }} />
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '36px', fontSize: '0.82rem', color: '#888' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <Link href="/productos" style={{ color: '#888', textDecoration: 'none' }}>Productos</Link>
          <span>›</span>
          <span style={{ color: '#333' }}>{cat.label}</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{cat.icon}</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#111111', marginBottom: '12px' }}>
            {cat.label}
          </h1>
          <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '6px' }}>{cat.description}</p>
          <p style={{ color: '#999', fontSize: '0.85rem' }}>{catProducts.length} productos</p>
        </div>

        {/* Category filter pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/productos" style={{
            background: '#f5f5f5', color: '#444',
            border: '1px solid #e5e5e5',
            padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
            fontSize: '0.82rem', fontWeight: 600,
          }}>
            Todos
          </Link>
          {categories.map(c => (
            <Link key={c.slug} href={`/categoria/${c.slug}`} style={{
              background: c.slug === slug ? '#FF6B00' : '#f5f5f5',
              color: c.slug === slug ? '#fff' : '#444',
              border: c.slug === slug ? 'none' : '1px solid #e5e5e5',
              padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 600,
            }}>
              {c.label}
            </Link>
          ))}
        </div>

        {/* Products grid — 4 columns desktop, responsive */}
        <div className="cat-grid">
          {catProducts.map(product => (
            <a
              key={product.id}
              href="https://cabellototal.es/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', height: '100%' }}
            >
              <div className="cat-card">
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#f7f7f7', flexShrink: 0 }}>
                  <img
                    src={product.image}
                    alt={product.nameEs}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
                  />
                  {product.badge && (
                    <div style={{
                      position: 'absolute', top: '10px', left: '10px',
                      background: '#FF6B00', color: '#fff',
                      padding: '3px 9px', borderRadius: '3px',
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Info */}
                <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#FF6B00', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '5px' }}>
                    {product.categoryLabel}
                  </div>
                  <div style={{ color: '#111111', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px', lineHeight: 1.3, flex: 1 }}>
                    {product.nameEs}
                  </div>
                  {/* Stars */}
                  <div style={{ color: '#f59e0b', fontSize: '0.78rem', letterSpacing: '1px', marginBottom: '6px' }}>★★★★★</div>
                  <div style={{ color: '#777', fontSize: '0.78rem', lineHeight: 1.5, marginBottom: '12px' }}>
                    {product.description}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <div>
                      <span style={{ color: '#111111', fontWeight: 800, fontSize: '1rem' }}>€{product.price.toFixed(2)}</span>
                      <span style={{ color: '#999', fontSize: '0.72rem', marginLeft: '5px' }}>{product.size}</span>
                    </div>
                    <span style={{
                      background: '#FF6B00', color: '#fff',
                      padding: '6px 12px', borderRadius: '3px',
                      fontSize: '0.72rem', fontWeight: 700,
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      Comprar
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
