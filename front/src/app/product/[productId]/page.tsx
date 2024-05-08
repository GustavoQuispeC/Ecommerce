"use client";
import { getProductById } from "@/helpers/product.helpers";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { IoHome } from "react-icons/io5";
import Image from "next/image";

const DetailsProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState<IProduct>();

  //!Obtener producto por ID
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(params.productId);
      setProduct(productData);
    };
    fetchProduct();
  }, [params.productId]);

  //!Agregar al carrito
  const handleBuyClickAgregar = () => {
    const userToken = localStorage.getItem("userSession");
    if (!userToken) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Debes iniciar sesión para comprar.",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesión",
        cancelButtonText: "Seguir Comprando",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/"); // Redirige a la página de inicio de sesión
        }
      });
    } else {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      currentCart.push({ ...product, quantity });
      localStorage.setItem("cart", JSON.stringify(currentCart));
      Swal.fire({
        icon: "info",

        text: "Producto agregado al carrito.",
      });
    }
  };
  //!Pagar
  const handleBuyClickPagar = () => {
    const userToken = localStorage.getItem("userSession");
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (!userToken) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Debes iniciar sesión para comprar.",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesión",
        cancelButtonText: "Seguir Comprando",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/"); // Redirige a la página de inicio de sesión
        }
      });
    } else if (currentCart.length === 0) {
      Swal.fire({
        icon: "info",
        title: "¡Atención!",
        text: "Debes agregar productos al carrito antes de pagar.",
      });
    } else {
      router.push("/cart"); // Redirige a la página del carrito
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 md:h-screen">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={product.image}
            alt=""
            className="w-72 h-96 aspect-square object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold">
              Ofertas SmartMarket
            </span>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>
          <p className="text-gray-700">{product.description}</p>
          <h4 className="text-2xl font-semibold">Stock: {product.stock}</h4>
          <div>
            <h1 className="text-3xl text-green-500 font-bold">
              Precio: $ {product.price}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{quantity}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <button
              className="flex gap-2 bg-cyan-800 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-xl h-full"
              onClick={handleBuyClickAgregar}
            >
              Agregar
              <Image
                src="/cart.png"
                className="w-6 h-6"
                alt="cart"
                width={30}
                height={25}
              />
            </button>
          </div>
          <div className="flex flex-row items-center gap-12">
            <button
              className="bg-yellow-800 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-xl h-full"
              onClick={handleBuyClickPagar}>
              Ir a pagar
            </button>
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
  );
};

export default DetailsProduct;
