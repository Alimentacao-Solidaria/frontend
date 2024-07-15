// CarrinhoContext.tsx

import React, { createContext, ReactNode, useState } from "react";
import Produto from "../model/Produtos";

interface CarrinhoContextProps {
  listaCarrinho: Array<Produto>;
  adicionarItem: (produto: Produto) => void;
  diminuirQuantidade: (produto: Produto) => void;
  aumentarQuantidade: (produto: Produto) => void;
  removerItem: (produto: Produto) => void;
  calcularSubtotal: () => number;
  finalizarCompra: () => void;
}

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([]);

  const adicionarItem = (prod: Produto) => {
    setListaCarrinho((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === prod.id);
      if (!existingItem) {
        return [...currentItems, { ...prod, qtd: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === prod.id ? { ...item, qtd: item.qtd + 1 } : item
        );
      }
    });
  };

  const diminuirQuantidade = (prod: Produto) => {
    setListaCarrinho((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === prod.id);
      if (existingItem && existingItem.qtd > 1) {
        return currentItems.map((item) =>
          item.id === prod.id ? { ...item, qtd: item.qtd - 1 } : item
        );
      } else {
        return currentItems.filter((item) => item.id !== prod.id);
      }
    });
  };

  const aumentarQuantidade = (prod: Produto) => {
    setListaCarrinho((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === prod.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === prod.id ? { ...item, qtd: item.qtd + 1 } : item
        );
      } else {
        return [...currentItems, { ...prod, qtd: 1 }];
      }
    });
  };

  const removerItem = (prod: Produto) => {
    setListaCarrinho((currentItems) =>
      currentItems.filter((item) => item.id !== prod.id)
    );
  };

  const calcularSubtotal = () => {
    return listaCarrinho.reduce((total, item) => {
      return total + item.qtd * item.preco;
    }, 0);
  };
  function finalizarCompra() {
    setListaCarrinho([]);
  }
  return (
    <CarrinhoContext.Provider
      value={{
        listaCarrinho,
        adicionarItem,
        diminuirQuantidade,
        aumentarQuantidade,
        removerItem,
        calcularSubtotal,
        finalizarCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
