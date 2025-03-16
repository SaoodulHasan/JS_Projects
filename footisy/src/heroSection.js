document.querySelector("#heroSection").innerHTML = `
<h1 class="heroTitle">Design & high quality</h1>
        <p>Sale of high-quality branded sneakers in a wide</p>
        <p>range with unique designs</p>
        <div class="heroBtn">
          <a href="/store.html"> <button id="storeBtn">Open Store</button></a>
          <a href="/about.html"> <button id="expBtn">Explore More</button></a>
        </div>
        <div class="sliderCont">
          <div class="slider">
            <button class="leftHero" id="leftHeroBtn">
              <span class="material-icons">arrow_back</span>
            </button>
            <div class="ImgCont" id="sliderImg"></div>
            <button class="rightHero" id="rightHeroBtn">
              <span class="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
        `;
let num = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];
const sliderImg = document.getElementById("sliderImg");
sliderImg.innerHTML = `
              <img src="${num[0]}" />`;
let imgIndex = 0;
function previousImg() {
  if (imgIndex > 0 && imgIndex < num.length) {
    imgIndex--;
  } else {
    imgIndex = num.length - 1;
  }
  sliderImg.innerHTML = `<img src="${num[imgIndex]}"/>`;
}
function nextImg() {
  if (imgIndex >= 0 && imgIndex < num.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  sliderImg.innerHTML = `<img src="${num[imgIndex]}" class="image" />`;
}
let leftHeroBtn = document
  .getElementById("leftHeroBtn")
  .addEventListener("click", previousImg);
let rightHeroBtn = document
  .getElementById("rightHeroBtn")
  .addEventListener("click", nextImg);
