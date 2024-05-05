"use client";

import { IProduct } from "@/types";

const Card = ({
  name,
  price,
  description,
  image,
  categoryId,
  stock,
}: IProduct) => {
  return (
    <div className="flex flex-col h-96 md:w-52 w-64 justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center">
        <img src={image} alt={name} width={180} height={300} />
      </div>

      <div className="mx-3">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>

      <div className="py-2 mx-3">
        <span className="mr-2 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 dark:bg-teal-200 ">
          Categoria:{categoryId}
        </span>
        <br></br>
        <div>
          <span className="mr-3 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-200 ">
            Stock:{stock}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-end mx-3 pb-3">
        <div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
        <div>
          <a
            href="/cart"
            className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
