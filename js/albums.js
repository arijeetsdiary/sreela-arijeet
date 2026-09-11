document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-albums-grid]");
  const lightbox = document.querySelector("[data-lightbox]");
  if (!grid || !lightbox) return;

  const lbTitle = lightbox.querySelector("[data-lb-title]");
  const lbDesc = lightbox.querySelector("[data-lb-desc]");
  const lbPhotos = lightbox.querySelector("[data-lb-photos]");
  const lbClose = lightbox.querySelector(".lightbox-close");

  grid.innerHTML = ALBUMS.map((album, i) => `
    <button class="album-card" data-album-index="${i}">
      ${
        album.cover
          ? `<img class="album-cover" src="${album.cover}" alt="${album.title}">`
          : `<div class="placeholder album-cover"><span>Add a cover photo for “${album.title}”</span></div>`
      }
      <h3>${album.title}</h3>
      <p class="album-meta">${album.photos.length} photos</p>
    </button>
  `).join("");

  function openAlbum(index) {
    const album = ALBUMS[index];
           lbTitle.textContent = album.title;
    lbDesc.innerHTML = `
      ${album.dates ? `<div class="album-dates">${album.dates}</div>` : ""}
      ${album.description ? `<div class="album-desc">${album.description}</div>` : ""}
    `;
    lbPhotos.innerHTML = album.photos.map((p) => (
      p.image
        ? `<img src="${p.image}" alt="${p.caption || album.title}">`
        : `<div class="placeholder"><span>${p.caption || "Add a photo"}</span></div>`
    )).join("");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeAlbum() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-album-index]");
    if (btn) openAlbum(Number(btn.dataset.albumIndex));
  });

  lbClose.addEventListener("click", closeAlbum);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeAlbum();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAlbum();
  });
});
