import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    // <CartProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
    // {/* // </CartProvider> */ }
)
