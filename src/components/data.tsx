import { StaticImageData } from "next/image";
import product1 from "/public/images/products/product-1.jpg.webp";
import product2 from "/public/images/products/product-2.jpg.webp";
import product3 from "/public/images/products/product-3.jpg.webp";
import product4 from "/public/images/products/product-4.jpg.webp";
import product5 from "/public/images/products/product-5.jpg.webp";
import product6 from "/public/images/products/product-7.jpg.webp";
import product7 from "/public/images/products/product-8.jpg";
import product8 from "/public/images/products/product-9.jpg";
import product9 from "/public/images/products/product-10.jpg";

export type Product = {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
  slashedPrice: string | null;
  isNew: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    image: product1,
    name: "Kiko Linen Slip Dress, Brown",
    price: "£69.00",
    slashedPrice: null,
    isNew: true,
  },
  {
    id: 2,
    image: product2,
    name: "Sleeve Dress, White",
    slashedPrice: "£99.00",
    price: "£69.00",
    isNew: false,
  },
  {
    id: 3,
    image: product3,
    name: "Hodina Watch",
    price: "£29.00",
    slashedPrice: null,
    isNew: false,
  },
  {
    id: 4,
    image: product4,
    name: "Kid Dress, White",
    price: "£69.00",
    slashedPrice: "£99.00",
    isNew: false,
  },
  {
    id: 5,
    image: product5,
    name: "Lady Shoes, Brown",
    price: "£69.00",
    slashedPrice: "£99.00",
    isNew: false,
  },
  {
    id: 6,
    image: product6,
    name: "Triangle Low White-Black",
    price: "£29.00",
    slashedPrice: null,
    isNew: false,
  },
];
