import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    // Usar setTimeout para evitar notificaciones duplicadas en desarrollo
    setTimeout(() => {
      setCart(prevCart => {
        // Verificar si el producto ya está en el carrito
        const existingItem = prevCart.find(item => item.id === product.id);
        
        if (existingItem) {
          // Si existe, aumentar cantidad y mostrar notificación
          toast.info(`🛒 ${product.nombre} (cantidad actualizada a ${existingItem.cantidad + 1})`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            toastId: `update-${product.id}` // ID único para evitar duplicados
          });
          
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        } else {
          // Si no existe, agregar nuevo con cantidad 1
          toast.success(`✅ ${product.nombre} agregado al carrito`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            toastId: `add-${product.id}` // ID único para evitar duplicados
          });
          
          return [...prevCart, { ...product, cantidad: 1 }];
        }
      });
    }, 0);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const product = prevCart.find(item => item.id === productId);
      
      toast.error(`🗑️ ${product.nombre} eliminado del carrito`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
        toastId: `remove-${productId}`
      });
      
      return prevCart.filter(item => item.id !== productId);
    });
  };

  // Actualizar cantidad
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId 
          ? { ...item, cantidad: newQuantity } 
          : item
      )
    );
  };

  // Calcular total
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  // Obtener cantidad de items
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};