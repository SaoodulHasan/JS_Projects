const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const logoImg = document.querySelectorAll(".logoImg");
const bgImg = document.getElementById("bgImg");

// When site loads
let theme = localStorage.getItem("theme");
if (theme != "dark") {
  document.body.classList.toggle("light");
  darkBtn.style.display = "inline";
  lightBtn.style.display = "none";
  logoImg.forEach((element) => {
    element.src = "./src/images/logo-light.png";
  });
  if (bgImg) {
    bgImg.src = "./src/images/bgLight.png";
  }
} else {
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline";
  logoImg.forEach((element) => {
    element.src = "./src/images/logo-dark.png";
  });
  if (bgImg) {
    bgImg.src = "./src/images/bgDark.png";
  }
}

//When btn light clicked
lightBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  document.body.classList.toggle("light");
  darkBtn.style.display = "inline";
  lightBtn.style.display = "none";
  logoImg.forEach((element) => {
    element.src = "./src/images/logo-light.png";
  });
  if (bgImg) {
    bgImg.src = "./src/images/bgLight.png";
  }
});

//When btn dark clicked
darkBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  document.body.classList.toggle("light");
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline";
  logoImg.forEach((element) => {
    element.src = "./src/images/logo-dark.png";
  });
  if (bgImg) {
    bgImg.src = "./src/images/bgDark.png";
  }
});
