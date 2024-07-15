// Cart.tsx

import React, { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { Link } from "react-router-dom";
import { toastAlerta } from "../../utils/ToastAlert";

function Cart() {
  const {
    listaCarrinho,
    calcularSubtotal,
    removerItem,
    diminuirQuantidade,
    adicionarItem,
  } = useContext(CarrinhoContext);

  const handleRemoveFromCart = (produto) => {
    removerItem(produto);
    toastAlerta("Produto removido do carrinho!", "success");
  };

  const handleDecreaseQuantity = (produto) => {
    diminuirQuantidade(produto);
    toastAlerta("Quantidade diminuída!", "info");
  };

  const handleIncreaseQuantity = (produto) => {
    // Aumentar a quantidade diretamente pode ser implementado
    // aqui com a função adicionarItem do contexto se desejado.
     adicionarItem(produto);
    toastAlerta("Quantidade aumentada!", "info");
  };

  return (
    <div className="flex flex-col overflow-y-scroll bg-white shadow-xl h-screen mt-10 overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Carrinho de Compras
          </h2>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {listaCarrinho.map((produto) => (
                <li key={produto.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={produto.nomeProduto}
                      src={produto.foto}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{produto.nomeProduto}</h3>
                        <p className="ml-4">
                          R${produto.preco * produto.qtd}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Quantidade: {produto.qtd}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleDecreaseQuantity(produto)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="mx-2 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {produto.qtd}
                        </button>
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleIncreaseQuantity(produto)}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="ml-4 font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleRemoveFromCart(produto)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        {/* Lógica para calcular subtotal, frete, etc. */}
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          R${calcularSubtotal().toFixed(2)}{" "}
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Frete e impostos calculados no checkout.
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Finalizar Compra
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <Link to="/doacao">
            <p>
              ou{" "}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continuar Comprando
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
