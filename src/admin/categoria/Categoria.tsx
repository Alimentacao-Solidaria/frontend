import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Categorias from '../../model/Categoria'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../services/Service';

function Categoria() {
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  function retornar() {
    navigate("/categoria");
  }

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscaPorId(id: string) { 
    await buscar(`/categoria/${id}`, setCategoria, { headers: { Authorization: token } }) }

  useEffect(() => {
    if (token === '') {
      alert("Você não está logado!");
      navigate('/login');
    }else if (id !== undefined) {
      buscaPorId(id);
    }
  }, [token, id, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ 
      ...categoria, 
      [e.target.name]: e.target.value, })

      console.log(JSON.stringify(categoria))
  }
  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar('/categoria', categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        alert('Categoria atualizada');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Token vencido, realize o login novamente!');
          handleLogout();
        } else {
          alert('Erro ao atualizar a Categoria!');
        }
      }
    } else {
      try {
        await cadastrar('/categoria', categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        alert('Categoria cadastrada');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Token vencido, realize o login novamente!');
          handleLogout();
        } else {
          alert('Erro ao cadastrar a Categoria!');
        }
      }
    }
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center my-8 text-4xl">
          {id === undefined ? 'Cadastrar nova Categoria' : 'Atualizar Categoria'}
        </h1>

        <form onSubmit={gerarNovaCategoria} className="mx-auto w-1/2">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="nome">Nome da Categoria</label>
            <input
              type="text"
              className="border-2 border-slate-700 rounded-lg p-2"
              id="nomeCategoria"
              name="nomeCategoria"
              value={categoria.nomeCategoria}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="descricao">Descrição da Categoria</label>
            <input
              type="text"
              className="border-2 border-slate-700 rounded-lg p-2"
              id="descricaoCategoria"
              name="descricaoCategoria"
              value={categoria.descricaoCategoria}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            className="bg-indigo-400 hover:bg-indigo-800 rounded-lg w-1/2 mx-auto block py-2 text-white"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
    </>
  )
}



export default Categoria

