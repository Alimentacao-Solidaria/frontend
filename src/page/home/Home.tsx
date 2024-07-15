import React from "react";
import Carrossel from "../../components/carrossel/Carrossel";
import { Link } from "react-router-dom";

import "./Home.css"; // Importando estilos CSS personalizados
import "slick-carousel/slick/slick.css"; // Importando estilos do Slick Carousel
import "slick-carousel/slick/slick-theme.css"; // Importando tema do Slick Carousel

// Importando as imagens
import criancasImage from '../../../src/assets/criancas.jpeg';
import comoDoarImage from '../../../src/assets/comodoar.jpeg';
import formasDePagamentoImage from '../../../src/assets/formasdepagamento.jpeg';
import pilar1Image from '../../../src/assets/pilar1.jpeg';
import pilar2Image from '../../../src/assets/pilar2.jpeg';
import pilar3Image from '../../../src/assets/nosenviamos.jpeg';

function Home() {
  return (
    <>
      {/* Carrossel */}
      <div className="flex items-center justify-center py-4">
        <Carrossel />
      </div>

      {/* Seção de Destaque */}
      <div className="flex flex-col md:flex-row w-full  p-3 md:p-5 md:py-10 space-y-5 md:space-y-0 items-center">
        <div className="flex-1 flex flex-col justify-start md:pr-5 px-3 md:px-5">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            MAIS DE 2.200 CRIANÇAS DE ATÉ CINCO ANOS MORRERAM EM RORAIMA DESDE 2017
          </h2>
          <p className="text-lg leading-relaxed mt-4 text-justify">
            Em 2023, a taxa de mortalidade infantil no estado alcançou alarmantes{" "}
            <span className="font-bold">32,2%,</span> a maior dos últimos sete anos. A principal causa? Falta de acompanhamento pré-natal adequado.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-justify">
            A Maternidade Nossa Senhora de Nazareth e o Hospital da Criança Santo Antônio são os que mais registraram óbitos.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-justify">
            <span className="font-bold">Apenas 35% das gestantes mantêm os cuidados necessários, resultando em complicações e mortes evitáveis.</span>{" "}
            Precisamos agir. Apoie nossa ONG e ajude a salvar vidas, promovendo saúde e cuidados essenciais para nossas crianças. Juntos, podemos fazer a diferença.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center mt-5 md:mt-0 px-3 md:px-5">
          <img
            src={criancasImage}
            alt="Descriptive Alt Text"
            className="object-cover rounded-lg shadow-lg w-full h-auto md:h-full max-w-full"
          />
        </div>
      </div>

      {/* Como Doar */}
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">COMO DOAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="flex flex-col items-center text-center">
            <img
              src={comoDoarImage}
              alt="Escolher produtos para doar"
              className="rounded-lg shadow-md w-2/3 h-auto object-cover"
            />
            <p className="mt-2 font-semibold">
              Escolha os produtos para doar e adicione ao carrinho
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={formasDePagamentoImage}
              alt="Efetuar pagamento"
              className="rounded-lg shadow-md w-2/3 h-auto object-cover"
            />
            <p className="mt-2 font-semibold">Efetue o pagamento</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={formasDePagamentoImage}
              alt="Encaminhar doações"
              className="rounded-lg shadow-md w-2/3 h-auto object-cover"
            />
            <p className="mt-2 font-semibold">Nós encaminhamos as doações</p>
          </div>
        </div>
      </div>

      {/* Pilares */}
      <div className="flex flex-col items-center justify-center py-10 md:py-16 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center mx-auto">Nossos 3 Pilares na Luta Contra a Mortalidade Infantil</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={pilar1Image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">1. Prevenção e Cuidado</div>
              <p className="text-gray-700 text-base">
                A prevenção é a chave para reduzir a mortalidade infantil. Trabalhamos para garantir que cada criança tenha acesso a cuidados de saúde adequados desde o nascimento.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={pilar2Image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">2. Nutrição e Segurança Alimentar</div>
              <p className="text-gray-700 text-base">
                A nutrição adequada é essencial para o desenvolvimento saudável das crianças. Enfrentamos a insegurança alimentar fornecendo alimentos nutritivos para famílias em situação de vulnerabilidade.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={pilar3Image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">3. Educação e Conscientização</div>
              <p className="text-gray-700 text-base">
                Acreditamos que a educação é uma ferramenta poderosa para mudar realidades. Nossos programas educativos visam conscientizar as famílias sobre a importância dos cuidados infantis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
