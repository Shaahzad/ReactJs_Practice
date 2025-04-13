import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './Context/Cartcontext.jsx'
import "./App.css"

createRoot(document.getElementById('root')).render(
    <CartProvider>
    <App />
    </CartProvider>
)
