const bell = document.querySelector(".notification__icon");
const bellContainer = document.querySelector(".heading__notification");
const notifContent = document.querySelector(".notification__content");
const removeIcon = document.querySelector(".fa-times");

function closeModal() {
  notifContent.classList.remove("active");
}
bell.addEventListener("click", () => {
  notifContent.classList.toggle("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".heading__notification")) {
    closeModal();
  }
});

removeIcon.addEventListener("click", () => {
  notifContent.remove();
  document.querySelector(".fa-bell");
});
