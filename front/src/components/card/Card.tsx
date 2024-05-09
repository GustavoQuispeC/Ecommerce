"use client";

import { IProduct } from "@/types";
import Image from "next/image";

const Card = ({ name, price, image, stock }: IProduct) => {
  return (
    <>
      <div className="flex flex-col h-96 md:w-64 w-64 justify-between rounded-xl bg-teal-50 bg-clip-border text-gray-700 shadow-md">
        <div className="flex justify-center items-center mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} alt={name} />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="font-black text-primary text-sm">
            Disponibles: {stock}
          </p>
        </div>
        <div className="p-3 pt-0">
          <button
            className="block bg-yellow-400 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Ver detalle y comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
