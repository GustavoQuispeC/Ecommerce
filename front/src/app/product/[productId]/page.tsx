import { getProductById } from "@/helpers/product.helpers";

const DetailsProduct = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getProductById(params.productId);
  console.log(product);

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
            <span className=" text-violet-600 font-semibold">
              Ofertas SmartMarket
            </span>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>
          <p className="text-gray-700">{product.description}</p>
          <h4 className="text-2xl font-semibold">Stock: {product.stock}</h4>
          <div>
            <h1 className="text-3xl  text-green-00 font-bold">
              {" "}
              Precio: $ {product.price}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl">
                -
              </button>
              <span className="py-4 px-6 rounded-lg">1</span>
              <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl">
                +
              </button>
            </div>
            <a
              href="/cart"
              className="bg-cyan-800 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl h-full"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
