import React from "react";
import { Cards } from "@/components/card";
import { productsToPreLoad } from "@/utils/productsToPreLoad";
import { Carousel } from "@/components/carousel";
import { Button } from "flowbite-react";

const Product = () => {
  return (
    <div className="md:h-screen">
      <div>
        <Carousel />
      </div>

      <div className="hidden md:flex justify-center ">
        <Button.Group>
          <Button gradientMonochrome="info">Laptop</Button>
          <Button gradientDuoTone="greenToBlue">Tablet</Button>
          <Button gradientMonochrome="info">Smartphone</Button>
          <Button gradientDuoTone="greenToBlue">Audífonos</Button>
          <Button gradientMonochrome="info">Cámaras</Button>
          <Button gradientDuoTone="greenToBlue">Impresoras</Button>
          <Button gradientMonochrome="info">Monitores</Button>
          <Button gradientDuoTone="greenToBlue">Almacenamiento</Button>
          <Button gradientMonochrome="info">Accesorios</Button>
        </Button.Group>
      </div>
      <br></br>
      <div>
        <div className="flex flex-wrap justify-center gap-6 py-5 ">
          {productsToPreLoad.map((product, index) => (
            <Cards
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              categoryId={product.categoryId}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
