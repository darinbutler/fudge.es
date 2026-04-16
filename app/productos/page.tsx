import Link from 'next/link';
import { products, categories } from '@/data/products';

export const metadata = {
  title: 'Todos los Productos | Fudge Professional España',
  description: 'Descubre toda la gama de productos Fudge Professional: styling, champú, acondicionador y tratamientos.',
};

const gridCss = `
  .pg-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 900px) {
    .pg-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  }
  @media (max-width: 520px) {
    .pg-grid { grid-template-columns: 1fr; gap: 16px; }
  }
  .pg-card {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .pg-card:hover {
    border-color: #FF6B00;
    box-shadow: 0 6px 28px rgba(0,0,0,0.09);
    transform: translateY(-3px);
  }
  .pg-img {
    position: relative;
    height: 280px;
    overflow: hidden;
    background: #f7f7f7;
    flex-shrink: 0;
  }
  .pg-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  .pg-card:hover .pg-img img {
    transform: scale(1.03);
  }
`;

export default function ProductsPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '60vh' }}>
      <style dangerouslySetInnerHTML={{ __html: gridCss }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '52px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ color: '#FF6B00', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Catálogo Completo
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#111111', marginBottom: '10px' }}>
            Todos los Productos
          </h1>
          <p style={{ color: '#888', fontSize: '1rem' }}>{products.length} productos disponibles</p>
        </div>

        {/* Category filter pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '44px' }}>
          <Link href="/productos" style={{
            background: '#111111', color: '#fff',
            padding: '9px 20px', borderRadius: '3px', textDecoration: 'none',
            fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.02em',
          }}>
            Todos
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/categoria/${cat.slug}`} style={{
              background: '#fff', color: '#555',
              border: '1px solid #ddd',
              padding: '9px 20px', borderRadius: '3px', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 600,
            }}>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products grid — 3 columns */}
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
                <div className="pg-img">
                  <img src={product.image} alt={product.nameEs} />
                  {product.badge && (
                    <div style={{
                      position: 'absolute', top: '14px', left: '14px',
                      background: '#FF6B00', color: '#fff',
                      padding: '5px 11px', borderRadius: '3px',
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Info */}
                <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#FF6B00', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {product.categoryLabel}
                  </div>
                  <div style={{ color: '#111111', fontWeight: 700, fontSize: '1rem', marginBottom: '6px', lineHeight: 1.3, flex: 1 }}>
                    {product.nameEs}
                  </div>
                  {/* Stars */}
                  <div style={{ color: '#f59e0b', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '8px' }}>★★★★★</div>
                  <div style={{ color: '#777', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {product.description}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                    <div>
                      <span style={{ color: '#111111', fontWeight: 800, fontSize: '1.15rem' }}>€{product.price.toFixed(2)}</span>
                      <span style={{ color: '#aaa', fontSize: '0.78rem', marginLeft: '6px' }}>{product.size}</span>
                    </div>
                    <span style={{
                      background: '#FF6B00', color: '#fff',
                      padding: '9px 18px', borderRadius: '3px',
                      fontSize: '0.82rem', fontWeight: 700,
                      whiteSpace: 'nowrap', flexShrink: 0,
                      letterSpacing: '0.02em',
                    }}>
                      Comprar →
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
