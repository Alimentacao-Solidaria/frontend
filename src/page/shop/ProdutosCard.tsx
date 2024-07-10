import { Link } from "react-router-dom";
import Produtos from "../../model/Produtos";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

interface ProdutosCardProps {
  produto: Produtos;
}

function Shop({produto} : ProdutosCardProps) {
  return (
    <div className="bg-white mt-6">
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div c>
          <div
            key={produto.id}
            className="group relative shadow-lg max-w-xs mx-auto rounded-md"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt=""
                src={produto.foto}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 p-4 text-center uppercase">
              <h3>
                <a>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 text-lg text-black-700"
                  />
                  <span className="uppercase font-bold">
                    {produto.nomeProduto}
                  </span>
                </a>
              </h3>
            </div>
            <div>
              <p className="text-xl  text-gray-900 pl-6 pb-9 font-bold">
                R${produto.preco}
              </p>
            </div>
            {/* <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 p-2">
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
