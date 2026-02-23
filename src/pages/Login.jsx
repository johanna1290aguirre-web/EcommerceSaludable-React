import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const Login = () => {
  const [esRegistro, setEsRegistro] = useState(false);

  return (
    <Container>
      <div className="login-container">
        <h1 className="login-title">
          {esRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </h1>
        
        <Form className="login-form">
          {esRegistro && (
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Tu nombre" 
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="correo@ejemplo.com" 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="********" 
            />
          </Form.Group>

          {esRegistro && (
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="********" 
              />
            </Form.Group>
          )}

          <button type="submit" className="login-btn-custom">
            {esRegistro ? 'Registrarse' : 'Ingresar'}
          </button>
        </Form>

        <div className="login-footer">
          {esRegistro ? (
            <>
              ¿Ya tienes cuenta? <a href="#" onClick={(e) => { e.preventDefault(); setEsRegistro(false); }}>Inicia sesión aquí</a>
            </>
          ) : (
            <>
              ¿No tienes cuenta? <a href="#" onClick={(e) => { e.preventDefault(); setEsRegistro(false); setEsRegistro(true); }}>Regístrate aquí</a>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Login;