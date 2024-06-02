const searchButton = document.querySelector(".search-button");

const searchInput = document.querySelector(".off-screen-search");

searchButton.addEventListener("click", () => {
  searchButton.classList.toggle("active");
  searchInput.classList.toggle("active");
});