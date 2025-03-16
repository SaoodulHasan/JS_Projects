import { shoeDataArr } from "./shoeData";
let lowToHighBtn = document.querySelector("#lowToHighBtn");
let highToLowBtn = document.querySelector("#highToLowBtn");

//Show initial list of products
shoeDataArr.map((prod) => {
  let prodCardChild = document.createElement("div");
  prodCardChild.className = "prodCard";
  prodCardChild.innerHTML = `

  <a href="/prodPage.html" id="cardClickId" class = "${prod.id}">
    <img src="${prod.imageURL}" alt="" id="prodCardImg" />
    <div class="prodCardBottom">
      <div class="prodCardBottomLeft">
        <h3>${prod.name}</h3>
        <p>Brand : ${prod.brand}</p>
      </div>
      <div class="prodCardBottomRight">
        <h3>$${prod.price}</h3>
      </div>
    </div></a
  >
  <button id="prodCardAddBtn" class="btn${prod.id}">
    <span class="material-icons"> local_mall </span>
  </button>
  `;

  document.querySelector(".prodBottom").appendChild(prodCardChild);
});

//handle click to store data in local storage
let cardClickIdArr = document.querySelectorAll("#cardClickId");
cardClickIdArr.forEach((card, ind) => {
  card.addEventListener("click", () => {
    //store the current prod to local
    localStorage.setItem("prodPageItem", JSON.stringify(shoeDataArr[ind]));
  });
});

//handles prod card add to cart btn
let addToCartBtn = document.querySelectorAll("#prodCardAddBtn");
addToCartBtn.forEach((addBtn) => {
  addBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(shoeDataArr[parseInt(addBtn.className.slice(3)) - 1]);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location = "/addToCart.html";
  });
});

//Show Low to High sorted list
lowToHighBtn.addEventListener("click", () => {
  document.querySelector(".prodBottom").innerHTML = ``;
  const lowToHighSortedProd = shoeDataArr.sort((a, b) => a.price - b.price);
  lowToHighSortedProd.map((prod) => {
    let prodCardChild = document.createElement("div");
    prodCardChild.className = "prodCard";
    prodCardChild.innerHTML = `
  
    <a href="/prodPage.html" id="cardClickId" class = "${prod.id}">
      <img src="${prod.imageURL}" alt="" id="prodCardImg" />
      <div class="prodCardBottom">
        <div class="prodCardBottomLeft">
          <h3>${prod.name}</h3>
          <p>Brand : ${prod.brand}</p>
        </div>
        <div class="prodCardBottomRight">
          <h3>$${prod.price}</h3>
        </div>
      </div></a
    >
    <button id="prodCardAddBtn" class="btn${prod.id}">
      <span class="material-icons"> local_mall </span>
    </button>
    `;

    document.querySelector(".prodBottom").appendChild(prodCardChild);
  });

  //handle click to store data in local storage
  let cardClickIdArr = document.querySelectorAll("#cardClickId");
  cardClickIdArr.forEach((card, ind) => {
    card.addEventListener("click", () => {
      //store the current prod to local
      localStorage.setItem(
        "prodPageItem",
        JSON.stringify(lowToHighSortedProd[ind])
      );
    });
  });

  //handles prod card add to cart btn
  let addToCartBtn = document.querySelectorAll("#prodCardAddBtn");
  addToCartBtn.forEach((cards, ind) => {
    cards.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(shoeDataArr[ind]);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location = "/addToCart.html";
    });
  });

  //handle display of btns
  lowToHighBtn.style.display = "none";
  highToLowBtn.style.display = "flex";
});

//Show Low to High sorted list
highToLowBtn.addEventListener("click", () => {
  document.querySelector(".prodBottom").innerHTML = ``;
  const highToLowSortedList = shoeDataArr.sort((a, b) => b.price - a.price);
  highToLowSortedList.map((prod, ind) => {
    let prodCardChild = document.createElement("div");
    prodCardChild.className = "prodCard";
    prodCardChild.innerHTML = `
  
    <a href="/prodPage.html" id="cardClickId" class = "${prod.id}">
      <img src="${prod.imageURL}" alt="" id="prodCardImg" />
      <div class="prodCardBottom">
        <div class="prodCardBottomLeft">
          <h3>${prod.name}</h3>
          <p>Brand : ${prod.brand}</p>
        </div>
        <div class="prodCardBottomRight">
          <h3>$${prod.price}</h3>
        </div>
      </div></a
    >
    <button id="prodCardAddBtn" class="btn${ind}">
      <span class="material-icons"> local_mall </span>
    </button>
    `;

    document.querySelector(".prodBottom").appendChild(prodCardChild);
  });

  //handle click to store data in local storage
  let cardClickIdArr = document.querySelectorAll("#cardClickId");
  cardClickIdArr.forEach((card, ind) => {
    card.addEventListener("click", () => {
      //store the current prod to local
      localStorage.setItem(
        "prodPageItem",
        JSON.stringify(highToLowSortedList[ind])
      );
    });
  });
  //handles prod card add to cart btn
  let addToCartBtn = document.querySelectorAll("#prodCardAddBtn");
  addToCartBtn.forEach((cards, ind) => {
    cards.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(shoeDataArr[ind]);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location = "/addToCart.html";
    });
  });

  //handle display of btns
  highToLowBtn.style.display = "none";
  lowToHighBtn.style.display = "flex";
});
