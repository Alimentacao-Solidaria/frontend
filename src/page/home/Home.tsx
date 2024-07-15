import React from "react";
import "./Home.css";
import Carrossel from "../../components/carrossel/Carrossel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className=" items-center justify-center">
        <Carrossel />
      </div>
      <div className="flex w-full h-screen bg-gray-50 p-10">
        <div className="flex-1 flex flex-col justify-start pr-5">
          <h2 className="text-3xl font-bold mb-4 text-center">
            MAIS DE 2.200 CRIANÇAS DE ATÉ CINCO ANOS MORRERAM EM RORAIMA DESDE
            2017
          </h2>
          <p className="text-lg leading-relaxed mt-28">
            Em 2023, a taxa de mortalidade infantil no estado alcançou
            alarmantes <span className="font-bold">32,2%,</span> a maior dos
            últimos sete anos. A principal causa? Falta de acompanhamento
            pré-natal adequado.
          </p>
          <p className="text-lg leading-relaxed mt-28">
            A Maternidade Nossa Senhora de Nazareth e o Hospital da Criança
            Santo Antônio são os que mais registraram óbitos.
          </p>
          <p className="text-lg leading-relaxed mt-28">
            <span className="font-bold">
              Apenas 35% das gestantes mantêm os cuidados necessários,
              resultando em complicações e mortes evitáveis.
            </span>{" "}
            Precisamos agir. Apoie nossa ONG e ajude a salvar vidas, promovendo
            saúde e cuidados essenciais para nossas crianças. Juntos, podemos
            fazer a diferença.
          </p>

          <p className="text-lg leading-relaxed mt-28 text-center">
            <Link
              to="/doacao"
              className="block text-md px-28 py-2 rounded text-blue-900 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700 bg-blue-500"
            >
              Doar
            </Link>
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/154216694/pt/foto/pobre-e-triste-crian%C3%A7a-pequena-menina-sentada-contra-a-parede-de-cimento.jpg?s=2048x2048&w=is&k=20&c=a_2L6eNI3UG7DSyub0fkRHvVIRu6hhnJf2ue-9JZAdE="
            alt="Descriptive Alt Text"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      {/* fim */}

      {/* como doar */}
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl font-bold mb-4">Como Doar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
          <div className="flex flex-col items-center">
            <p className="mt-4 text-center font-semibold">
              Escolha os produtos para doar e adicione ao carrinho
            </p>
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczNKzT6LhfHhUyJ9vfb9573noZR0UrIXXpszQU80DVdVeG7by2n9nGza9jZ2Lev78CPTpynue4JZqZS0nPTpVMYGWrF3i7R9fs_Z5v_j2NaJ_BCgLzx3tNmxB5T47JmE2ViSj0nrZ48fLzCfLTRLmsxJ=w402-h524-s-no-gm?authuser=0"
              alt="Escolher produtos para doar"
              className="rounded-lg shadow-md w-[400px] h-[300px] mt-4"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-4 text-center font-semibold">Efetue o pagamento</p>
            <img
              src="https://cdn.awsli.com.br/1946/1946271/arquivos/formas-de-pagamento.jpg"
              alt="Efetuar pagamento"
              className="rounded-lg shadow-md w-[400px] h-[300px] mt-4"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-4 text-center font-semibold">
              Nós encaminhamos as doações
            </p>
            <img
              src="https://ampliar.org.br/wp-content/uploads/2020/10/doacao-de-alimentos-salva-vidas-voce-vai-ficar-de-fora.jpg"
              alt="Encaminhar doações"
              className="rounded-lg shadow-md w-[400px] h-[300px] mt-4"
            />
          </div>
        </div>
      </div>

      {/* fim */}

      {/* imagem  */}
      <div className="flex flex-col items-center">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMRFABf5GxZy8E7NQD-CuNGNmvE1xfP6kU2V4W50EQvlW6EPLEFRFDvOmoZnfKp2C6RSAsCUI5KXNaAy-6NIMNWkVFW_VlxAA7ckX7vLY4NJvnTC35E2spU_rhKjfIrf_sR36ndsNI2hFI6OWaZv9wv=w1600-h900-s-no-gm?authuser=0"
          alt="Efetuar pagamento"
          className="rounded-lg shadow-md w-full h-[500px]"
        />
      </div>
      {/* sim */}
      <div className="flex justify-center items-center p-2">
        <h2 className="text-2xl mb-6">
          Nossos 3 Pilares na Luta Contra a Mortalidade Infantil
        </h2>
      </div>
      <div className="flex items-center text-center justify-center mb-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
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
                src="https://lh3.googleusercontent.com/pw/AP1GczO6ytmMMcJaNECaYbfFQR2zxab12Flr9RMg7D28wIm4uDk_nNYbkC7_WZMlq4WrLu3RhwABaIuQI2dxl6c501UbjkzEVyyPnDvp5q4v1QPH8b0nNPK9ce8TNmtSExntVuGmTC5-5tyKF1NnWvClGFqR=w768-h511-s-no-gm?authuser=0"
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
                src="https://lh3.googleusercontent.com/pw/AP1GczPlX7S5Z9kqNnhxaUMpLemiwEvqRieWNAg_0oPgZQhO8PQqQzFUAYQTG9ZTL0-4Bs2_eGmQcXu1BglP5BqKHLxpkntQo72Ea26MGTTVZ-DK2JVnf-PtE9VCVwneY1neqKhv_r94lOMaH_99H5xvqRIX=w946-h630-s-no-gm?authuser=0"
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
