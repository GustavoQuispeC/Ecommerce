import { IProduct } from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL_PRODUCT;

export async function getProductsDB() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET", next: { revalidate: 3600 }
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

// fetch('https://...', { next: { revalidate: 3600 } })
