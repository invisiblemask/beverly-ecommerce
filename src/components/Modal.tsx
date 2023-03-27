/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
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
            My Cart, <span>2 items</span>{" "}
          </div>
          <div className="item-details">
            <div className="details-wrapper">
              <img src="/images/products/product1.jpeg" alt="" />
              <div className="items-info">
                <span>The Print Monroe Dress</span>
                <span>$80.60</span>
              </div>
            </div>
            <RiDeleteBinLine className="item-icon" />
          </div>
          <div className="item-details">
            <div className="details-wrapper">
              <img src="/images/product2.jpeg" alt="" />
              <div className="items-info">
                <span>The Bali Shirt Dress</span>
                <span>$74.45</span>
              </div>
            </div>
            <RiDeleteBinLine className="item-icon" />
          </div>
        </div>
        <div className="total-btn">
          <div className="total">
            Sub-total: <span>$155.05</span>
          </div>
          <div className="modal-btns">
            <Link href="/cart" onClick={toggleModal}>
              <button>View Cart</button>
            </Link>
            <button>Checkout</button>
          </div>
        </div>
        {/* <div className="modal-initial">
          <HiOutlineShoppingCart className="modal-cart" />
          <div className="modal-text">Your Shopping Cart is empty</div>
          <Link href="/" onClick={toggleModal}>
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
