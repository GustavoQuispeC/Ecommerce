"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, use } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { createOrder } from "@/helpers/product.helpers";
import { IoHome } from "react-icons/io5";

const Cart = () => {
  const router = useRouter();

  //!sesion de usuario
  const [token, setToken] = useState<any>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      console.log("userToken", userToken);
      setToken(JSON.parse(userToken!));
      if (!userToken) {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Debes iniciar sesión para comprar.",
          showCancelButton: true,
          confirmButtonText: "Iniciar Sesión",
          cancelButtonText: "Permanecer aquí",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login"); // Redirige al login
          } else {
            router.push("/product");
          }
        });
      }
    }
  }, [router]);

  //!Traer productos del carrito
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log(cartItems);
      setCart(cartItems);
    }
  }, []);

  const removeFromCart = (index: any) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el producto del carrito de compras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        Swal.fire(
          "Eliminado",
          "El producto ha sido eliminado del carrito",
          "success"
        );
      }
    });
  };
  //!Calcular el total de la compra
  const calcularCompra = () => {
    let subtotal = 0;
    cart.forEach((item: any) => {
      subtotal += item.quantity * item.price;
    });
    const total = subtotal; //+ envio;
    return { subtotal, total };
  };

  const { subtotal, total } = calcularCompra();

  const handleBuyClickPagar = () => {
    try {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const products = currentCart.map((item: any) => item.id);
      console.log("products", products);
      createOrder(products, token.token);
      console.log(token.token);
      localStorage.removeItem("cart");
      Swal.fire(
        "¡Compra realizada!",
        "Tu compra ha sido realizada con éxito",
        "success"
      );
      router.push("/product");
    } catch (error) {
      Swal.fire("¡Error!", "Ocurrió un error al realizar la compra", "error");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 md:pt-6 md:h-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center h-screen">
              <div className="flex flex-col items-center">
                <p className="text-center">El carrito de compras está vacío.</p>
                <p className="text-center">
                  Haz clic aquí para{" "}
                  <a
                    className="font-semibold text-sky-500 hover:text-sky-700"
                    href="/product"
                  >
                    Visitar la tienda...
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Detalle de carrito
                </h1>
              </div>

              <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                <div className="bg-teal-50 shadow">
                  <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="flow-root">
                      <ul className="-my-8">
                        {cart.map((item: any, i) => (
                          <li
                            key={i}
                            className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                          >
                            <div className="shrink-0">
                              <img
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={item.image}
                                alt={item.name}
                              />
                            </div>

                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {item.stock} disponibles
                                  </p>
                                </div>

                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    ${item.price}
                                  </p>

                                  <div className="sm:order-1">
                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                      <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                        -
                                      </button>
                                      <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                        {item.quantity}
                                      </div>
                                      <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(i)}
                                  className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-900">
                          ${subtotal.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Envio</p>
                        <p className="text-lg font-semibold text-gray-900">
                          $0.00
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        <span className="text-xs font-normal text-gray-400">
                          USD
                        </span>{" "}
                        {total.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <button
                        type="button"
                        onClick={handleBuyClickPagar}
                        className="group inline-flex w-full items-center justify-center rounded-md bg-yellow-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-yellow-500"
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center pt-2">
                      <a
                        className="text-sky-600 flex flex-row items-center underline"
                        href="/product"
                      >
                        Ir a la tienda
                        <IoHome />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
