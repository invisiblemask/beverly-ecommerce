import Link from "next/link";
import Card from "./Card";

export default function ProductPage() {
  return (
    <section className="product-container">
      <Card />
      <Link href="/shop">
        <button className="product-button black">View More</button>
      </Link>
    </section>
  );
}
