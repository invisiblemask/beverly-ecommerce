/* eslint-disable @next/next/no-img-element */
export default function Offer() {
  return (
    <div className="offer">
      <img src="/images/products/new.avif" alt="" />
      <div className="offer-container">
        <div className="offer-sm">Limited Offer</div>
        <div className="offer-lg">
          35% off only this friday and get special gift
        </div>
        <button>Grab it now</button>
      </div>
    </div>
  );
}
