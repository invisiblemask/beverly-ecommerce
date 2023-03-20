import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

type ModalProps = {
  toggleModal: () => void;
};

export default function Modal({ toggleModal }: ModalProps) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-initial">
          <HiOutlineShoppingCart className="modal-cart" />
          <div className="modal-text">Your Shopping Cart is empty</div>
          <Link href="/" onClick={toggleModal}>
            <button className="modal-btn">Starting Shopping</button>
          </Link>
        </div>
        <div className="modal-close" onClick={toggleModal}>
          <AiOutlineClose className="modal-icon" />
        </div>
      </div>
    </div>
  );
}
