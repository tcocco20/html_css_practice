const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalButtonNegative = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (const button of selectPlanButtons) {
  button.addEventListener("click", () => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

if (modalButtonNegative) {
  modalButtonNegative.addEventListener("click", () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
  });
}

backdrop.addEventListener("click", () => {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
