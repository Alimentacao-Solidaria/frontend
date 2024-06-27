import './style.css';

function SobreNos() {
  return (
    <section className="bg-white p-8 text-center">
      <div
        className="bg-cover bg-center h-64 mb-6 rounded-lg shadow-md"
        style={{ backgroundImage: "url('https://acadienouvelle-6143.kxcdn.com/wp-content/uploads/2023/11/04_Guignolee-02-2048x1365.jpg')" }}
      ></div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        AlimentAção Solidária: comida, amor & vida
      </h1>
      <div className="container mx-auto max-w-4xl">
        <p className="text-lg text-gray-700 mb-4 text-justify">
          AlimentAção Solidária, sua plataforma de doações dedicada a combater a vulnerabilidade
          alimentar infantil e a promover a saúde e o bem-estar das crianças em Roraima. Juntos, podemos acabar com as mortes
          evitáveis de recém-nascidos e crianças menores de 5 anos.
        </p>
        <div className="paragrafo2 text-lg text-gray-700 text-justify">
          <p className="mb-4">
            Nossa missão: Até 2030, queremos acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos
            em Roraima, reduzindo a mortalidade neonatal para pelo menos 12 por 1.000 nascidos vivos e a mortalidade infantil
            para pelo menos 25 por 1.000 nascidos vivos.
          </p>
          <p className="mb-4">
            <p className="font-bold text-left"> Nosso Programa:</p>
            <ul className="list-disc list-inside mx-auto inline-block text-left">
              <li>Cesta Básica Nutritiva: Fornece alimentos básicos e nutritivos para uma família por um mês.</li>
              <li>Kit de Suplementos Infantis: Inclui suplementos nutricionais essenciais para crianças menores de 5 anos.</li>
              <li>Pacote de Educação Nutricional: Apoia programas de educação nutricional em comunidades vulneráveis.</li>
            </ul>
          </p>
          <p className="font-bold text-left">
            Idealizadores do projeto:
          </p>
          <ul className="list-none mx-auto inline-block text-left">
            <li>DANIELLA GOMES CORREA RAMOS</li>
            <li>GABRIEL REZENDE</li>
            <li>GIOVANA RODRIGUES SARAIVA</li>
            <li>LUCAS VINICIUS GOMES</li>
            <li>MAYARA ROCHA</li>
            <li>THILLIÊ MOREIRA</li>
            <li>UEBER JAMES NASCIMENTO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
