import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categorias from '../../../model/Categoria';
import { buscar } from '../../../services/Service';
import CardCategoria from '../../categoria/cardCategoria/CardCategoria';
import { toastAlerta } from '../../../utils/ToastAlert';


function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categorias[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategoria() {
    try {
      await buscar('/categoria', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','erro')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);
  return (
    <>
      {categoria.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;