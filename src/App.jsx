import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/mainpage/MainPage';
import Products from './pages/products/Products'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
