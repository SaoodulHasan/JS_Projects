let cart = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
for (let items of cart) {
  totalPrice += items.price;
}

document.querySelector(".rightAddToCart").innerHTML = `

<h3>SUMMARY</h3>
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
<a href="/checkOut.html">
  <button class="summaryBtn" id="summaryBtn">CHECKOUT</button></a
>
<p>Need help? Call us at +91 9999999999</p>
<hr />
`;
