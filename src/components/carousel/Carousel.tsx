import { Carousel } from "flowbite-react";
function CarouselComponent() {
  return (
    <div className="relative h-28 rounded-lg lg:h-96">
      <Carousel slideInterval={5000}>
        <img src="/item_1.png" alt="..." />
        <img src="/item_2.png" alt="..." />
        <img src="/item_3.png" alt="..." />
        <img src="/item_4.png" alt="..." />
        <img src="item_5.png" alt="..." />
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
