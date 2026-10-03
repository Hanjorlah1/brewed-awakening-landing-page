const hamburgerBTN = document.querySelector(".hamburger");
const menuContent = document.querySelector(".menu-content");
const navLinks = document.querySelectorAll(".menu-link");
const bookingBTN = document.querySelector(".booking-btn");
hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("btn-close");
  hamburgerBTN.classList.toggle("hamburger");
  menuContent.classList.toggle("active");
});
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    hamburgerBTN.classList.remove("btn-close");
    menuContent.classList.remove("active");
    hamburgerBTN.classList.add("hamburger");
  });
}
bookingBTN.addEventListener("click", function () {
  hamburgerBTN.classList.remove("btn-close");
  menuContent.classList.remove("active");
  hamburgerBTN.classList.add("hamburger");
});

const searchInputs = document.querySelectorAll(
  ".search-input, .search-input-2",
);

const products = document.querySelectorAll(".product-card");

// Initialize Bootstrap modal instance
const notFoundModalElement = document.getElementById("notFoundModal");
const notFoundModal = new bootstrap.Modal(notFoundModalElement);

searchInputs.forEach(function (searchInput) {
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      const searchText = searchInput.value.trim().toLowerCase();

      if (!searchText) return;

      let found = false;

      products.forEach(function (product) {
        const productName = product
          .querySelector(".card-title")
          .textContent.toLowerCase();

        if (productName.includes(searchText)) {
          found = true;
          const section = product.closest("article");

          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
      if (!found) {
        notFoundModal.show();
      }
    }
  });
});
