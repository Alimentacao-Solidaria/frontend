import React from 'react';
import SobreNosCard from './SobreNosCard';
import mayImage from '../../assets/sobre/may.jpeg';
import luImage from '../../assets/sobre/lu.jpeg';
import JamesImage from '../../assets/sobre/ueber.jpeg';
import GiImage from '../../assets/sobre/gi.jpeg';
import DaniImage from '../../assets/sobre/dani.jpeg';
import ThiImage from '../../assets/sobre/thi.jpeg';
import GabImage from '../../assets/sobre/gabs.jpeg';

const people = [
  {
    name: 'Mayara Rocha',
    profession: 'Nutricionista e Desenvolvedora Fullstack',
    imageSrc: mayImage,
  },
  {
    name: 'Lucas Vinicius',
    profession: 'Desenvolvedor Fullstack',
    imageSrc: luImage,
  },
  {
    name: 'Giovana Rodrigues',
    profession: 'Nutricionista e Desenvolvedora Fullstack',
    imageSrc: GiImage,
  },
  {
    name: 'Ueber James',
    profession: 'Desenvolvedor Fullstack',
    imageSrc: JamesImage,
  },
  {
    name: 'Daniella Gomes',
    profession: 'Desenvolvedora Fullstack',
    imageSrc: DaniImage,
  },
  {
    name: 'Gabriel Rezende',
    profession: 'Desenvolvedor Fullstack',
    imageSrc: GabImage,
  },
  {
    name: 'Thilliê Moreira',
    profession: 'Jornalista e Desenvolvedora Fullstack',
    imageSrc: ThiImage,
  },
];

const Sobre: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="bg-white sm:py-2 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Missão</h2>
            <p className="mt-4 text-base leading-6 text-gray-600 text-justify">
              Promover a saúde e o bem-estar das crianças em Roraima, combatendo a vulnerabilidade alimentar infantil por meio da distribuição de alimentos nutritivos, suplementos essenciais e programas de educação nutricional. Até 2030, buscamos acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, reduzindo a mortalidade neonatal e infantil para níveis mínimos.
            </p>
          </div>
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Visão</h2>
            <p className="mt-4 text-base leading-6 text-gray-600 text-justify">
              Ser uma referência em ações de combate à vulnerabilidade alimentar infantil no Brasil, garantindo que todas as crianças tenham acesso a alimentos nutritivos e a uma vida saudável, livre de doenças evitáveis. Almejamos construir um futuro onde nenhuma criança sofra de desnutrição e todas tenham as mesmas oportunidades de crescimento e desenvolvimento.
            </p>
          </div>
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Valores</h2>
            <ul className="mt-4 text-base leading-6 text-gray-600 list-disc list-inside text-justify">
              <li>Solidariedade: Agir com compaixão e empatia, apoiando as crianças e suas famílias em situação de vulnerabilidade.</li>
              <li>Transparência: Manter clareza e honestidade em todas as ações e comunicações, garantindo a confiança dos nossos apoiadores e beneficiários.</li>
              <li>Comprometimento: Dedicação total aos objetivos do projeto, trabalhando incansavelmente para alcançar as metas estabelecidas.</li>
              <li>Educação: Promover o conhecimento sobre nutrição e saúde, capacitando comunidades para adotarem hábitos alimentares saudáveis.</li>
              <li>Inovação: Buscar constantemente novas maneiras de combater a vulnerabilidade alimentar, utilizando tecnologias e metodologias eficazes.</li>
              <li>Responsabilidade Social: Desenvolvimento sustentável e respeito aos direitos e dignidade.</li>
              <li>Parceria: Trabalhar em conjunto com outros atores sociais, organizações e voluntários para maximizar o impacto das nossas ações.</li>
            </ul>
          </div>
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossa Equipe</h2>
          </div>
          <div className="text-center">
            <div className="px-6 flex flex-wrap justify-center">
              {people.map((person) => (
                <SobreNosCard
                  key={person.name}
                  name={person.name}
                  profession={person.profession}
                  imageSrc={person.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
