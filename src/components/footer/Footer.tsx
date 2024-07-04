import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-[#bce1ff] to-white">
      <div className="w-full px-2 py-1">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600 mt-1">
            Comida, amor & vida - AlimentAção Solidária | Copyright: 2024.
          </p>
          <p className="text-xs text-gray-600 mt-1">Acesse nossas redes sociais</p>
          <div className="flex space-x-3 mt-2 text-gray-600">
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span className="sr-only"> LinkedIn </span>
              <LinkedinLogo size={23} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span className="sr-only"> Instagram </span>
              <InstagramLogo size={23} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span className="sr-only"> Facebook </span>
              <FacebookLogo size={23} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;