import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProdutosOverViews() {

 return (
   <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased mt-20">
     <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
       <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
         <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
           <img alt={product.images[3].alt} src={product.images[3].src} />
           <img
             className="w-full hidden dark:block"
             src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
             alt=""
           />
         </div>

         <div className="mt-6 sm:mt-8 lg:mt-0">
           <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
             Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
             Mac OS, Pink
           </h1>
           <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
             <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
               $1,249.99
             </p>

             
           </div>

           <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
             <button
               type="submit"
               className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             >
               Add to bag
             </button>
           </div>

           <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

           <p className="mb-6 text-gray-500 dark:text-gray-400">
             Studio quality three mic array for crystal clear calls and voice
             recordings. Six-speaker sound system for a remarkably robust and
             high-quality audio experience. Up to 256GB of ultrafast SSD
             storage.
           </p>

           <p className="text-gray-500 dark:text-gray-400">
             Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
             Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
             Magic Keyboard or Magic Keyboard with Touch ID.
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}

export default ProdutosOverViews;
