import Card from "./Card";
import { products } from "./data";

export default function ProductPage() {
  return (
    <section className="product-container">
      <div className="text-sm">HELLO</div>
      <div className="text-lg">BE NAYA WOMAN</div>
      <div className="paragraph">
        We are a premium brand consisting of the finest material that perfectly
        define what we are made of, and that is black, strength, beauty,
        intelligence and most importantly style…
      </div>
      <div>
        <Card />
      </div>
      <button className="product-button">view more</button>
    </section>
  );
}
