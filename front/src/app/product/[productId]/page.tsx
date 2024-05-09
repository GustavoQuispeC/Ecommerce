"use client";
import { getProductById } from "@/helpers/product.helpers";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { IoHome } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

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

  //! Agregar al carrito
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
      const existingProduct = currentCart.find(
        (item: any) => item.id === params.productId
      );
      if (existingProduct) {
        Swal.fire({
          icon: "info",
          text: "El producto ya existe en el carrito.",
        });
        router.push("/cart"); // Redirige a la página del carrito
      } else {
        currentCart.push({ ...product, quantity });
        localStorage.setItem("cart", JSON.stringify(currentCart));
        Swal.fire({
          icon: "info",
          text: "Producto agregado al carrito.",
        });
      }
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
   
    <div className="max-w-4xl mx-auto p-8 md:pt-6 md:h-screen">
    <div className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-teal-50 rounded-md shadow-lg w-full md:max-w-2xl">
      <div className="text-sky-600 flex flex-col justify-between">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto md:w-96 md:h-auto rounded-lg "
        />
        <div>
          <small className="uppercase">Disponibles: </small>
          <div className="flex flex-wrap md:flex-nowrap gap-1">
            {product.stock} und.
          </div>
        </div>
      </div>
      <div className="text-sky-600">
        <small className="uppercase">Oferta SmartMarket</small>
        <h3 className="uppercase text-black text-2xl font-medium">
          {product.name}
        </h3>
        <h3 className="text-2xl font-semibold mb-7">${product.price}</h3>
        <div className="flex items-center">
          <button
            className="bg-gray-200 py-0.5 px-2 rounded-lg text-sky-600 text-3xl"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-3 rounded-lg">{quantity}</span>
          <button
            className="bg-gray-200 py-0.5 px-2 rounded-lg text-sky-600 text-3xl"
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
        <br />
        <small className="text-black">{product.description}</small>
  
        <div className="flex flex-col md:flex-row gap-0.5 mt-4">
          <button
            id="addToCartButton"
            onClick={handleBuyClickAgregar}
            className="bg-yellow-500 flex flex-row justify-center items-center hover:bg-yellow-400 focus:outline-none transition text-white uppercase px-8 py-3"
          >
            Agregar
            <FaCartArrowDown />
          </button>
          <button
            id="addToCartButton"
            onClick={handleBuyClickPagar}
            className="bg-yellow-500 hover:bg-yellow-400 focus:outline-none transition text-white uppercase px-8 py-3"
          >
            Comprar ahora
          </button>
        </div>
        <a
          className="text-sky-600 flex flex-row items-center underline mt-4 md:mt-0"
          href="/product"
        >
          Ir a la tienda
          <IoHome />
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default DetailsProduct;
