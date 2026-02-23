import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const [cupon, setCupon] = useState('');
  const [descuento, setDescuento] = useState(0);
  const [mensajeCupon, setMensajeCupon] = useState('');

  const subtotal = getTotal();
  const envio = subtotal > 100000 ? 0 : 12000;
  const total = subtotal + envio - descuento;

  const aplicarCupon = () => {
    if (cupon.toUpperCase() === 'SALUDABLE20') {
      setDescuento(subtotal * 0.2);
      setMensajeCupon('✅ Cupón aplicado: 20% de descuento');
    } else if (cupon.toUpperCase() === 'BIENVENIDO10') {
      setDescuento(subtotal * 0.1);
      setMensajeCupon('✅ Cupón aplicado: 10% de descuento');
    } else {
      setDescuento(0);
      setMensajeCupon('❌ Cupón inválido');
    }
  };

  const procederPago = () => {
    alert('Redirigiendo a la pasarela de pago...');
  };

  return (
    <Container className="main-container">
      <h1 style={{ 
        color: '#fff', 
        textAlign: 'center', 
        margin: '2rem 0',
        fontSize: '2.5rem'
      }}>
        🛒 Carrito de Compras
      </h1>
      
      {cart.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          background: 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(224, 43, 89, 0.2)'
        }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Tu carrito está vacío</h3>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>Explora nuestro catálogo y encuentra productos saludables</p>
          <button
            onClick={() => window.location.href = '/catalog'}
            style={{
              background: '#E02B59',
              color: 'white',
              border: 'none',
              padding: '1rem 3rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Ir al Catálogo
          </button>
        </div>
      ) : (
        <Row>
          <Col lg={8}>
            {cart.map(item => (
              <div key={item.id} style={{
                background: 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: '1px solid rgba(224, 43, 89, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{item.nombre}</h4>
                  <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    ${item.precio.toLocaleString('es-CO')} COP
                  </p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: '#333',
                    padding: '0.3rem',
                    borderRadius: '50px'
                  }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                      style={{
                        background: '#444',
                        border: 'none',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FaMinus size={12} />
                    </button>
                    
                    <span style={{ color: '#fff', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                      {item.cantidad}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                      style={{
                        background: '#444',
                        border: 'none',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #E02B59',
                      color: '#E02B59',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaTrash /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </Col>

          <Col lg={4}>
            <div style={{
              background: 'linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(224, 43, 89, 0.2)',
              position: 'sticky',
              top: '2rem'
            }}>
              <h3 style={{ 
                color: '#fff', 
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}>
                Resumen de compra
              </h3>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#ccc' }}>Subtotal</span>
                <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
                  ${subtotal.toLocaleString('es-CO')}
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '1rem' 
              }}>
                <span style={{ color: '#ccc' }}>Envío</span>
                <span style={{ color: envio === 0 ? '#27ae60' : '#ccc' }}>
                  {envio === 0 ? 'GRATIS' : `$${envio.toLocaleString('es-CO')}`}
                </span>
              </div>

              {descuento > 0 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '1rem',
                  color: '#27ae60'
                }}>
                  <span>Descuento</span>
                  <span>-${descuento.toLocaleString('es-CO')}</span>
                </div>
              )}
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #333'
              }}>
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>Total</span>
                <span style={{ color: '#FFD700', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  ${total.toLocaleString('es-CO')}
                </span>
              </div>

              {/* SECCIÓN CUPÓN */}
              <div style={{
                background: '#333',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="¿Tienes un cupón?"
                    value={cupon}
                    onChange={(e) => setCupon(e.target.value)}
                    style={{
                      flex: 1,
                      background: '#444',
                      border: '1px solid #555',
                      borderRadius: '5px',
                      padding: '0.8rem',
                      color: 'white'
                    }}
                  />
                  <button
                    onClick={aplicarCupon}
                    style={{
                      background: '#27ae60',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '0 1.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    Aplicar
                  </button>
                </div>
                {mensajeCupon && (
                  <p style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: mensajeCupon.includes('✅') ? '#27ae60' : '#E02B59'
                  }}>
                    {mensajeCupon}
                  </p>
                )}
              </div>

              {/* BOTÓN DE PAGO */}
              <button
                onClick={procederPago}
                style={{
                  background: 'linear-gradient(135deg, #E02B59 0%, #C01A4A 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '50px',
                  width: '100%',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaLock /> Proceder al pago
              </button>
              
              <p style={{
                textAlign: 'center',
                marginTop: '1rem',
                color: '#27ae60',
                fontSize: '0.9rem'
              }}>
                🔒 Pago seguro garantizado
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;