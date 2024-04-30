import React from "react";
import { Card } from "flowbite-react";
import { Product } from "@/interface/IProduct";

interface CardsProps {
  product: Product;
}

const Cards: React.FC<Product> = ({
  name,
  price,
  description,
  image,
  categoryId,
  stock,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-56 mx-auto py-3">
        <img src={image} alt={name} />
      </div>

      <div className="mx-3">
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p> */}
      </div>
      <div className="mx-3 text-blue-800 font-semibold hover:text-amber-400">
        <a href="#">Mas información</a>
      </div>
      <div className="py-2 mx-3">
        <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 dark:bg-teal-200 ">
          Categoria:{categoryId}
        </span>
        <br></br>
        <span className="mr-3 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 ">
          Stock:{stock}
        </span>
      </div>
      <div className="flex items-center justify-between mx-3 pb-3">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <a
          href="#"
          className="text-white bg-cyan-600 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Cards;

{
  /* <div className="w-full md:w-1/4">
        <Card
          className="max-w-80 px-3 py-3"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={image}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-blue-700">
              {name}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 items-center">
            <span className="mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold text-blue-800">
              {description}
            </span>
            <br></br>
            <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 dark:bg-teal-200 ">
              Categoria: {categoryId}
            </span>
            <br></br>
            <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 ">
              Stock: {stock}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $ {price}
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </Card>
      </div> */
}
