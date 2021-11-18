const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalButtonNegative = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button")
const mobileNav = document.querySelector(".mobile-nav")

for (const button of selectPlanButtons) {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

modalButtonNegative.addEventListener("click", () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
});

backdrop.addEventListener("click", () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
  mobileNav.style.display = "none";
});

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
})