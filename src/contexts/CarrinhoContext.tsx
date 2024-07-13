// CarrinhoContext.tsx

import React, { createContext, ReactNode, useState } from "react";
import Produto from "../model/Produtos";

interface CarrinhoContextProps {
  listaCarrinho: Array<Produto>;
  adicionarItem: (produto: Produto) => void;
  diminuirQuantidade: (produto: Produto) => void;
  removerItem: (produto: Produto) => void;
  calcularSubtotal: () => number;
}

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([]);

  const adicionarItem = (prod: Produto) => {
    // Atualiza a lista de carrinho
    setListaCarrinho((currentItems) => {
      // Verifica se o produto já está no carrinho
      const existingItem = currentItems.find((item) => item.id === prod.id);
      if (!existingItem) {
        // Se o produto não está no carrinho, adiciona-o com quantidade 1
        return [...currentItems, { ...prod, qtd: 1 }];
      } else {
        // Se o produto já está no carrinho, atualiza a quantidade
        return currentItems.map((item) =>
          item.id === prod.id ? { ...item, qtd: item.qtd + 1 } : item
        );
      }
    });
  };

  const diminuirQuantidade = (prod: Produto) => {
    // Atualiza a lista de carrinho
    setListaCarrinho((currentItems) => {
      // Verifica se a quantidade do produto é maior que 1
      const existingItem = currentItems.find((item) => item.id === prod.id);
      if (existingItem && existingItem.qtd > 1) {
        // Se a quantidade é maior que 1, diminui a quantidade do produto
        return currentItems.map((item) =>
          item.id === prod.id ? { ...item, qtd: item.qtd - 1 } : item
        );
      } else {
        // Se a quantidade é 1 ou o produto não está no carrinho, remove o produto do carrinho
        return currentItems.filter((item) => item.id !== prod.id);
      }
    });
  };

  const removerItem = (prod: Produto) => {
    // Remove o produto do carrinho
    setListaCarrinho((currentItems) =>
      currentItems.filter((item) => item.id !== prod.id)
    );
  };

  const calcularSubtotal = () => {
    return listaCarrinho.reduce((total, item) => {
      return total + item.qtd * item.preco;
    }, 0);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        listaCarrinho,
        adicionarItem,
        diminuirQuantidade,
        removerItem,
        calcularSubtotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
