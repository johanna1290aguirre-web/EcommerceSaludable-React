import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Simular obtención de producto por ID
  const productos = {
    1: { nombre: 'Pack Superfoods Orgánicos', descripcion: 'Quinua, chía, maca y espirulina', precio: 89900, detalle: 'Mezcla equilibrada de los superalimentos más nutritivos. Ideal para batidos, desayunos y snacks.' },
    2: { nombre: 'Vitaminas Esenciales', descripcion: 'Complejo vitamínico natural', precio: 65900, detalle: 'Fórmula completa con vitaminas A, C, D, E y complejo B. Sin aditivos artificiales.' },
    3: { nombre: 'Té Antioxidante Premium', descripcion: 'Mezcla de hierbas orgánicas', precio: 45900, detalle: 'Combinación de té verde, jengibre y cúrcuma. Alto poder antioxidante.' },
  };

  const producto = productos[id] || { nombre: 'Producto no encontrado', precio: 0 };

  const agregarAlCarrito = () => {
    alert(`${producto.nombre} agregado al carrito`);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={6}>
          <div style={{
            background: 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            border: '1px solid rgba(224, 43, 89, 0.2)'
          }}>
            <span style={{ fontSize: '8rem' }}>🥗</span>
          </div>
        </Col>
        <Col md={6}>
          <div style={{
            background: 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(224, 43, 89, 0.2)'
          }}>
            <h1 style={{ color: '#fff', marginBottom: '1rem' }}>{producto.nombre}</h1>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {producto.detalle || producto.descripcion}
            </p>
            <div style={{
              color: '#FFD700',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: '2rem 0'
            }}>
              ${producto.precio.toLocaleString('es-CO')} COP
            </div>
            <button
              onClick={agregarAlCarrito}
              style={{
                background: 'linear-gradient(135deg, #E02B59 0%, #C01A4A 100%)',
                color: 'white',
                border: 'none',
                padding: '1rem 3rem',
                borderRadius: '50px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <FaShoppingCart /> Agregar al carrito
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;