import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-red-600 h-72 flex items-center text-center  text-white ">
        <div className=" p-10 ">
          <span className="text-5xl font-sans">
            15.1 POR 1.000 NASCIDOS VIVOS FOI A TAXA DE MORTALIDADE INFANTIL EM
            RORAIMA EM 2019​​.
          </span>
          <h6>*World Bank Open Data</h6>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <h2 className="text-2xl mb-6">
          Nossos 3 Pilares na Luta Contra a Mortalidade Infantil
        </h2>
      </div>

      <div className="flex grid grid-cols-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">1. Prevenção e Cuidado</div>
            <p className="text-gray-700 text-base">
              A prevenção é a chave para reduzir a mortalidade infantil.
              Trabalhamos para garantir que cada criança tenha acesso a cuidados
              de saúde adequados desde o nascimento.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              2. Nutrição e Segurança Alimentar
            </div>
            <p className="text-gray-700 text-base">
              A nutrição adequada é essencial para o desenvolvimento saudável
              das crianças. Enfrentamos a insegurança alimentar fornecendo
              alimentos nutritivos para famílias em situação de vulnerabilidade.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
    </>
  );
}

export default Home;
