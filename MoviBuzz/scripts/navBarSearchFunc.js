document.querySelector("#searchNavForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("searchNavInp").value.trim();
  if (!query) return;
  window.location.href = `searchPage.html?query=${encodeURIComponent(query)}`;
});
