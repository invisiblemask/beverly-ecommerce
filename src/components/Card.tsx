/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { products } from "./data";
import { BsEye } from "react-icons/bs";

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
      {products
        .map((product, index) => {
          return (
            <Link
              key={index}
              href={`/product/${product.id}`}
              className="card-wrapper"
            >
              <div className="card-img">
                <img src={product.image.src} alt="" />
                <div className="overlay">
                  <BsEye className="animated-icon" />
                </div>
              </div>
              <span className="card-name">{product.name}</span>
              <span className="card-price">{product.price}</span>
              {product.isNew && <div className="new">New</div>}

              {product.slashedPrice !== null && (
                <div className="discount">Discount</div>
              )}
            </Link>
          );
        })
        .slice(0, 8)}
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
