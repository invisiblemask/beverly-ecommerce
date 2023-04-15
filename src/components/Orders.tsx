export default function Orders() {
  return (
    <div className="order">
      <h2>Order History</h2>
      <div className="order-container">
        <div>Order ID</div>
        <div>Status</div>
        <div>Date Purchased</div>
        <div>Total</div>
      </div>
      <div className="order-list">
        <div className="id">#2h73h21</div>
        <div className="status-p">Pending</div>
        <div className="date">Nov 10, 2022</div>
        <div className="id">£34.0</div>
      </div>
      <div className="order-list">
        <div className="id">#ffh73h21</div>
        <div className="status-d">Delivered</div>
        <div className="date">Jan 23, 2022</div>
        <div className="id">£14.0</div>
      </div>
      <div className="order-list">
        <div className="id">#ffi3k90</div>
        <div className="status-c">Cancelled</div>
        <div className="date">Nov 3, 2021</div>
        <div className="id">£62.0</div>
      </div>
    </div>
  );
}
