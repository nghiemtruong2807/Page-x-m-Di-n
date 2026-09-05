
const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const searchButton = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");
if (searchButton && searchInput) {
  searchButton.addEventListener("click", () => {
    const q = searchInput.value.trim();
    if (!q) return;
    alert("Từ khóa tìm kiếm: " + q + "\nĐây là website giao diện tĩnh, chức năng tìm kiếm sẽ được bổ sung sau.");
  });
}
