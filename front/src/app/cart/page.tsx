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
            router.push("/"); // Redirige al login
          } else {
            router.push("/home");
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
      router.push("/home");
    } catch (error) {
      Swal.fire("¡Error!", "Ocurrió un error al realizar la compra", "error");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Detalle de compra</h1>
        {cart.length === 0 ? (
          <div className="flex flex-row items-center">
            <p>El carrito de compras está vacío.  Haz clic aquí para{" "}</p>
            &nbsp;
            <a className="flex flex-row  font-semibold text-xl text-red-800 hover:text-sky-600" href="/product">
                Visitar la tienda...<IoHome/>
              </a>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Producto</th>
                      <th className="text-left font-semibold">Precio</th>
                      <th className="text-left font-semibold">Cantidad</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item: any, i) => (
                      <tr key={i}>
                        <td className="py-2">
                          <div className="flex flex-col">
                            <img
                              className="h-16 w-16 md:h-20 md:w-20"
                              src={item.image}
                              alt={item.name}
                            />
                            <p className="font-semibold ml-2">
                              {item.name}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div>${item.price}</div>
                        </td>

                        <td>
                          <div>{item.quantity}</div>
                        </td>
                        <td>
                          <div> ${(item.price * item.quantity).toFixed(2)}</div>
                        </td>
                        <td>
                          <button onClick={() => removeFromCart(i)}>
                            <Image
                              src="/delete.png"
                              className="w-5 h-4 md:w-7 md:h-7 hover:scale-110"
                              alt="Eliminar producto"
                              width={25}
                              height={30}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Resumen</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal: </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Envío</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleBuyClickPagar}
                  className="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Ir a pagar
                </button>
                <div className="flex justify-center pt-2">
                <a
              className=" text-sky-700 flex flex-row items-center underline"
              href="/product">
              Ir a la tienda
              <IoHome/>
            </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
