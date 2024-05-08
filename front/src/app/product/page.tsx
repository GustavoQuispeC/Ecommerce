

import { Carousel } from "@/components/carousel";
import { Button, Card } from "flowbite-react";
import { getProducts } from "@/helpers/product.helpers";
import Cards from "@/components/cards/Cards";

const Product = async () => {
  const productsData = await getProducts();
  
  return (
    <div className="flex min-h-screen flex-col p-0 mx-auto">
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

      {/* //List of products */}
      <div className="flex flex-wrap justify-center  ">
        <Cards products={productsData} />
        </div>
   
    </div>
  );
};

export default Product;
