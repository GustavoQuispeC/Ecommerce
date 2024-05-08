import { IProduct } from "@/types";
import Card from "../card/Card";
import Link from "next/link";

const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    
      <div className="flex flex-wrap justify-center gap-6 py-5">
        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Card key={product.id} {...product} />
            </Link>
          );
        })}
      </div>

  );
};

export default Cards;
