import { StaticImageData } from "next/image";
import product1 from "/public/images/product1.jpeg";
import product2 from "/public/images/product2.jpeg";
import product3 from "/public/images/product3.jpeg";
import product4 from "/public/images/product4.jpeg";
import product5 from "/public/images/product5.jpeg";
import product6 from "/public/images/product6.jpeg";
import product7 from "/public/images/product7.jpeg";
import product8 from "/public/images/product8.jpeg";

export type Product = {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
};

export const products: Product[] = [
  {
    id: 1,
    image: product1,
    name: "The Print Monroe Dress",
    price: "₦37,500",
  },
  {
    id: 2,
    image: product2,
    name: "The Bali Shirt Dress",
    price: "₦39,850",
  },
  {
    id: 3,
    image: product3,
    name: "The Imani set",
    price: "₦44,950",
  },
  {
    id: 4,
    image: product4,
    name: "The cabo set",
    price: "₦41,050",
  },
  {
    id: 5,
    image: product5,
    name: "The bali shirt dress",
    price: "₦39,850",
  },
  {
    id: 6,
    image: product6,
    name: "The mandisa bustier",
    price: "₦29,950",
  },
  {
    id: 7,
    image: product7,
    name: "The milan set",
    price: "₦42,750",
  },
  {
    id: 8,
    image: product8,
    name: "The zanzibar dress",
    price: "₦27,350",
  },
];
