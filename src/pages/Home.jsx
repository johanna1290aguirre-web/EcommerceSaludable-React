import React from 'react';
import { Container } from 'react-bootstrap';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import { useCart } from '../context/CartContext';  // ← IMPORTAR

const Home = () => {
  const { addToCart } = useCart();  // ← USAR EL HOOK

  const productosDestacados = [
    { id: 1, nombre: 'Pack Superfoods Orgánicos', descripcion: 'Quinua, chía, maca y espirulina', precio: 89900 },
    { id: 2, nombre: 'Vitaminas Esenciales', descripcion: 'Complejo vitamínico natural', precio: 65900 },
    { id: 3, nombre: 'Té Antioxidante Premium', descripcion: 'Mezcla de hierbas orgánicas', precio: 45900 },
  ];

  const verProducto = (id) => {
    window.location.href = `/producto/${id}`;
  };

  return (
    <Container className="main-container">
      <h1>Bienvenido a Ecommerce Saludable</h1>
      
      <div className="products-grid">
        {productosDestacados.map(producto => (
          <div key={producto.id} className="producto-card">
            <div className="card-title">{producto.nombre}</div>
            <div className="card-text">{producto.descripcion}</div>
            <div className="precio">
              ${producto.precio.toLocaleString('es-CO')} COP
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => verProducto(producto.id)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: '1px solid #FFD700',
                  color: '#FFD700',
                  padding: '0.8rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaEye /> Ver
              </button>
              
              <button
                onClick={() => addToCart(producto)}  // ← AHORA SÍ FUNCIONA
                style={{
                  flex: 1,
                  background: '#E02B59',
                  border: 'none',
                  color: 'white',
                  padding: '0.8rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaShoppingCart /> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;