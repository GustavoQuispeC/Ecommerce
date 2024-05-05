import { Carousel } from "flowbite-react";
import Image from "next/image";
function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 md:h-96">
      <Carousel slideInterval={5000}>
        <img src="/item_1.png" alt="..." width={96} height={96} style={{ width: '100%', height: '100%' }} />
        <img src="/item_2.png" alt="..." width={96} height={96} style={{ width: '100%', height: '100%' }} />
        <img src="/item_3.png" alt="..." width={96} height={96} style={{ width: '100%', height: '100%' }} />
        <img src="/item_4.png" alt="..." width={96} height={96} style={{ width: '100%', height: '100%' }} />
        <img src="/item_5.png" alt="..." width={96} height={96} style={{ width: '100%', height: '100%' }} />
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
