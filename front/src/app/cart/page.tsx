"use client";
import { redirect } from "next/navigation";
import React, { useState, useEffect, use } from "react";

// import { Button, Modal } from "flowbite-react";
// import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

const Cart = () => {
 
  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      console.log("userToken", userToken)
      setToken(JSON.parse(userToken!));
      if (!userToken) {
        redirect("/");
      }
    }
  }, []);
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div>Carrito</div>
      
    </div>
  );
};

export default Cart;


 //const [openModal, setOpenModal] = useState(false);
{/* <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Detalle de compra</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-1 md:p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Producto</th>
                    <th className="text-left font-semibold">Precio</th>
                    <th className="text-left font-semibold">Cantidad</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">
                      <div className="mr-0">
                        <img
                          className="h-16 w-16"
                          src={product.image}
                          alt="Product image"
                        />
                      </div>
                      <span className="font-semibold">{product.name}</span>
                    </td>
                    <td className="py-2">{product.price}</td>

                    <td className="py-2">
                      <div className="mr-0">
                        <button className="border rounded-md py-0.5 md:py-2 px-2">
                          -
                        </button>
                        <span className="text-center w-6"> 1 </span>
                        <button className="border rounded-md py-0.5 md:py-2 px-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2">{product.price}</td>
                    <td className="py-2">
                      <button onClick={() => setOpenModal(true)}>
                        <img
                          src="/delete.png"
                          className="w-5 h-4 md:w-7 md:h-7 hover:scale-110"
                          alt="Delete product"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Resúmen</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$1300.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>I.G.V</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Envio</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$1301.99</span>
              </div>
              <button className="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Ir a pagar
              </button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                ¿Estás seguro de que quieres eliminar este producto?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => setOpenModal(false)}
                >
                  Sí, estoy seguro
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
                  onClick={() => setOpenModal(false)}
                >
                  No, cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}