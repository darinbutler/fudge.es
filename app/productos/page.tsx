import Link from 'next/link';
import { products, categories } from '@/data/products';

export const metadata = {
  title: 'Todos los Productos | Fudge Professional España',
  description: 'Descubre toda la gama de productos Fudge Professional: styling, champú, acondicionador y tratamientos.',
};

const gridCss = `
  .pg-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (max-width: 1100px) {
    .pg-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 720px) {
    .pg-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 460px) {
    .pg-grid { grid-template-columns: 1fr; }
  }
  .pg-card {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .pg-card:hover {
    border-color: #FF6B00;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
`;

export default function ProductsPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '60vh' }}>
      <style dangerouslySetInnerHTML={{ __html: gridCss }} />
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ color: '#FF6B00', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Catálogo Completo
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#111111', marginBottom: '12px' }}>
            Todos los Productos
          </h1>
          <p style={{ color: '#777', fontSize: '1rem' }}>{products.length} productos disponibles</p>
        </div>

        {/* Category filter pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link href="/productos" style={{
            background: '#FF6B00', color: '#fff',
            padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
            fontSize: '0.82rem', fontWeight: 700,
          }}>
            Todos
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/categoria/${cat.slug}`} style={{
              background: '#f5f5f5', color: '#444',
              border: '1px solid #e5e5e5',
              padding: '8px 18px', borderRadius: '3px', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 600,
            }}>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products grid — 4 columns desktop, responsive */}
        <div className="pg-grid">
          {products.map(product => (
            <a
              key={product.id}
              href="https://www.cabellototal.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', height: '100%' }}
            >
              <div className="pg-card">
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#f7f7f7', flexShrink: 0 }}>
                  <img
                    src={product.image}
                    alt={product.nameEs}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
