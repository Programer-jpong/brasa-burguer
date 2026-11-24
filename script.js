"use strict";
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = open ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  }),
);
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".food-card");
filters.forEach((button) =>
  button.addEventListener("click", () => {
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    const category = button.dataset.filter;
    products.forEach((product) => {
      product.hidden =
        category !== "todos" && product.dataset.category !== category;
    });
  }),
);
const toast = document.getElementById("toast");
let toastTimeout;
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 4200);
}
document.querySelectorAll(".food-action").forEach((button) =>
  button.addEventListener("click", () => {
    notify(
      `${button.dataset.product}: produto ilustrativo. Em um site real, este botão pode iniciar um pedido pelo WhatsApp.`,
    );
  }),
);
document.getElementById("contactButton").addEventListener("click", () => {
  notify(
    "Demonstração: aqui conectaríamos o WhatsApp verdadeiro do estabelecimento. Nenhuma mensagem foi enviada.",
  );
});
