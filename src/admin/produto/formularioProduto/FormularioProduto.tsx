import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import Categoria from '../../../model/Categoria';
import Produtos from '../../../model/Produtos';
import { toastAlerta } from '../../../utils/ToastAlert';


function FormularioProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: '',
    });

    const [produtos, setProdutos] = useState<Produtos>({
      id: 0,
      nomeProduto: "",
      descricaoProduto: "",
      preco: 0,
      quantidade: 0,
      foto: "",
      categoria: {
        id: 0,
      },
      qtd: 0,
    });

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProdutos, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categoria/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoria() {
        await buscar('/categoria', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarCategoria();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(categoria);

        }
    }, [id]);

    useEffect(() => {
        setProdutos({
            ...produtos,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produtos });

        if (id != undefined) {
            try {
                await atualizar(`/produtos`, produtos, setProdutos, {
                    headers: {
                        Authorization: token,
                    },
                });
                toastAlerta('Produto atualizado com sucesso','sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente','erro')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Produto','erro');
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, produtos, setProdutos, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Produto cadastrado com sucesso','sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente','erro')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar o Produto','erro');
                }
            }
        }
    }

    const carregandoCategoria = categoria.descricaoCategoria === '';

    return (
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">
          {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
        </h1>

        <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              value={produtos.nomeProduto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Nome"
              id="nomeProduto"
              name="nomeProduto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição do Produto</label>
            <input
              value={produtos.descricaoProduto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Descrição"
              id="descricaoProduto"
              name="descricaoProduto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="preco">Preço do Produto</label>
            <input
              value={produtos.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="number"
              placeholder="Preço"
              id="preco"
              name="preco"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div>
            <label htmlFor="quantidade">Quantidade do Produto em Estoque</label>
            <input
              value={produtos.quantidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="number"
              placeholder="Quantidade"
              id="quantidade"
              name="quantidade"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Foto do Produto</label>
            <input
              value={produtos.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="URL"
              id="foto"
              name="foto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do Produto</p>
            <select
              name="categoria"
              id="categoria"
              className="border p-2 border-slate-800 rounded"
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione uma Categoria
              </option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id}>
                    {categoria.descricaoCategoria}
                  </option>
                </>
              ))}
            </select>
          </div>
          <button
            disabled={carregandoCategoria}
            type="submit"
            className="rounded disabled:bg-slate-200 bg-[#0EA5E9] hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2"
          >
            {carregandoCategoria ? (
              <span>Carregando</span>
            ) : id !== undefined ? (
              "Editar"
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
      </div>
    );
}

export default FormularioProduto;