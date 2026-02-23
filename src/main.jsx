import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'  // ← IMPORTAR ESTILOS
import './assets/custom.css'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'  // ← IMPORTAR COMPONENTE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </CartProvider>
  </React.StrictMode>,
)