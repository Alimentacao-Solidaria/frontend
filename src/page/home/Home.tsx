import React from "react";
import "./Home.css";
import Carrossel from "../../components/carrossel/Carrossel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  return (
    <>
      <div className=" items-center justify-center">
        <Carrossel />
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl font-bold mb-4">Como Doar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <img
              src="https://placeimg.com/300/200/tech"
              alt="Escolher produtos para doar"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center">Escolha os produtos para doar</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://placeimg.com/300/200/people"
              alt="Efetuar pagamento"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center">Efetue o pagamento</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://placeimg.com/300/200/arch"
              alt="Encaminhar doações"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center">Nós encaminhamos as doações</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <h2 className="text-2xl mb-6">
          Nossos 3 Pilares na Luta Contra a Mortalidade Infantil
        </h2>
      </div>
      <div className="flex items-center text-center justify-center mb-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className=" relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://clinicanasnuvens.com.br/blog/wp-content/uploads/2016/10/saude-infantil-o-papel-do-medico-no-desenvolvimento-de-criancas-e1475525420605.jpg"
                alt="card-image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                1. Prevenção e Cuidado
              </div>
              <p className="text-gray-700 text-base">
                A prevenção é a chave para reduzir a mortalidade infantil.
                Trabalhamos para garantir que cada criança tenha acesso a
                cuidados de saúde adequados desde o nascimento.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="  relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://nutrinfantil.com.br/wp-content/uploads/2021/07/mom2.jpg"
                alt="card-image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                2. Nutrição e Segurança Alimentar
              </div>
              <p className="text-gray-700 text-base">
                A nutrição adequada é essencial para o desenvolvimento saudável
                das crianças. Enfrentamos a insegurança alimentar fornecendo
                alimentos nutritivos para famílias em situação de
                vulnerabilidade.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="https://www.seduc.pa.gov.br/site/public/upload/imagem/portal_seduc/up_ag_53409_c083c8d5-3a0f-efed-b717-6b41db797134-1cd9f.jpg"
                alt="card-image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                3. Educação e Sensibilização
              </div>
              <p className="text-gray-700 text-base">
                A educação é um pilar crucial em nossa luta contra a mortalidade
                infantil. Investimos em programas de conscientização para mães,
                famílias e comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
