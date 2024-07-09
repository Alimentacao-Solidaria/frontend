import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login/Login';
import SobreNos from './page/sobre/SobreNos';
import Home from "./page/home/Home";
import Cadastro from './page/cadastro/Cadastro';
import { AuthProvider } from './contexts/AutoContext';
import Shop from './page/shop/Shop';
import Cart from './page/cart/Cart';
import ProdutosOverViews from './page/produtosOverviews/ProdutosOverViews';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/doacao" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/overviews" element={<ProdutosOverViews />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
