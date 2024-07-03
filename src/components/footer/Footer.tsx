import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-blue-400 text-white border-t shadow-md text-black">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-semibold">
            Comida, amor & vida - AlimentAção Solidária | Copyright: 2024.
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo
              size={30}
              className="text-white hover:text-gray-600 cursor-pointer"
            />
            <InstagramLogo
              size={30}
              className="text-white hover:text-gray-600 cursor-pointer"
            />
            <FacebookLogo
              size={30}
              className="text-white hover:text-gray-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
