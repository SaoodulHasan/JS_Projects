let cart = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
for (let items of cart) {
  totalPrice += items.price;
}

document.querySelector(".checkOutContainer").innerHTML = `
<div class="leftCheckOut">
          <div class="checkOutLeftContainer">
            <h3>Fill form and Checkout</h3>
            <form id="checkOutForm">
              <p>First Name<span style="color: red">*</span> :</p>
              <input type="text" />
              <p>Last Name<span style="color: red">*</span> :</p>
              <input type="text" />
              <p>Postal Code<span style="color: red">*</span> :</p>
              <input type="number" />
              <p>Address Line 1<span style="color: red">*</span> :</p>
              <input type="text" />
              <p>Address Line 2 :</p>
              <input type="text" />
              <p>State<span style="color: red">*</span> :</p>
              <select id="states" name="states">
                <option value="andhra pradesh">Andhra Pradesh</option>
                <option value="arunachal pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal pradesh">Himachal Pradesh</option>
                <option value="jammu and kashmir">Jammu and Kashmir</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="uttar pradesh">Uttar Pradesh</option>
                <option value="west bengal">West Bengal</option>
                <option value="andaman and nicobar islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="chandigarh">Chandigarh</option>
                <option value="dadra and nagar haveli">
                  Dadra and Nagar Haveli
                </option>
                <option value="daman and diu">Daman and Diu</option>
                <option value="delhi">Delhi</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="puducherry">Puducherry</option>
              </select>
              <p>Country :</p>
              <select id="country" name="country">
                <option value="india">India - IN</option>
              </select>
              <p>Payment Method :</p>
              <span class="paymentMode">
                <input type="radio" /> CASH ON DELIVERY
              </span>
              <span class="paymentMode"> <input type="radio" /> UPI </span>
              <p>Phone Number<span style="color: red">*</span> :</p>
              <input type="number" />
              <p>Email Id<span style="color: red">*</span> :</p>
              <input type="email" />
              <div class="agreeTerms">
                <input type="checkbox" />
                <p>Agree to Terms and Conditions</p>
              </div>
              <div style="display: flex; justify-content: space-between">
                <span> <span style="color: red">*</span> Required </span>
                <button type="submit" id="btnCheck">CHECKOUT</button>
              </div>
            </form>
          </div>
        </div>
        <div class="rightCheckOut"><h3>SUMMARY</h3>
<hr />
<div class="subTotal">
  SUBTOTAL
  <p>$${totalPrice}.00</p>
</div>
<div class="cGST">
  CGST 9%
  <p>$${(totalPrice * 9) / 100}</p>
</div>
<div class="sGST">
  SGST 9%
  <p>$${(totalPrice * 9) / 100}</p>
</div>
<hr />
<div class="estTotal">
  ESTIMATED TOTAL (Rounded)
  <p>$${Math.round(
    totalPrice + (totalPrice * 9) / 100 + (totalPrice * 9) / 100
  )}</p>
</div>
<hr />
        </div>
`;

document.getElementById("checkOutForm").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Your Order is Placed!");
  localStorage.removeItem("cart");
  window.location = "../index.html";
});
