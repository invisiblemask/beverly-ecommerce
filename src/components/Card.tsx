/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { products } from "./data";

type Product = {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
};

type ProductProps = {
  product?: Product;
};

export default function Card({ product }: ProductProps) {
  return (
    <div className="card-container">
      {products.map((product, index) => {
        return (
          <Link
            key={index}
            href={`/product/${product.id}`}
            className="card-wrapper"
          >
            <img src={product.image.src} alt="" />
            <span className="card-name">{product.name}</span>
            <span className="card-price">{product.price}</span>
          </Link>
        );
      })}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find(
    (product) => product.id === parseInt(params?.id as string)
  );
  return {
    props: {
      product,
    },
  };
};
