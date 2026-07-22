const searchHomeForm = document.querySelector("#searchHomeForm");
const searchHomeInp = document.querySelector("#searchHomeInp");

searchHomeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = searchHomeInp.value.trim();

  if (!query) return;

  window.location.href = `searchPage.html?query=${encodeURIComponent(query)}`;
});
