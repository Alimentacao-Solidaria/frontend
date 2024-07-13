import React from "react";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import SobreNos from "./page/sobre/SobreNos";
import Home from "./page/home/Home";
import Cadastro from "./page/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./page/cart/Cart";
import ProdutosOverViews from "./page/produtosOverviews/ProdutosOverViews";
import ListaProdutos from "./page/shop/ListaProdutos";
import Categoria from "./admin/categoria/Categoria";
import "flowbite";
import ListaCategoria from "./admin/categoria/listaCategoria/ListaCategoria";
import DeletarCategoria from "./admin/categoria/deletarCategoria/DeletarCategoria";
import FormularioProduto from "./admin/produto/formularioProduto/FormularioProduto";
import ListaProdutosAdm from "./admin/produto/listaProdutos/ListaProdutosAdm";
import DeletarProduto from "./admin/produto/deletarProduto/DeletarProduto";

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
            <Route path="/doacao" element={<ListaProdutos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/overviews" element={<ProdutosOverViews />} />
            <Route
              path="/categoria/cadastrarCategoria"
              element={<Categoria />}
            />
            <Route
              path="/categoria/editarCategoria/:id"
              element={<Categoria />}
            />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route
              path="/categoria/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route
              path="/produtos/cadastrarProduto"
              element={<FormularioProduto />}
            />
            <Route
              path="/produtos/editarProduto/:id"
              element={<FormularioProduto />}
            />
            <Route path="/produtos" element={<ListaProdutosAdm />} />
            <Route
              path="/produtos/deletarProduto/:id"
              element={<DeletarProduto />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
