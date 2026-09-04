document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector("[data-timeline-track]");
  if (!track) return;

  track.innerHTML = TIMELINE.map((item) => `
    <article class="entry">
      <div class="entry-card">
        <span class="entry-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        ${
          item.image
            ? `<img class="entry-photo" src="${item.image}" alt="${item.title}">`
            : `<div class="placeholder entry-photo"><span>Add a photo for “${item.title}”</span></div>`
        }
      </div>
      <div class="entry-dot"></div>
      <div></div>
    </article>
  `).join("");

  // Fade/slide each entry in as it enters the viewport
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  track.querySelectorAll(".entry").forEach((el) => io.observe(el));
});
