import React from "react";

const Cart = () => {
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
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
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4"
                          src="/iphone_14_purple.webp"
                          alt="Product image"
                        />
                        <span className="font-semibold">Iphone 14 plus</span>
                      </div>
                    </td>
                    <td className="py-4">$1300.00</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">$1300.00</td>
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
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
               Ir a pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
