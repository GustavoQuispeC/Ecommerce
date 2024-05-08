"use client";

import { IProduct } from "@/types";

const Card = ({ name, price, image, stock }: IProduct) => {
  return (

      <div className="flex flex-col h-96 md:w-52 w-64 justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center items-center">
          <img src={image} alt={name} width={180} height={250} />
        </div>
        <div className="p-4">
          <h3 className="text-black text-lg font-semibold uppercase">{name}</h3>
          <div>
            <p className="font-black text-primary text-xl">${price}</p>
            <p className="font-black text-primary text-sm">Stock: {stock}</p>
          </div>

          <button
            type="button"
            className="bg-black text-white w-full py-2 mt-2 rounded-md"
          >
            Ver detalle y comprar
          </button>
        </div>
      </div>

  );
};

export default Card;
