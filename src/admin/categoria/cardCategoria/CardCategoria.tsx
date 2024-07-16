import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {







  return (
    <>
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={categoria.id}
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {" "}
            {categoria.nomeCategoria}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {categoria.descricaoCategoria}
        </p>
        <div>
          <Link
            to={`/categoria/editarCategoria/${categoria.id}`}
            className="w-full text-white bg-[#0EA5E9] hover:bg-indigo-800 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/categoria/deletarCategoria/${categoria.id}`}
            className="text-white bg-red-400 hover:bg-red-900 w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </>
    // <div className="bg-white mt-6">
    //   <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //     <div>
    //       <div
    //         key={categoria.id}
    //         className="group relative shadow-lg max-w-xs mx-auto rounded-md"
    //       >
    //         <div className="mt-4 p-4 text-center uppercase">
    //           <h3>
    //             <a>
    //               <span
    //                 aria-hidden="true"
    //                 className="inset-0 text-lg text-black-700"
    //               />
    //               <span className="uppercase font-bold">
    //                 {categoria.nomeCategoria}
    //               </span>
    //             </a>
    //           </h3>
    //         </div>
    //         <div>
    //           <p className="text-xl  text-gray-900 pl-6 pb-9 font-bold">
    //           {categoria.descricaoCategoria}
    //           </p>
    //           <div>
    //             <Link
    //               to={`/categoria/editarCategoria/${categoria.id}`}
    //               className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
    //             >
    //               <button>Editar</button>
    //             </Link>
    //             <Link
    //               to={`/categoria/deletarCategoria/${categoria.id}`}
    //               className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
    //             >
    //               <button>Deletar</button>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardCategoria;