/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

type ModalProps = {
  toggleModal: () => void;
};

export default function Modal({ toggleModal }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-item">
          <div className="item-header">
            My Cart, <span>2 items</span>
          </div>
          <div className="item-details">
            <div className="details-wrapper">
              <div className="img">
                <img src="/images/products/product-1.jpg.webp" alt="" />
              </div>
              <div className="items-info">
                <span>KIKO LINEN SLIP DRESS, BROWN</span>
                <span>£80.60</span>
              </div>
            </div>
            <RiDeleteBinLine className="item-icon" />
          </div>
          <div className="item-details">
            <div className="details-wrapper">
              <div className="img">
                <img src="/images/products/product-2.jpg.webp" alt="" />
              </div>
              <div className="items-info">
                <span>SLEEVE DRESS, WHITE</span>
                <span>£74.45</span>
              </div>
            </div>
            <RiDeleteBinLine className="item-icon" />
          </div>
        </div>
        <div className="total-btn">
          <div className="total">
            Sub-total: <span>£155.05</span>
          </div>
          <div className="modal-btns">
            <Link href="/cart" onClick={toggleModal}>
              <button>View Cart</button>
            </Link>
            <button>Checkout</button>
          </div>
        </div>
        {/* <div className="modal-initial">
          <img src="/icons/trolley.png" alt=""  className="modal-cart" />
          <div className="modal-text">Your Shopping Cart is empty</div>
          <Link href="/shop" onClick={toggleModal}>
            <button className="modal-btn">Starting Shopping</button>
          </Link>
        </div> */}
        <div className="modal-close" onClick={toggleModal}>
          <AiOutlineClose className="modal-icon" />
        </div>
      </div>
    </div>
  );
}
