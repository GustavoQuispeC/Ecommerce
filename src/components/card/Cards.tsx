"use client";
import React from "react";
import { Card } from "flowbite-react";
import { Product } from "@/interface/IProduct";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

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
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-56 mx-auto py-3">
        <img src={image} alt={name} />
      </div>
      <div className="mx-3">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
      <a
        className="mx-3 text-blue-800 font-semibold hover:text-amber-400"
        onClick={() => setOpenModal(true)}
      >
        Mas información
      </a>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Descripción
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
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
          href="/cart"
          className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Cards;
