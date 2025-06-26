import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/mainpage/MainPage';
import Products from './pages/products/Products'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div style={{maxWidth: '1600px' , margin: '0 auto'}}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Products" element={<Products />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
