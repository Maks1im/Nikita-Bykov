const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      eventCards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filter === "all" || category === filter;
        card.style.display = shouldShow ? "flex" : "none";
      });
    });
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");

if (menuToggle && headerNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  headerNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
