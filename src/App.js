import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

import CryptoContext from './context/CryptoContext'

import './styles/App.css'

const App = () => {

    return (
        <CryptoContext>
            <BrowserRouter>
                <div className="app">
                    <Header />
        
                    <AppRouter />
                </div>
            </BrowserRouter>
        </CryptoContext>
    )
}

export default App