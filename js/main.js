/* Shared site behaviour: mobile nav + header state + populating
   the couple names/logo from data.js */

document.addEventListener("DOMContentLoaded", () => {
  // Logo / couple names
  document.querySelectorAll("[data-couple-names]").forEach((el) => {
    el.textContent = SITE.coupleNames;
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open"))
    );
  }

  // Header goes solid after scrolling past the top
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Thread motif — a small hand-drawn squiggle used as a divider
  // wherever a [data-thread] element appears.
  const threadMarkup = `
    <svg class="thread" viewBox="0 0 84 14" aria-hidden="true">
      <path d="M2 7 C 14 -2, 22 16, 34 7 S 54 -2, 66 7 S 78 16, 82 7" />
    </svg>`;
  document.querySelectorAll("[data-thread]").forEach((el) => {
    el.innerHTML = threadMarkup;
  });
});
