import Navbar from "@/components/Navbar";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cart">
        <table>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
            <td>Row 1, Column 4</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
            <td>Row 2, Column 4</td>
          </tr>
        </table>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          blanditiis, similique earum nulla voluptate dignissimos suscipit
          minima, repellendus nihil, assumenda odio! Alias, hic maxime minima
          eius illo tenetur deleniti architecto?
        </div>
      </div>
    </div>
  );
}
