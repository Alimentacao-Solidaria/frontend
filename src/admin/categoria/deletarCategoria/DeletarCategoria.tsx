import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categorias from '../../../model/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/ToastAlert'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar (`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente',"erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
           toastAlerta('Você precisa estar logado',"info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria deletada com sucesso','sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria','erro')
        }

        retornar()
    }
    return (
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto container w-1/3 mt-11"
        key={categoria.id}
      >
        <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {" "}
            {categoria.nomeCategoria}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {categoria.descricaoCategoria}
        </p>
        <div className="flex">
          {" "}
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>{" "}
          <button
            className="w-full text-slate-100 bg-[#0EA5E9] hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim{" "}
          </button>{" "}
        </div>
      </div>

      // <div className='container w-1/3 mx-auto'>
      //     <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

      //     <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      //     <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      //         <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
      //         <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nomeCategoria}</p>
      //         <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricaoCategoria}</p>
      //         <div className="flex">
      //             <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
      //             <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>
      //                 Sim
      //             </button>
      //         </div>
      //     </div>
      // </div>
    );
}

export default DeletarCategoria;