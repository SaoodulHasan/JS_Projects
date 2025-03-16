document.querySelector(".section-navbar").innerHTML = `

<div class="main-navbar">
<div class="left">
  <ul id="navbarUl">
    <li class="navbarLi"><a href="/">Home</a></li>
    <li class="navbarLi">
      <a href="/store.html">Store</a>
    </li>
    <li class="navbarLi">
      <a href="/about.html">About</a>
    </li>
    <li class="navbarLi">
      <a href="/contact.html">Contact</a>
    </li>
  </ul>
</div>
<div class="center">
  <a href="/">
    <img src="/logo.png" alt="" id="logoImg" />
    Footisy</a
  >
</div>
<div class="right">
  <a href="/addToCart.html">
    <button id="addToCart">
      <span class="material-icons"> local_mall </span>
    </button>
    <span id="addToCartCounter">0</span></a
  >
</div>
</div>
`;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelector("#addToCartCounter").textContent = cart.length;
