/* eslint-disable @next/next/no-img-element */
export default function Address() {
  return (
    <div className="address">
      <h2>Address</h2>
      <div className="address-list">
        <div>Nigeria</div>
        <div>Aliyu Mustapha boulevard wuye Abuja</div>
        <div>+2347082896308</div>
        <div className="address-icons">
          <div className="icon-container">
            <img src="/icons/pencil.png" alt="" />
          </div>
          <div className="icon-container">
            <img src="/icons/recycle-bin.png" alt="" />
          </div>
        </div>
      </div>
      <div className="address-list">
        <div>Romania</div>
        <div>34 John Crescent Str</div>
        <div>(555) 555-1234</div>
        <div className="address-icons">
          <div className="icon-container">
            <img src="/icons/pencil.png" alt="" />
          </div>
          <div className="icon-container">
            <img src="/icons/recycle-bin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
