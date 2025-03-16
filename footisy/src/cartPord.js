let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector(".leftAddToCart").innerHTML = `
<h1>MY SHOPPING CART</h1>
          <hr />
          <div class="tableTitle">
            <div class="leftTableTitle">PRODUCT</div>
            <div class="centerTableTitle">PRICE</div>
            <div class="rightTableTitle">TOTAL</div>
          </div>
          <hr />
`;
cart.map((prod, ind) => {
  let cartProdCard = document.createElement("div");
  cartProdCard.className = `addToCartProdCard remove${ind}`;
  cartProdCard.innerHTML = `
            <div class="leftTableTitle addToCartProdCardLeft">
              <img
                src="${prod.imageURL}"
                alt=""
                id="addToCartProdCardLeftImg"
              />
              <div class="addToCartProdCardDetails">
                <h3>${prod.name}</h3>
                <p>Brand : ${prod.brand}</p>
                <p>Stock : 3</p>
                <p>Qty : 1</p>
                <p id="addToCartCardRemove" class="${ind}">REMOVE</p>
              </div>
            </div>
            <div class="centerTableTitle addToCartProdCardCenter">
              $${prod.price}/piece
            </div>
            <div class="rightTableTitle addToCartProdCardRight">$${prod.price}</div>`;
  document.querySelector(".leftAddToCart").appendChild(cartProdCard);
});
document.querySelector(".leftAddToCart").addEventListener("click", (e) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(parseInt(e.target.className), 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  let removeItem = document.querySelector(`.remove${e.target.className}`);
  document.querySelector(`.leftAddToCart`).removeChild(removeItem);
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

  document.querySelector("#addToCartCounter").textContent = cart.length;
});
