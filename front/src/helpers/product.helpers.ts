import { IProduct } from "@/types";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL_PRODUCT;

export async function getProductsDB() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET",
      next: { revalidate: 3600 },
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error("Error al obtener los productos");
  }
}

export async function getProducts() {
  try {
    const productsDB = await getProductsDB();
    console.log("Productos:", productsDB);
    return productsDB;
  } catch (error: any) {
    throw new Error("Error al obtener los productos");
  }
}

export async function getProductById(id: string) {
  try {
    const products = await getProducts();
    const product = products.find((product) => product.id.toString() === id);
    if (!product) throw new Error("Producto no encontrado");
    {
      return product;
    }
  } catch (error: any) {
    throw new Error("Error al obtener el producto");
  }
}

export async function createOrder(products: number[], token: string) {
  try {
    if (!products.length) {
      throw new Error("No hay productos en el carrito");
    } else if (!token) {
      throw new Error("No hay token de autenticación");
    }
    const response = await axios.post(
      `${apiUrl}/orders`,
      {
        products: products,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOrders(token: string) {
  try {
    if (!token) {
      throw new Error("No hay token de autenticación");
    }
    const response = await axios.get(`${apiUrl}/users/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
