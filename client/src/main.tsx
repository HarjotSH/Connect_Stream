import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocketProvider } from './Context/SocketContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SocketProvider>
      <App />
    </SocketProvider>
  </BrowserRouter>

)
